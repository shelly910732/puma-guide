module.exports = {
  file: 'parents.html',
  title: '家長區',
  desc: '5 分鐘看懂台北市長候選人沈伯洋：參選身分、大家關注的議題、年輕人為什麼喜歡他，以及怎麼跟孩子聊選舉。',
  section: 'parents',
  crumb: [['家長區']],
  body: (h) => `
<section class="page-hero">
  <div class="wrap">
    <h1>👨‍👩‍👧 家長區：5 分鐘看懂他</h1>
    <p class="lead">先掌握重點，再決定要不要往下看。每一段都附上資料來源。</p>
  </div>
</section>

<section class="section" id="who">
  <div class="wrap">
    <div class="section-head"><p class="kicker">① 參選身分</p><h2>他用什麼身分參選？</h2></div>
    <div class="grid grid-5" style="margin-bottom:20px">
      <div class="card stat"><span class="num">3<span class="unit"> 號</span></span><span class="label">選票上的號次</span></div>
      <div class="card stat"><span class="num">6<span class="unit"> 人</span></span><span class="label">台北市長參選人</span></div>
      <div class="card stat"><span class="num">11/28</span><span class="label">投票日（六）</span></div>
      <div class="card stat"><span class="num">31<span class="unit"> 項</span></span><span class="label">選舉公報政見</span></div>
      <div class="card stat"><span class="num">5/13</span><span class="label">民進黨徵召參選</span></div>
    </div>
    <div class="table-wrap"><table>
      <tr><th>政黨</th><td>民進黨。2026 年 5 月 13 日中執會「<b>徵召</b>」他參選，也就是黨主動請他出來選。</td></tr>
      <tr><th>之前的身分</th><td>民進黨<b>不分區立委</b>（2024 年起）。更早是<b>台北大學法律系副教授</b>，研究中國的假訊息和統戰，也創辦推廣民防教育的「<b>黑熊學院</b>」。</td></tr>
      <tr><th>主要對手</th><td>爭取連任的現任市長、國民黨的<b>蔣萬安</b>（5 號）</td></tr>
      <tr><th>投票時間</th><td>2026 年 11 月 28 日（六）上午 8 點到下午 4 點</td></tr>
    </table></div>
    <div class="note"><strong>民調怎麼看？</strong>11 月各家民調差很多，有的顯示沈伯洋領先，也有的顯示蔣萬安領先。建議多看幾家，不要只看一份。</div>
    ${h.src([['聯合新聞網：民進黨拍板沈伯洋參選', 'https://udn.com/news/story/124652/9499591'], ['自由時報：中執會徵召', 'https://news.ltn.com.tw/news/politics/breakingnews/5435755'], ['中央社：6 人參選台北市長', 'https://cna.com.tw/news/aipl/202609040292.aspx'], ['公視：號次抽籤', 'https://news.pts.org.tw/article/801606'], ['ETtoday 民調', 'https://www.ettoday.net/news/20261102/3264730.htm'], ['三立：新台灣國策智庫民調', 'https://www.setn.com/news/1939195'], ['東森：鋒燦傳媒民調', 'https://news.ebc.net.tw/news/politics/580909']])}
  </div>
</section>

<section class="section alt" id="issues">
  <div class="wrap">
    <div class="section-head"><p class="kicker">② 大家關注什麼</p><h2>最常被討論的 3 件事</h2></div>
    <div class="grid grid-3">
      <div class="card">
        <span class="emoji">❤️</span>
        <h3>他的政見：HEART 五大主軸</h3>
        <p>選舉公報標題是「<b>有心・用心・台北順起來</b>」，一共 31 項政見。最常被討論的有<b>城市青年基金</b>（18–22 歲每月幫存 1,500 元）、<b>親子同行卡</b>（0–18 歲每月 600 點）、<b>無限都更</b>、<b>週週有臨托</b>。</p>
        <a class="go" href="heart.html">看 31 項完整版 →</a>
      </div>
      <div class="card">
        <span class="emoji">🛡️</span>
        <h3>他的老本行：中國的影響力和假訊息</h3>
        <p>他原本研究中國怎麼用假訊息影響台灣。2025 年 10 月，中國重慶公安局宣布以「分裂國家罪」對他<b>立案偵查</b>，讓他知名度大增；他的回應是「台灣人沒在怕」。</p>
        ${h.src([['中央社：重慶公安立案偵查', 'https://www.cna.com.tw/news/acn/202510280065.aspx'], ['中央社：沈伯洋回應', 'https://www.cna.com.tw/news/aipl/202510280086.aspx'], ['風傳媒分析', 'https://www.storm.mg/article/11076882']])}
      </div>
      <div class="card">
        <span class="emoji">📱</span>
        <h3>網路上的「洋流」</h3>
        <p>他的 Threads 到 10 月底累積超過 <b>1 億次瀏覽</b>，常用動漫和迷因跟年輕人互動，例如扮成勇者欣梅爾、引用《火影忍者》台詞。網路上也流行模仿他講話方式的「伯洋體」。</p>
        ${h.src([['四季線上：Threads 衝破 1 億', 'https://www.4gtv.tv/article/2026110111000012']])}
      </div>
    </div>
  </div>
</section>

<section class="section" id="young">
  <div class="wrap">
    <div class="section-head"><p class="kicker">③ 支持者怎麼說</p><h2>為什麼很多年輕人喜歡他？</h2></div>
    <div class="grid grid-2" style="margin-bottom:16px">
      <div class="card stat"><span class="num">54% <span class="unit">vs</span> 33%</span><span class="label">20–29 歲：沈伯洋 vs 蔣萬安（TVBS 民調）</span></div>
      <div class="card stat"><span class="num">58% <span class="unit">vs</span> 37%</span><span class="label">30–39 歲：沈伯洋 vs 蔣萬安（TVBS 民調）</span></div>
    </div>
    <div class="grid grid-2">
      <div class="card"><h3>💬 很會用網路溝通</h3><p>講話口語、敢自嘲，又懂動漫和迷因，年輕人覺得他「跟我們同一國」。</p></div>
      <div class="card"><h3>🎒 政見照顧到年輕人</h3><p><b>城市青年基金</b>、<b>青年 AI 錢包</b>、<b>青年宅</b>、YouBike 尖峰免費，都是年輕人生活中用得到的。</p></div>
      <div class="card"><h3>💪 形象鮮明</h3><p>被中國立案偵查還不退縮，在重視台灣主體性的人眼中，他是有骨氣的人。</p></div>
      <div class="card"><h3>👨‍👧 人生故事</h3><p>他透過收養成為父親，常談家庭和孩子，讓人覺得有人情味。</p></div>
      <div class="card"><h3>🎤 讓大家一起參與</h3><p>空白的洋流誌、市民共創歌曲、政策島、洋流祭、城市行動展……他用很多活動讓市民一起討論政治、認識台北。</p><a class="go" href="works.html#join">看 11 種參與方式 →</a></div>
      <div class="card"><h3>🤝 有團隊精神</h3><p>他把民進黨的議員候選人當成「<b>台北隊</b>」一起作戰：帶著議員一起站台，在自己的頻道為議員一位一位拍介紹影片；也到<b>台中、新竹</b>幫其他縣市的候選人車掃、助選。2023 年吳沛憶選立委時，他一口答應幫忙輔選，說這是「不分區該為團隊做的」。</p>${h.src([['聯合新聞網：議員稱他「台北隊長」', 'https://udn.com/news/story/124652/9500624'], ['ETtoday：吳沛憶談他幫忙輔選', 'https://www.ettoday.net/news/20260515/3166173.htm'], ['他為議員拍的影片（例）', h.yt('oGUlmV96Z3w')], ['台中車掃（影片）', h.yt('yUjQtotkBCs')], ['新竹助選（影片）', h.yt('heXi-qbEraI')]])}</div>
    </div>
    <div class="note"><strong>也要知道：</strong>年輕人並不是一面倒，也有人分享自己的孩子和同學不支持他。外界的批評和他的回應，整理在「<a href="think.html">思辨題</a>」。</div>
    ${h.src([['Yahoo 新聞：TVBS 民調年輕族群', 'https://tw.news.yahoo.com/tvbs%E6%B0%91%E8%AA%BF-%E5%B9%B4%E8%BC%95%E4%BA%BA%E6%AF%94%E8%BC%83%E5%96%9C%E6%AD%A1%E6%B2%88%E4%BC%AF%E6%B4%8B-20-39%E6%AD%B2%E6%94%AF%E6%8C%81%E5%BA%A6%E8%B4%8F%E8%94%A3%E8%90%AC%E5%AE%8921-091513038.html'], ['Yahoo 新聞：留學兒子的不同看法', 'https://tw.news.yahoo.com/%E4%BB%A5%E7%82%BA%E5%B9%B4%E8%BC%95%E4%BA%BA%E6%8C%BA%E6%B2%88%E4%BC%AF%E6%B4%8B-%E7%95%99%E5%AD%B8%E5%85%92-%E5%8F%A5-%E6%AD%A3%E5%B8%B8%E4%BA%BA%E9%83%BD%E4%B8%8D%E6%9C%83%E6%8A%95-%E5%AA%BD%E5%82%BB%E7%9C%BC-004345150.html']])}
  </div>
</section>

<section class="section alt" id="talk">
  <div class="wrap narrow">
    <div class="section-head"><p class="kicker">④ 親子討論指南</p><h2>怎麼跟孩子聊選舉？4 個步驟</h2></div>
    <ol class="timeline">
      <li><span class="dot">👀</span><b>一起看</b>先挑一支「全家一起看」的影片，或一張 HEART 繪本卡片。</li>
      <li><span class="dot">💭</span><b>翻開想一想</b>每張卡片都有問題，先讓孩子說，大人先別急著給答案。</li>
      <li><span class="dot">⚖️</span><b>聽聽不同意見</b>用「思辨題」看看別人怎麼批評、他怎麼回應、實際查到什麼。</li>
      <li><span class="dot">🔍</span><b>比一比</b>找另一位候選人的政見放在一起看，練習自己判斷。</li>
    </ol>
  </div>
</section>

<section class="section">
  <div class="wrap">
    <div class="grid grid-2">
      <a class="card door" href="think.html"><span class="emoji">⚖️</span><h3>思辨題：有人這樣覺得，你怎麼看？</h3><p>10 個外界常見的批評，附上他的回應和查證。</p><span class="go">去看看 →</span></a>
      <a class="card door" href="family.html"><span class="emoji">📺</span><h3>全家一起看</h3><p>7 支跟政見無關的訪談，加上有趣片段。</p><span class="go">去看看 →</span></a>
    </div>
  </div>
</section>`,
};
