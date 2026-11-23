module.exports = {
  file: 'index.html',
  title: '',
  desc: '給家長和小朋友的台北市長候選人沈伯洋整理：他是誰、HEART 五大政見、親子想一想、適合全家看的影片，以及完整資料。',
  section: 'home',
  body: (h) => `
<section class="story no-js" data-story aria-label="60 秒認識沈伯洋">
  <div class="wrap">
    <div class="story-frame">
      <div class="story-bars" aria-hidden="true">${'<i><b></b></i>'.repeat(7)}</div>
      <div class="story-track">
        <article class="slide s-intro on">
          <div class="rise" style="width:150px">${h.heroArt}</div>
          <span class="eyebrow pop">2026 台北市長選舉｜親子版</span>
          <h1 class="pop">台北的陽光</h1>
          <p class="pop tagline">一個致力於<b>民胞物與</b>、<b>大同世界</b>的台北市長候選人</p>
          <p class="pop"><b>60 秒認識 3 號 沈伯洋</b>（大家叫他 Puma）</p>
          <div class="facets5 pop"><span>📚 學識</span><span>🧭 經歷</span><span>🦁 膽識</span><span>❤️ 愛</span><span>😄 情商</span></div>
        </article>
        <article class="slide s-learn">
          <span class="big-emoji pop">📚</span><span class="facet pop">學識</span>
          <h2 class="pop">愛看書的五分埔少年</h2>
          <p class="pop">小時候最想當小說家。後來讀台大法律系，再去美國讀<b>犯罪學博士</b>。</p>
          <a class="clip pop" href="${h.yt('dmLF1wjt1CU')}"><img src="${h.thumb('dmLF1wjt1CU')}" alt="" loading="lazy"><span>從叛逆小孩到留美博士<small>鏡文學｜5 分鐘</small></span></a>
        </article>
        <article class="slide s-career">
          <span class="big-emoji pop">🧭</span><span class="facet pop">經歷</span>
          <h2 class="pop">從「撲馬老師」到立委</h2>
          <p class="pop">當過補習班老師、大學教授，研究中國的假訊息，創辦「黑熊學院」，2024 年當上立委。</p>
          <a class="clip pop" href="${h.yt('0jOSng47e4I')}"><img src="${h.thumb('0jOSng47e4I')}" alt="" loading="lazy"><span>那些年，我在南陽街<small>沈伯洋Puma｜8 分鐘</small></span></a>
        </article>
        <article class="slide s-brave">
          <span class="big-emoji pop">🦁</span><span class="facet pop">膽識</span>
          <h2 class="pop">被中國立案偵查，也不退縮</h2>
          <p class="pop">2025 年，中國重慶公安說要「立案偵查」他。他的回應是：「台灣人沒在怕。」</p>
          <p class="pop src"><a href="https://www.cna.com.tw/news/aipl/202510280086.aspx">中央社報導</a></p>
        </article>
        <article class="slide s-love">
          <span class="big-emoji pop">❤️</span><span class="facet pop">愛</span>
          <h2 class="pop">透過收養，成為爸爸</h2>
          <p class="pop">大學時輔導少年，就決定以後要收養。現在有個女兒叫「小麻糬」，包包裡還帶著過世媽媽的絲巾。</p>
          <a class="clip pop" href="${h.yt('YGkPslUR84c')}"><img src="${h.thumb('YGkPslUR84c')}" alt="" loading="lazy"><span>孩子來的那天還是慌了<small>親子天下｜17 分鐘</small></span></a>
        </article>
        <article class="slide s-eq">
          <span class="big-emoji pop">😄</span><span class="facet pop">情商</span>
          <h2 class="pop">被罵也能笑著回</h2>
          <p class="pop">愛動漫、會扮勇者欣梅爾、玩光劍。被罵「人渣」時，他笑說：「可能鬍子沒刮，渣渣的。」</p>
          <a class="clip pop" href="${h.yt('yCQKZIZ9D2g')}"><img src="${h.thumb('yCQKZIZ9D2g')}" alt="" loading="lazy"><span>被罵人渣的神回覆<small>鏡新聞｜34 秒</small></span></a>
        </article>
        <article class="slide s-heart">
          <span class="big-emoji pop">☀️</span>
          <h2 class="pop">他想為台北做的 31 件事</h2>
          <p class="pop">分成五類，字母拼起來是 <b>HEART</b>（心）。</p>
          <div class="facets5 pop">${h.HEART.map((x) => `<span>${x.k}｜${x.zh}</span>`).join('')}</div>
          <div class="btn-row pop" style="margin-top:6px"><a class="btn" href="#heart">開始認識他 ↓</a><a class="btn ghost" href="kids.html">我是小朋友</a></div>
        </article>
      </div>
      <div class="story-ctrl">
        <button type="button" data-prev aria-label="上一張">${h.ic('prev')}</button>
        <button type="button" data-play aria-pressed="false"><span data-when="on">${h.ic('pause')} 暫停</span><span data-when="off" hidden>${h.ic('tri')} 播放</span></button>
        <button type="button" class="next" data-next aria-label="下一張">${h.ic('next')}</button>
      </div>
    </div>
    <a class="story-skip" href="#heart">跳過，直接看網站 ↓</a>
    <p class="story-note">五個關鍵字的靈感來自網友創作的應援歌<a href="${h.yt('obUSoRRy2As')}">《台北值得沈伯洋》</a>（非官方）。</p>
  </div>
</section>

<section class="section" id="why">
  <div class="wrap">
    <div class="section-head">
      <p class="kicker">網站名稱的由來</p>
      <h2>☀️ 為什麼叫「台北的陽光」？</h2>
      <p class="lead">因為他想帶來的，是一場溫暖、正向、照亮每個人的選舉。</p>
    </div>
    <div class="grid grid-3">
      <div class="card"><span class="emoji">🛡️</span><h3>堅持正面選舉</h3><p>參選到投票一共 199 天，他說自己「<b>始終堅持正面選舉、討論政策</b>」，也要讓市民有參與感。辯論會上他強調不做負面攻擊；有高中生拿著劃掉高虹安名字的獎狀找他簽名、引發網路爭論時，他也說「不要攻擊學生」。</p>${h.src([['自由時報：城市行動展致詞（2026-11-22）', 'https://news.ltn.com.tw/news/politics/breakingnews/5649814'], ['辯論會結辯（影片）', h.yt('CoYcmvFHI90')], ['中央社：不要攻擊學生', 'https://cna.com.tw/news/aloc/202608240046.aspx']])}</div>
      <div class="card"><span class="emoji">⭐</span><h3>每個人都是星星</h3><p>11 月 20 日在台中，他引用泰戈爾的詩：「<b>不要因為失去太陽而哭泣，因為會錯過夜晚的星星。</b>」他說，每一個人都是星星，光芒也許微弱，卻能照亮身旁的人；大家加起來，就是照亮城市未來的光。</p>${h.src([['自由時報報導', 'https://news.ltn.com.tw/news/politics/breakingnews/5649814'], ['城市行動展致詞（影片）', h.yt('U_7REVl4zpY')]])}</div>
      <div class="card"><span class="emoji">🎤</span><h3>把舞台交給市民</h3><p>選前最後一個週末，他沒有辦大型造勢，而是辦「<b>城市行動展</b>」，主辦單位估計超過 10 萬人參加。他說這是「市民主義」：不是他去掃街，而是讓市民來掃街，讓大家看見台北的潛力和想要的未來。</p>${h.src([['自由時報報導', 'https://news.ltn.com.tw/news/politics/breakingnews/5649814'], ['他的臉書粉專', 'https://www.facebook.com/puma.taipei']])}</div>
    </div>
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
      <h2>🗳️ <span data-vote-title>2026 年 11 月 28 日（六）投票</span></h2>
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
