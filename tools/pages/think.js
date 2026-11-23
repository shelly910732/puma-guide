// 思辨題：每一題 = 有人覺得 → 他怎麼回應、做了什麼 → 查證看看 → 你怎麼看
const items = [
  {
    id: 'experience', q: '沒有當過市長或首長，做得來嗎？',
    say: '有學者認為他缺少行政歷練、不熟悉法規，辯論時說服力不夠；也有報導說他曾講錯台北市長的歷史，被記者當場糾正。',
    reply: '沒當過行政首長，但帶過團隊：<br><b>帶團隊</b>｜台灣民主實驗室 理事長・黑熊學院 共同創辦人、院長<br><b>國際</b>｜世界民主運動 指導委員・美德國會聽證・國際民主論壇專題演說<br><b>公益</b>｜公益律師・台灣人權促進會 執行委員<br><b>辦活動</b>｜城市行動展<br><b>執行力</b>｜自認「更有能力、更有執行力」，提出大龍市場、垃圾、文湖線、AI 聚落等解方',
    fact: '他的經歷是大學副教授（研究犯罪學、假訊息）和不分區立委，<b>確實沒有擔任過行政首長</b>。不過，現任市長蔣萬安在 2022 年當選前也是立委，同樣沒有擔任過行政首長。',
    you: '當市長最需要什麼能力？經驗比較重要，還是想法和團隊比較重要？',
    src: [['聯合新聞網：學者評辯論表現', 'https://udn.com/news/story/124652/9849053'], ['自由時報：被問優勢，他談了哪些議題', 'https://news.ltn.com.tw/news/politics/breakingnews/5460206'], ['遠見 On Air：回應執行力質疑（影片）', 'https://www.youtube.com/watch?v=2GIRFjKUbLU'], ['鏡週刊專欄：人間怪物沈伯洋（創辦台灣民主實驗室、黑熊學院）', 'https://www.mirrormedia.mg/external/dailycolumn_83844'], ['今周刊專訪：從楊過到黑熊', 'https://www.businesstoday.com.tw/article/category/183027/post/202608260070/'], ['聯合新聞網：赴海牙國際自由聯盟演講', 'https://udn.com/news/story/6656/9156000'], ['NOWnews：城市行動展', 'https://www.nownews.com/news/6893123'], ['沈伯洋競選官網：學經歷與國際交流（候選人自述）', 'https://puma.taipei/experience'], ['沈伯洋臉書個人檔案（簡介）', 'https://www.facebook.com/pumashen']],
  },
  {
    id: 'talk', q: '講話太長、太抽象？',
    say: '「黑熊體」「伯洋體」被用來酸他：先講原則、再列元素、最後交代程序，簡單的問題講得很長。網紅陳沂批評他「廢話連篇」。',
    reply: '他回答問題時，常常先說「<b>先講結論</b>」，把答案放在最前面，再補充原因和做法。例如 11 月 19 日的線上政策複習直播，他回答市民提問時就是這樣開頭。<br>有一次拜票被問到跟蔣萬安的差異，他講了大約 2 分鐘，最後自己笑說「不好意思講太多」。他也常自嘲講話風格。',
    fact: '這是對<b>說話風格</b>的評價，沒有標準答案。批評者說他講話繞，他自己則會用「先講結論」開頭。最好的方法是自己看一段完整的直播或辯論會，再判斷。',
    you: '回答問題時，說得完整比較好，還是說得簡短比較好？什麼時候該用哪一種？',
    src: [['聯合新聞網：黑熊體快評', 'https://udn.com/news/story/124652/9521242'], ['自由時報：講 2 分鐘後笑著致歉', 'https://news.ltn.com.tw/news/politics/breakingnews/5460206'], ['Yahoo 新聞：陳沂批評', 'https://tw.news.yahoo.com/%E9%99%B3%E6%B2%82%E6%89%B9%E6%B2%88%E4%BC%AF%E6%B4%8B-%E5%BB%A2%E8%A9%B1%E9%80%A3%E7%AF%87-%E6%B2%92%E9%87%8D%E9%BB%9E-%E9%85%B8-%E7%95%B6%E5%B8%82%E9%95%B7%E5%85%AC%E5%8B%99%E5%93%A1%E6%BA%96%E5%82%99%E9%81%8E%E5%8B%9E-031139809.html'], ['電視辯論會完整影片', 'https://www.youtube.com/watch?v=plpXPrOoV2w'], ['11/19 線上政策複習直播：回答市民提問（影片）', 'https://www.youtube.com/watch?v=X3v6R9thZOs']],
  },
  {
    id: 'kuma', q: '黑熊學院的錢，會不會變成市府的錢？',
    say: '有人質疑黑熊學院拿企業家曹興誠的大筆贊助，也拿過外交部 100 萬元補助；擔心他當市長後，會不會用市府預算補助黑熊學院。',
    reply: '他說外交部那筆 100 萬元，是用來辦國際活動（邀請包含烏克蘭在內 8 個國家、28 位講者）的機票、住宿和場地費。',
    fact: '黑熊學院在 2026 年 5 月 13 日發聲明：他的榮譽院長是<b>無給職</b>，並婉謝候選人參與課程活動。他還沒當市長，目前<b>查不到</b>市府預算補助黑熊學院的紀錄；這是對未來的擔心，可以持續觀察。',
    you: '一個人當官後，要怎麼避免和自己有關的團體拿到好處？（這叫「利益迴避」）',
    src: [['TVBS：外交部補助爭議', 'https://news.tvbs.com.tw/politics/2739694'], ['ETtoday：黑熊學院聲明', 'https://www.ettoday.net/news/20260513/3165410.htm'], ['中時新聞網：市政三問沈伯洋', 'https://www.chinatimes.com/realtimenews/20261013001662-260407']],
  },
  {
    id: 'recall', q: '大罷免沒成功，要負責嗎？',
    say: '2025 年的大罷免他參與很深，結果 7 月 26 日那一波 24 位國民黨立委全部沒有罷免成功，8 月 23 日第二波也沒通過。有人認為他應該辭去立委。',
    reply: '他說罷免成不成功，重點不是罷掉幾席，而是國民黨會不會改變；也說民眾要對抗的是做錯事的立委，不是投反對票的人。之後他認為應該主動經營議題。',
    fact: '兩波罷免都沒有通過，這是<b>事實</b>。至於「誰該負責」，各方看法不同：有人批評他，也有人（例如曹興誠）認為失敗主要是其他原因。',
    you: '努力做一件事卻沒有成功，算失敗嗎？失敗以後，怎麼面對才是負責任？',
    src: [['NOWnews：726 大罷免後他的回應', 'https://www.nownews.com/news/6711972'], ['NOWnews：曹興誠為他說話', 'https://www.nownews.com/news/6713440'], ['宵夜鏡來講：他談大罷免（影片）', 'https://www.youtube.com/watch?v=dtKbKSZnTxE']],
  },
  {
    id: 'twin', q: '雙城論壇，前後說法不一樣？',
    say: '5 月他說當選就要停辦上海、台北的「雙城論壇」，認為沒有效益；10 月又說現有框架可以先留著。市府和蔣萬安批評他「改口」，要他道歉。',
    reply: '他說交流要以「保護我的城市」為前提：涉及交通資料、資訊安全等國安風險要審慎；不涉國安、對雙方都有益的產業交流可以繼續談。TVBS 專訪中也說，沒有「九二共識」這類政治前提，願意參加。',
    fact: '他的說法<b>確實有調整</b>：從「停辦」變成「有條件保留」。這可以看成改口，也可以看成聽了意見後修正，兩種解讀都有人支持。',
    you: '一個人改變想法，是「改口」還是「調整」？你會用什麼標準分辨？',
    src: [['聯合新聞網：當選停辦雙城論壇', 'https://udn.com/news/story/124652/9502690'], ['聯合新聞網：框架先留著', 'https://udn.com/news/story/6656/9796309'], ['TVBS 專訪（影片）', 'https://www.youtube.com/watch?v=Ci4_TUAquek']],
  },
  {
    id: 'drug', q: '他主張「在社區發毒品」？',
    say: '10 月蔣萬安在臉書質疑他 2014 年寫的文章，主張在社區中心提供毒品，貼文留言超過 50 萬則。',
    reply: '他說文章談的是國際上的「<b>減害政策</b>」，例如美沙冬替代療法、提供乾淨針具，目的是減少疾病傳染和死亡，不是發毒品。',
    fact: '中華民國醫師公會全國聯合會和台灣精神醫學會發聲明：<b>支持減害不等於鼓勵吸毒</b>，政策應回到醫學證據討論。也有學者認為，他對「吸毒除罪化」的態度還值得再討論。',
    you: '為什麼同一篇文章，不同的人會讀出不同的意思？我們怎麼找原文來看？',
    src: [['聯合新聞網：減害爭議', 'https://udn.com/news/story/6656/9793912'], ['鏡週刊：醫師公會聯合聲明', 'https://www.mirrormedia.mg/story/20261005edi039'], ['新頭殼：毒理專家怎麼看', 'https://newtalk.tw/news/view/2026-10-04/1063468']],
  },
  {
    id: 'anime', q: '動漫梗是不是包裝？還用錯？',
    say: '有專欄和對手陣營認為他用動漫包裝人設，而且好幾次用錯，例如被指引用《火影忍者》台詞時出處說錯，批評「別再消費動漫 IP」。',
    reply: '他曾說動漫裡的「職人精神」值得推廣。對於被指說錯台詞，我們<b>沒有查到他的正式回應</b>。',
    fact: '確實有媒體報導他引用台詞出錯的爭議。至於「是不是包裝」，屬於個人看法：他從小愛看漫畫，在 2026 年參選前的訪談就常談動漫。',
    you: '用大家喜歡的東西來溝通，是好方法還是只是包裝？說錯的時候，該怎麼辦？',
    src: [['中時新聞網：動漫包裝術專欄', 'https://www.chinatimes.com/opinion/20261115002493-262104'], ['中天新聞：火影台詞爭議（影片）', 'https://www.youtube.com/watch?v=2CSDBruLbV8'], ['鏡文學專訪：從小愛看漫畫', 'https://www.mirrorfiction.com/news/1433']],
  },
  {
    id: 'grandma', q: '向他下跪陳情的阿嬤，是「臨時演員」？',
    say: '10 月他到社子島時，一位阿嬤下跪陳情。隔天國民黨議員林杏兒質疑阿嬤是「高薪臨演」。',
    reply: '他當場安撫阿嬤，並說明他對社子島開發的解決方向。',
    fact: '社子島自救會說阿嬤是<b>土生土長的在地居民</b>，從 2019 年起就參與陳情；公視《我們的島》在 2025 年 11 月就訪問過她。林杏兒之後發聲明<b>道歉</b>，阿嬤也提告。',
    you: '看到網路上有人說某個人「是演的」，我們可以怎麼查證？',
    src: [['中央社：林杏兒聲明致歉', 'https://cna.com.tw/news/aloc/202610200107.aspx'], ['公視我們的島：原始訪問（影片）', 'https://news.pts.org.tw/video/22559'], ['三立：當天現場（影片）', 'https://www.youtube.com/watch?v=vaeGMTuBujY']],
  },
  {
    id: 'deepfake', q: '網路上說他收回扣的影片是真的嗎？',
    say: '網路上流傳一段「他自己承認利用軍購案收回扣」的音檔和影片。',
    reply: '他的競選辦公室通報平台，Threads 貼文隔天就被下架，Facebook 上的另一支假影片 73 分鐘就被移除。',
    fact: '那是用 AI 做的<b>深偽（假造）音檔</b>。桃園地檢署偵辦，散布的男子坦承犯行，被法院裁定 10 萬元交保、限制出境。',
    you: 'AI 可以做出很像真人的聲音和影片。看到很聳動的影片，你會先做哪些事再相信？',
    src: [['中央社：深偽音檔散布者交保', 'https://cna.com.tw/news/asoc/202610310035.aspx'], ['中央社：轉貼深偽照片緩起訴', 'https://cna.com.tw/news/asoc/202610120034.aspx']],
  },
  {
    id: 'china', q: '太強調「中國威脅」，跟市政有關嗎？',
    say: '有人覺得他太常談中國威脅，台北市政應該回到交通、住宅、托育這些生活問題。',
    reply: '他說研究中國影響力本來就是他的專業；同時提出 31 項 HEART 生活政見。對雙城論壇，他表示沒有政治前提就願意參加。',
    fact: '他的選舉公報 31 項政見，<b>大多是生活政策</b>（住宅、托育、交通、長照等）。他被中國重慶公安立案偵查，也讓兩岸議題一直被討論。',
    you: '一個城市的市長，需要關心國際和兩岸的事嗎？要關心到什麼程度？',
    src: [['沈伯洋官網：選舉公報政見', 'https://puma.taipei/election-bulletin'], ['Yahoo 議點通：沈伯洋懶人包', 'https://tw.news.yahoo.com/%E6%B2%88%E4%BC%AF%E6%B4%8B%E6%87%B6%E4%BA%BA%E5%8C%85%EF%BC%9A%E6%B2%88%E4%BC%AF%E6%B4%8B%E7%82%BA%E4%BD%95%E8%A2%AB%E9%80%9A%E7%B7%9D%EF%BC%9F%E8%B3%B4%E6%B8%85%E5%BE%B7%E3%80%81%E9%9F%93%E5%9C%8B%E7%91%9C%E6%80%8E%E9%BA%BC%E8%AA%AA%EF%BC%9F%E5%85%AB%E7%82%AF%E3%80%81%E9%96%A9%E5%8D%97%E7%8B%BC%E4%B9%9F%E8%A2%AB%E9%80%9A%E7%B7%9D%EF%BC%9F%E3%80%90yahoo%E8%AD%B0%E9%BB%9E%E9%80%9A%E3%80%91-073705349.html']],
  },
];

