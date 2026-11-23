module.exports = {
  file: 'videos.html',
  title: '影音資料庫',
  desc: '沈伯洋訪談與影音資料庫：逐筆確認過的 YouTube 影片，可依生活、政策、演講活動、有趣片段等類型與年份篩選，也能搜尋關鍵字。',
  section: 'data',
  crumb: [['完整資料', 'data.html'], ['影音資料庫']],
  body: (h) => {
    const vs = h.VIDEOS;
    const count = (c) => vs.filter((v) => v.cat === c).length;
    const years = [...new Set(vs.map((v) => (v.date || '').slice(0, 4)).filter(Boolean))].sort().reverse();
    const yrLabel = (y) => (+y <= 2025 ? y : y);
    const cats = ['life', 'mixed', 'policy', 'event', 'fun', 'others'];
    const row = (v) => {
      const text = [v.title, v.channel, v.note, h.CAT[v.cat]].join(' ').toLowerCase();
      return `<li class="vrow" data-cat="${v.cat}" data-year="${(v.date || '').slice(0, 4)}" data-pick="${v.pick ? 1 : 0}" data-text="${h.esc(text)}">
  <a href="${h.yt(v.id)}" tabindex="-1" aria-hidden="true"><img src="${h.thumb(v.id)}" alt="" loading="lazy" width="168" height="94"></a>
  <div>
    <span class="t"><a href="${h.yt(v.id)}">${h.esc(v.title)}</a></span>
    <span class="m">${h.fmtDate(v)}｜${h.esc(v.channel)}${v.min ? `｜${v.min} 分鐘` : ''}</span><br>
    <span class="chip">${h.CAT[v.cat]}</span>${v.pick ? ' <span class="chip">⭐ 精選</span>' : ''}
    ${v.note ? `<span class="n">｜${h.esc(v.note)}</span>` : ''}
  </div>
</li>`;
    };
    return `
<section class="page-hero">
  <div class="wrap">
    <h1>🎬 影音資料庫</h1>
    <p class="lead">一共 <b>${vs.length} 筆</b>，每一筆都到 YouTube 確認過影片存在，標題和頻道照 YouTube 上的寫法。可以搜尋，也可以按類型、年份篩選。</p>
    <div class="stats" style="margin-bottom:8px">
      <div class="card stat"><span class="num">${vs.length}</span><span class="label">筆影片</span></div>
      <div class="card stat"><span class="num">${count('life') + count('mixed')}</span><span class="label">筆跟生活有關</span></div>
      <div class="card stat"><span class="num">${count('fun')}</span><span class="label">筆有趣片段</span></div>
    </div>
  </div>
</section>

<section class="section" style="padding-top:0" data-db>
  <div class="wrap">
    <div class="db-tools">
      <label class="sr-only" for="db-q">搜尋影片</label>
      <input id="db-q" type="search" placeholder="🔍 搜尋：例如 收養、王偉忠、都更、陀螺" autocomplete="off">
      <div class="chips" role="group" aria-label="類型">
        <button class="chip" type="button" data-cat-btn data-v="all" aria-pressed="true">全部</button>
        <button class="chip" type="button" data-cat-btn data-v="pick" aria-pressed="false">⭐ 精選</button>
        ${cats.map((c) => `<button class="chip" type="button" data-cat-btn data-v="${c}" aria-pressed="false">${h.CAT[c]}（${count(c)}）</button>`).join('')}
      </div>
      <div class="chips" role="group" aria-label="年份" style="margin-top:8px">
        <button class="chip" type="button" data-year-btn data-v="all" aria-pressed="true">所有年份</button>
        ${years.map((y) => `<button class="chip" type="button" data-year-btn data-v="${y}" aria-pressed="false">${yrLabel(y)}</button>`).join('')}
      </div>
    </div>
    <p class="db-count" data-db-count aria-live="polite">一共 ${vs.length} 筆</p>
    <ul class="vlist">
${vs.map(row).join('\n')}
    </ul>

    <div class="note" style="margin-top:24px">
      <strong>關於這份資料：</strong>
      <ul>
        <li>大部分清單來自網友「趴趴熊的沙龍」整理的<a href="https://vocus.cc/article/6ad8d562fd89780001e98adb">專訪清單</a>（作者標示更新中），再加上本站另外找到的影片。原清單有 2 支影片已經看不到（公辦政見會、電視辯論會的台視轉播），沒有列入。</li>
        <li>日期是 YouTube 上傳日（台灣時間）。寫「約」的，是依 YouTube 顯示的相對時間推算。</li>
        <li>「類型」是本站依標題和說明分的，不是看完全片的結果。「他人評論・新聞」是別人談他的節目或新聞片段，不是他本人受訪。</li>
        <li>節目立場不一樣：周玉蔻、鄭弘儀、八炯等節目一般被認為立場偏綠，趙少康、中天、中廣等偏藍。想公平比較，也可以找蔣萬安上類似節目的訪談。</li>
      </ul>
    </div>
  </div>
</section>`;
  },
};
