/* ============================================================
   FanPulse — IPL Edition  |  Rock-solid screen-by-screen SPA
   ============================================================ */

/* ══ IPL DATA ══════════════════════════════════════════════ */
const IPL_TEAMS = [
  { id:'mi',   name:'Mumbai Indians',        short:'MI',   badge:'🔵💛', color:'#004BA0' },
  { id:'csk',  name:'Chennai Super Kings',   short:'CSK',  badge:'🟡⚫', color:'#F5A623' },
  { id:'rcb',  name:'Royal Challengers',     short:'RCB',  badge:'🔴⚫', color:'#C8102E' },
  { id:'kkr',  name:'Kolkata Knight Riders', short:'KKR',  badge:'🟣💛', color:'#430093' },
  { id:'dc',   name:'Delhi Capitals',        short:'DC',   badge:'🔵🔴', color:'#004C93' },
  { id:'srh',  name:'Sunrisers Hyderabad',   short:'SRH',  badge:'🟠⚫', color:'#FF6B00' },
  { id:'pbks', name:'Punjab Kings',          short:'PBKS', badge:'🔴🦁', color:'#ED1B24' },
  { id:'rr',   name:'Rajasthan Royals',      short:'RR',   badge:'🩷💙', color:'#FF5A8B' },
  { id:'gt',   name:'Gujarat Titans',        short:'GT',   badge:'🔷🟡', color:'#1B2A4A' },
  { id:'lsg',  name:'Lucknow Super Giants',  short:'LSG',  badge:'🩵💛', color:'#0075CA' },
];

const EVENTS = [
  { id:'ev1', icon:'🏏', label:'Match Start' },
  { id:'ev2', icon:'⚡', label:'PP Ends 68/1' },
  { id:'ev3', icon:'⏸', label:'Timeout' },
  { id:'ev4', icon:'🔴', label:'Rohit SIX!' },
  { id:'ev5', icon:'🏏', label:'Dhoni OUT!' },
  { id:'ev6', icon:'🏆', label:'MI Win!' },
];

const POSTS_SEED = [
  { id:'p1', evId:'ev6', userId:'u1', username:'Paltan_Pride_Rohit', teamId:'mi',
    content:'MUMBAI INDIANS CHAMPIONS AGAIN! 🔵💛 That last over by Bumrah — sheer MASTERCLASS! Pandya + Rohit — what a partnership! JAI MI! 🏆',
    time:'3m ago', upvotes:214, myVote:false, myRxn:null, rxns:{'🔥':82,'💯':40,'😱':31} },
  { id:'p2', evId:'ev4', userId:'u2', username:'RohitSharmaFan7', teamId:'mi',
    content:'That straight SIX by Rohit over long-on was literally into ORBIT! Nobody hits them cleaner than Hitman 🔴🔴🔴',
    time:'18m ago', upvotes:167, myVote:false, myRxn:null, rxns:{'🔥':60,'😱':45} },
  { id:'p3', evId:'ev5', userId:'u3', username:'Thala_7_Forever', teamId:'csk',
    content:'Dhoni OUT for 32 off 14 balls but he already finished the job in over 19. THALA IS JUST DIFFERENT. Even in defeat — legend 🙌💛',
    time:'12m ago', upvotes:189, myVote:false, myRxn:null, rxns:{'💛':70,'😭':55,'💯':30} },
  { id:'p4', evId:'ev6', userId:'u4', username:'CSK_Yellow_Army', teamId:'csk',
    content:"Lost by 8 runs but fought till the last ball. Proud of my CSK boys. 💛 Season isn't over. Whistle Podu! 🦁",
    time:'2m ago', upvotes:98, myVote:false, myRxn:null, rxns:{'💛':50,'😤':20} },
  { id:'p5', evId:'ev4', userId:'u5', username:'NeutralCricFan', teamId:'rcb',
    content:'🔴🔴🔴', isEmoji:true,
    time:'20m ago', upvotes:312, myVote:false, myRxn:null, rxns:{'🔥':120,'😂':80} },
  { id:'p6', evId:'ev2', userId:'u6', username:'BumrahGoat', teamId:'mi',
    content:'Powerplay by MI was surgical. The way Bumrah came back and choked from over 15 — THAT is IPL cricket 🏏',
    time:'34m ago', upvotes:75, myVote:false, myRxn:null, rxns:{'💯':35,'🔥':28} },
];

const REPLIES_DATA = {
  p1:[
    { id:'r1', username:'MI_Navi_Mumbai',      teamId:'mi',  content:'JAI JAI JAI MI! Cannot sleep RN 😭🔵💛', time:'2m ago' },
    { id:'r2', username:'Thala_7_Forever',     teamId:'csk', content:'Tough loss. Credit to MI though. Well deserved 💛', time:'2m ago' },
    { id:'r3', username:'CricketWatcher',      teamId:'gt',  content:'Bumrah is generationally great. What a season', time:'1m ago' },
  ],
  p3:[
    { id:'r4', username:'CSK_Yellow_Army',     teamId:'csk', content:'THALA!! Even at 43 he delivers crunch overs 💛🦁', time:'10m ago' },
    { id:'r5', username:'MI_Navi_Mumbai',      teamId:'mi',  content:'Respect for CSK today. Fought hard!', time:'9m ago' },
  ],
};

const LEADERS = [
  { rank:1,  username:'Paltan_Pride_Rohit', teamId:'mi',  pts:5240, crown:'👑' },
  { rank:2,  username:'Thala_7_Forever',   teamId:'csk', pts:4810, crown:'🔥' },
  { rank:3,  username:'RohitSharmaFan7',   teamId:'mi',  pts:4320, crown:'⚡' },
  { rank:4,  username:'CSK_Yellow_Army',   teamId:'csk', pts:3890 },
  { rank:5,  username:'BumrahGoat',        teamId:'mi',  pts:3450 },
  { rank:6,  username:'NeutralCricFan',    teamId:'rcb', pts:3120 },
  { rank:7,  username:'WankhededDreams',   teamId:'mi',  pts:2870 },
  { rank:8,  username:'YellowArmy_CSK',    teamId:'csk', pts:2640 },
  { rank:9,  username:'Hitman_45',         teamId:'mi',  pts:2310 },
  { rank:10, username:'IPLObsessed',       teamId:'rcb', pts:2100 },
];

const NOTIFS_SEED = [
  { id:'n1', icon:'🏏', text:'WICKET! MS Dhoni is OUT for 32 off 14. React now! 🏏', time:'12m ago', read:false },
  { id:'n2', icon:'🔴', text:'SIX! Rohit hits one into the STANDS at Wankhede! 🔴🔴🔴', time:'20m ago', read:false },
  { id:'n3', icon:'🔥', text:"Your post got 10 upvotes! You're trending 🔥", time:'28m ago', read:false },
  { id:'n4', icon:'💬', text:'@Thala_7_Forever replied to your post in MI vs CSK', time:'32m ago', read:false },
  { id:'n5', icon:'🏆', text:'MI vs CSK Final kicks off in 15 mins. Get ready! 🏏', time:'2h ago', read:true },
  { id:'n6', icon:'⭐', text:'You earned the ⚡ First Reactor badge in last night\'s match!', time:'3h ago', read:true },
  { id:'n7', icon:'🔔', text:"Don't break your 4-day streak! A match is live now 🔔", time:'5h ago', read:true },
];

const LIVE_FEED = [
  { teamId:'mi',  username:'WankhededDreams',   content:'BUMRAH BUMRAH BUMRAH! The yorker machine is BACK! 🏏🔵' },
  { teamId:'csk', username:'YellowArmy_CSK',    content:"Jadeja out first ball... this can't be happening 😭💛" },
  { teamId:'mi',  username:'Hitman_45',         content:'Rohit walking out to bat... Wankhede is going CRAZY right now 🔵💛🎉' },
  { teamId:'rcb', username:'NeutralCricFan',    content:"Best IPL match I've watched in years. Both teams going all out 🔥" },
  { teamId:'csk', username:'WhistlePodu2024',   content:'Come on CSK! 46 off 24 is gettable. Dhoni time!! 💛🦁' },
  { teamId:'mi',  username:'CricketWatcher',    content:'That Bumrah death over — 3 yorkers in a row. INSANE 😱' },
];

