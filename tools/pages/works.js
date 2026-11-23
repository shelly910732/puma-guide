module.exports = {
  file: 'works.html',
  title: '網站與文字作品',
  desc: '沈伯洋的競選官網、洋流誌、順報、市長你給我聽好了、HEART 政策島、YouTube 頻道，以及鏡文學專訪〈走出暗黝森林〉。',
  section: 'data',
  crumb: [['完整資料', 'data.html'], ['網站與文字作品']],
  body: (h) => `
<section class="page-hero">
  <div class="wrap">
    <h1>📰 網站與文字作品</h1>
    <p class="lead">他的競選團隊做了很多有創意的刊物和網站。要知道：這些都是<b>競選文宣</b>，內容自然是對他有利的說法。</p>
    <div class="chips"><a class="chip" href="#join">他怎麼讓大家一起參與</a><a class="chip" href="#list">網站與刊物一覽</a><a class="chip" href="#mirror">鏡文學專訪</a></div>
  </div>
</section>

<section class="section alt" id="join">
  <div class="wrap">
    <div class="section-head">
      <p class="kicker">把舞台交給市民</p>
      <h2>🤝 他怎麼讓大家一起參與政治？</h2>
      <p class="lead">他用很多活動和作品，讓市民一起討論政治、認識台北，也了解他的想法。</p>
    </div>
    <div class="card" style="margin-bottom:16px;border-left:6px solid var(--e);border-radius:0 var(--radius) var(--radius) 0"><h3>💬 「不怕下流，只怕不流」</h3><p>有對手支持者在受訪時說「沈伯洋是下流」。他在網友貼文底下引用《道德經》的「<b>大國者下流</b>」回應：「水原本就往低處流，並且流到每一個巷弄，傾聽每一個人的聲音。」</p><p class="caveat">《道德經》第 61 章的「大國者下流」，意思是大國要像江河的下游一樣謙虛處下，才能匯聚天下。</p>${h.src([['自由時報：沈引經據典高EQ回應（2026-10-27）', 'https://news.ltn.com.tw/news/politics/breakingnews/5619682']])}</div>
    <div class="grid grid-3">
      <div class="card"><span class="emoji">📗</span><h3>寫給市民的空白小書<br><span class="name" style="font-size:1rem">洋流誌</span></h3><p>5 本由作家、漫畫家創作的小誌；新聞報導說紙本另有一本<b>全白的第 6 本</b>，留給市民寫下自己想要的台北。</p>${h.src([['自由時報報導', 'https://news.ltn.com.tw/news/politics/paper/1776193']])}</div>
      <div class="card"><span class="emoji">💬</span><h3>用 50 個字說出想法<br><span class="name" style="font-size:1rem">市長，你給我聽好了</span></h3><p>市民用 LINE 留言，意見會變成可愛動物「排隊上台」說話。</p>${h.src([['官網頁面', 'https://puma.taipei/taipeispeaksup']])}</div>
      <div class="card"><span class="emoji">🎤</span><h3>大家一起寫歌<br><span class="name" style="font-size:1rem">《台北順起來》市民共創</span></h3><p>競選歌曲公開後向市民徵件，一共收到 <b>293 首</b>；五位導師各選一首，再和原作者一起重新編曲、錄製。</p>${h.src([['官網：共創歌曲', 'https://puma.taipei/songs'], ['自由時報：廣邀全民共創', 'https://news.ltn.com.tw/news/politics/breakingnews/5576881']])}</div>
      <div class="card"><span class="emoji">🏝️</span><h3>像玩遊戲一樣看政見<br><span class="name" style="font-size:1rem">HEART 政策島</span></h3><p>把政見做成互動地圖，一格一格點開來看。</p>${h.src([['官網頁面', 'https://puma.taipei/heart-island']])}</div>
      <div class="card"><span class="emoji">🎬</span><h3>音樂和闖關的嘉年華<br><span class="name" style="font-size:1rem">洋流祭</span></h3><p>11 月 14 日在二二八和平紀念公園，兩座舞台輪流演出，還有政策島闖關集章。</p>${h.src([['官網：洋流祭', 'https://puma.taipei/oshen']])}</div>
      <div class="card"><span class="emoji">🛵</span><h3>走遍台北每一區<br><span class="name" style="font-size:1rem">台北大洋流</span></h3><p>10 月 11 日到 11 月 15 日，一共 6 場「環台北掃街」，每場跑一到兩個行政區。</p>${h.src([['官網：台北大洋流', 'https://puma.taipei/taipei-current']])}</div>
      <div class="card"><span class="emoji">🏃</span><h3>市民當主角<br><span class="name" style="font-size:1rem">城市行動展「市民動起來！」</span></h3><p>11 月 22 日串聯 6 個站點，邀請市民打造道具、換裝上街。他在臉書說，這次是「把舞台交給市民」。</p>${h.src([['NOWnews：活動規劃', 'https://www.nownews.com/news/6893123'], ['他的臉書粉專', 'https://www.facebook.com/puma.taipei']])}</div>
      <div class="card"><span class="emoji">🛡️</span><h3>活動很熱鬧，也要很安全</h3><p>官網的洋流祭場地圖標示了 2 個醫護站和服務台。根據新聞報導，他在活動前常提醒「<b>安全第一</b>」：水路活動安排民間救難隊待命、加強河岸照明；雨天活動禁止撐傘；包船因公文取消時，他說「守法最重要、安全第一」。</p>${h.src([['官網：洋流祭場地圖', 'https://puma.taipei/oshen'], ['自由時報：關渡宮最終場', 'https://news.ltn.com.tw/news/politics/breakingnews/5639674'], ['自由時報：守法最重要、安全第一', 'https://news.ltn.com.tw/news/politics/breakingnews/5640688']])}</div>
      <div class="card"><span class="emoji">🌳</span><h3>介紹台北的好</h3><p>他常在影片和政見裡介紹台北的建築、市場和歷史，例如「<b>文化徑</b>」串起剝皮寮、龍山寺、大稻埕碼頭、霞海城隍廟。他自己在建中當過<b>鄉土文化研究社</b>社長，還邀請作家劉克襄帶社員踏查台北。</p>${h.src([['鏡週刊：高中的鄉土文化研究社', 'https://www.mirrormedia.mg/story/20260907cul006'], ['官網：文化徑×山林徑', 'https://puma.taipei/policies/%E5%8F%B0%E5%8C%97%E6%96%87%E5%8C%96%E5%BE%91%C3%97%E5%B1%B1%E6%9E%97%E5%BE%91'], ['文化徑短片', h.yt('XbSM61Deh5Y')], ['環南市場短片', h.yt('Hr3pDBOKmwo')]])}</div>
      <div class="card"><span class="emoji">❤️</span><h3>每個族群都是台北人</h3><p><b>原住民族政策</b>：增設文化健康站、原民文化交流基地，返鄉交通補助一年兩次。<b>新住民政策</b>：1999 增加越南語、印尼語等外語服務，設新住民創業諮詢窗口。文化徑也會串起原住民族、客家和新住民的故事。</p>${h.src([['官網：原住民族政策', 'https://puma.taipei/policies/%E5%8E%9F%E4%BD%8F%E6%B0%91%E6%97%8F%E6%94%BF%E7%AD%96'], ['官網：新住民政策', 'https://puma.taipei/policies/%E6%96%B0%E4%BD%8F%E6%B0%91%E6%94%BF%E7%AD%96'], ['內湖南港短片', h.yt('olDDRZLtit8')]])}</div>
      <div class="card"><span class="emoji">📖</span><h3>把台北的歷史找回來<br><span class="name" style="font-size:1rem">重建明治橋</span></h3><p>明治橋（後來叫中山橋）2002 年拆除後，石材放了 20 多年還沒重組。根據遠見《城市學》專訪，他提出要重建（目前官網政策頁沒有列出這一項），並說不一定要放回原地，例如<b>新生公園</b>也是選項，還能變成自行車道的一部分。</p>${h.src([['遠見《城市學》專訪', 'https://city.gvm.com.tw/article/133307'], ['相關影片', h.yt('0ROGbdBQsSA')]])}</div>
    </div>
  </div>
</section>
<section class="section" id="list">
  <div class="wrap">
    <div class="grid grid-2">
      <div class="card"><span class="emoji">🌐</span><h3>它在哪裡看得到所有政見？<br><span class="name" style="font-size:1rem">競選官網</span></h3>
        <p>學經歷、HEART 政策、選舉公報、闢謠專區、每日受訪影片、文宣下載都在這裡。</p>
        ${h.src([['puma.taipei', 'https://puma.taipei/']])}</div>
      <div class="card"><span class="emoji">📗</span><h3>詩人和漫畫家寫的市政小書？<br><span class="name" style="font-size:1rem">洋流誌</span></h3>
        <p><b>5 本文學小誌</b>，由詩人、作家、漫畫家、插畫家創作，主題是市政治理與城市外交、交通運輸、育兒、城市再造、勞動與經濟。是創作，不是政策說明書。</p>
        ${h.more('看更多', '<p>新聞報導說紙本另有第 6 本全白，留給市民自己寫；曾在 20 家店限量發放，不到 2 小時就送完。</p>')}
        ${h.src([['官網頁面', 'https://puma.taipei/soonmook'], ['自由時報報導', 'https://news.ltn.com.tw/news/politics/paper/1776193']])}</div>
      <div class="card"><span class="emoji">🗞️</span><h3>在捷運站發的報紙？<br><span class="name" style="font-size:1rem">順報</span></h3>
        <p>紙本競選刊物，一共 <b>4 期</b>：</p>
        <ol>
          <li>10/06 創刊號：跑步、散步、爬山</li>
          <li>10/22 帶孩子玩台北：親子同行卡、腸病毒疫苗、家長版 1999</li>
          <li>11/10 人生中場的支持筆記：轉職創業支持、心理諮商、皮蛇疫苗</li>
          <li>11/20 初級大人：AI 教育錢包、城市青年基金、文化幣，附寵物食譜和小遊戲</li>
        </ol>
        ${h.src([['官網頁面', 'https://puma.taipei/soon-daily'], ['中央社報導', 'https://www.cna.com.tw/news/aloc/202611200112.aspx'], ['台視新聞影片', h.yt('fHjI-kfOycg')]])}</div>
      <div class="card"><span class="emoji">🐾</span><h3>市民的意見變成小動物排隊？<br><span class="name" style="font-size:1rem">市長，你給我聽好了</span></h3>
        <p>用 LINE 收集市民意見的平台，市民留言會變成可愛動物排隊發言。</p>
        ${h.src([['官網頁面', 'https://puma.taipei/taipeispeaksup'], ['中央社報導', 'https://cna.com.tw/news/aipl/202609090125.aspx']])}</div>
      <div class="card"><span class="emoji">🏝️</span><h3>政見做成遊戲地圖？<br><span class="name" style="font-size:1rem">HEART 政策島</span></h3>
        <p>把政見做成像遊戲一樣的互動頁面。</p>
        ${h.src([['官網頁面', 'https://puma.taipei/heart-island']])}</div>
      <div class="card"><span class="emoji">▶️</span><h3>他自己的頻道<br><span class="name" style="font-size:1rem">YouTube「沈伯洋Puma」</span></h3>
        <p>例如〈那些年，我在南陽街〉（2026-06-08），聊他當補習班老師的日子。</p>
        ${h.src([['看影片', h.yt('0jOSng47e4I')]])}</div>
    </div>
  </div>
</section>
<section class="section alt" id="mirror">
  <div class="wrap narrow">
    <div class="section-head"><p class="kicker">鏡文學專訪</p><h2>📖〈走出暗黝森林──沈伯洋談閱讀、陪伴與文化〉</h2></div>
    <div class="card">
      <ul>
        <li>小時候大量看課外書，少年時最想當<b>小說家</b>。</li>
        <li>讀法律系後幾乎沒時間看課外書，只有<b>漫畫</b>一直沒放下。</li>
        <li>最喜歡的角色是《新世紀福音戰士》的<b>碇真嗣</b>。</li>
        <li>用 AI 不能只叫它「幫我摘要」，自己要大量閱讀，才問得出好問題。</li>
        <li>最後一篇談他的文化政策。</li>
      </ul>
      <p><span class="chip">文字版</span> <a href="https://www.mirrorfiction.com/news/1433">鏡文學原文</a>、<a href="https://www.mirrormedia.mg/story/20260907cul006">鏡週刊轉載</a>（2026-09-07，另分成 5 篇小專訪）</p>
      <p><span class="chip">影片版</span> ②〈<a href="${h.yt('dmLF1wjt1CU')}">從叛逆小孩到能獨立思考的留美博士</a>〉2026-09-08、③〈<a href="${h.yt('1OvkV6SPS8w')}">從電玩到陪伴，當文化成為一種生活方式</a>〉2026-09-09；①（談《蜘蛛人》、《新世紀福音戰士》）目前沒有找到正確連結。</p>
      <div class="note"><strong>要知道的爭議：</strong>有人批評鏡文學拿政府補助卻連刊 5 篇沈伯洋專訪。沈伯洋回應，這是談閱讀和文化，跟補助是兩回事；鏡文學表示也會邀蔣萬安受訪。（<a href="https://www.worldjournal.com/wj/story/121218/9743292">世界日報報導</a>）</div>
    </div>
  </div>
</section>`,
};
