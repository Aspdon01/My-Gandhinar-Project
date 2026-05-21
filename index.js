const express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT || 8080;

const API_KEY = '971a44cd-36dc-4e6b-87e9-fe70b32b2bdb';

app.use(express.json());
app.use(express.static(path.join(__dirname, 'fanpulse')));

// --- IN-MEMORY DATA STORAGE ---
let users = {}; // Stores { username: { teamId, points } }
let reactions = [
  { id:'p1', evId:'ev6', userId:'u1', username:'Paltan_Pride_Rohit', teamId:'mi',
    content:'MUMBAI INDIANS CHAMPIONS AGAIN! 🔵💛 That last over by Bumrah — sheer MASTERCLASS! Pandya + Rohit — what a partnership! JAI MI! 🏆',
    time:'3m ago', upvotes:214, myVote:false, myRxn:null, rxns:{'🔥':82,'💯':40,'😱':31} },
  { id:'p2', evId:'ev4', userId:'u2', username:'RohitSharmaFan7', teamId:'mi',
    content:'That straight SIX by Rohit over long-on was literally into ORBIT! Nobody hits them cleaner than Hitman 🔴🔴🔴',
    time:'18m ago', upvotes:167, myVote:false, myRxn:null, rxns:{'🔥':60,'😱':45} },
  { id:'p3', evId:'ev5', userId:'u3', username:'Thala_7_Forever', teamId:'csk',
    content:'Dhoni OUT for 32 off 14 balls but he already finished the job in over 19. THALA IS JUST DIFFERENT. Even in defeat — legend 🙌💛',
    time:'12m ago', upvotes:189, myVote:false, myRxn:null, rxns:{'💛':70,'😭':55,'💯':30} }
];
let leaderboard = [
  { rank:1,  username:'Paltan_Pride_Rohit', teamId:'mi',  pts:5240, crown:'👑' },
  { rank:2,  username:'Thala_7_Forever',   teamId:'csk', pts:4810, crown:'🔥' },
  { rank:3,  username:'RohitSharmaFan7',   teamId:'mi',  pts:4320, crown:'⚡' }
];

// --- CRICKET DATA API PROXY ---
app.get('/api/matches', async (req, res) => {
  try {
    const response = await fetch(`https://api.cricketdata.org/v1/currentMatches?apikey=${API_KEY}`);
    const data = await response.json();
    if (data.status !== 'success') {
      throw new Error(data.reason || 'CricketData API returned an error');
    }
    
    // Map matches to the format our frontend expects
    const formattedMatches = data.data.map(m => {
      const team1 = m.teamInfo?.[0] || { name: 'TBD', shortname: 'TBD' };
      const team2 = m.teamInfo?.[1] || { name: 'TBD', shortname: 'TBD' };
      
      // Attempt to extract scores
      const t1Score = m.score?.find(s => s.inning.includes(team1.name)) || { r: 0, w: 0, o: 0 };
      const t2Score = m.score?.find(s => s.inning.includes(team2.name)) || { r: 0, w: 0, o: 0 };
      
      return {
        id: m.id,
        name: m.name,
        matchType: m.matchType || 't20',
        status: m.status,
        venue: m.venue,
        date: m.date,
        teams: {
          t1: { name: team1.name, short: team1.shortname, badge: '🏏' },
          t2: { name: team2.name, short: team2.shortname, badge: '🏏' }
        },
        scores: {
          t1: t1Score.r ? `${t1Score.r}/${t1Score.w}` : '0/0',
          t2: t2Score.r ? `${t2Score.r}/${t2Score.w}` : '0/0'
        },
        fansCount: Math.floor(1000 + Math.random() * 4000), // Simulated fan engagement count
        isLive: m.status.toLowerCase().includes('live') || m.status.toLowerCase().includes('progress')
      };
    });

    res.json({ status: 'success', data: formattedMatches });
  } catch (error) {
    console.error('Failed to proxy CricketData:', error);
    // Fallback: If CricAPI hits limits or errors out, return simulated mock data so the app doesn't break
    res.json({
      status: 'fallback',
      data: [
        {
          id: 'mi-csk-final',
          name: 'MI vs CSK — IPL Final',
          matchType: 'T20',
          status: 'MI won by 8 runs',
          venue: 'Wankhede Stadium, Mumbai',
          date: '2026-05-21',
          teams: {
            t1: { name: 'Mumbai Indians', short: 'MI', badge: '🔵💛' },
            t2: { name: 'Chennai Super Kings', short: 'CSK', badge: '🟡⚫' }
          },
          scores: { t1: '186/4', t2: '178/8' },
          fansCount: 5812,
          isLive: false
        },
        {
          id: 'rcb-kkr-live',
          name: 'RCB vs KKR',
          matchType: 'T20',
          status: 'Live (18 overs)',
          venue: 'M. Chinnaswamy Stadium',
          date: '2026-05-21',
          teams: {
            t1: { name: 'Royal Challengers', short: 'RCB', badge: '🔴⚫' },
            t2: { name: 'Kolkata Knight Riders', short: 'KKR', badge: '🟣💛' }
          },
          scores: { t1: '198/5', t2: '201/3' },
          fansCount: 4230,
          isLive: true
        }
      ]
    });
  }
});