/* ══ STATE ══════════════════════════════════════════════════ */
const S = {
  screen: null,
  history: [],
  user: null,
  pickedTeam: null,
  activeMatchId: null,
  matches: [],
  apiStatus: 'sync',
  posts: POSTS_SEED.map(p => ({ ...p, rxns: { ...p.rxns } })),
  notifs: NOTIFS_SEED.map(n => ({ ...n })),
  eventFilter: 'all',
  fanFilter: 'all',
  lbTab: 'week',
  openReply: null,
  points: 0,
  notifOpen: false,
  feedTimer: null,
};

/* ══ UTILS ══════════════════════════════════════════════════ */
const $  = (s, c=document) => c.querySelector(s);
const $$ = (s, c=document) => [...c.querySelectorAll(s)];
const team = id => IPL_TEAMS.find(t => t.id === id) || {};
const ini  = n  => (n || '??').slice(0,2).toUpperCase();

function toast(msg, delay=0) {
  setTimeout(() => {
    const root = document.getElementById('toast-root');
    if (!root) return;
    const el = document.createElement('div');
    el.className = 'toast';
    el.innerHTML = msg;
    root.appendChild(el);
    setTimeout(() => { el.classList.add('out'); setTimeout(() => el.remove(), 300); }, 2700);
  }, delay);
}

function ptsFloat(text, x, y) {
  const f = document.createElement('div');
  f.className = 'pts-float';
  f.textContent = text;
  f.style.cssText = `left:${x-40}px;top:${y-20}px;`;
  document.body.appendChild(f);
  setTimeout(() => f.remove(), 1800);
}

function confetti(x, y) {
  const C = ['#F5C518','#1A3C6E','#2A5298','#fff','#FFE580'];
  for (let i=0; i<18; i++) {
    const d = document.createElement('div');
    d.className = 'confetti';
    const s = 5 + Math.random()*9;
    d.style.cssText = `left:${x+(Math.random()-.5)*100}px;top:${y}px;width:${s}px;height:${s}px;`+
      `background:${C[i%C.length]};border-radius:${Math.random()>.5?'50%':'3px'};`+
      `animation-duration:${.8+Math.random()*.7}s;animation-delay:${Math.random()*.12}s`;
    document.body.appendChild(d);
    setTimeout(() => d.remove(), 1700);
  }
}

/* ══ NAVIGATION — Simple display-based, reliable ═══════════ */
/*
   Every screen div starts with display:none via CSS.
   We show exactly ONE at a time by toggling a class.
   CSS handles the slide-in animation.
*/
function goTo(id, pushHistory=true) {
  if (S.screen === id) return;

  // hide current
  if (S.screen) {
    const curr = document.getElementById('screen-' + S.screen);
    if (curr) curr.classList.remove('active');
  }

  // show next
  const next = document.getElementById('screen-' + id);
  if (!next) { console.warn('Screen not found:', id); return; }

  if (pushHistory && S.screen && !['splash'].includes(S.screen)) {
    S.history.push(S.screen);
  }

  S.screen = id;
  next.classList.add('active');

  // sync nav bar
  const mainScreens = ['home','match','leaderboard','profile'];
  const nav = document.getElementById('bottom-nav');
  nav.style.display = mainScreens.includes(id) ? 'flex' : 'none';
  $$('.nav-item').forEach(b => b.classList.toggle('active', b.dataset.tab === id));
}

function goBack() {
  if (S.history.length > 0) {
    const dest = S.history.pop();
    const curr = document.getElementById('screen-' + S.screen);
    if (curr) curr.classList.remove('active');
    S.screen = dest;
    const prev = document.getElementById('screen-' + dest);
    if (prev) prev.classList.add('active');
    const mainScreens = ['home','match','leaderboard','profile'];
    const nav = document.getElementById('bottom-nav');
    nav.style.display = mainScreens.includes(dest) ? 'flex' : 'none';
    $$('.nav-item').forEach(b => b.classList.toggle('active', b.dataset.tab === dest));
  } else {
    goTo('splash', false);
  }
}

function navTab(tab) {
  S.history = []; // clear deep history when using tab bar
  if (tab === 'home')        buildHome();
  if (tab === 'match')       buildMatch();
  if (tab === 'leaderboard') buildLeaderboard();
  if (tab === 'profile')     buildProfile();
  goTo(tab, false);
}

/* ══ SHELL ══════════════════════════════════════════════════ */
function init() {
  document.getElementById('app').innerHTML = `
    <div id="toast-root"></div>

    <!-- Notification overlay -->
    <div id="notif-overlay" class="notif-overlay" onclick="closeNotif()"></div>
    <div id="notif-tray" class="notif-tray">
      <div class="nt-header">
        <div class="nt-title">Notifications <span id="nt-badge" class="badge badge-yellow" style="margin-left:6px;"></span></div>
        <span class="mark-read" onclick="markAllRead()">Mark all read</span>
      </div>
      <div class="nt-list" id="notif-list"></div>
    </div>

    <!-- SCREENS -->
    <div id="screen-splash"      class="screen"></div>
    <div id="screen-signup"      class="screen"></div>
    <div id="screen-team-pick"   class="screen"></div>
    <div id="screen-notif-opt"   class="screen"></div>
    <div id="screen-onboarding"  class="screen"></div>
    <div id="screen-home"        class="screen"></div>
    <div id="screen-match"       class="screen"></div>
    <div id="screen-leaderboard" class="screen"></div>
    <div id="screen-profile"     class="screen"></div>

    <!-- Bottom Nav -->
    <nav id="bottom-nav" style="display:none;">
      <button class="nav-item" data-tab="home" onclick="navTab('home')">
        <span class="nav-icon">🏠</span><span class="nav-label">Home</span>
      </button>
      <button class="nav-item" data-tab="match" onclick="navTab('match')">
        <span class="nav-icon">🏏</span><span class="nav-label">Live</span>
      </button>
      <button class="nav-item" data-tab="leaderboard" onclick="navTab('leaderboard')">
        <span class="nav-icon">🏆</span><span class="nav-label">Ranks</span>
      </button>
      <button class="nav-item" data-tab="profile" onclick="navTab('profile')">
        <span class="nav-icon">👤</span><span class="nav-label">Profile</span>
      </button>
    </nav>
  `;

  buildSplash();
  goTo('splash', false);
}

/* ══ SPLASH ═════════════════════════════════════════════════ */
function buildSplash() {
  document.getElementById('screen-splash').innerHTML = `
    <div class="splash-blob splash-blob-1"></div>
    <div class="splash-blob splash-blob-2"></div>
    <div class="splash-blob splash-blob-3"></div>
    <div class="splash-inner">
      <div class="splash-icon">🏏</div>
      <div class="splash-brand">Fan<span>Pulse</span></div>
      <div class="splash-tag">Cricket ka josh — live, together. 🔥</div>
      <div class="splash-ctas">
        <button class="btn btn-primary btn-full" id="btn-create">Create Account</button>
        <button class="btn btn-ghost btn-full"  id="btn-guest">Continue as Guest 👀</button>
      </div>
      <div class="splash-social">
        <div class="social-avs">
          <div class="avatar av-sm" style="background:#004BA0;">MI</div>
          <div class="avatar av-sm" style="background:#F5A623;color:var(--blue);">CS</div>
          <div class="avatar av-sm" style="background:#C8102E;">RC</div>
          <div class="avatar av-sm" style="background:#430093;">KK</div>
        </div>
        <span style="color:rgba(255,255,255,0.55);font-size:13px;">5,812 fans live right now</span>
      </div>
    </div>
  `;
  document.getElementById('btn-create').onclick = () => { buildSignup(); goTo('signup'); };
  document.getElementById('btn-guest').onclick  = () => {
    S.user = { username:'Guest Fan', teamId:null, points:0, guest:true };
    buildHome(); goTo('home');
    toast('👋 Guest mode — sign up free to post reactions!');
  };
}

