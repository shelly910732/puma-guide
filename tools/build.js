// Static site builder for 台北的陽光.
// Usage:  node tools/build.js      → writes the HTML pages into the repo root.
// Each page lives in tools/pages/<name>.js and exports { file, title, desc, section, crumb, body(h) }.
const fs = require('fs');
const path = require('path');

const ROOT = path.join(__dirname, '..');
const SITE = '台北的陽光';
const SITE_SUB = '認識市長候選人沈伯洋 | 親子快速指南';
const UPDATED = '2026-11-23';
const VIDEOS = JSON.parse(fs.readFileSync(path.join(__dirname, 'data', 'videos.json'), 'utf8'));
const crypto = require('crypto');
const ver = (f) => crypto.createHash('md5').update(fs.readFileSync(path.join(ROOT, f))).digest('hex').slice(0, 8);
const CSS_V = ver('assets/style.css'), JS_V = ver('assets/site.js');
const V = Object.fromEntries(VIDEOS.map((v) => [v.id, v]));

const esc = (s) => String(s ?? '').replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
const yt = (id) => `https://www.youtube.com/watch?v=${id}`;
const thumb = (id) => `https://i.ytimg.com/vi/${id}/mqdefault.jpg`;
const CAT = { life: '生活', mixed: '生活＋政策', policy: '政策', event: '演講活動', others: '他人評論・新聞', fun: '有趣片段' };
const fmtDate = (v) => !v.date ? '日期待確認' : v.approx ? `約 ${v.date.slice(0, 4)} 年 ${+v.date.slice(5, 7)} 月` : v.date;

