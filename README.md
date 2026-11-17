# Vibe Coding 101 — 4 堂課入門簡報網站

專為**零基礎中學生**設計的 4 堂課（每堂 50 分鐘）Vibe Coding 入門課程簡報與課堂 Prompt 參考網站。全程使用 **Cursor** 搭配 **HTML / CSS / JavaScript**，引導學生從零做出一款可遊玩的互動網頁小遊戲《接星星大作戰》。

## 課程架構總覽

1. **第 1 堂（50 分鐘）｜認識 Cursor 與遊戲點子**：Vibe Coding 循環、HTML/CSS/JS 三兄弟分工、Cursor 快捷工具與好/壞 Prompt 對比。
2. **第 2 堂（50 分鐘）｜HTML 骨架 ＋ CSS 視覺換裝**：必認 6 個 HTML 標籤、CSS 顏色與盒子模型、現場切換三層圖層實驗、自選遊戲主題換裝。
3. **第 3 堂（50 分鐘）｜JS 遊戲大腦與音效**：變數／事件／條件判斷、炸彈與愛心生命值、Web Audio API 免音檔 8-bit 音效、同學互玩驗收清單。
4. **第 4 堂（50 分鐘）｜AI 翻車急救站 ＋ GitHub Pages 上線**：Restore Checkpoint 一鍵回溯、F12 Console 貼錯除錯法、GitHub Pages 免費上線示範與課後延伸點子。

## 簡報快捷鍵

- `←` / `→` 或 `空白鍵`：切換上／下一頁
- `1`–`4`：直接跳轉至第 1–4 堂課開頭（`0` 回封面）
- `G`：開啟／關閉 17 頁課程總覽目錄
- `F`：切換全螢幕教室投影模式

## 本地開發與預覽

```bash
npm install
npm run dev
```

## 部署至 GitHub Pages

本專案已內建 `.github/workflows/deploy.yml` 與 `vite.config.js`（`base: './'`）：

1. 將此專案推上你的 GitHub Repository（`main` 分支）。
2. 前往 GitHub Repository 的 **Settings → Pages**，將 **Source** 設為 **GitHub Actions**。
3. 每次 push 至 `main` 分支即會自動執行 `npm run build` 並發布至 GitHub Pages。
