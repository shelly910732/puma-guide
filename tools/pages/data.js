module.exports = {
  file: 'data.html',
  title: '完整資料',
  desc: '沈伯洋完整資料區：HEART 31 項政見、影音資料庫、網站與文字作品、全站資料來源。',
  section: 'data',
  crumb: [['完整資料']],
  body: (h) => `
<section class="page-hero">
  <div class="wrap">
    <h1>📚 完整資料</h1>
    <p class="lead">給想深入了解的人。每一筆資料都附上來源連結，可以自己點進去查證。</p>
  </div>
</section>
<section class="section" style="padding-top:8px">
  <div class="wrap">
    <div class="grid grid-2">
      <a class="card" href="heart.html"><span class="emoji">❤️</span><h3>HEART 31 項政見完整版</h3><p>選舉公報 31 項政見，依五大主軸整理，附官網細節和數字不一致的地方。</p><span class="go">打開 →</span></a>
      <a class="card" href="videos.html"><span class="emoji">🎬</span><h3>影音資料庫（${h.VIDEOS.length} 筆）</h3><p>可以搜尋、依類型和年份篩選的訪談與影片清單。</p><span class="go">打開 →</span></a>
      <a class="card" href="works.html"><span class="emoji">📰</span><h3>網站與文字作品</h3><p>競選官網、洋流誌、順報、鏡文學專訪等。</p><span class="go">打開 →</span></a>
      <a class="card" href="sources.html"><span class="emoji">🔗</span><h3>資料來源總表</h3><p>本站引用的所有新聞、官網和影片連結，一次列出。</p><span class="go">打開 →</span></a>
    </div>
  </div>
</section>`,
};