module.exports = {
  file: 'think.html',
  title: '思辨題',
  desc: '外界對沈伯洋的 10 個常見批評：有人覺得什麼、他怎麼回應、查證後的事實，以及給孩子的討論題。',
  section: 'parents',
  crumb: [['家長區', 'parents.html'], ['思辨題']],
  body: (h) => `
<section class="page-hero">
  <div class="wrap narrow">
    <h1>⚖️ 思辨題：有人這樣覺得，你怎麼看？</h1>
    <p class="lead">每一題都分成四段，照順序讀，練習「先聽、再查、後判斷」。</p>
    <div class="steps" style="grid-template-columns:repeat(auto-fit,minmax(140px,1fr))">
      <div class="step s-say"><span class="lab">🗣️ 有人覺得</span>外界的批評</div>
      <div class="step s-reply"><span class="lab">💬 他的回應</span>他說了、做了什麼</div>
      <div class="step s-fact"><span class="lab">🔍 查證看看</span>實際查到的事實</div>
      <div class="step s-you"><span class="lab">🤔 你怎麼看</span>換你想一想</div>
    </div>
    <div class="note"><strong>小提醒：</strong>批評多半來自對手陣營和立場偏藍的媒體，支持的說法多半來自他的陣營和立場偏綠的媒體。「查證看看」只寫查得到的事實；查不到的，我們會直接說查不到。</div>
    <div class="chips">${items.map((x, i) => `<a class="chip" href="#${x.id}">${i + 1}. ${x.q}</a>`).join('')}</div>
  </div>
</section>

<section class="section">
  <div class="wrap narrow">
    <div class="grid">
    ${items.map((x, i) => `<article class="card debate" id="${x.id}">
      <h3>${i + 1}. ${x.q}</h3>
      <div class="steps">
        <div class="step s-say"><span class="lab">🗣️ 有人覺得……</span><p>${x.say}</p></div>
        <div class="step s-reply"><span class="lab">💬 他怎麼回應、做了什麼</span><p>${x.reply}</p></div>
        <div class="step s-fact"><span class="lab">🔍 查證看看：實際上真的是這樣嗎？</span><p>${x.fact}</p></div>
        <div class="step s-you"><span class="lab">🤔 你怎麼看？</span><p>${x.you}</p></div>
      </div>
      ${h.src(x.src)}
    </article>`).join('')}
    </div>
  </div>
</section>`,
};
