export const LESSONS = [
  {
    id: 1,
    num: '01',
    shortTitle: '認識 Cursor 與遊戲點子',
    unitTag: 'LESSON 01 · 50 MIN',
    placardTitle: '不用背語法，\n用自然語言做網頁',
    placardDesc: '今天我們不手寫程式碼，而是學會當「遊戲導演」，用 Cursor 指揮 AI 做出第一個可玩的網頁雛形。',
    timeline: [
      { time: '00–10m', label: 'Vibe Coding 是什麼？', step: 0 },
      { time: '10–25m', label: 'HTML / CSS / JS 分工圖解', step: 1 },
      { time: '25–40m', label: 'Cursor 工具與 Prompt 心法', step: 2 },
      { time: '40–50m', label: '實作：產出遊戲第一個畫面', step: 3 }
    ]
  },
  {
    id: 2,
    num: '02',
    shortTitle: 'HTML 骨架＋CSS 外觀',
    unitTag: 'LESSON 02 · 50 MIN',
    placardTitle: '看得懂網頁骨架，\n幫小遊戲換新裝',
    placardDesc: '不需要背下所有標籤，只要認得網頁元件的名稱與 CSS 排版邏輯，就能精準告訴 AI 怎麼改畫面。',
    timeline: [
      { time: '00–12m', label: 'HTML 必認 6 個關鍵標籤', step: 0 },
      { time: '12–24m', label: 'CSS 大小、配色與盒子模型', step: 1 },
      { time: '24–36m', label: '現場實驗：切換三層圖層', step: 2 },
      { time: '36–50m', label: '實作：替遊戲換上專屬主題', step: 3 }
    ]
  },
  {
    id: 3,
    num: '03',
    shortTitle: 'JS 遊戲邏輯與計分',
    unitTag: 'LESSON 03 · 50 MIN',
    placardTitle: '注入遊戲大腦：\n移動、碰撞與計分',
    placardDesc: '用 JavaScript 讓玩家能左右移動、接到星星加分、閃避炸彈，打造真正好玩的遊戲體驗。',
    timeline: [
      { time: '00–12m', label: '電腦思考規則：變數與條件', step: 0 },
      { time: '12–26m', label: '加入道具、愛心與難度節奏', step: 1 },
      { time: '26–38m', label: '合成 8-bit 音效與最高分紀錄', step: 2 },
      { time: '38–50m', label: '試玩驗收與手感微調', step: 3 }
    ]
  },
  {
    id: 4,
    num: '04',
    shortTitle: '除錯急救＋GitHub Pages',
    unitTag: 'LESSON 04 · 50 MIN',
    placardTitle: 'AI 翻車急救站，\n再把作品分享上網',
    placardDesc: '學會不怕寫壞程式的回溯技巧與除錯流程，最後示範如何把做好的小遊戲放到網路上給朋友玩。',
    timeline: [
      { time: '00–12m', label: '為什麼修 Bug 比寫程式更重要', step: 0 },
      { time: '12–28m', label: 'AI 翻車急救站：4 招秒救法', step: 1 },
      { time: '28–40m', label: '延伸示範：GitHub Pages 上線', step: 2 },
      { time: '40–50m', label: '成果互玩＋延伸資源與參考網站', step: 3 }
    ]
  }
];

export const COVER_PLACARD = {
  unitTag: 'CURRICULUM · 4 × 50 MIN',
  num: '00',
  placardTitle: 'Vibe Coding\n中學生入門課',
  placardDesc: '零程式基礎也能上手。用 4 堂課學會與 Cursor AI 協作，親手做出一款屬於自己的 HTML/CSS/JS 網頁小遊戲。',
  timeline: [
    { time: '第 1 堂', label: 'Cursor 起手與第一版遊戲舞台' },
    { time: '第 2 堂', label: 'HTML 標籤與 CSS 視覺改裝' },
    { time: '第 3 堂', label: 'JS 計分、道具與合成音效' },
    { time: '第 4 堂', label: '除錯急救站與上線分享' }
  ]
};