// --- STATE ENDPOINTS ---

// Register or get user state
app.post('/api/users', (req, res) => {
  const { username, teamId } = req.body;
  if (!username) return res.status(400).json({ error: 'Username required' });
  
  if (!users[username]) {
    users[username] = { teamId, points: 20 }; // Starts with onboarding bonus
  } else {
    users[username].teamId = teamId;
  }
  
  // Also check if they exist in the leaderboard, update if so
  const lbUser = leaderboard.find(l => l.username === username);
  if (lbUser) {
    lbUser.teamId = teamId;
    lbUser.pts = users[username].points;
  } else {
    leaderboard.push({
      rank: leaderboard.length + 1,
      username,
      teamId,
      pts: users[username].points
    });
  }

  res.json({ success: true, user: { username, ...users[username] } });
});

// Get all reactions
app.get('/api/reactions', (req, res) => {
  res.json(reactions);
});

// Add reaction & update points
app.post('/api/reactions', (req, res) => {
  const { username, content, teamId, evId } = req.body;
  if (!username || !content) return res.status(400).json({ error: 'Username and content required' });

  const newPost = {
    id: 'p_' + Date.now(),
    evId: evId || 'ev1',
    userId: 'u_' + username,
    username,
    teamId,
    content,
    time: 'Just now',
    upvotes: 0,
    myVote: false,
    myRxn: null,
    rxns: {}
  };

  reactions.unshift(newPost);

  // Award points to the user
  if (users[username]) {
    users[username].points += 10;
  } else {
    users[username] = { teamId, points: 30 }; // 20 onboarding + 10 for posting
  }

  // Update points in leaderboard
  const lbIndex = leaderboard.findIndex(l => l.username === username);
  if (lbIndex !== -1) {
    leaderboard[lbIndex].pts = users[username].points;
  } else {
    leaderboard.push({
      rank: leaderboard.length + 1,
      username,
      teamId,
      pts: users[username].points
    });
  }

  // Recalculate leaderboard ranks
  leaderboard.sort((a, b) => b.pts - a.pts);
  leaderboard.forEach((user, idx) => {
    user.rank = idx + 1;
    if (idx === 0) user.crown = '👑';
    else if (idx === 1) user.crown = '🔥';
    else if (idx === 2) user.crown = '⚡';
    else delete user.crown;
  });

  res.json({ success: true, post: newPost, points: users[username].points });
});

// Get leaderboard
app.get('/api/leaderboard', (req, res) => {
  res.json(leaderboard);
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});

