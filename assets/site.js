// 台北的陽光 — small progressive enhancements (the site works without JS)
(function () {
  // 1. Vote box: countdown before election day, "投票紀錄" afterwards
  var vote = document.querySelector('[data-vote]');
  if (vote) {
    var start = new Date('2026-11-28T08:00:00+08:00');
    var end = new Date('2026-11-28T16:00:00+08:00');
    var now = new Date();
    var big = vote.querySelector('[data-vote-big]');
    var title = vote.querySelector('[data-vote-title]');
    var list = vote.querySelector('[data-vote-list]');
    if (now < start) {
      var days = Math.ceil((start - now) / 86400000);
      big.textContent = days <= 1 ? '明天就是投票日！' : '還有 ' + days + ' 天';
    } else if (now <= end) {
      big.textContent = '今天投票中！下午 4 點截止';
    } else {
      title.textContent = '🗳️ 投票紀錄';
      big.textContent = '2026 年 11 月 28 日（六）';
      list.innerHTML = '<li>台北市長選舉投票時間：上午 8 點到下午 4 點</li>' +
        '<li>沈伯洋是 <b>3 號</b>，一共 6 位候選人</li>' +
        '<li>選舉結果請看中央選舉委員會公告</li>';
      vote.classList.add('done');
    }
  }

  // 2. Video database filters
  var db = document.querySelector('[data-db]');
  if (db) {
    var rows = Array.prototype.slice.call(db.querySelectorAll('.vrow'));
    var q = document.getElementById('db-q');
    var count = document.querySelector('[data-db-count]');
    var cat = 'all', year = 'all';
    function apply() {
      var term = (q.value || '').trim().toLowerCase();
      var shown = 0;
      rows.forEach(function (r) {
        var ok = (cat === 'all' || r.dataset.cat === cat || (cat === 'pick' && r.dataset.pick === '1')) &&
                 (year === 'all' || r.dataset.year === year) &&
                 (!term || r.dataset.text.indexOf(term) !== -1);
        r.hidden = !ok; if (ok) shown++;
      });
      count.textContent = '顯示 ' + shown + ' / ' + rows.length + ' 筆';
    }
    function group(sel, set) {
      var btns = document.querySelectorAll(sel);
      Array.prototype.forEach.call(btns, function (b) {
        b.addEventListener('click', function () {
          Array.prototype.forEach.call(btns, function (x) { x.setAttribute('aria-pressed', 'false'); });
          b.setAttribute('aria-pressed', 'true'); set(b.dataset.v); apply();
        });
      });
    }
    group('[data-cat-btn]', function (v) { cat = v; });
    group('[data-year-btn]', function (v) { year = v; });
    q.addEventListener('input', apply);
    var hash = decodeURIComponent(location.hash.slice(1));
    var pre = hash && document.querySelector('[data-cat-btn][data-v="' + hash + '"]');
    if (pre) pre.click(); else apply();
  }
})();
