// Check every external link in the built pages (YouTube via oEmbed, others via GET).
// Usage: node tools/check-links.js
const fs = require('fs');
const path = require('path');
const ROOT = path.join(__dirname, '..');
const UA = { 'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 Chrome/130 Safari/537.36', 'Accept-Language': 'zh-TW,zh;q=0.9' };
const urls = new Map();
for (const f of fs.readdirSync(ROOT).filter((f) => f.endsWith('.html'))) {
  const html = fs.readFileSync(path.join(ROOT, f), 'utf8');
  for (const m of html.matchAll(/href="(https?:\/\/[^"]+)"/g)) {
    const u = m[1].replace(/&amp;/g, '&');
    if (/fonts\.(googleapis|gstatic)/.test(u)) continue;
    if (!urls.has(u)) urls.set(u, new Set());
    urls.get(u).add(f);
  }
}
async function check(u) {
  const id = (u.match(/(?:watch\?v=|youtu\.be\/|\/live\/)([A-Za-z0-9_-]{11})/) || [])[1];
  const target = id ? `https://www.youtube.com/oembed?url=https://www.youtube.com/watch?v=${id}&format=json` : u;
  for (let i = 0; i < 2; i++) {
    try {
      const r = await fetch(target, { headers: UA, redirect: 'follow', signal: AbortSignal.timeout(20000) });
      return r.status;
    } catch (e) { if (i) return 'ERR ' + (e.cause?.code || e.message); }
  }
}
(async () => {
  const list = [...urls.keys()]; const res = {}; let i = 0;
  await Promise.all(Array.from({ length: 8 }, async () => { while (i < list.length) { const u = list[i++]; res[u] = await check(u); } }));
  const bad = list.filter((u) => res[u] !== 200);
  console.log(`checked ${list.length} links, ${list.length - bad.length} OK`);
  for (const u of bad) console.log(res[u], u, '←', [...urls.get(u)].join(','));
})();
