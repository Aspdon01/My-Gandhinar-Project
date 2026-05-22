// services/dataService.js

// --- IN-MEMORY DATA STORAGE ---
// This acts as a mock database. For true scalability across multiple instances,
// replace these arrays/objects with calls to a real database (e.g., Redis, PostgreSQL, Firebase).

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

let leaderboard = [{ rank:1,  username:'Paltan_Pride_Rohit', teamId:'mi',  pts:5240, crown:'👑' },
  { rank:2,  username:'Thala_7_Forever',   teamId:'csk', pts:4810, crown:'🔥' },
  { rank:3,  username:'RohitSharmaFan7',   teamId:'mi',  pts:4320, crown:'⚡' },
  { rank:4,  username:'CSK_Yellow_Army',   teamId:'csk', pts:3890 },
  { rank:5,  username:'BumrahGoat',        teamId:'mi',  pts:3450 },
  { rank:6,  username:'NeutralCricFan',    teamId:'rcb', pts:3120 },
  { rank:7,  username:'WankhededDreams',   teamId:'mi',  pts:2870 },
  { rank:8,  username:'YellowArmy_CSK',    teamId:'csk', pts:2640 },
  { rank:9,  username:'Hitman_45',         teamId:'mi',  pts:2310 },
  { rank:10, username:'IPLObsessed',       teamId:'rcb', pts:2100 },];

module.exports = {
  getUser: (username) => users[username],
  
  saveUser: (username, teamId, points) => {
    users[username] = { teamId, points };
  },

  getReactions: () => reactions,

  addReaction: (post) => {
    reactions.unshift(post);
  },

  getLeaderboard: () => leaderboard,

  updateLeaderboardUser: (username, teamId, points) => {
    const lbUser = leaderboard.find(l => l.username === username);
    if (lbUser) {
      lbUser.teamId = teamId;
      lbUser.pts = points;
    } else {
      leaderboard.push({
        rank: leaderboard.length + 1,
        username,
        teamId,
        pts: points
      });
    }
  },

  recalculateLeaderboardRanks: () => {
    leaderboard.sort((a, b) => b.pts - a.pts);
    leaderboard.forEach((user, idx) => {
      user.rank = idx + 1;
      if (idx === 0) user.crown = '👑';
      else if (idx === 1) user.crown = '🔥';
      else if (idx === 2) user.crown = '⚡';
      else delete user.crown;
    });
  }
};