// ---------- illustrations (original, no copyright issues) ----------
const sun = (size = 44, face = true) => `<svg width="${size}" height="${size}" viewBox="0 0 64 64" aria-hidden="true">
  <g stroke="#f5a524" stroke-width="5" stroke-linecap="round">${[0, 45, 90, 135, 180, 225, 270, 315].map((a) => `<line x1="32" y1="4" x2="32" y2="11" transform="rotate(${a} 32 32)"/>`).join('')}</g>
  <circle cx="32" cy="32" r="17" fill="#ffc83d" stroke="#f5a524" stroke-width="3"/>
  ${face ? '<circle cx="26" cy="30" r="2.4" fill="#7a4a12"/><circle cx="38" cy="30" r="2.4" fill="#7a4a12"/><path d="M25 37 q7 6 14 0" stroke="#7a4a12" stroke-width="2.6" fill="none" stroke-linecap="round"/><circle cx="22" cy="36" r="2.6" fill="#ff9d7a" opacity=".7"/><circle cx="42" cy="36" r="2.6" fill="#ff9d7a" opacity=".7"/>' : ''}
</svg>`;
const heroArt = `<svg viewBox="0 0 320 260" role="img" aria-label="太陽照著台北的插畫">
  <defs><linearGradient id="sky" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#ffe7a8"/><stop offset="1" stop-color="#fff6e0"/></linearGradient></defs>
  <rect x="10" y="10" width="300" height="240" rx="36" fill="url(#sky)"/>
  <g transform="translate(196 34)">${[0, 30, 60, 90, 120, 150, 180, 210, 240, 270, 300, 330].map((a) => `<rect x="38" y="-6" width="6" height="18" rx="3" fill="#f5a524" transform="rotate(${a} 41 41)"/>`).join('')}
    <circle cx="41" cy="41" r="30" fill="#ffc83d"/><circle cx="31" cy="38" r="3.5" fill="#7a4a12"/><circle cx="51" cy="38" r="3.5" fill="#7a4a12"/><path d="M29 49 q12 10 24 0" stroke="#7a4a12" stroke-width="3.5" fill="none" stroke-linecap="round"/></g>
  <path d="M10 196 q60 -30 120 -6 t180 -10 v34 a36 36 0 0 1 -36 36 h-228 a36 36 0 0 1 -36 -36z" fill="#b9e3c6"/>
  <g fill="#f3d9b5" stroke="#d8b78c" stroke-width="2">
    <rect x="54" y="140" width="34" height="70" rx="4"/><rect x="96" y="120" width="30" height="90" rx="4"/>
    <path d="M150 210 v-118 l10 -14 l10 14 v118z" fill="#e9c9a0"/><rect x="150" y="104" width="20" height="6" fill="#d8b78c"/><rect x="148" y="130" width="24" height="6" fill="#d8b78c"/><rect x="146" y="158" width="28" height="6" fill="#d8b78c"/>
    <rect x="186" y="150" width="40" height="60" rx="4"/><rect x="234" y="134" width="30" height="76" rx="4"/>
  </g>
  <g fill="#fff">${[[62, 150], [74, 150], [62, 166], [74, 166], [104, 132], [114, 132], [104, 150], [114, 150], [194, 160], [208, 160], [194, 176], [208, 176], [242, 146], [252, 146], [242, 162], [252, 162]].map(([x, y]) => `<rect x="${x}" y="${y}" width="7" height="9" rx="2"/>`).join('')}</g>
  <g transform="translate(118 214)"><path d="M0 8 C0 -2 14 -2 14 8 C14 -2 28 -2 28 8 C28 18 14 26 14 26 C14 26 0 18 0 8Z" fill="#e2677e"/></g>
  <circle cx="40" cy="226" r="9" fill="#2f8a57"/><circle cx="282" cy="224" r="11" fill="#2f8a57"/><rect x="38" y="226" width="4" height="14" fill="#7a5a3a"/><rect x="280" y="226" width="4" height="14" fill="#7a5a3a"/>
</svg>`;
const doorIcon = {
  kids: `<svg width="72" height="72" viewBox="0 0 72 72" aria-hidden="true"><circle cx="36" cy="36" r="34" fill="#e3eefa"/><circle cx="36" cy="30" r="12" fill="#ffd8a8"/><path d="M24 26 q12 -14 24 0" fill="#7a4a12"/><circle cx="31" cy="31" r="1.8" fill="#3b2f22"/><circle cx="41" cy="31" r="1.8" fill="#3b2f22"/><path d="M31 36 q5 4 10 0" stroke="#3b2f22" stroke-width="2" fill="none" stroke-linecap="round"/><path d="M20 62 q16 -22 32 0z" fill="#2f74b5"/><path d="M54 14 l3 6 6 1 -4.5 4 1 6 -5.5 -3 -5.5 3 1 -6 -4.5 -4 6 -1z" fill="#f5a524"/></svg>`,
  parents: `<svg width="72" height="72" viewBox="0 0 72 72" aria-hidden="true"><circle cx="36" cy="36" r="34" fill="#fbe6ec"/><path d="M14 30 C14 20 28 20 28 30 C28 20 42 20 42 30 C42 42 28 50 28 50 C28 50 14 42 14 30Z" fill="#e2677e"/><path d="M34 38 C34 31 44 31 44 38 C44 31 54 31 54 38 C54 46 44 52 44 52 C44 52 34 46 34 38Z" fill="#f5a524"/></svg>`,
  data: `<svg width="72" height="72" viewBox="0 0 72 72" aria-hidden="true"><circle cx="36" cy="36" r="34" fill="#e3f4ea"/><rect x="18" y="20" width="16" height="34" rx="3" fill="#2f8a57"/><rect x="36" y="16" width="16" height="38" rx="3" fill="#7a52b8"/><rect x="21" y="26" width="10" height="3" rx="1.5" fill="#fff"/><rect x="39" y="22" width="10" height="3" rx="1.5" fill="#fff"/><circle cx="52" cy="50" r="8" fill="none" stroke="#b5540d" stroke-width="4"/><line x1="57" y1="56" x2="62" y2="61" stroke="#b5540d" stroke-width="4" stroke-linecap="round"/></svg>`,
};
const HEART = [
  { k: 'H', en: 'Habitat', zh: '空間，順起來', kid: '讓大家住得好、玩得開心', n: 8, emoji: '🌳' },
  { k: 'E', en: 'Empower', zh: '機會，給出來', kid: '幫大家學新本領、追夢想', n: 6, emoji: '🚀' },
  { k: 'A', en: 'Accompany', zh: '陪伴，不孤單', kid: '從小朋友到爺爺奶奶都有人照顧', n: 7, emoji: '🤝' },
  { k: 'R', en: 'Resilience', zh: '韌性，有安心', kid: '預防生病和危險，城市撐得住', n: 5, emoji: '🛡️' },
  { k: 'T', en: 'Time', zh: '時間，省下來', kid: '每天多 30 分鐘陪家人', n: 5, emoji: '⏰' },
];

// ---------- helpers given to pages ----------
const h = {
  esc, yt, thumb, CAT, HEART, VIDEOS, V, sun, heroArt, doorIcon, fmtDate, UPDATED,
  src: (links) => `<p class="src">${links.map(([t, u]) => `<a href="${u}">${t}</a>`).join('、')}</p>`,
  more: (summary, inner) => `<details class="more"><summary>${summary}</summary><div>${inner}</div></details>`,
  flips: (qs) => `<div class="think-cards">${qs.map((q, i) => `<details class="flip"><summary><span class="bubble">💭</span><span>想一想 ${i + 1}<span class="hint">點一下，看看問題</span></span></summary><p>${q}</p></details>`).join('')}</div>`,
  vcard(id, o = {}) {
    const v = V[id];
    if (!v) throw new Error('video not in database: ' + id);
    const title = o.title || v.title;
    const len = v.min ? `${v.min} 分鐘` : '';
    return `<article class="vcard">
  <a class="thumb" href="${yt(id)}"><img src="${thumb(id)}" alt="" loading="lazy" width="320" height="180">${len ? `<span class="play">▶ ${len}</span>` : ''}</a>
  <div class="body">
    <h3><a href="${yt(id)}">${title}</a></h3>
    <span class="meta">${esc(v.channel)}｜${fmtDate(v)}</span>
    ${o.text ? `<p>${o.text}</p>` : ''}
    ${o.why ? `<p class="why">✨ ${o.why}</p>` : ''}
    ${o.caveat ? `<p class="caveat">⚠️ ${o.caveat}</p>` : ''}
    ${o.extra ? `<p class="caveat">${o.extra}</p>` : ''}
  </div>
</article>`;
  },
};