export const SLIDES = [
  // SLIDE 01: COVER
  {
    id: 'cover',
    lessonId: 0,
    title: '4 堂課，用自然語言做出你的第一個網頁小遊戲',
    lead: '傳統程式課要先背幾十個語法才看得到畫面；在 Vibe Coding 裡，你擔任「產品總監」，用清楚的中文把想法描述給 Cursor AI，邊看邊改做出「接星星大作戰」。',
    type: 'cover-demo',
    arc: [
      { lessonId: 1, num: '01', title: '認識 Cursor 與遊戲點子', desc: '看懂網頁三兄弟分工，寫出第一句有效指令', time: '50 min' },
      { lessonId: 2, num: '02', title: 'HTML 骨架 ＋ CSS 視覺換裝', desc: '認得關鍵標籤與盒子排版，替遊戲打造專屬風格', time: '50 min' },
      { lessonId: 3, num: '03', title: 'JS 遊戲大腦與音效', desc: '加入分數、愛心生命值、難度加速與 8-bit 音效', time: '50 min' },
      { lessonId: 4, num: '04', title: 'AI 翻車急救 ＋ GitHub Pages', desc: '掌握一鍵回溯與除錯法，最後示範把作品放上網', time: '50 min' }
    ]
  },

  // LESSON 01
  {
    id: 'l1-intro',
    lessonId: 1,
    timelineStep: 0,
    title: '什麼是 Vibe Coding？你負責出主意，AI 負責寫語法',
    lead: '你不需要背誦複雜的英文指令。只要掌握「清楚描述 → 打開瀏覽器檢查 → 說出哪裡要改」三個循環，就能在 50 分鐘內完成第一版遊戲畫面。',
    type: 'triad',
    cards: [
      {
        pill: 'STEP 01 · 描述需求',
        pillStyle: 'ink',
        heading: '把畫面與規則講清楚',
        body: '不要只說「做個遊戲」，而是告訴 Cursor：畫面大小、顏色風格、怎麼計分與怎麼結束。'
      },
      {
        pill: 'STEP 02 · 立即預覽',
        pillStyle: 'blue',
        heading: '在瀏覽器打開 index.html',
        body: '雙擊檔案直接看結果。先親自點按、試玩，確認按鈕位置和顏色是不是你想要的。'
      },
      {
        pill: 'STEP 03 · 對話微調',
        pillStyle: 'red',
        heading: '一次只改一件小事',
        body: '「把開始按鈕放大兩倍」、「星星掉慢一點」，像跟設計師溝通一樣慢慢調整到位。'
      }
    ],
    noteLabel: '課前準備 · 建立本堂課工作資料夾',
    note: '在桌面新增名為 my-star-game 的資料夾 → 打開 Cursor → 點選 Open Folder 選擇這個資料夾即可開始。',
    refs: [
      { label: 'Cursor 官方網站（下載編輯器）', host: 'cursor.com', url: 'https://cursor.com/' }
    ]
  },

  {
    id: 'l1-triad',
    lessonId: 1,
    timelineStep: 1,
    title: '做一個互動小遊戲，只需要這三個角色',
    lead: '就像打造一台街機小遊戲，你只要知道誰負責「放零件」、誰負責「變好看」、誰負責「動起來」，剩下的語法細節通通交給 Cursor 幫你寫。',
    type: 'triad',
    cards: [
      {
        pill: 'HTML 骨架',
        pillStyle: 'ink',
        heading: '畫面裡有什麼東西',
        body: '遊戲標題、分數板、開始按鈕、倒數秒數與遊戲舞台框框，都靠 HTML 先擺上場。'
      },
      {
        pill: 'CSS 外觀',
        pillStyle: 'blue',
        heading: '長得漂不漂亮',
        body: '夜空背景、霓虹按鈕、字體大小、物件圓角與置中排版，全都交給 CSS 負責穿搭。'
      },
      {
        pill: 'JS 互動',
        pillStyle: 'red',
        heading: '怎麼移動與計分',
        body: '按下開始後倒數 30 秒、左右鍵移動籃子、接到星星加 10 分，是大腦 JavaScript 的工作。'
      }
    ],
    promptLabel: 'PROMPT 任務卡 1.1 · 產生第一個遊戲舞台',
    prompt: '請建立單一檔案 index.html（內含 CSS 與 JS），做一個「接星星大作戰」遊戲首頁：深色夜空背景、置中 600x420 遊戲區、上方顯示分數與 30 秒倒數、中央有大顆的「開始遊戲」按鈕，整體字體清晰好讀。'
  },

  {
    id: 'l1-cursor-tools',
    lessonId: 1,
    timelineStep: 2,
    title: 'Cursor 三大武器：新手 90% 時間只用這一個',
    lead: 'Cursor 裡有很多功能，但零基礎剛開始學時不用全部記起來，先認得三個最常按的快捷鍵就夠用了。',
    type: 'table',
    headers: ['功能名稱', '怎麼打開', '什麼時候用（最實用的情境）'],
    rows: [
      [
        'Agent / Chat 面板（最常用）',
        'Cmd + L（Windows: Ctrl + L）',
        '從零建立整個 index.html 檔案、一次新增多項遊戲功能，或貼上錯誤訊息請它修。'
      ],
      [
        'Inline Edit 局部修改',
        '選取程式碼後按 Cmd + K',
        '只想改某一行文字、某個按鈕顏色或數值（例如把 30 秒改成 45 秒），不希望 AI 亂動其他地方。'
      ],
      [
        'Accept / Reject 按鈕',
        '修改完成後出現在檔案上方',
        '先打開瀏覽器試玩，覺得滿意按 Accept 保留；不喜歡按 Reject 或 Restore Checkpoint 立刻反悔。'
      ]
    ],
    noteLabel: '本堂操作提醒 · 先存檔再重整瀏覽器',
    note: 'AI 寫完程式碼後記得按 Accept（或 Cmd+S 存檔），再到瀏覽器按下重新整理（F5 / Cmd+R）才會看到最新版本。',
    refs: [
      { label: 'Cursor 官方使用文件', host: 'cursor.com/docs', url: 'https://cursor.com/docs' }
    ]
  },

  {
    id: 'l1-prompt-compare',
    lessonId: 1,
    timelineStep: 3,
    title: 'Prompt 心法：為什麼別人請 AI 寫一次就對？',
    lead: 'AI 聽不懂「看起來很酷」或「怪怪的」。把指令拆成「目標物件 ＋ 視覺條件 ＋ 互動規則」，準確率立刻翻倍。',
    type: 'compare-table',
    rows: [
      {
        bad: '幫我做一個很好玩的網頁遊戲。',
        good: '用單一 index.html 做一個 30 秒點擊接星星遊戲，畫面上方有分數與重新開始鈕，適合電腦鍵盤操作。',
        why: '交代清楚「檔案格式、遊戲規則、時間限制與操作方式」。'
      },
      {
        bad: '按鈕好醜，幫我改漂亮一點。',
        good: '把「開始遊戲」按鈕改成高對比的紅色背景、白色粗體字，滑鼠移過去時微微放大並出現手形游標。',
        why: '明確說出顏色、文字與滑鼠懸停狀態，避免 AI 亂改配色。'
      },
      {
        bad: '遊戲壞掉了救命！',
        good: '按下開始遊戲後倒數秒數沒有動，請檢查計時器邏輯並修正，不要更動原本的版面排版。',
        why: '指出「做什麼動作 → 發生什麼異常」並限制修改範圍。'
      }
    ],
    promptLabel: 'PROMPT 任務卡 1.2 · 讓畫面真的能開始接星星',
    prompt: '請幫 index.html 加入基本玩法：按下開始後，畫面上方會隨機掉落黃色星星，我可以用鍵盤左右鍵移動底部的白色平台接住它，每接到一顆就 +10 分，30 秒結束顯示總分。'
  },

  // LESSON 02
  {
    id: 'l2-html-tags',
    lessonId: 2,
    timelineStep: 0,
    title: 'HTML 基礎：看懂這 6 個標籤，就能看穿任何網頁',
    lead: 'HTML 就像用樂高積木寫清單，大部分標籤都有「開始 <tag>」和「結束 </tag>」。你不需要手打，只要看得懂它們在管誰。',
    type: 'table',
    headers: ['HTML 標籤', '代表什麼零件', '在「接星星大作戰」裡的用途'],
    rows: [
      ['<h1> ... </h1>', '大標題 Heading', '顯示網頁最上方的遊戲名稱《接星星大作戰》。'],
      ['<p> ... </p>', '文字段落 Paragraph', '顯示遊戲操作說明，例如「使用左右鍵移動平台」。'],
      ['<button> ... </button>', '可點擊按鈕', '「開始遊戲」、「再玩一次」按鈕都靠它做出來。'],
      ['<div> ... </div>', '分組裝箱容器', '把分數板與剩餘秒數包成同一排，方便一起排版置中。'],
      ['<canvas> ... </canvas>', '遊戲繪圖畫布', '星星掉落、平台滑動與碰撞動畫都在這塊矩形畫布裡繪製。'],
      ['<script> ... </script>', 'JavaScript 程式區', '放在網頁最下方，負責執行遊戲計分與按鍵監聽。']
    ],
    noteLabel: '課堂觀察任務 · 在 Cursor 打開你的 index.html',
    note: '按 Cmd+F 搜尋 button 或 canvas，對照看看 AI 剛才幫你寫出來的 HTML 標籤位在檔案哪裡。',
    refs: [
      { label: 'MDN：HTML 基礎語法入門', host: 'developer.mozilla.org', url: 'https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Structuring_content/Basic_HTML_syntax' }
    ]
  },

  {
    id: 'l2-css-box',
    lessonId: 2,
    timelineStep: 1,
    title: 'CSS 基礎：顏色、字體與「盒子距離」的三把鑰匙',
    lead: '網頁裡的每一個元素，在 CSS 眼中都是一個矩形盒子。學會調這三件事，再也不會做出文字擠在一起的醜版面。',
    type: 'css-box-slide',
    cards: [
      {
        pill: 'KEY 01 · 色彩與字體',
        pillStyle: 'ink',
        heading: 'color 與 background',
        body: 'color 決定文字顏色，background 決定底色；永遠確保字與底色的對比夠高，玩家才看得清分數。'
      },
      {
        pill: 'KEY 02 · 內距與外距',
        pillStyle: 'blue',
        heading: 'padding 與 margin',
        body: 'padding 是盒子「裡面」文字到邊框的呼吸空間；margin 是盒子「外面」推開鄰居的距離。'
      }
    ],
    promptLabel: 'PROMPT 任務卡 2.1 · 用 CSS 調整排版呼吸感',
    prompt: '請調整目前遊戲的 CSS：讓整個遊戲容器在畫面垂直水平置中，分數欄與畫布之間留出 16px 間距，按鈕加上 12px 24px 內距與俐落外框。',
    refs: [
      { label: 'MDN：CSS 盒子模型圖解', host: 'developer.mozilla.org', url: 'https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Styling_basics/Box_model' },
      { label: 'MDN：CSS 樣式基礎', host: 'developer.mozilla.org', url: 'https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Styling_basics' }
    ]
  },

  {
    id: 'l2-dissector',
    lessonId: 2,
    timelineStep: 2,
    title: '現場實驗：把 CSS 或 JS 關掉，網頁會變成什麼樣子？',
    lead: '點擊左側的三個圖層開關，親眼看看「純 HTML 骨架」、「加上 CSS 換裝」與「加上 JS 互動」分別負責哪一部分。',
    type: 'layer-dissector',
    noteLabel: '老師課堂示範重點 · 找問題先分清楚是哪一層出錯',
    note: '畫面跑版或太小 → 找 CSS 改；按鈕按了沒反應或分數沒加 → 找 JS 改；少了一顆按鈕或文字打錯 → 找 HTML 改。'
  },

  {
    id: 'l2-theme-task',
    lessonId: 2,
    timelineStep: 3,
    title: '實作任務：替「接星星大作戰」換上你的專屬主題',
    lead: '現在你的遊戲已經能動了，挑一個你喜歡的主題風格，測試 Cursor 只改外觀、不弄壞遊戲邏輯的能力。',
    type: 'triad',
    cards: [
      {
        pill: 'THEME A · 街機霓虹',
        pillStyle: 'ink',
        heading: '復古電玩廳風格',
        body: '純黑背景搭配亮黃星星與紅白街機按鈕，分數使用等寬數字字體呈現。'
      },
      {
        pill: 'THEME B · 深海探險',
        pillStyle: 'blue',
        heading: '潛水艇接寶石',
        body: '深海藍漸層背景，把掉落的星星換成發亮珍珠，底部改成黃色潛水艇。'
      },
      {
        pill: 'THEME C · 貓咪甜點',
        pillStyle: 'red',
        heading: '咖啡廳接草莓',
        body: '暖奶油色背景搭配深可可字體，接住掉落的草莓與鬆餅獲得雙倍分數。'
      }
    ],
    promptLabel: 'PROMPT 任務卡 2.2 · 鎖定只改視覺不改玩法',
    prompt: '請保留原本所有的遊戲規則與計分 JS 邏輯不要動，只修改 CSS 與繪製配色，幫我把遊戲改成「【自選主題，例如：復古街機風】」，背景與按鈕都要有明確對比。'
  },

  // LESSON 03
  {
    id: 'l3-js-brain',
    lessonId: 3,
    timelineStep: 0,
    title: 'JavaScript 遊戲大腦：電腦如何看懂遊戲規則？',
    lead: '所有的網頁小遊戲不管多複雜，底層都靠這三個簡單概念在運作：記住數字、等待玩家動作、決定接下來要發生什麼。',
    type: 'triad',
    cards: [
      {
        pill: '變數 Variables',
        pillStyle: 'ink',
        heading: '電腦的便利貼',
        body: '用來記住「現在幾分 (score = 0)」、「剩幾秒 (timeLeft = 30)」、「還有幾條命 (lives = 3)」。'
      },
      {
        pill: '事件 Events',
        pillStyle: 'blue',
        heading: '傾聽玩家的動作',
        body: '當玩家「按下左鍵」、「點擊開始按鈕」或「滑鼠在畫布移動」時，立刻通知程式反應。'
      },
      {
        pill: '條件判斷 if / else',
        pillStyle: 'red',
        heading: '決定獎懲的裁判',
        body: '如果星星位置碰到籃子 → 分數 +10；如果時間歸零 → 停止遊戲並跳出結算畫面。'
      }
    ],
    promptLabel: '讀懂 JS 小技巧 · 不用自己寫，但要能跟 AI 討論數值',
    prompt: '想調整難度時可以直接打開 Cursor 問：「請把檔案裡控制星星掉落速度與玩家移動速度的變數整理在最上方並加上中文註解。」',
    refs: [
      { label: 'MDN：JavaScript 互動腳本入門', host: 'developer.mozilla.org', url: 'https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Scripting' },
      { label: 'MDN：Canvas 2D 繪圖 API', host: 'developer.mozilla.org', url: 'https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API' }
    ]
  },

  {
    id: 'l3-gameplay',
    lessonId: 3,
    timelineStep: 1,
    title: '讓遊戲真的上癮：加入炸彈、生命值與倒數加速',
    lead: '只有一種掉落物玩十秒就會膩。加上「風險（炸彈）」和「高報酬（金色大星星）」，遊戲瞬間就有緊張感了！',
    type: 'step-grid',
    steps: [
      { num: '01', title: '3 顆愛心生命值', desc: '畫面上方顯示 3 顆愛心，接到炸彈扣 1 顆愛心，歸零立刻結束遊戲。' },
      { num: '02', title: '稀有金色流星', desc: '每隔幾秒隨機出現一顆金色星星，掉落速度較快，但接到直接 +30 分！' },
      { num: '03', title: '最後 10 秒暴走模式', desc: '倒數剩下 10 秒時，掉落物生成頻率加快，畫面邊框閃出警示提示。' },
      { num: '04', title: '支援滑鼠／觸控拖曳', desc: '除了鍵盤左右鍵，也支援用滑鼠或手機觸控滑動籃子，讓同學用手機也能玩。' }
    ],
    promptLabel: 'PROMPT 任務卡 3.1 · 一次升級玩法與手機支援',
    prompt: '請升級我的遊戲規則：1. 加入紅色炸彈（接到扣 1 顆愛心，共 3 顆愛心，歸零提早結束）；2. 隨機出現金色大星星 +30 分；3. 最後 10 秒加快掉落速度；4. 同時支援鍵盤左右鍵與滑鼠／觸控拖曳籃子。'
  },

  {
    id: 'l3-sound-highscore',
    lessonId: 3,
    timelineStep: 2,
    title: '免找 MP3！用程式碼直接合成 8-bit 音效與最高分榜',
    lead: '網頁瀏覽器內建「聲音合成器 (Web Audio API)」和「小型記憶體 (localStorage)」，只要一句 Prompt 就能加上音效與本機紀錄。',
    type: 'two-col',
    cards: [
      {
        pill: 'Web Audio API · 合成音效',
        pillStyle: 'blue',
        heading: '不用下載任何音檔',
        body: 'AI 可以直接用幾行 JS 產生復古紅白機的「叮！」加分聲與「咚！」踩雷聲，完全不會有找不到檔案破圖的問題。'
      },
      {
        pill: 'localStorage · 最高分紀錄',
        pillStyle: 'red',
        heading: '重整網頁也不會忘記',
        body: '將玩家的歷史最高分存在瀏覽器裡，每次破紀錄時在結算畫面顯示「NEW RECORD」新紀錄徽章。'
      }
    ],
    promptLabel: 'PROMPT 任務卡 3.2 · 加入免音檔復古音效與最高分',
    prompt: '請用 Web Audio API 幫遊戲加入免外部音檔的 8-bit 合成音效（接到星星發出清脆高音、接到炸彈發出低沉提示音），並附上靜音切換按鈕；同時用 localStorage 記住最高分顯示在上方分數列。'
  },

  {
    id: 'l3-checklist',
    lessonId: 3,
    timelineStep: 3,
    title: '第 3 堂驗收檢查點：請隔壁同學幫你試玩 1 分鐘',
    lead: '開發者自己玩常常沒發現問題，交換座位試玩最準！勾選下面四項確認遊戲手感是否合格。',
    type: 'checklist',
    items: [
      '按下「開始遊戲」後，所有分數、愛心與秒數都能正確歸零重新開始',
      '連續按「再玩一次」不會出現星星越掉越快或重疊兩個計時器的 Bug',
      '在一般筆電或教室螢幕上，不需上下捲動就能看完整個遊戲畫面',
      '分數變化、炸彈扣血與遊戲結束的回饋一眼就能看懂'
    ],
    promptLabel: 'PROMPT 任務卡 3.3 · 若發現「重玩會變快」的經典 Bug 修復',
    prompt: '我發現按下「再玩一次」後星星掉落速度變兩倍快，可能是舊的計時器或動畫迴圈沒有清除乾淨，請幫我檢查並在重新開始時正確重設所有狀態。'
  },

  // LESSON 04
  {
    id: 'l4-mindset',
    lessonId: 4,
    timelineStep: 0,
    title: '學會修 Bug 才是超能力：AI 寫壞畫面一點都不稀奇',
    lead: '連專業工程師用 AI 也會遇到畫面突然空白、按鈕失效的時候。今天我們學的不是「不要出錯」，而是「出錯後 30 秒內修好」。',
    type: 'two-col',
    cards: [
      {
        pill: '常見迷思 · 效果最差',
        pillStyle: 'red',
        heading: '一直對 AI 喊「還是壞的！」',
        body: '沒有附任何線索只說修不好，AI 只好亂猜，往往把原本正常的區塊越改越亂。'
      },
      {
        pill: '高手做法 · 秒速定位',
        pillStyle: 'green',
        heading: '先回溯、再附證據、限縮範圍',
        body: '先退回還能動的版本，再把 F12 Console 的紅字或畫面截圖直接貼進 Cursor Chat。'
      }
    ],
    noteLabel: '除錯黃金口訣',
    note: '做對一步就試玩 → 改壞馬上按 Restore Checkpoint → 有報錯先按 F12 看 Console 紅字。'
  },

  {
    id: 'l4-rescue',
    lessonId: 4,
    timelineStep: 1,
    title: 'AI 翻車急救站：遇到這四種慘況怎麼秒救？',
    lead: '把這四招記在腦海裡，以後不管用 Cursor 做什麼網頁作品都能從容應對。',
    type: 'step-grid',
    steps: [
      { num: '01', title: '改完畫面整個壞掉？', desc: '不要急著繼續叫 AI 修！在 Cursor 對話紀錄找到剛才那則訊息，點擊「Restore Checkpoint」一秒回到修改前。' },
      { num: '02', title: '按鈕按了完全沒反應？', desc: '在瀏覽器按 F12（Mac 按 Cmd+Option+I）打開 Console 分頁，把整段紅色錯誤字複製貼給 Cursor。' },
      { num: '03', title: 'AI 改 A 卻弄壞 B？', desc: '在指令最後加上保護句：「請只修改計分相關的 JS 函式，不要更動原本的 HTML 與 CSS 版面。」' },
      { num: '04', title: '排版跟想的完全不同？', desc: '直接螢幕截圖（Cmd+Shift+4 / Win+Shift+S），把圖片拖進 Cursor Chat 並標註哪裡重疊或太小。' }
    ],
    promptLabel: 'PROMPT 任務卡 4.1 · 急救除錯專用萬用句型',
    prompt: '目前點選「開始遊戲」沒有反應，瀏覽器 Console 出現這個錯誤：[貼上紅字]。請告訴我原因並只修復這個錯誤，不要改動原本的視覺設計。'
  },

  {
    id: 'l4-github-pages',
    lessonId: 4,
    timelineStep: 2,
    title: '延伸示範：把小遊戲放上網（GitHub Pages 流程）',
    lead: '目前遊戲只存在你的電腦裡；只要透過免費的 GitHub Pages，任何人拿到網址都能在手機或電腦直接打開你的作品來玩。',
    type: 'step-grid',
    steps: [
      { num: '01', title: '建立免費 GitHub 帳號與倉庫', desc: '登入 GitHub 後點選 New Repository（設為 Public），例如取名 star-catcher-game。' },
      { num: '02', title: '上傳你的 index.html', desc: '點選 Add file → Upload files，把單一檔案 index.html 拖曳上傳並按下 Commit changes。' },
      { num: '03', title: '開啟 GitHub Pages 託管', desc: '進入該倉庫的 Settings → Pages，將 Branch 選為 main / (root) 後按下 Save。' },
      { num: '04', title: '取得專屬公開網址', desc: '等待約 1 分鐘重新整理頁面，就會看到 https://你的帳號.github.io/star-catcher-game/ 網址！' }
    ],
    noteLabel: '課堂說明 · 老師現場示範上線（學生可回家挑戰）',
    note: '只要作品是純靜態的 HTML / CSS / JS（就像這份課程簡報網站一樣），都可以免費部署到 GitHub Pages 永久保存。',
    refs: [
      { label: 'GitHub Pages 官方指南', host: 'pages.github.com', url: 'https://pages.github.com/' },
      { label: 'GitHub Pages 完整文件', host: 'docs.github.com/en/pages', url: 'https://docs.github.com/en/pages' }
    ]
  },

  {
    id: 'l4-wrapup',
    lessonId: 4,
    timelineStep: 3,
    title: '恭喜完成 4 堂課！接下來你還可以用 Cursor 做什麼？',
    lead: '這四堂課學到的「拆解結構 ＋ 精準指令 ＋ 檢查除錯」能力，完全可以直接套用到任何日常小工具。挑一個當作週末挑戰吧！',
    type: 'triad',
    cards: [
      {
        pill: 'IDEA 01 · 學習工具',
        pillStyle: 'ink',
        heading: '專注番茄鐘計時器',
        body: '設定讀書 25 分鐘、休息 5 分鐘，加上白噪音背景與完成次數統計表。'
      },
      {
        pill: 'IDEA 02 · 班級神器',
        pillStyle: 'blue',
        heading: '午餐／分組大轉盤',
        body: '輸入班上名單或今天想吃的便當清單，按一下按鈕轉動轉盤隨機決定！'
      },
      {
        pill: 'IDEA 03 · 複習考幫手',
        pillStyle: 'red',
        heading: '英文單字翻轉閃卡',
        body: '把段考單字表貼給 Cursor，請它做成可點擊翻面看中文解釋與測驗模式的小網頁。'
      }
    ],
    promptLabel: '結業出發指令 · 下一個作品的第一句話',
    prompt: '請用單一 HTML 檔案幫我做一個「【填入你的點子】」，介面簡潔高對比、操作直覺，並在手機和電腦螢幕上都能完美顯示。'
  },

  {
    id: 'l4-references',
    lessonId: 4,
    timelineStep: 3,
    title: '課後自學補給站：官方參考網站總覽',
    lead: '寫網頁不用死記硬背，連專業工程師每天都在查文件。這份清單整理了最可靠、無廣告且對新手最友善的官方資源。',
    type: 'link-table',
    headers: ['參考資源', '適合什麼時候查閱', '官方網址'],
    links: [
      {
        name: 'Cursor 官方網站與文件',
        desc: '下載安裝 Cursor 桌面版，查詢 Agent、Chat、Inline Edit 與 Checkpoint 操作說明。',
        host: 'cursor.com / docs',
        url: 'https://cursor.com/docs'
      },
      {
        name: 'MDN：HTML 基礎語法',
        desc: '認識網頁標籤結構（標題、按鈕、圖片與區塊容器）的最佳入門手冊。',
        host: 'developer.mozilla.org/.../Basic_HTML_syntax',
        url: 'https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Structuring_content/Basic_HTML_syntax'
      },
      {
        name: 'MDN：CSS 樣式與盒子模型',
        desc: '查閱配色、字體排版、margin 外距與 padding 內距的圖解基礎教材。',
        host: 'developer.mozilla.org/.../Styling_basics',
        url: 'https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Styling_basics'
      },
      {
        name: 'MDN：JavaScript 與 Canvas',
        desc: '想把小遊戲做得更進階時，可查詢事件偵測、計時器與 Canvas 2D 繪圖原理。',
        host: 'developer.mozilla.org/.../Scripting',
        url: 'https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Scripting'
      },
      {
        name: 'GitHub Pages 官方網站',
        desc: '圖解步驟教你如何把靜態 HTML/CSS/JS 作品免費放上公開網址。',
        host: 'pages.github.com',
        url: 'https://pages.github.com/'
      }
    ],
    noteLabel: '英文文件不怕卡關的小撇步',
    note: '打開 MDN 或 Cursor 文件時，可善用瀏覽器內建「翻譯成繁體中文」，或直接把看不懂的段落貼進 Cursor 問：「請用國中生聽得懂的方式解釋這段在寫什麼」。'
  }
];