/* ══ SIGN UP ════════════════════════════════════════════════ */
function buildSignup() {
  document.getElementById('screen-signup').innerHTML = `
    <div class="onb-header">
      <button class="back-btn" id="su-back">←</button>
      <div class="step-row">
        <div class="step-dot active"></div>
        <div class="step-dot"></div>
        <div class="step-dot"></div>
      </div>
    </div>
    <div class="onb-body">
      <div class="t-xl c-blue" style="margin-bottom:4px;">Create Account</div>
      <div class="t-sm c-muted" style="margin-bottom:22px;">Join 5,800+ fans cheering live 🏏</div>
      <button class="btn-google" id="btn-google">
        <span style="font-size:20px;">🌐</span> Continue with Google
      </button>
      <div class="divider-or">or</div>
      <div class="form-group">
        <label class="form-label">Username</label>
        <input id="f-user"  type="text"     class="form-input" placeholder="e.g. Paltan_Pride_Rohit"/>
        <span  id="h-user"  class="form-hint">3–20 characters, letters &amp; numbers</span>
      </div>
      <div class="form-group">
        <label class="form-label">Email</label>
        <input id="f-email" type="email"    class="form-input" placeholder="you@email.com"/>
        <span  id="h-email" class="form-hint"></span>
      </div>
      <div class="form-group">
        <label class="form-label">Password</label>
        <input id="f-pw"    type="password" class="form-input" placeholder="Min 8 characters"/>
        <div class="pw-strength">
          <div class="pw-bar" id="pb0"></div>
          <div class="pw-bar" id="pb1"></div>
          <div class="pw-bar" id="pb2"></div>
          <div class="pw-bar" id="pb3"></div>
        </div>
        <span id="h-pw" class="form-hint"></span>
      </div>
      <button class="btn btn-dark btn-full" id="btn-signup" style="margin-top:8px;">Create Account →</button>
      <p class="t-sm c-muted center" style="margin-top:16px;">
        Already a fan? <span class="c-blue w-700" style="cursor:pointer;" id="su-login">Log in</span>
      </p>
    </div>
  `;

  document.getElementById('su-back').onclick  = goBack;
  document.getElementById('su-login').onclick = goBack;

  document.getElementById('btn-google').onclick = () => {
    const b = document.getElementById('btn-google');
    b.textContent = '⏳ Connecting to Google...';
    b.disabled = true;
    setTimeout(() => {
      S.user = { username:'GoogleFan', email:'g@gmail.com', teamId:null, points:0 };
      buildTeamPick(); goTo('team-pick');
      b.innerHTML = '<span style="font-size:20px;">🌐</span> Continue with Google';
      b.disabled = false;
    }, 1000);
  };

  // username validation
  let uTimer;
  document.getElementById('f-user').addEventListener('input', e => {
    clearTimeout(uTimer);
    const v = e.target.value.trim();
    if (v.length < 3) { fld('f-user','h-user','','','Min 3 characters'); return; }
    uTimer = setTimeout(() => {
      const taken = ['admin','ipl','bcci','fanpulse'].includes(v.toLowerCase());
      fld('f-user','h-user', taken?'error':'valid', taken?'error':'valid',
          taken ? '❌ Username taken' : '✅ Username available!');
    }, 450);
  });

  document.getElementById('f-email').addEventListener('blur', e => {
    const v = e.target.value;
    if (!v) return;
    const ok = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);
    fld('f-email','h-email', ok?'valid':'error', ok?'valid':'error',
        ok ? '✅ Looks good!' : '❌ Invalid email');
  });

  document.getElementById('f-pw').addEventListener('input', e => {
    const s = pwStrength(e.target.value);
    [0,1,2,3].forEach(i => {
      const bar = document.getElementById('pb'+i);
      bar.className = 'pw-bar' + (i < s ? ' '+['weak','medium','strong','strong'][s-1] : '');
    });
    document.getElementById('h-pw').textContent =
      ['','⚠️ Too weak','🟡 Fair','🟢 Good','✅ Strong!'][s] || '';
  });

  document.getElementById('btn-signup').onclick = () => {
    const u = document.getElementById('f-user').value.trim();
    const e = document.getElementById('f-email').value.trim();
    const p = document.getElementById('f-pw').value;
    if (u.length < 3)    { shk('f-user');  return; }
    if (!e.includes('@')) { shk('f-email'); return; }
    if (p.length < 6)    { shk('f-pw');    return; }
    const btn = document.getElementById('btn-signup');
    btn.textContent = '⏳ Creating account...';
    btn.disabled = true;
    setTimeout(() => {
      S.user = { username:u, email:e, teamId:null, points:0 };
      toast('🎉 Welcome to FanPulse!');
      buildTeamPick();
      goTo('team-pick');
      btn.textContent = 'Create Account →';
      btn.disabled = false;
    }, 800);
  };
}

function fld(inp, hint, inpCls, hintCls, txt) {
  const i = document.getElementById(inp);
  const h = document.getElementById(hint);
  if (i) i.className = 'form-input' + (inpCls ? ' '+inpCls : '');
  if (h) { h.className = 'form-hint' + (hintCls ? ' '+hintCls : ''); h.textContent = txt; }
}
function shk(id) {
  const el = document.getElementById(id);
  if (!el) return;
  el.classList.add('error');
  setTimeout(() => el.classList.remove('error'), 400);
}
function pwStrength(pw) {
  return [pw.length>=8, /[A-Z]/.test(pw), /[0-9]/.test(pw), /[^A-Za-z0-9]/.test(pw)]
    .filter(Boolean).length;
}

/* ══ TEAM PICK ══════════════════════════════════════════════ */
function buildTeamPick() {
  const screen = document.getElementById('screen-team-pick');
  screen.innerHTML = `
    <div class="onb-header">
      <button class="back-btn" id="tp-back">←</button>
      <div class="step-row">
        <div class="step-dot done"></div>
        <div class="step-dot active"></div>
        <div class="step-dot"></div>
      </div>
    </div>
    <div class="onb-body" style="padding-bottom:90px;">
      <div class="t-xl c-blue" style="margin-bottom:4px;">Pick Your IPL Team</div>
      <div class="t-sm c-muted" style="margin-bottom:16px;">Your tribe, your colours. Choose your squad 🏏</div>
      <div class="search-bar">
        <span class="search-icon">🔍</span>
        <input id="team-search" type="text" class="search-input" placeholder="Search team..."/>
      </div>
      <div class="teams-grid" id="teams-grid"></div>
    </div>
    <div id="confirm-wrap" class="confirm-wrap" style="display:none;">
      <button class="btn btn-dark btn-full" id="btn-confirm">Continue →</button>
    </div>
  `;

  document.getElementById('tp-back').onclick = goBack;
  renderTeams(IPL_TEAMS);

  document.getElementById('team-search').addEventListener('input', e => {
    const q = e.target.value.toLowerCase();
    renderTeams(IPL_TEAMS.filter(t =>
      t.name.toLowerCase().includes(q) || t.short.toLowerCase().includes(q)
    ));
  });

  document.getElementById('btn-confirm').onclick = () => {
    if (!S.pickedTeam) return;
    S.user.teamId = S.pickedTeam;
    buildNotifOpt();
    goTo('notif-opt');
  };
}

function renderTeams(list) {
  const g = document.getElementById('teams-grid');
  if (!g) return;
  g.innerHTML = list.map(t => `
    <div class="team-item${S.pickedTeam===t.id?' picked':''}" data-tid="${t.id}">
      <div class="ti-badge">${t.badge}</div>
      <div class="ti-name">${t.short}</div>
    </div>
  `).join('');
  g.querySelectorAll('.team-item').forEach(el => {
    el.addEventListener('click', () => {
      S.pickedTeam = el.dataset.tid;
      const t = team(S.pickedTeam);
      renderTeams(list);
      const cw = document.getElementById('confirm-wrap');
      const btn = document.getElementById('btn-confirm');
      if (cw) cw.style.display = 'block';
      if (btn) btn.textContent = `Jai ${t.short}! Let's Go 🏏`;
    });
  });
}

