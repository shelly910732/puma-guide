# 網站維護說明

網站頁面（根目錄的 *.html）是由程式產生的，請改 `tools/pages/` 裡的內容，再重新產生。

- 產生網站：`node tools/build.js`
- 檢查所有外部連結：`node tools/check-links.js`
- 影音資料庫：`tools/data/videos.json`（每筆有 id、日期、頻道、標題、類型 cat）
- 共用樣式與互動：`assets/style.css`、`assets/site.js`

類型 cat：life 生活、mixed 生活＋政策、policy 政策、event 演講活動、fun 有趣片段、others 他人評論・新聞。
