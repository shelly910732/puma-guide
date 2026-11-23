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

  // 1b. 60 秒認識他：auto-playing story slides (swipe works without JS)
  var story = document.querySelector('[data-story]');
  if (story) {
    story.classList.remove('no-js');
    var track = story.querySelector('.story-track');
    var slides = Array.prototype.slice.call(track.children);
    var bars = story.querySelectorAll('.story-bars i');
    var btnPlay = story.querySelector('[data-play]');
    var DUR = 5500, idx = 0, t0 = 0, elapsed = 0, playing = true, raf = null;
    var reduce = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduce) playing = false;
    function paint(p) {
      Array.prototype.forEach.call(bars, function (b, i) {
        b.className = i < idx ? 'done' : '';
        b.firstChild.style.width = i === idx ? Math.min(100, p * 100) + '%' : (i < idx ? '100%' : '0');
      });
    }
    function go(i, fromScroll) {
      idx = Math.max(0, Math.min(slides.length - 1, i));
      slides.forEach(function (s, k) { s.classList.toggle('on', k === idx); });
      if (!fromScroll) track.scrollTo({ left: slides[idx].offsetLeft, behavior: reduce ? 'auto' : 'smooth' });
      elapsed = 0; t0 = performance.now(); paint(0);
    }
    function tick(now) {
      if (playing && !document.hidden) {
        var p = (elapsed + now - t0) / DUR;
        paint(p);
        if (p >= 1) { if (idx < slides.length - 1) go(idx + 1); else { playing = false; label(); } }
      } else { t0 = now; }
      raf = requestAnimationFrame(tick);
    }
    function label() { btnPlay.textContent = playing ? '⏸ 暫停' : '▶ 播放'; btnPlay.setAttribute('aria-pressed', playing ? 'false' : 'true'); }
    story.querySelector('[data-prev]').addEventListener('click', function () { go(idx - 1); });
    story.querySelector('[data-next]').addEventListener('click', function () { go(idx + 1); });
    btnPlay.addEventListener('click', function () {
      if (!playing && idx === slides.length - 1) go(0);
      playing = !playing; t0 = performance.now(); label();
    });
    var st;
    track.addEventListener('scroll', function () {
      clearTimeout(st);
      st = setTimeout(function () {
        var i = Math.round(track.scrollLeft / track.clientWidth);
        if (i !== idx) go(i, true);
      }, 120);
    }, { passive: true });
    track.addEventListener('pointerdown', function () { if (playing) { playing = false; label(); } });
    label(); go(0, true); raf = requestAnimationFrame(tick);
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
