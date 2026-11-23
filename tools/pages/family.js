module.exports = {
  file: 'family.html',
  title: '全家一起看',
  desc: '7 支跟政見無關、適合全家一起看的沈伯洋訪談，加上扮欣梅爾、做光劍、戰鬥陀螺、棒球開球等有趣片段。',
  section: 'parents',
  crumb: [['家長區', 'parents.html'], ['全家一起看']],
  body: (h) => `
<section class="page-hero">
  <div class="wrap">
    <h1>📺 全家一起看</h1>
    <p class="lead">跟政見無關、老少咸宜的訪談，先認識「他這個人」。後半段是他的有趣片段。</p>
    <div class="note"><strong>先知道：</strong>頻道和日期都到 YouTube 確認過。內容根據影片說明和新聞報導整理，沒有逐支看完全片。這些影片多在競選期間錄製，自然會展現他最好的一面。</div>
    <div class="chips"><a class="chip" href="#seven">7 支精選訪談</a><a class="chip" href="#fun">有趣片段</a></div>
  </div>
</section>

<section class="section" id="seven">
  <div class="wrap">
    <div class="section-head"><p class="kicker">精選訪談</p><h2>7 支適合全家一起看的訪談</h2></div>
    <div class="vgrid">
      ${h.vcard('9zRsNOYZ7U4', { title: '① 第一次上綜藝：《11點熱吵店》', text: '和沈玉琳、唐綺陽聊生活煩惱，分享太太教的「咖啡小睡法」。包包開箱時，主持人翻出他過世母親的絲巾。', why: '氣氛最輕鬆，觀看次數超過 100 萬。', extra: `<a href="https://news.ltn.com.tw/news/Taipei/breakingnews/5629076">自由時報：包包開箱</a>` })}
      ${h.vcard('-LhSFTmQg6Q', { title: '② 廣播專訪：《POP最正點》林書煒', text: '從人生經歷、家庭聊到在台北生活，也談到透過收養成為父親。', why: '主持人問得溫和，像聊天一樣。' })}
      ${h.vcard('tG4puJVsKN8', { title: '③ 從少年夢想到想成為的大人：《幸福好時光》', text: '從少年時的夢想，談到長大後想成為什麼樣的大人。', why: '很適合跟孩子聊「夢想」和「成長」。', caveat: '這集說明很少，無法確認節目裡每段都談到哪些細節。' })}
      ${h.vcard('MO-FYoOTFsY', { title: '④ 談育兒和收養：《新聞挖挖哇》精華', text: '20 歲做少年輔導時就決定要收養，被爸爸吐槽「不如直接開育幼院」；女兒剛來時完全不讓他抱。', why: '新手爸媽都懂的真實辛苦。', caveat: '這是精華片段；完整那一集還談到政治話題，比較不適合全家看。' })}
      ${h.vcard('x-ukdSUCmIM', { title: '⑤ 為什麼決定收養：《宵夜鏡來講》', text: '大學時接觸「非行少年」，因此決定收養。女兒剛來時跟爸爸比較慢熱，現在父女超親密。', why: '片子短、溫馨，適合當第一支入門。' })}
      ${h.vcard('ULWIruQR-Lc', { title: '⑥ 王偉忠《欸！我說到哪裡了？》', text: '王偉忠用「老市民」角度提問。前半段問得犀利，後半段氣氛融洽，結尾還輕輕搥了他一拳。', why: '兩個世代邊聊邊鬥嘴，觀看次數約 490 萬。', caveat: '這集有提到一點市政。', extra: `<a href="https://www.nownews.com/news/6874314">NOWnews 報導</a>` })}
      ${h.vcard('7C1Utss28Ac', { title: '⑦ 13 分鐘看完他的故事：《追夢的人》', text: '五分埔的少年、為了跟少年聊天學塔羅牌、「撲馬老師」、留美博士、收養女兒。', why: '最快看完他的成長經過。', caveat: '這是個人創作者的介紹片，部分畫面是 AI 示意圖，不是真的照片。' })}
    </div>
    <div class="note" style="margin-top:20px"><strong>還可以找：</strong>2026 年 5 月，他在自己的頻道「沈伯洋Puma」發了一支和太太、女兒一起做母親節蛋糕的影片，太太誇他「再忙都會趕回家、每天晚上一定洗碗」。目前只找到<a href="https://www.ettoday.net/news/20260510/3163304.htm">新聞報導</a>，可以到他的頻道搜尋「母親節」。</div>
  </div>
</section>

<section class="section alt" id="fun">
  <div class="wrap">
    <div class="section-head">
      <p class="kicker">大人也有好玩的一面</p>
      <h2>😆 有趣片段</h2>
      <p class="lead">都是 1～8 分鐘的短片。日期是 YouTube 上傳日（台灣時間）。</p>
    </div>

    <h3>🗡️ 勇者欣梅爾登場</h3>
    <div class="vgrid">
      ${h.vcard('PF9FlDsRbFI', { title: '萬聖節扮成勇者欣梅爾去車掃', why: '動畫《葬送的芙莉蓮》的角色，他說扮起來「比較帥」。' })}
      ${h.vcard('bnZaa_-bLL4', { title: '欣梅爾出場，全場尖叫', why: '只有 24 秒，看現場氣氛。' })}
      ${h.vcard('Wgwj-7-ntdA', { title: '扮欣梅爾，喊《灌籃高手》金句', why: '一次出現兩部動漫的梗。' })}
    </div>

    <h3 style="margin-top:28px">✨ 光劍和戰鬥陀螺</h3>
    <div class="vgrid">
      ${h.vcard('TyrCA1kwkQI', { title: '跟師傅學做自己的光劍', why: '網友說：「每個男人都想要的光劍」。' })}
      ${h.vcard('fWehBIHmo00', { title: '車掃遇到拿光劍的弟弟', why: '他興奮地拿出自己的劍大喊：「我也有光劍！」' })}
      ${h.vcard('y0qmbIETFNM', { title: '挑戰戰鬥陀螺冠軍', why: '他自己頻道的短片，觀看超過 70 萬次。' })}
      ${h.vcard('2IHMmsSsuL0', { title: '戰鬥陀螺對決全國冠軍', why: '拿出壓箱寶還是輸了，女兒說「別人比賽比較好看」。' })}
    </div>

    <h3 style="margin-top:28px">⚾ 棒球</h3>
    <div class="vgrid">
      <article class="vcard">
        <div class="threads-embed">
          <blockquote class="text-post-media" data-text-post-permalink="https://www.threads.com/@catoceanpeer/post/DdeAyaxCUQ7" data-text-post-version="0" style="margin:0;max-width:100%;min-width:0;width:100%;border:0">
            <a href="https://www.threads.com/@catoceanpeer/post/DdeAyaxCUQ7" class="threads-fallback">▶ 在 Threads 上看影片</a>
          </blockquote>
        </div>
        <div class="body">
          <h3><a href="https://www.threads.com/@catoceanpeer/post/DdeAyaxCUQ7">12 強奪冠那一刻，想拍英雄卻變成自拍</a></h3>
          <span class="meta">Threads 網友轉貼｜原始畫面 2024-11-24</span>
          <p>2024 年 11 月 24 日，中華隊在世界 12 強冠軍賽以 4 比 0 打敗日本，拿下第一座世界冠軍。他在東京巨蛋想拍場上的球員，鏡頭卻轉錯方向，拍到自己激動大吼的樣子。</p>
          <p class="why">✨ 很多人說這是最「真」的他。</p>
          <p class="caveat">⚠️ 這是網友 2026 年 9 月在 Threads 的轉貼；影片浮水印是 @pumashen，原本是他自己發在 Instagram 的影片。</p>
        </div>
      </article>
      ${h.vcard('2_j3dZxzJ4k', { title: '業餘棒球聯賽開球', why: '他自嘲投球只有「ㄦ級分」。' })}
      ${h.vcard('nYX8U9XbOGw', { title: '網友 Vlog：去看棒球，隔壁竟然是沈伯洋', why: '一位網友去大巨蛋看球、再到東京巨蛋看經典賽的紀錄。', caveat: '這是網友拍的 Vlog，我們沒有看完全片，無法確認他在片中出現多久。' })}
      ${h.vcard('nBKI5DtH4Lc', { title: '2024 年 12 強，在東京巨蛋幫中華隊加油', why: '政論節目和在東京巨蛋看球的他視訊連線。', caveat: '這是新聞節目，不是他自己拍的看球影片。' })}
      ${h.vcard('5j7wA5HZ6Qs', { title: '被問「棒球支持哪一隊」一秒語塞', why: '他的回答是：「每一隊我都非常喜歡」。' })}
    </div>
    <script async src="https://www.threads.net/embed.js"></script>

    <h3 style="margin-top:28px">🎤 動漫金句和應援舞</h3>
    <div class="vgrid">
      ${h.vcard('4OuM3w0iP7Y', { title: '動漫金句連發', why: '網友還做成熱血的日文版。' })}
      ${h.vcard('tAvgnAKqTGA', { title: '「敵人很強就不戰鬥嗎？」', why: '用動漫台詞談自己為什麼參選。' })}
      ${h.vcard('J6Pmrs0tXzY', { title: '後台拿螢光棒跳應援舞', why: '網友笑：「藏不住的動漫魂」。' })}
    </div>

    <h3 style="margin-top:28px">🏃 生活小片段</h3>
    <div class="vgrid">
      ${h.vcard('EJ_m5ZuVR58', { title: '公園遇到大哥，一起挑戰練核心', why: '他頻道裡觀看最多的短片之一，超過 140 萬次。' })}
      ${h.vcard('yCQKZIZ9D2g', { title: '被罵「人渣」的神回覆', why: '他笑說：「可能鬍子沒刮，渣渣的。」' })}
      ${h.vcard('r1AO7F7xmJw', { title: '到披薩店自己動手做披薩', why: '他自己頻道的短片，觀看將近 50 萬次。' })}
      ${h.vcard('eOo7ckDpx3c', { title: '政見會前一早，在家跟女兒做洋流飄帶', why: '記者以為他在閉關準備，結果是在陪女兒做勞作。' })}
    </div>
    <div class="note" style="margin-top:20px"><strong>想看更多？</strong>到<a href="videos.html#fun">影音資料庫</a>，可以依類型、年份篩選，也可以搜尋關鍵字。</div>
  </div>
</section>`,
};