/* ══ NOTIF OPT-IN ═══════════════════════════════════════════ */
function buildNotifOpt() {
  document.getElementById('screen-notif-opt').innerHTML = `
    <div class="onb-header">
      <button class="back-btn" id="no-back">←</button>
      <div class="step-row">
        <div class="step-dot done"></div>
        <div class="step-dot done"></div>
        <div class="step-dot active"></div>
      </div>
    </div>
    <div style="flex:1;display:flex;flex-direction:column;align-items:center;justify-content:center;
                padding:32px;text-align:center;gap:20px;">
      <div style="font-size:78px;line-height:1;animation:iconPulse 2s infinite;">🔔</div>
      <div>
        <div class="t-lg c-blue" style="margin-bottom:8px;">Never Miss a Moment</div>
        <div class="t-sm c-muted" style="max-width:280px;margin:0 auto;line-height:1.7;">
          Get notified for every boundary, wicket &amp; milestone — straight to you.
        </div>
      </div>
      <div style="display:flex;flex-direction:column;gap:10px;width:100%;max-width:280px;">
        <button class="btn btn-primary btn-full" id="btn-notif-yes">🔔 Turn On Notifications</button>
        <button class="btn btn-outline btn-full" id="btn-notif-skip">Maybe Later</button>
      </div>
      <div class="t-xs c-muted">Change this anytime in Settings</div>
    </div>
  `;
  document.getElementById('no-back').onclick       = goBack;
  document.getElementById('btn-notif-yes').onclick = finishOnboard;
  document.getElementById('btn-notif-skip').onclick = finishOnboard;
}

function finishOnboard() {
  buildOnboardingTour();
  goTo('onboarding');
}

