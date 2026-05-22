const express = require('express');
const router = express.Router();
const xss = require('xss-clean');
const dataService = require('../services/dataService');

const API_KEY = '971a44cd-36dc-4e6b-87e9-fe70b32b2bdb';

// Middleware to prevent XSS in req.body, req.query, and req.params
router.use(xss());

// --- CRICKET DATA API PROXY ---
router.get('/matches', async (req, res, next) => {
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
    console.error('Failed to proxy CricketData:', error.message);
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
router.post('/users', (req, res) => {
  const { username, teamId } = req.body;
  if (!username) return res.status(400).json({ error: 'Username required' });
  
  let user = dataService.getUser(username);
  
  if (!user) {
    user = { teamId, points: 20 }; // Starts with onboarding bonus
    dataService.saveUser(username, teamId, user.points);
  } else {
    user.teamId = teamId;
    dataService.saveUser(username, teamId, user.points);
  }
  
  dataService.updateLeaderboardUser(username, teamId, user.points);

  res.json({ success: true, user: { username, ...user } });
});

// Get all reactions
router.get('/reactions', (req, res) => {
  res.json(dataService.getReactions());
});

// Add reaction & update points
router.post('/reactions', (req, res) => {
  const { username, content, teamId, evId } = req.body;
  
  if (!username || !content) {
    return res.status(400).json({ error: 'Username and content required' });
  }

  // Basic validation to prevent extremely long payloads
  if (content.length > 500) {
    return res.status(400).json({ error: 'Content too long' });
  }

  const newPost = {
    id: 'p_' + Date.now(),
    evId: evId || 'ev1',
    userId: 'u_' + username,
    username,
    teamId,
    content, // This is sanitized by xss-clean middleware
    time: 'Just now',
    upvotes: 0,
    myVote: false,
    myRxn: null,
    rxns: {}
  };

  dataService.addReaction(newPost);

  let user = dataService.getUser(username);
  if (user) {
    user.points += 10;
  } else {
    user = { teamId, points: 30 }; // 20 onboarding + 10 for posting
  }
  dataService.saveUser(username, user.teamId, user.points);

  dataService.updateLeaderboardUser(username, user.teamId, user.points);
  dataService.recalculateLeaderboardRanks();

  res.json({ success: true, post: newPost, points: user.points });
});

// Get leaderboard
router.get('/leaderboard', (req, res) => {
  res.json(dataService.getLeaderboard());
});

module.exports = router;