// ---------- layout ----------
const NAV = [
  { key: 'home', href: 'index.html', label: '首頁', ico: '🏠' },
  { key: 'kids', href: 'kids.html', label: '小朋友', ico: '🧒' },
  { key: 'parents', href: 'parents.html', label: '家長', ico: '👨‍👩‍👧' },
  { key: 'data', href: 'data.html', label: '完整資料', ico: '📚' },
];
function layout(p, body) {
  const cur = (n) => (n.key === p.section ? ' aria-current="page"' : '');
  const crumb = p.crumb ? `<div class="wrap crumb"><a href="index.html">首頁</a>${p.crumb.map(([t, u]) => ` › ${u ? `<a href="${u}">${t}</a>` : t}`).join('')}</div>` : '';
  return `<!doctype html>
<html lang="zh-Hant-TW">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover">
<title>${esc(p.title ? `${p.title}｜${SITE}` : `${SITE}--${SITE_SUB}`)}</title>
<meta name="description" content="${esc(p.desc)}">
<meta property="og:title" content="${esc(p.title || SITE)}">
<meta property="og:description" content="${esc(p.desc)}">
<meta name="theme-color" content="#fff8ec">
<link rel="icon" href="data:image/svg+xml,${encodeURIComponent(sun(64, false).replace(/\s+/g, ' '))}">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Noto+Sans+TC:wght@400;500;700;900&display=swap">
<link rel="stylesheet" href="assets/style.css?v=${CSS_V}">
</head>
<body>
<a class="sr-only" href="#main">跳到主要內容</a>
<header class="site-header">
  <div class="wrap">
    <a class="brand" href="index.html">${sun(40)}<span>${SITE}<small>${SITE_SUB}</small></span></a>
    <nav class="top-nav" aria-label="主選單">${NAV.map((n) => `<a href="${n.href}"${cur(n)}>${n.label}</a>`).join('')}</nav>
  </div>
</header>
${crumb}
<main id="main">
${body}
</main>
<footer class="site-footer">
  <div class="wrap">
    <nav aria-label="網站地圖">
      <a href="kids.html">HEART 繪本版</a><a href="family.html">全家一起看</a><a href="think.html">思辨題</a>
      <a href="heart.html">31 項政見</a><a href="videos.html">影音資料庫</a><a href="works.html">網站與文字作品</a><a href="sources.html">資料來源</a>
    </nav>
    <p>個人整理的資訊網站｜資料整理到 ${UPDATED}</p>
  </div>
</footer>
<nav class="tabbar" aria-label="快速切換">${NAV.map((n) => `<a href="${n.href}"${cur(n)}><span class="ico" aria-hidden="true">${n.ico}</span>${n.label}</a>`).join('')}</nav>
<script src="assets/site.js?v=${JS_V}" defer></script>
</body>
</html>
`;
}

// ---------- build ----------
const pageDir = path.join(__dirname, 'pages');
const order = ['index', 'kids', 'parents', 'think', 'family', 'data', 'heart', 'videos', 'works', 'sources'];
const pages = order.map((n) => require(path.join(pageDir, n + '.js')));
const built = {};
for (const p of pages) {
  if (p.file === 'sources.html') continue;
  built[p.file] = { p, body: p.body(h) };
}
// collect every external link for the source page
const links = [];
for (const { p, body } of Object.values(built)) {
  const seen = new Set();
  for (const m of body.matchAll(/<a href="(https?:\/\/[^"]+)"[^>]*>([\s\S]*?)<\/a>/g)) {
    const url = m[1]; if (seen.has(url) || /i\.ytimg\.com/.test(url)) continue;
    const text = m[2].replace(/<[^>]+>/g, '').trim();
    if (!text) continue; seen.add(url);
    links.push({ page: p.title || '首頁', file: p.file, url, text });
  }
}
h.links = links;
const src = pages.find((p) => p.file === 'sources.html');
built[src.file] = { p: src, body: src.body(h) };

for (const { p, body } of Object.values(built)) {
  fs.writeFileSync(path.join(ROOT, p.file), layout(p, body));
}
// keep old addresses working
const redirect = (to, label) => `<!doctype html><html lang="zh-Hant-TW"><head><meta charset="utf-8"><meta http-equiv="refresh" content="0; url=${to}"><link rel="canonical" href="${to}"><title>已搬家</title></head><body><p>這一頁已經搬到 <a href="${to}">${label}</a>。</p></body></html>\n`;
fs.writeFileSync(path.join(ROOT, 'issues.html'), redirect('parents.html#issues', '家長區：大家關注什麼'));
fs.writeFileSync(path.join(ROOT, 'appeal.html'), redirect('think.html', '思辨題'));
console.log('built', Object.keys(built).length, 'pages;', links.length, 'source links;', VIDEOS.length, 'videos');
