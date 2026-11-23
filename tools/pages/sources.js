module.exports = {
  file: 'sources.html',
  title: '資料來源總表',
  desc: '本站引用的所有新聞、官網與影片連結總表，依頁面分類。',
  section: 'data',
  crumb: [['完整資料', 'data.html'], ['資料來源總表']],
  body: (h) => {
    // h.links is collected automatically from every other page at build time
    const vids = h.links.filter((l) => /youtube\.com|youtu\.be/.test(l.url));
    const docs = h.links.filter((l) => !/youtube\.com|youtu\.be/.test(l.url));
    const uniq = (arr) => { const s = new Set(); return arr.filter((l) => (s.has(l.url) ? false : s.add(l.url))); };
    const byPage = {};
    for (const l of uniq(docs)) (byPage[l.page] = byPage[l.page] || { file: l.file, items: [] }).items.push(l);
    const host = (u) => new URL(u).hostname.replace(/^www\./, '');
    return `
<section class="page-hero">
  <div class="wrap">
    <h1><span class="ico-link" aria-hidden="true"></span> 資料來源總表</h1>
    <p class="lead">本站每一頁引用的新聞、官網連結都列在這裡（每次更新網站時自動彙整）。影片另外整理在<a href="videos.html">影音資料庫</a>（${h.VIDEOS.length} 筆）。</p>
    <div class="stats">
      <div class="card stat"><span class="num">${uniq(docs).length}</span><span class="label">筆新聞與官網連結</span></div>
      <div class="card stat"><span class="num">${h.VIDEOS.length}</span><span class="label">筆影片（資料庫）</span></div>
      <div class="card stat"><span class="num">${new Set(uniq(docs).map((l) => host(l.url))).size}</span><span class="label">個不同來源網站</span></div>
    </div>
  </div>
</section>
<section class="section">
  <div class="wrap">
    ${Object.entries(byPage).map(([page, g]) => `<div class="card" style="margin-bottom:16px">
      <h2 style="font-size:1.2rem"><a href="${g.file}">${page}</a>（${g.items.length}）</h2>
      <ul class="srclist">${g.items.map((l) => `<li><a href="${l.url}">${h.esc(l.text)}</a> <span class="meta" style="color:var(--muted);font-size:.82rem">${host(l.url)}</span></li>`).join('')}</ul>
    </div>`).join('')}
    ${h.more(`頁面中引用的影片（${uniq(vids).length} 支）`, `<ul class="srclist">${uniq(vids).map((l) => `<li><a href="${l.url}">${h.esc(l.text)}</a></li>`).join('')}</ul>`)}
  </div>
</section>`;
  },
};
