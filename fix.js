const fs = require('fs');
let c = fs.readFileSync('fanpulse/app.js', 'utf8');

c = c.replace('<div style="display:flex;gap:8px;margin-bottom:8px;">', '<div style="display:flex;gap:8px;flex-wrap:wrap;margin-bottom:8px;">');

c = c.replace(/<div style="flex:1;background:#fff;border-radius:var\(--radius-md\);padding:7px;/g, '<div style="flex:1 1 100px;min-width:100px;background:#fff;border-radius:var(--r-md);padding:7px;');

fs.writeFileSync('fanpulse/app.js', c);
console.log('Fixed wrap.');
