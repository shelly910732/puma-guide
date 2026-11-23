module.exports = {
  file: 'index.html',
  title: '',
  desc: '給家長和小朋友的台北市長候選人沈伯洋整理：他是誰、HEART 五大政見、親子想一想、適合全家看的影片，以及完整資料。',
  section: 'home',
  body: (h) => `
<section class="hero">
  <div class="wrap">
    <div>
      <span class="eyebrow">2026 台北市長選舉｜親子版</span>
      <h1>台北的陽光</h1>
      <p class="sub">認識市長候選人沈伯洋</p>
      <p><b>沈伯洋</b>（大家叫他 Puma），民進黨提名的台北市長候選人，<b>3 號</b>。他當過大學老師，專門研究中國的假訊息；他也是一位透過收養成為爸爸的人。</p>
      <div class="btn-row"><a class="btn" href="#heart">他想做什麼？</a><a class="btn ghost" href="#doors">我想看更多</a></div>
    </div>
    <div class="art">${h.heroArt}</div>
  </div>
</section>

<section class="section" id="heart">
  <div class="wrap">
    <div class="section-head">
      <p class="kicker">① 他想為台北做什麼？</p>
      <h2>一顆「心」，五個願望</h2>
      <p class="lead">HEART 是英文的「心」。他的 <b>31 項政見</b>分成五類，五個字母剛好拼成 HEART。點一下看看：</p>
    </div>
    <div class="grid grid-5">
      ${h.HEART.map((x) => `<a class="card heart-card L-${x.k}" href="kids.html#${x.k}"><span class="letter">${x.k}</span><h3>${x.emoji} ${x.zh}</h3><p>${x.kid}</p><span class="go">${x.n} 項 →</span></a>`).join('')}
    </div>
  </div>
</section>

<section class="section alt">
  <div class="wrap narrow">
    <div class="section-head">
      <p class="kicker">② 先來想一想</p>
      <h2>如果你是市長，你會先做哪一件事？</h2>
      <p class="lead">網站裡每個政見後面都有「想一想」卡片，可以和孩子邊看邊聊。先試一張：</p>
    </div>
    ${h.flips(['沈伯洋想在台北蓋 <b>200 座口袋公園</b>（政策名稱叫「<b>都市微森林</b>」）。你家附近有沒有空地？如果把它變成小公園，你會放什麼進去？'])}
    <div class="btn-row"><a class="btn ghost" href="kids.html">看全部想一想 →</a></div>
  </div>
</section>

<section class="section">
  <div class="wrap">
    <div class="section-head">
      <p class="kicker">③ 先看這 3 支</p>
      <h2>他是怎麼樣的人？看影片最快</h2>
      <p class="lead">都是跟政見無關、適合全家一起看的節目。</p>
    </div>
    <div class="vgrid">
      ${h.vcard('9zRsNOYZ7U4', { title: '第一次上綜藝節目《11點熱吵店》', why: '包包開箱時翻出過世媽媽的絲巾，很多人看了很感動。' })}
      ${h.vcard('FoDPU1nQWYQ', { title: '和太太一起下廚《美鳳有約》', why: '夫妻一起做家常菜，輕鬆又溫馨。' })}
      ${h.vcard('ULWIruQR-Lc', { title: '王偉忠《欸！我說到哪裡了？》', why: '兩個世代邊聊邊鬥嘴，長輩看了也親切。' })}
    </div>
    <div class="btn-row"><a class="btn ghost" href="family.html">更多全家一起看的影片 →</a></div>
  </div>
</section>

<section class="section alt">
  <div class="wrap narrow">
    <div class="section-head"><p class="kicker">④ 投票日</p></div>
    <div class="vote" data-vote>
      <h2 data-vote-title>🗳️ 2026 年 11 月 28 日（六）投票</h2>
      <p class="big" data-vote-big>上午 8 點到下午 4 點</p>
      <ul data-vote-list>
        <li>投票時間：<b>上午 8 點到下午 4 點</b></li>
        <li>要帶：<b>國民身分證、印章</b>（也可以簽名或按指印）；投票通知單可以幫你找到投票所</li>
        <li>沈伯洋是 <b>3 號</b>，台北市長一共 6 位候選人</li>
        <li>詳細規定以<a href="https://www.cec.gov.tw/">中央選舉委員會</a>公告為準</li>
      </ul>
    </div>
  </div>
</section>

<section class="section" id="doors">
  <div class="wrap">
    <div class="section-head">
      <p class="kicker">⑤ 想知道更多？</p>
      <h2>選一個適合你的入口</h2>
    </div>
    <div class="grid grid-3">
      <a class="card door" href="kids.html">${h.doorIcon.kids}<h3>我是小朋友</h3><p>用繪本的方式看 HEART 政見，還有他的小故事和有趣影片。</p><span class="go">出發 →</span></a>
      <a class="card door" href="parents.html">${h.doorIcon.parents}<h3>我是家長</h3><p>5 分鐘看懂他、怎麼跟孩子聊選舉、正反意見的思辨題。</p><span class="go">出發 →</span></a>
      <a class="card door" href="data.html">${h.doorIcon.data}<h3>我想看完整資料</h3><p>31 項政見完整版、${h.VIDEOS.length} 筆影音資料庫、文字作品和所有資料來源。</p><span class="go">出發 →</span></a>
    </div>
  </div>
</section>`,
};