/* ══ ONBOARDING TOUR ════════════════════════════════════════ */
function buildOnboardingTour() {
  const screen = document.getElementById('screen-onboarding');
  screen.innerHTML = `
    <div class="onb-header">
      <button class="back-btn" id="tour-back">←</button>
      <div class="step-row">
        <div class="step-dot done"></div>
        <div class="step-dot done"></div>
        <div class="step-dot done"></div>
        <div class="step-dot active"></div>
      </div>
    </div>
    <div class="onb-body" style="padding-bottom:20px; align-items:center; text-align:center;">
      <div class="t-xl c-blue" style="margin-bottom:8px;">Welcome to FanPulse!</div>
      <div class="t-sm c-muted" style="margin-bottom:32px; max-width: 280px; margin-left:auto; margin-right:auto;">
        Here's what you can do on the ultimate second-screen experience.
      </div>
      
      <div style="display:flex; flex-direction:column; gap:20px; width:100%; max-width:320px; text-align:left; margin:0 auto 40px auto;">
        
        <div style="display:flex; gap:16px; align-items:flex-start; padding:16px; background:var(--surface); border-radius:12px; border:1px solid var(--border);">
          <div style="font-size:32px; line-height:1;">⚡</div>
          <div>
            <div class="t-md w-700 c-blue">React in Real-Time</div>
            <div class="t-sm c-muted" style="margin-top:4px;">Join live match rooms, react to every ball, and chat with thousands of fans.</div>
          </div>
        </div>

        <div style="display:flex; gap:16px; align-items:flex-start; padding:16px; background:var(--surface); border-radius:12px; border:1px solid var(--border);">
          <div style="font-size:32px; line-height:1;">🏆</div>
          <div>
            <div class="t-md w-700 c-blue">Climb the Leaderboard</div>
            <div class="t-sm c-muted" style="margin-top:4px;">Earn points for predicting outcomes, getting upvotes, and being the top fan.</div>
          </div>
        </div>

        <div style="display:flex; gap:16px; align-items:flex-start; padding:16px; background:var(--surface); border-radius:12px; border:1px solid var(--border);">
          <div style="font-size:32px; line-height:1;">📣</div>
          <div>
            <div class="t-md w-700 c-blue">Cheer For Your Tribe</div>
            <div class="t-sm c-muted" style="margin-top:4px;">Filter chats by your team, wear your badge with pride, and show your loyalty!</div>
          </div>
        </div>

      </div>

      <div style="width:100%; max-width:320px; margin: 0 auto;">
        <button class="btn btn-primary btn-full" id="btn-start-app" style="padding:16px; font-size:16px;">Let's Go! 🏏</button>
      </div>
    </div>
  `;

  document.getElementById('tour-back').onclick = goBack;
  document.getElementById('btn-start-app').onclick = () => {
    S.points = 20;
    buildHome();
    goTo('home');
    toast(\`🎉 Welcome, \${S.user.username}! Your first match is waiting! 🏏\`, 300);
    toast('+20 pts ✨ Account created bonus!', 1100);
  };
}


/* ══ HOME ════════════════════════════════════════════════════ */
function buildHome() {
  const unread = S.notifs.filter(n => !n.read).length;
  const t = S.user && S.user.teamId ? team(S.user.teamId) : {};

  document.getElementById('screen-home').innerHTML = `
    <div class="app-header">
      <div class="logo">Fan<span>Pulse</span></div>
      <div class="hdr-spacer"></div>
      <div style="display:flex;align-items:center;gap:8px;">
        <button class="notif-btn" id="hdr-notif-btn">
          🔔
          ${unread>0 ? `<div class="notif-badge">${unread}</div>` : ''}
        </button>
        ${S.user && !S.user.guest
          ? `<button class="avatar av-sm" id="hdr-av" style="background:${t.color||'var(--blue)'};color:#fff;border:none;cursor:pointer;">${ini(S.user.username)}</button>`
          : `<button class="btn btn-sm btn-primary" id="hdr-signin">Sign In</button>`
        }
      </div>
    </div>

    <div class="page-scroll">
      ${S.user && S.user.guest ? `
        <div class="guest-banner">
          <span style="font-size:24px;">👀</span>
          <div style="flex:1;">
            <div class="w-700 c-blue" style="font-size:13px;">You're browsing as Guest</div>
            <div class="t-xs c-muted">Sign up free to post reactions &amp; earn IPL points!</div>
          </div>
          <button class="btn btn-xs btn-dark" id="banner-signup">Join Free</button>
        </div>
      ` : ''}

      <!-- LIVE -->
      <div class="section-label">
        <div class="section-label-text live-label">
          <div class="live-dot"></div> Live Now <span class="cric-api-status status-sync" id="api-status">🔄</span>
        </div>
      </div>
      <div class="h-scroll" id="live-matches-scroll">
        <div class="match-card" data-goto="match">
          <div class="mc-top">
            <span class="t-xs w-700 c-muted">IPL 2024 · FINAL</span>
            <span class="badge badge-ft">RESULT</span>
          </div>
          <div class="mc-teams">
            <div class="mc-team"><div class="mc-badge">🔵💛</div><div class="mc-tname">MI</div></div>
            <div><div class="mc-score" style="font-size:13px;line-height:1.4;text-align:center;">186/4<br>178/8</div></div>
            <div class="mc-team"><div class="mc-badge">🟡⚫</div><div class="mc-tname">CSK</div></div>
          </div>
          <div class="mc-bottom">
            <div class="mc-fans">👥 5,812 fans</div>
            <span class="t-xs w-700 c-blue">React →</span>
          </div>
        </div>
        <div class="match-card" data-goto="match">
          <div class="mc-top">
            <span class="t-xs w-700 c-muted">IPL 2024</span>
            <div style="display:flex;align-items:center;gap:4px;"><div class="live-dot"></div><span class="badge badge-live">LIVE 18ov</span></div>
          </div>
          <div class="mc-teams">
            <div class="mc-team"><div class="mc-badge">🔴⚫</div><div class="mc-tname">RCB</div></div>
            <div><div class="mc-score" style="font-size:13px;line-height:1.4;text-align:center;">198/5<br>201/3</div></div>
            <div class="mc-team"><div class="mc-badge">🟣💛</div><div class="mc-tname">KKR</div></div>
          </div>
          <div class="mc-bottom">
            <div class="mc-fans">👥 4,230 fans</div>
            <span class="t-xs w-700 c-blue">Join →</span>
          </div>
        </div>
        <div class="match-card" data-goto="match">
          <div class="mc-top">
            <span class="t-xs w-700 c-muted">IPL 2024</span>
            <div style="display:flex;align-items:center;gap:4px;"><div class="live-dot"></div><span class="badge badge-live">LIVE 12ov</span></div>
          </div>
          <div class="mc-teams">
            <div class="mc-team"><div class="mc-badge">🟠⚫</div><div class="mc-tname">SRH</div></div>
            <div><div class="mc-score" style="font-size:13px;line-height:1.4;text-align:center;">155/8<br>124/4</div></div>
            <div class="mc-team"><div class="mc-badge">🔵🔴</div><div class="mc-tname">DC</div></div>
          </div>
          <div class="mc-bottom">
            <div class="mc-fans">👥 2,980 fans</div>
            <span class="t-xs w-700 c-blue">Join →</span>
          </div>
        </div>
      </div>

      <!-- UPCOMING -->
      <div class="section-label" style="margin-top:4px;">
        <span class="section-label-text">Upcoming Matches</span>
        <span class="see-all">Schedule</span>
      </div>
      <div style="background:var(--surface);border-top:1px solid var(--border);border-bottom:1px solid var(--border);">
        ${[
          { h:'RR',   a:'GT',   t:'19:30', v:'Sawai Mansingh, Jaipur' },
          { h:'PBKS', a:'LSG',  t:'15:30', v:'Punjab Cricket Assoc. Stadium' },
          { h:'DC',   a:'SRH',  t:'19:30', v:'Arun Jaitley Stadium, Delhi' },
        ].map(m => `
          <div class="match-row" data-goto="match">
            <span style="font-size:22px;">🏏</span>
            <div class="mr-info">
              <div class="mr-name">${m.h} vs ${m.a}</div>
              <div class="mr-comp">IPL 2024 · ${m.v}</div>
            </div>
            <div class="mr-time">${m.t}</div>
            <button class="btn btn-xs btn-outline reminder-btn" data-match="${m.h} vs ${m.a}">🔔</button>
          </div>
        `).join('')}
      </div>

      <!-- RECENT -->
      <div class="section-label" style="margin-top:4px;">
        <span class="section-label-text">Recently Ended</span>
        <span class="see-all">All results</span>
      </div>
      <div id="ended-matches" style="padding:0 14px 16px;display:flex;flex-direction:column;gap:8px;">
        ${[
          { h:'MI', a:'CSK', hs:'186/4', as:'178/8', r:'MI won by 8 runs' },
          { h:'KKR', a:'PBKS', hs:'222/6', as:'201/8', r:'KKR won by 21 runs' },
        ].map(m => `
          <div class="card card-pad" data-goto="match" style="cursor:pointer;">
            <div style="display:flex;align-items:center;gap:12px;">
              <div style="flex:1;">
                <div class="w-700 t-md">${m.h} <span class="c-blue">${m.hs} – ${m.as}</span> ${m.a}</div>
                <div class="t-xs c-muted" style="margin-top:3px;">${m.r}</div>
              </div>
              <div class="badge badge-ft">FT</div>
              <span style="font-size:18px;color:var(--text-muted);">›</span>
            </div>
          </div>
        `).join('')}
      </div>
    </div>
  `;

  // wire events using JS (not inline onclick)
  const nb = document.getElementById('hdr-notif-btn');
  if (nb) nb.addEventListener('click', openNotif);

  const av = document.getElementById('hdr-av');
  if (av) av.addEventListener('click', () => { buildProfile(); navTab('profile'); });

  const si = document.getElementById('hdr-signin');
  if (si) si.addEventListener('click', () => { buildSignup(); goTo('signup'); });

  const bs = document.getElementById('banner-signup');
  if (bs) bs.addEventListener('click', () => { buildSignup(); goTo('signup'); });

  document.querySelectorAll('[data-goto="match"]').forEach(el => {
    el.addEventListener('click', e => {
      if (e.target.classList.contains('reminder-btn')) return;
      buildMatch(); navTab('match');
    });
  });
  document.querySelectorAll('.reminder-btn').forEach(btn => {
    btn.addEventListener('click', e => {
      e.stopPropagation();
      toast(`⏰ Reminder set for ${btn.dataset.match}!`);
    });
  });

  // --- Progressive: Fetch live CricAPI data from backend ---
  fetch('/api/matches')
    .then(r => r.json())
    .then(result => {
      const matchData = result.data || [];
      S.apiStatus = result.status;
      S.matches = matchData;

      // Update status badge
      const statusEl = document.getElementById('api-status');
      if (statusEl) {
        statusEl.className = 'cric-api-status status-' + S.apiStatus;
        statusEl.textContent = S.apiStatus === 'success' ? '⚡ CricAPI Live' : '⚠️ Simulated';
      }

      // Update live match cards
      const hscroll = document.getElementById('live-matches-scroll');
      if (hscroll && matchData.length > 0) {
        hscroll.innerHTML = matchData.map(m => `
          <div class="match-card" data-goto="match" data-mid="${m.id}">
            <div class="mc-top">
              <span class="t-xs w-700 c-muted">${m.matchType.toUpperCase()}</span>
              ${m.isLive
                ? '<div style="display:flex;align-items:center;gap:4px;"><div class="live-dot"></div><span class="badge badge-live">LIVE</span></div>'
                : '<span class="badge badge-ft">RESULT</span>'}
            </div>
            <div class="mc-teams">
              <div class="mc-team"><div class="mc-badge">${m.teams.t1.badge}</div><div class="mc-tname">${m.teams.t1.short}</div></div>
              <div><div class="mc-score" style="font-size:13px;line-height:1.4;text-align:center;">${m.scores.t1}<br>${m.scores.t2}</div></div>
              <div class="mc-team"><div class="mc-badge">${m.teams.t2.badge}</div><div class="mc-tname">${m.teams.t2.short}</div></div>
            </div>
            <div class="mc-bottom">
              <div class="mc-fans">👥 ${m.fansCount.toLocaleString()} fans</div>
              <span class="t-xs w-700 c-blue">${m.isLive ? 'Join →' : 'React →'}</span>
            </div>
          </div>
        `).join('');

        // Re-wire match card click events
        hscroll.querySelectorAll('[data-goto="match"]').forEach(el => {
          el.addEventListener('click', () => {
            S.activeMatchId = el.dataset.mid;
            navTab('match');
          });
        });
      }

      // Update ended matches section
      const endedDiv = document.getElementById('ended-matches');
      const endedMatches = matchData.filter(m => !m.isLive);
      if (endedDiv && endedMatches.length > 0) {
        endedDiv.innerHTML = endedMatches.map(m => `
          <div class="card card-pad" data-goto="match" data-mid="${m.id}" style="cursor:pointer;">
            <div style="display:flex;align-items:center;gap:12px;">
              <div style="flex:1;">
                <div class="w-700 t-md">${m.teams.t1.short} <span class="c-blue">${m.scores.t1} – ${m.scores.t2}</span> ${m.teams.t2.short}</div>
                <div class="t-xs c-muted" style="margin-top:3px;">${m.status}</div>
              </div>
              <div class="badge badge-ft">FT</div>
              <span style="font-size:18px;color:var(--text-muted);">›</span>
            </div>
          </div>
        `).join('');
        endedDiv.querySelectorAll('[data-goto="match"]').forEach(el => {
          el.addEventListener('click', () => {
            S.activeMatchId = el.dataset.mid;
            navTab('match');
          });
        });
      }
    })
    .catch(() => {
      S.apiStatus = 'fallback';
      const statusEl = document.getElementById('api-status');
      if (statusEl) {
        statusEl.className = 'cric-api-status status-fallback';
        statusEl.textContent = '⚠️ Offline';
      }
    });
}

/* ══ MATCH ROOM ═════════════════════════════════════════════ */
function buildMatch() {
  // stop old feed timer
  if (S.feedTimer) clearInterval(S.feedTimer);
  S.eventFilter = 'all';
  S.fanFilter   = 'all';
  S.openReply   = null;

  document.getElementById('screen-match').innerHTML = `
    <!-- Sticky header -->
    <div class="match-header">
      <div class="match-top-bar">
        <button class="back-btn" id="match-back">←</button>
        <div class="match-title">MI vs CSK — IPL Final</div>
        <span class="badge badge-ft">RESULT</span>
      </div>
      <div class="scoreboard">
        <div class="sb-team">
          <div class="sb-badge">🔵💛</div>
          <div class="sb-name">Mumbai Indians</div>
        </div>
        <div class="sb-center">
          <div class="sb-score">186/4</div>
          <div class="sb-score" style="font-size:18px;color:var(--text-secondary);">178/8</div>
          <div class="sb-meta">
            <span>20 overs</span><span>·</span>
            <span>👥 <span id="fc">5,812</span></span>
          </div>
        </div>
        <div class="sb-team">
          <div class="sb-badge">🟡⚫</div>
          <div class="sb-name">Chennai Super Kings</div>
        </div>
      </div>
      <div class="match-notice">
        <span style="font-size:20px;">🏆</span>
        <div style="flex:1;">
          <div class="w-700 c-blue t-sm">MI won by 8 runs — What a match!</div>
          <div class="t-xs c-muted">Post-match discussion open for 24hrs</div>
        </div>
        <button class="btn btn-xs btn-outline" id="share-btn">📤 Share</button>
      </div>
    </div>

    <!-- Timeline -->
    <div class="timeline" id="timeline">
      <div class="tl-pill on" data-ev="all">All Moments</div>
      ${EVENTS.map(e => `<div class="tl-pill" data-ev="${e.id}">${e.icon} ${e.label}</div>`).join('')}
    </div>

    <!-- Fan filter -->
    <div class="fan-toggle">
      <div class="fan-tab on" data-fan="all">All Fans</div>
      <div class="fan-tab"  data-fan="mi">🔵💛 MI (3,104)</div>
      <div class="fan-tab"  data-fan="csk">🟡⚫ CSK (2,140)</div>
    </div>

    <!-- Reaction wall -->
    <div class="reaction-wall" id="rwall"></div>

    <!-- Compose -->
    ${S.user && !S.user.guest ? `
      <div class="compose-emoji-row" id="emoji-row">
        ${['🏏','🔴','💥','🙌','😱','😤','💛','🔵','💯','🎉','😭','👑'].map(e =>
          `<div class="ceoji" data-em="${e}">${e}</div>`).join('')}
      </div>
      <div class="compose-bar">
        <div class="avatar av-sm" style="background:${team(S.user.teamId||'mi').color||'var(--blue)'};">${ini(S.user.username)}</div>
        <div class="compose-wrap" id="compose-wrap">
          <textarea id="c-inp" class="compose-input" rows="1"
            placeholder="Bol de! Share your take... 🏏" maxlength="280"></textarea>
          <span class="char-count" id="c-cnt">280</span>
        </div>
        <button class="btn btn-sm btn-primary" id="post-btn">Post</button>
      </div>
    ` : `
      <div class="compose-bar" style="justify-content:center;gap:10px;">
        <span class="t-sm w-600 c-muted">Join FanPulse to post your take!</span>
        <button class="btn btn-sm btn-dark" id="guest-join">Sign Up Free</button>
      </div>
    `}
  `;

  document.getElementById('match-back').addEventListener('click', () => { buildHome(); navTab('home'); });
  document.getElementById('share-btn').addEventListener('click', () => toast('📤 Match card shared!'));

  const gj = document.getElementById('guest-join');
  if (gj) gj.addEventListener('click', () => { buildSignup(); goTo('signup'); });

  // Timeline pills
  document.querySelectorAll('.tl-pill').forEach(pill => {
    pill.addEventListener('click', () => {
      S.eventFilter = pill.dataset.ev;
      document.querySelectorAll('.tl-pill').forEach(p => p.classList.remove('on'));
      pill.classList.add('on');
      renderWall();
    });
  });

  // Fan tabs
  document.querySelectorAll('.fan-tab').forEach(tab => {
    tab.addEventListener('click', () => {
      S.fanFilter = tab.dataset.fan;
      document.querySelectorAll('.fan-tab').forEach(t => t.classList.remove('on'));
      tab.classList.add('on');
      renderWall();
    });
  });

  // Emoji row
  document.querySelectorAll('.ceoji').forEach(btn => {
    btn.addEventListener('click', () => {
      const inp = document.getElementById('c-inp');
      if (!inp) return;
      inp.value += btn.dataset.em;
      inp.dispatchEvent(new Event('input'));
      inp.focus();
    });
  });

  // Compose
  const inp = document.getElementById('c-inp');
  const cnt = document.getElementById('c-cnt');
  const postBtn = document.getElementById('post-btn');
  if (inp) {
    inp.addEventListener('input', () => {
      const r = 280 - inp.value.length;
      cnt.textContent = r;
      cnt.className = 'char-count' + (r<=10?' red':r<=50?' amber':'');
      inp.style.height = 'auto';
      inp.style.height = Math.min(inp.scrollHeight, 72) + 'px';
    });
    inp.addEventListener('keydown', e => {
      if (e.key === 'Enter' && !e.shiftKey) { e.preventDefault(); submitPost(); }
    });
  }
  if (postBtn) postBtn.addEventListener('click', submitPost);

  // Fan count tick
  let fc = 5812;
  S.feedTimer = setInterval(() => {
    fc += Math.floor(Math.random()*3) - 1;
    const el = document.getElementById('fc');
    if (el) el.textContent = fc.toLocaleString();
  }, 2500);

  // Live feed injector
  const liveFeedTimer = setInterval(() => {
    if (S.screen !== 'match') { clearInterval(liveFeedTimer); return; }
    const r = LIVE_FEED[Math.floor(Math.random()*LIVE_FEED.length)];
    S.posts.unshift({
      id:'lf'+Date.now(), evId:'ev6', userId:r.username,
      username:r.username, teamId:r.teamId, content:r.content,
      time:'Just now', upvotes:Math.floor(Math.random()*6),
      myVote:false, myRxn:null, rxns:{},
    });
    renderWall();
  }, 10000);

  renderWall();
}

function renderWall() {
  const wall = document.getElementById('rwall');
  if (!wall) return;

  let posts = [...S.posts];
  if (S.eventFilter !== 'all') posts = posts.filter(p => p.evId === S.eventFilter);
  if (S.fanFilter !== 'all')   posts = posts.filter(p => p.teamId === S.fanFilter);

  const recap = `
    <div class="card" style="background:linear-gradient(135deg,var(--yellow-light),var(--surface));
         border-color:var(--yellow);margin-bottom:6px;">
      <div class="card-pad">
        <div style="display:flex;align-items:center;gap:8px;margin-bottom:10px;">
          <span style="font-size:20px;">📊</span>
          <div class="w-800 c-blue t-md">Match Recap</div>
          <div class="badge badge-yellow" style="margin-left:auto;">TRENDING</div>
        </div>
        <div style="display:flex;gap:8px;margin-bottom:8px;">
          ${["🔴 Rohit's massive SIX!","😱 Dhoni OUT!","🏆 MI Champions!"].map((r,i) => `
            <div style="flex:1;background:#fff;border-radius:var(--radius-md);padding:7px;
                 border:1px solid var(--border);text-align:center;">
              <div class="t-xs w-700 c-muted">#${i+1}</div>
              <div class="t-xs w-700" style="margin-top:2px;">${r}</div>
            </div>
          `).join('')}
        </div>
        <div class="t-xs c-muted">Wankhede Stadium, Mumbai · 5,812 fans reacted</div>
      </div>
    </div>
  `;

  const postsHtml = posts.length ? posts.map(buildPostCard).join('') : `
    <div class="empty-state">
      <div class="empty-icon">🏏</div>
      <div class="empty-title">No reactions for this filter</div>
      <div class="empty-desc">Be the first to react and show your IPL spirit!</div>
    </div>
  `;

  wall.innerHTML = recap + postsHtml;
  wirePostEvents();
}

function buildPostCard(p) {
  const t = team(p.teamId);
  const hot = p.upvotes >= 50;
  const reps = REPLIES_DATA[p.id] || [];
  const showReps = S.openReply === p.id;
  const rxnHtml = Object.entries(p.rxns||{}).map(([em,n]) =>
    `<span class="rxn-chip${p.myRxn===em?' mine':''}" data-pid="${p.id}" data-em="${em}">${em} ${n}</span>`
  ).join('');
  const repHtml = showReps ? reps.slice(0,2).map(r => {
    const rt = team(r.teamId);
    return `
      <div class="reply-row">
        <div class="avatar av-xs" style="background:${rt.color||'var(--blue)'};">${ini(r.username)}</div>
        <div>
          <div style="display:flex;gap:6px;align-items:center;margin-bottom:1px;">
            <span class="reply-uname">@${r.username}</span>
            <span class="reply-time">${r.time}</span>
          </div>
          <div class="reply-text">${r.content}</div>
        </div>
      </div>
    `;
  }).join('') + (reps.length>2?`<div class="see-more-link" data-pid="${p.id}">See all ${reps.length} replies →</div>`:'') : '';

  return `
    <div class="post-card${hot?' hot':''}" id="pc-${p.id}" data-pid="${p.id}">
      ${hot ? `<div style="position:absolute;top:10px;right:12px;"><span class="badge badge-hot">🔥 Hot</span></div>` : ''}
      <div class="post-hdr">
        <div class="avatar av-sm" style="background:${t.color||'var(--blue)'};">${ini(p.username)}</div>
        <div class="post-uinfo">
          <div class="post-uname">${p.username} <span>${t.badge||'🏏'}</span></div>
          <div class="post-meta">
            <span class="post-team-pill" style="background:${t.color||'var(--blue)'};">${t.short||'FAN'}</span>
            <span class="post-time">${p.time}</span>
          </div>
        </div>
      </div>
      ${p.isEmoji
        ? `<div class="post-emoji-big">${p.content}</div>`
        : `<div class="post-body">${p.content}</div>`}
      ${rxnHtml ? `<div class="post-rxns">${rxnHtml}</div>` : ''}
      <div class="post-actions">
        <button class="act-btn${p.myVote?' voted':''}" data-action="vote" data-pid="${p.id}">
          ▲ <span id="vc-${p.id}">${p.upvotes}</span>
        </button>
        <button class="act-btn" data-action="reply" data-pid="${p.id}">
          💬 ${reps.length}
        </button>
        <button class="act-btn" data-action="share" data-pid="${p.id}">↗ Share</button>
      </div>
      ${showReps && repHtml ? `<div class="replies-zone">${repHtml}</div>` : ''}
    </div>
  `;
}

function wirePostEvents() {
  // Upvote
  document.querySelectorAll('[data-action="vote"]').forEach(btn => {
    btn.addEventListener('click', e => {
      if (S.user?.guest) { toast('🔒 Join FanPulse to upvote! It\'s free.'); return; }
      const pid = btn.dataset.pid;
      const p   = S.posts.find(x => x.id === pid);
      if (!p) return;
      p.myVote = !p.myVote;
      p.upvotes += p.myVote ? 1 : -1;
      const vc = document.getElementById('vc-'+pid);
      if (vc) { vc.textContent = p.upvotes; vc.parentElement.className='act-btn'+(p.myVote?' voted':''); }
      if (p.myVote) {
        confetti(e.clientX, e.clientY);
        ptsFloat('+2 ✨', e.clientX, e.clientY);
        if (p.upvotes >= 50) {
          const card = document.getElementById('pc-'+pid);
          if (card && !card.classList.contains('hot')) {
            card.classList.add('hot');
            toast('🔥 This post is now TRENDING!');
          }
        }
      }
    });
  });

  // Reply toggle
  document.querySelectorAll('[data-action="reply"]').forEach(btn => {
    btn.addEventListener('click', () => {
      const pid = btn.dataset.pid;
      S.openReply = S.openReply === pid ? null : pid;
      renderWall();
    });
  });

  // Share
  document.querySelectorAll('[data-action="share"]').forEach(btn => {
    btn.addEventListener('click', () => toast('🔗 Link copied to clipboard!'));
  });

  // Reaction chips
  document.querySelectorAll('.rxn-chip').forEach(chip => {
    chip.addEventListener('click', () => {
      if (S.user?.guest) { toast('🔒 Sign up to react!'); return; }
      const { pid, em } = chip.dataset;
      const p = S.posts.find(x => x.id === pid);
      if (!p) return;
      p.rxns = p.rxns || {};
      if (p.myRxn === em) {
        p.rxns[em] = Math.max(0,(p.rxns[em]||1)-1);
        p.myRxn = null;
      } else {
        if (p.myRxn) p.rxns[p.myRxn] = Math.max(0,(p.rxns[p.myRxn]||1)-1);
        p.rxns[em] = (p.rxns[em]||0)+1;
        p.myRxn = em;
      }
      renderWall();
    });
  });

  // Long-press emoji picker (context menu fallback)
  document.querySelectorAll('.post-card').forEach(card => {
    let t;
    card.addEventListener('contextmenu', e => { e.preventDefault(); showPicker(card.dataset.pid, e); });
    card.addEventListener('touchstart',  e => { t = setTimeout(() => showPicker(card.dataset.pid, e.touches[0]), 550); }, {passive:true});
    card.addEventListener('touchend',    () => clearTimeout(t));
    card.addEventListener('touchmove',   () => clearTimeout(t));
  });
}

function showPicker(pid, ev) {
  document.querySelectorAll('.emoji-picker').forEach(p => p.remove());
  const picker = document.createElement('div');
  picker.className = 'emoji-picker';
  ['🔥','😂','😤','💯','😱','💔','🏏','👑'].forEach(em => {
    const b = document.createElement('div');
    b.className = 'epick-btn';
    b.textContent = em;
    b.addEventListener('click', e => {
      if (S.user?.guest) { toast('🔒 Sign up to react!'); return; }
      const p = S.posts.find(x => x.id === pid);
      if (p) { p.rxns = p.rxns||{}; p.rxns[em]=(p.rxns[em]||0)+1; p.myRxn=em; }
      picker.remove();
      toast(`${em} reaction added!`);
      confetti(e.clientX, e.clientY);
      renderWall();
    });
    picker.appendChild(b);
  });
  const wall = document.getElementById('rwall');
  wall.appendChild(picker);
  picker.style.cssText = `position:fixed;bottom:180px;left:50%;transform:translateX(-50%);`;
  setTimeout(() => document.addEventListener('click', () => picker.remove(), {once:true}), 100);
}

async function submitPost() {
  if (S.user?.guest) { toast('🔒 Join FanPulse to post!'); return; }
  const inp = document.getElementById('c-inp');
  const btn = document.getElementById('post-btn');
  if (!inp || !btn) return;
  const txt = inp.value.trim();
  if (!txt) { inp.focus(); return; }
  btn.textContent = '⏳';
  btn.disabled = true;

  const newPost = {
    id:'p'+Date.now(), evId:S.eventFilter==='all'?'ev6':S.eventFilter,
    userId:'u_'+S.user.username, username:S.user.username, teamId:S.user.teamId||'mi',
    content:txt, time:'Just now',
    upvotes:0, myVote:false, myRxn:null, rxns:{},
  };

  // Sync reaction to backend
  try {
    const res = await fetch('/api/reactions', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        username: S.user.username,
        content: txt,
        teamId: S.user.teamId || 'mi',
        evId: S.eventFilter === 'all' ? 'ev6' : S.eventFilter
      })
    });
    const data = await res.json();
    if (data.success) {
      S.points = data.points;
      if (data.post) newPost.id = data.post.id;
    }
  } catch (e) {
    S.points += 10;
  }

  S.posts.unshift(newPost);
  inp.value = ''; inp.style.height = 'auto';
  const cc = document.getElementById('c-cnt');
  if (cc) cc.textContent = '280';
  toast('✅ Reaction posted! Jai IPL 🏏');
  const r = btn.getBoundingClientRect();
  confetti(r.left + r.width/2, r.top);
  ptsFloat('+10 ✨', r.left, r.top);
  renderWall();
  btn.textContent = 'Post';
  btn.disabled = false;
  if (S.posts.filter(p => p.username === S.user.username).length === 1) {
    toast('🏅 First Reactor badge earned!', 800);
  }
}

/* ══ LEADERBOARD ════════════════════════════════════════════ */
function buildLeaderboard(apiData) {
  const top3 = (apiData || LEADERS).slice(0,3);
  const rest  = (apiData || LEADERS).slice(3);

  document.getElementById('screen-leaderboard').innerHTML = `
    <div class="app-header">
      <div class="logo">Fan<span>Pulse</span></div>
      <div class="hdr-spacer"></div>
      <span class="w-700 c-muted t-sm">IPL Fan Rankings</span>
    </div>

    <div class="lb-tabs">
      <button class="lb-tab${S.lbTab==='week'?' on':''}" data-lb="week">This Week</button>
      <button class="lb-tab${S.lbTab==='all'?' on':''}"  data-lb="all">All Season</button>
    </div>

    <div class="podium-wrap">
      <div class="pod-item p2">
        <div class="avatar av-md" style="background:${team(top3[1].teamId).color||'var(--blue)'};">${ini(top3[1].username)}</div>
        <div class="pod-name">${top3[1].username}</div>
        <div class="pod-pts">${top3[1].pts.toLocaleString()} pts</div>
        <div class="pod-block">2</div>
      </div>
      <div class="pod-item p1">
        <div class="pod-crown">👑</div>
        <div class="avatar av-lg av-ring" style="background:${team(top3[0].teamId).color||'var(--blue)'};">${ini(top3[0].username)}</div>
        <div class="pod-name w-800">${top3[0].username}</div>
        <div class="pod-pts">${top3[0].pts.toLocaleString()} pts</div>
        <div class="pod-block">1</div>
      </div>
      <div class="pod-item p3">
        <div class="avatar av-md" style="background:${team(top3[2].teamId).color||'var(--blue)'};">${ini(top3[2].username)}</div>
        <div class="pod-name">${top3[2].username}</div>
        <div class="pod-pts">${top3[2].pts.toLocaleString()} pts</div>
        <div class="pod-block">3</div>
      </div>
    </div>

    <div class="rank-list">
      ${rest.map(r => {
        const t = team(r.teamId);
        return `
          <div class="rank-row">
            <div class="rank-num">${r.rank}</div>
            <div class="avatar av-sm" style="background:${t.color||'var(--blue)'};">${ini(r.username)}</div>
            <div class="rank-info">
              <div class="rank-uname">${r.username} ${t.badge||''}</div>
              <div class="rank-team">${t.name||''} Fan</div>
            </div>
            ${r.crown?`<span style="font-size:18px;">${r.crown}</span>`:''}
            <div class="rank-pts">${r.pts.toLocaleString()}</div>
          </div>
        `;
      }).join('')}
    </div>

    <div class="my-rank-bar">
      <div class="my-rank-txt">
        You are <span>#47</span> this week · ${S.points} pts · Keep going! 💪
      </div>
      <button class="btn btn-xs btn-primary" id="lb-post-now">Post Now</button>
    </div>
  `;

  document.querySelectorAll('[data-lb]').forEach(btn => {
    btn.addEventListener('click', () => {
      S.lbTab = btn.dataset.lb;
      buildLeaderboard();
    });
  });
  const lbp = document.getElementById('lb-post-now');
  if (lbp) lbp.addEventListener('click', () => { buildMatch(); navTab('match'); });

  // Progressive: fetch leaderboard from backend API
  if (!apiData) {
    fetch('/api/leaderboard')
      .then(r => r.json())
      .then(data => {
        if (Array.isArray(data) && data.length >= 3) buildLeaderboard(data);
      })
      .catch(() => {});
  }
}

/* ══ PROFILE ════════════════════════════════════════════════ */
function buildProfile() {
  if (!S.user) { buildSignup(); goTo('signup'); return; }
  const u = S.user;
  const t = team(u.teamId||'');
  const myPosts = S.posts.filter(p => p.username === (S.user?.username || ''));

  document.getElementById('screen-profile').innerHTML = `
    <div class="profile-cover" style="background:linear-gradient(135deg,${t.color||'var(--blue)'} 0%,var(--blue-mid) 100%);">
      <div class="profile-cover-wm">${t.badge||'🏏'}</div>
    </div>
    <div class="profile-av-row">
      <div class="avatar av-xl av-ring" style="background:${t.color||'var(--blue)'};">
        ${u.guest ? '👤' : ini(u.username)}
      </div>
      ${!u.guest
        ? `<button class="profile-edit" id="prof-edit">✏️ Edit Profile</button>`
        : `<button class="btn btn-sm btn-dark" id="prof-join">Join FanPulse →</button>`
      }
    </div>
    <div class="profile-info">
      <div class="profile-name">${u.username}</div>
      <div class="profile-sub">${t.name ? '❤️ '+t.name+' Fan' : 'IPL Fan'} · Since IPL 2024</div>
    </div>
    <div class="profile-stats">
      <div class="profile-stat">
        <div class="profile-stat-val">${myPosts.length}</div>
        <div class="profile-stat-lbl">Reactions</div>
      </div>
      <div class="profile-stat">
        <div class="profile-stat-val">${myPosts.reduce((a,p)=>a+p.upvotes,0)}</div>
        <div class="profile-stat-lbl">Upvotes</div>
      </div>
      <div class="profile-stat">
        <div class="profile-stat-val">4</div>
        <div class="profile-stat-lbl">Matches</div>
      </div>
      <div class="profile-stat">
        <div class="profile-stat-val">${S.points}</div>
        <div class="profile-stat-lbl">Points</div>
      </div>
    </div>

    <div class="section-label" style="padding:6px 16px 4px;">
      <span class="section-label-text">My IPL Badges</span>
    </div>
    <div class="badges-row">
      ${[['🔥','Hotshot'],['⚡','Speed Reactor'],['🎯','Explorer'],['🏆','Match MVP'],['🔥','4-Day Streak'],['🏏','First Reactor']]
        .map(([ic,lb]) => `<div class="badge-item"><div class="badge-item-icon">${ic}</div><div class="badge-item-lbl">${lb}</div></div>`).join('')}
    </div>

    <div class="section-label" style="padding:6px 16px 4px;">
      <span class="section-label-text">My Reactions</span>
    </div>
    <div class="my-posts-list">
      ${myPosts.length ? myPosts.map(p => `
        <div class="my-post" data-goto="match">
          <div class="my-post-ctx">MI vs CSK Final · ${p.time}</div>
          <div class="my-post-text">${p.content}</div>
          <div class="my-post-stat"><span>▲ ${p.upvotes}</span><span>💬 0</span></div>
        </div>
      `).join('') : `
        <div class="empty-state">
          <div class="empty-icon">🏏</div>
          <div class="empty-title">No reactions yet!</div>
          <div class="empty-desc">Jump into the live match &amp; show your IPL spirit. Bol de! 🎉</div>
          <button class="btn btn-primary" style="margin-top:14px;" id="prof-goto-match">Watch Live 🏏</button>
        </div>
      `}
    </div>
  `;

  const pe = document.getElementById('prof-edit');
  if (pe) pe.addEventListener('click', () => toast('✏️ Profile editing — coming soon!'));
  const pj = document.getElementById('prof-join');
  if (pj) pj.addEventListener('click', () => { buildSignup(); goTo('signup'); });
  const pgm = document.getElementById('prof-goto-match');
  if (pgm) pgm.addEventListener('click', () => { buildMatch(); navTab('match'); });
  document.querySelectorAll('[data-goto="match"]').forEach(el => {
    el.addEventListener('click', () => { buildMatch(); navTab('match'); });
  });
}

/* ══ NOTIFICATION TRAY ══════════════════════════════════════ */
function openNotif() {
  const unread = S.notifs.filter(n=>!n.read).length;
  const badge  = document.getElementById('nt-badge');
  if (badge) badge.textContent = unread > 0 ? `${unread} New` : '';
  document.getElementById('notif-list').innerHTML = S.notifs.map(n => `
    <div class="nt-item${n.read?'':' unread'}" data-nid="${n.id}">
      <div class="nt-icon">${n.icon}</div>
      <div class="nt-content">
        <div class="nt-text">${n.text}</div>
        <div class="nt-time">${n.time}</div>
      </div>
      ${!n.read ? `<div class="nt-dot"></div>` : ''}
    </div>
  `).join('');
  document.querySelectorAll('.nt-item').forEach(el => {
    el.addEventListener('click', () => {
      const n = S.notifs.find(x => x.id === el.dataset.nid);
      if (n) n.read = true;
      closeNotif();
      buildMatch(); navTab('match');
    });
  });
  document.getElementById('notif-overlay').classList.add('open');
  document.getElementById('notif-tray').classList.add('open');
  document.body.classList.add('locked');
  S.notifOpen = true;
}

function closeNotif() {
  document.getElementById('notif-overlay').classList.remove('open');
  document.getElementById('notif-tray').classList.remove('open');
  document.body.classList.remove('locked');
  S.notifOpen = false;
}

function markAllRead() {
  S.notifs.forEach(n => n.read = true);
  openNotif();
  toast('✅ All notifications marked as read');
}

/* ══ EXPOSE GLOBALS ════════════════════════════════════════ */
window.goBack      = goBack;
window.navTab      = navTab;
window.openNotif   = openNotif;
window.closeNotif  = closeNotif;
window.markAllRead = markAllRead;

/* ══ BOOT ══════════════════════════════════════════════════ */
init();
