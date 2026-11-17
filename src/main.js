import './styles.css';
import { LESSONS, COVER_PLACARD, SLIDES } from './slides.js';

const ICON_COPY = `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="square" aria-hidden="true"><rect x="9" y="9" width="13" height="13"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/></svg>`;
const ICON_CHECK = `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="square" aria-hidden="true"><polyline points="20 6 9 17 4 12"/></svg>`;
const ICON_NOTE = `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="square" aria-hidden="true"><circle cx="12" cy="12" r="9"/><line x1="12" y1="8" x2="12" y2="8.01"/><line x1="12" y1="12" x2="12" y2="16"/></svg>`;

const state = {
  index: 0,
  overviewOpen: false,
  dissector: { html: true, css: true, js: true, testClicks: 0 },
  checks: [false, false, false, false],
  gameRaf: null
};

const elLessonTabs = document.getElementById('lesson-tabs');
const elPlacard = document.getElementById('placard');
const elReading = document.getElementById('reading-column');
const elCounter = document.getElementById('slide-counter');
const elBtnPrev = document.getElementById('btn-prev');
const elBtnNext = document.getElementById('btn-next');
const elBtnHome = document.getElementById('btn-home');
const elBtnOverview = document.getElementById('btn-overview');
const elBtnCloseOverview = document.getElementById('btn-close-overview');
const elBtnFullscreen = document.getElementById('btn-fullscreen');
const elOverviewPanel = document.getElementById('overview-panel');
const elOverviewGrid = document.getElementById('overview-grid');

function escapeHtml(str) {
  return String(str)
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#39;');
}

function pad2(n) {
  return String(n).padStart(2, '0');
}

function stopGameLoop() {
  if (state.gameRaf !== null) {
    cancelAnimationFrame(state.gameRaf);
    state.gameRaf = null;
  }
}

function getIndexFromHash() {
  const match = window.location.hash.match(/^#slide-(\d+)$/);
  if (!match) return 0;
  const num = Number.parseInt(match[1], 10);
  if (Number.isNaN(num) || num < 1 || num > SLIDES.length) return 0;
  return num - 1;
}

function syncHash() {
  const targetHash = `#slide-${pad2(state.index + 1)}`;
  if (window.location.hash !== targetHash) {
    history.replaceState(null, '', targetHash);
  }
}

function goToSlide(nextIndex) {
  const clamped = Math.max(0, Math.min(SLIDES.length - 1, nextIndex));
  if (clamped === state.index && elReading.innerHTML.trim() !== '') return;
  stopGameLoop();
  state.index = clamped;
  syncHash();
  render();
  elReading.scrollTop = 0;
}

function jumpToLesson(lessonId) {
  const idx = SLIDES.findIndex((s) => s.lessonId === lessonId);
  if (idx !== -1) goToSlide(idx);
}

function renderTopRail(currentLessonId) {
  elLessonTabs.innerHTML = LESSONS.map((lesson) => {
    const isActive = lesson.id === currentLessonId;
    const isDone = currentLessonId > lesson.id;
    const cls = ['lesson-tab', isActive ? 'active' : '', isDone ? 'done' : '']
      .filter(Boolean)
      .join(' ');
    return `
      <button type="button" class="${cls}" data-jump-lesson="${lesson.id}" aria-current="${isActive ? 'step' : 'false'}">
        <span class="tab-num">${escapeHtml(lesson.num)}</span>
        <span class="tab-title">${escapeHtml(lesson.shortTitle)}</span>
      </button>
    `;
  }).join('');

  elLessonTabs.querySelectorAll('[data-jump-lesson]').forEach((btn) => {
    btn.addEventListener('click', () => {
      jumpToLesson(Number(btn.dataset.jumpLesson));
    });
  });
}

function renderPlacard(slide) {
  const lesson = LESSONS.find((l) => l.id === slide.lessonId);
  const info = lesson || COVER_PLACARD;
  const isCover = !lesson;

  const timelineHtml = info.timeline
    .map((item, idx) => {
      const isCurrent = typeof slide.timelineStep === 'number' && slide.timelineStep === idx;
      return `
        <div class="timeline-row ${isCurrent ? 'current' : ''}">
          <span class="timeline-time">${escapeHtml(item.time)}</span>
          <span>${escapeHtml(item.label)}</span>
        </div>
      `;
    })
    .join('');

  elPlacard.innerHTML = `
    <div>
      <div class="unit-tag ${isCover ? 'cover' : ''}">${escapeHtml(info.unitTag)}</div>
      <div class="big-num">${escapeHtml(info.num)}</div>
      <h2 class="placard-title">${escapeHtml(info.placardTitle).replaceAll('\n', '<br>')}</h2>
      <p class="placard-desc">${escapeHtml(info.placardDesc)}</p>
    </div>
    <div class="timeline" aria-label="本堂時間節奏">${timelineHtml}</div>
  `;
}

function renderPromptBar(slide) {
  if (slide.prompt) {
    return `
      <div class="prompt-box">
        <div class="prompt-content">
          <span class="prompt-label">${escapeHtml(slide.promptLabel || 'CURSOR PROMPT')}</span>
          <div class="prompt-text">${escapeHtml(slide.prompt)}</div>
        </div>
        <button type="button" class="copy-btn" data-copy-prompt>
          ${ICON_COPY}
          <span>複製指令給 Cursor</span>
        </button>
      </div>
    `;
  }
  if (slide.note) {
    return `
      <div class="note-box">
        <div class="note-icon">${ICON_NOTE}</div>
        <div class="note-content">
          <span class="note-label">${escapeHtml(slide.noteLabel || '課堂重點提示')}</span>
          <div class="note-text">${escapeHtml(slide.note)}</div>
        </div>
      </div>
    `;
  }
  return '';
}

function renderBodyContent(slide) {
  switch (slide.type) {
    case 'cover-demo': {
      const arcHtml = slide.arc
        .map(
          (item) => `
          <button type="button" class="arc-item" data-arc-lesson="${item.lessonId}">
            <span class="arc-num">${escapeHtml(item.num)}</span>
            <div>
              <strong>${escapeHtml(item.title)}</strong>
              <span>${escapeHtml(item.desc)}</span>
            </div>
            <span class="arc-time">${escapeHtml(item.time)}</span>
          </button>
        `
        )
        .join('');

      return `
        <div class="cover-layout">
          <div class="arc-list" aria-label="四堂課單元入口">${arcHtml}</div>
          <div class="demo-box">
            <div class="demo-head">
              <span>目標成品試玩：接星星大作戰</span>
              <span id="demo-stats">SCORE 0 · 20s</span>
            </div>
            <canvas id="demo-canvas" class="demo-canvas" width="440" height="220" aria-label="接星星小遊戲預覽畫布"></canvas>
            <div class="demo-actions">
              <button type="button" class="demo-btn" id="demo-start">開始試玩</button>
              <span class="demo-hint">滑鼠移動或按 A / D 鍵接住星星</span>
            </div>
          </div>
        </div>
      `;
    }

    case 'triad':
    case 'two-col': {
      const gridCls = slide.type === 'triad' ? 'triad' : 'two-col';
      return `
        <div class="${gridCls}">
          ${slide.cards
            .map(
              (c) => `
            <div class="cell-box">
              <span class="pill ${c.pillStyle}">${escapeHtml(c.pill)}</span>
              <h3>${escapeHtml(c.heading)}</h3>
              <p>${escapeHtml(c.body)}</p>
            </div>
          `
            )
            .join('')}
        </div>
      `;
    }

    case 'table': {
      return `
        <table class="spec-table">
          <thead>
            <tr>${slide.headers.map((h) => `<th>${escapeHtml(h)}</th>`).join('')}</tr>
          </thead>
          <tbody>
            ${slide.rows
              .map(
                (row) => `
              <tr>
                <td><span class="mono-code">${escapeHtml(row[0])}</span></td>
                <td>${escapeHtml(row[1])}</td>
                <td>${escapeHtml(row[2])}</td>
              </tr>
            `
              )
              .join('')}
          </tbody>
        </table>
      `;
    }

    case 'compare-table': {
      return `
        <table class="spec-table">
          <thead>
            <tr>
              <th>模糊指令（AI 容易猜錯）</th>
              <th>明確 Vibe Coding 指令（一次到位）</th>
              <th>為什麼有效</th>
            </tr>
          </thead>
          <tbody>
            ${slide.rows
              .map(
                (r) => `
              <tr>
                <td class="bad-cell">${escapeHtml(r.bad)}</td>
                <td class="good-cell">${escapeHtml(r.good)}</td>
                <td>${escapeHtml(r.why)}</td>
              </tr>
            `
              )
              .join('')}
          </tbody>
        </table>
      `;
    }

    case 'css-box-slide': {
      return `
        <div class="two-col">
          ${slide.cards
            .map(
              (c) => `
            <div class="cell-box">
              <span class="pill ${c.pillStyle}">${escapeHtml(c.pill)}</span>
              <h3>${escapeHtml(c.heading)}</h3>
              <p>${escapeHtml(c.body)}</p>
            </div>
          `
            )
            .join('')}
        </div>
        <div class="box-schematic" aria-label="CSS 盒子模型結構示意圖">
          <div class="box-label">MARGIN（外距：跟隔壁元素的安全距離）</div>
          <div class="box-border-layer">
            <div class="box-label">BORDER（邊框：例如 2px solid #141414）</div>
            <div class="box-padding-layer">
              <div class="box-label">PADDING（內距：讓文字不要貼死邊框的呼吸空間）</div>
              <div class="box-content-layer">CONTENT：分數板與「開始遊戲」按鈕</div>
            </div>
          </div>
        </div>
      `;
    }

    case 'layer-dissector': {
      const { html, css, js, testClicks } = state.dissector;
      let previewInner = '';
      if (!html) {
        previewInner = `<p style="color:#525252; font-family: var(--font-mono); font-size: 14px;">[HTML 已關閉] 畫面上沒有任何結構元件——CSS 與 JS 也找不到可以裝飾或控制的對象。</p>`;
      } else {
        const cls = css ? 'preview-game styled' : 'preview-game raw';
        previewInner = `
          <div class="${cls}">
            <div class="pg-top">
              <span>接星星大作戰</span>
              <span>SCORE: ${testClicks * 10}</span>
            </div>
            <div class="pg-title">準備好接住星星了嗎？</div>
            <button type="button" class="pg-btn" id="dissector-test-btn">測試點擊加分 (+10)</button>
            <div style="font-size: 13px; opacity: 0.85;">
              ${js ? 'JS 運作中：點擊按鈕分數會即時增加。' : 'JS 已關閉：目前點擊按鈕沒有任何互動反應。'}
            </div>
          </div>
        `;
      }

      return `
        <div class="dissector">
          <div class="layer-toggles" role="group" aria-label="切換網頁三層結構">
            <button type="button" class="layer-toggle ${html ? 'on' : ''}" data-layer="html">
              <span>HTML 骨架層</span>
              <span class="layer-state">${html ? 'ON' : 'OFF'}</span>
            </button>
            <button type="button" class="layer-toggle ${css ? 'on' : ''}" data-layer="css">
              <span>CSS 外觀層</span>
              <span class="layer-state">${css ? 'ON' : 'OFF'}</span>
            </button>
            <button type="button" class="layer-toggle ${js ? 'on' : ''}" data-layer="js">
              <span>JS 互動層</span>
              <span class="layer-state">${js ? 'ON' : 'OFF'}</span>
            </button>
          </div>
          <div class="preview-stage">${previewInner}</div>
        </div>
      `;
    }

    case 'step-grid': {
      return `
        <div class="step-grid">
          ${slide.steps
            .map(
              (st) => `
            <div class="step-card">
              <div class="step-idx">${escapeHtml(st.num)}</div>
              <div>
                <h3>${escapeHtml(st.title)}</h3>
                <p>${escapeHtml(st.desc)}</p>
              </div>
            </div>
          `
            )
            .join('')}
        </div>
      `;
    }

    case 'checklist': {
      return `
        <div class="checklist">
          ${slide.items
            .map(
              (item, i) => `
            <label class="check-item">
              <input type="checkbox" data-check-idx="${i}" ${state.checks[i] ? 'checked' : ''} />
              <span>${escapeHtml(item)}</span>
            </label>
          `
            )
            .join('')}
        </div>
      `;
    }

    default:
      return '';
  }
}

function bindSlideInteractions(slide) {
  const copyBtn = elReading.querySelector('[data-copy-prompt]');
  if (copyBtn && slide.prompt) {
    copyBtn.addEventListener('click', async () => {
      try {
        await navigator.clipboard.writeText(slide.prompt);
      } catch {
        const ta = document.createElement('textarea');
        ta.value = slide.prompt;
        ta.style.position = 'fixed';
        ta.style.opacity = '0';
        document.body.appendChild(ta);
        ta.select();
        document.execCommand('copy');
        document.body.removeChild(ta);
      }
      copyBtn.classList.add('copied');
      copyBtn.innerHTML = `${ICON_CHECK}<span>已複製指令</span>`;
      window.setTimeout(() => {
        if (!copyBtn.isConnected) return;
        copyBtn.classList.remove('copied');
        copyBtn.innerHTML = `${ICON_COPY}<span>複製指令給 Cursor</span>`;
      }, 1800);
    });
  }

  if (slide.type === 'cover-demo') {
    elReading.querySelectorAll('[data-arc-lesson]').forEach((btn) => {
      btn.addEventListener('click', () => jumpToLesson(Number(btn.dataset.arcLesson)));
    });
    initMiniGameDemo();
  }

  if (slide.type === 'layer-dissector') {
    elReading.querySelectorAll('[data-layer]').forEach((btn) => {
      btn.addEventListener('click', () => {
        const key = btn.dataset.layer;
        state.dissector[key] = !state.dissector[key];
        renderReadingColumn(slide);
      });
    });
    const testBtn = document.getElementById('dissector-test-btn');
    if (testBtn) {
      testBtn.addEventListener('click', () => {
        if (!state.dissector.js) return;
        state.dissector.testClicks += 1;
        renderReadingColumn(slide);
      });
    }
  }

  if (slide.type === 'checklist') {
    elReading.querySelectorAll('[data-check-idx]').forEach((box) => {
      box.addEventListener('change', () => {
        state.checks[Number(box.dataset.checkIdx)] = box.checked;
      });
    });
  }
}

function renderReadingColumn(slide) {
  elReading.innerHTML = `
    <div class="slide-body">
      <h1>${escapeHtml(slide.title)}</h1>
      <p class="lead">${escapeHtml(slide.lead)}</p>
      ${renderBodyContent(slide)}
    </div>
    ${renderPromptBar(slide)}
  `;
  bindSlideInteractions(slide);
}

function initMiniGameDemo() {
  const canvas = document.getElementById('demo-canvas');
  const startBtn = document.getElementById('demo-start');
  const statsEl = document.getElementById('demo-stats');
  if (!canvas || !startBtn || !statsEl) return;

  const ctx = canvas.getContext('2d');
  let playing = false;
  let score = 0;
  let timeLeft = 20;
  let basketX = canvas.width / 2 - 36;
  const basketW = 72;
  const basketH = 12;
  let items = [];
  let keys = { a: false, d: false };
  let lastTick = 0;
  let secondTimer = 0;
  let spawnTimer = 0;

  function drawIdle(label) {
    ctx.fillStyle = '#141414';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = '#F4F4F1';
    ctx.font = '700 15px "Noto Sans TC", sans-serif';
    ctx.textAlign = 'center';
    ctx.fillText(label, canvas.width / 2, canvas.height / 2);
  }

  function resetGame() {
    score = 0;
    timeLeft = 20;
    basketX = canvas.width / 2 - basketW / 2;
    items = [];
    playing = true;
    lastTick = performance.now();
    secondTimer = 0;
    spawnTimer = 0;
    startBtn.textContent = '重新開始';
    statsEl.textContent = `SCORE ${score} · ${timeLeft}s`;
    stopGameLoop();
    state.gameRaf = requestAnimationFrame(loop);
  }

  function loop(now) {
    if (!canvas.isConnected || !playing) return;
    const dt = Math.min(0.05, (now - lastTick) / 1000);
    lastTick = now;

    secondTimer += dt;
    if (secondTimer >= 1) {
      secondTimer -= 1;
      timeLeft -= 1;
      if (timeLeft <= 0) {
        playing = false;
        statsEl.textContent = `FINAL ${score} · 0s`;
        drawIdle(`時間到！本次得分：${score} 分`);
        return;
      }
    }

    if (keys.a) basketX -= 260 * dt;
    if (keys.d) basketX += 260 * dt;
    basketX = Math.max(8, Math.min(canvas.width - basketW - 8, basketX));

    spawnTimer += dt;
    if (spawnTimer >= 0.55) {
      spawnTimer = 0;
      const isBomb = Math.random() < 0.22;
      items.push({
        x: 20 + Math.random() * (canvas.width - 40),
        y: -12,
        speed: isBomb ? 150 : 125 + Math.random() * 55,
        bomb: isBomb
      });
    }

    ctx.fillStyle = '#141414';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Subtle grid lines inside preview
    ctx.strokeStyle = '#262626';
    ctx.lineWidth = 1;
    for (let x = 44; x < canvas.width; x += 44) {
      ctx.beginPath();
      ctx.moveTo(x, 0);
      ctx.lineTo(x, canvas.height);
      ctx.stroke();
    }

    // Update and draw falling stars/bombs
    const nextItems = [];
    for (const it of items) {
      it.y += it.speed * dt;
      const hitY = it.y + 8 >= canvas.height - 24 && it.y - 8 <= canvas.height - 12;
      const hitX = it.x >= basketX - 6 && it.x <= basketX + basketW + 6;
      if (hitY && hitX) {
        score = it.bomb ? Math.max(0, score - 15) : score + 10;
        continue;
      }
      if (it.y < canvas.height + 16) {
        nextItems.push(it);
        ctx.fillStyle = it.bomb ? '#D92B2B' : '#FACC15';
        ctx.fillRect(it.x - 7, it.y - 7, 14, 14);
      }
    }
    items = nextItems;

    // Basket
    ctx.fillStyle = '#FFFFFF';
    ctx.fillRect(basketX, canvas.height - 22, basketW, basketH);

    statsEl.textContent = `SCORE ${score} · ${timeLeft}s`;
    state.gameRaf = requestAnimationFrame(loop);
  }

  canvas.addEventListener('pointermove', (e) => {
    if (!playing) return;
    const rect = canvas.getBoundingClientRect();
    const relX = ((e.clientX - rect.left) / rect.width) * canvas.width;
    basketX = Math.max(8, Math.min(canvas.width - basketW - 8, relX - basketW / 2));
  });

  const onKeyDown = (e) => {
    if (!canvas.isConnected) {
      window.removeEventListener('keydown', onKeyDown);
      window.removeEventListener('keyup', onKeyUp);
      return;
    }
    if (e.key === 'a' || e.key === 'A') keys.a = true;
    if (e.key === 'd' || e.key === 'D') keys.d = true;
  };

  const onKeyUp = (e) => {
    if (e.key === 'a' || e.key === 'A') keys.a = false;
    if (e.key === 'd' || e.key === 'D') keys.d = false;
  };

  window.addEventListener('keydown', onKeyDown);
  window.addEventListener('keyup', onKeyUp);
  startBtn.addEventListener('click', resetGame);
  drawIdle('點擊下方「開始試玩」，體驗第 3 堂完成後的遊戲手感');
}

function renderOverviewGrid() {
  elOverviewGrid.innerHTML = SLIDES.map((s, idx) => {
    const tag = s.lessonId === 0 ? 'COVER' : `LESSON ${pad2(s.lessonId)}`;
    return `
      <button type="button" class="ov-card ${idx === state.index ? 'active' : ''}" data-ov-idx="${idx}">
        <span class="ov-meta">${tag} · SLIDE ${pad2(idx + 1)}</span>
        <span class="ov-title">${escapeHtml(s.title)}</span>
      </button>
    `;
  }).join('');

  elOverviewGrid.querySelectorAll('[data-ov-idx]').forEach((btn) => {
    btn.addEventListener('click', () => {
      toggleOverview(false);
      goToSlide(Number(btn.dataset.ovIdx));
    });
  });
}

function toggleOverview(force) {
  const next = typeof force === 'boolean' ? force : !state.overviewOpen;
  state.overviewOpen = next;
  elOverviewPanel.hidden = !next;
  elBtnOverview.setAttribute('aria-expanded', String(next));
  if (next) {
    renderOverviewGrid();
    elBtnCloseOverview.focus();
  }
}

function renderFooter() {
  elCounter.textContent = `SLIDE ${pad2(state.index + 1)} / ${pad2(SLIDES.length)}`;
  elBtnPrev.disabled = state.index === 0;
  elBtnNext.disabled = state.index === SLIDES.length - 1;
}

function render() {
  const slide = SLIDES[state.index];
  renderTopRail(slide.lessonId);
  renderPlacard(slide);
  renderReadingColumn(slide);
  renderFooter();
}

// Global Controls
elBtnPrev.addEventListener('click', () => goToSlide(state.index - 1));
elBtnNext.addEventListener('click', () => goToSlide(state.index + 1));
elBtnHome.addEventListener('click', () => goToSlide(0));
elBtnOverview.addEventListener('click', () => toggleOverview());
elBtnCloseOverview.addEventListener('click', () => toggleOverview(false));

elOverviewPanel.addEventListener('click', (e) => {
  if (e.target === elOverviewPanel) toggleOverview(false);
});

elBtnFullscreen.addEventListener('click', () => {
  if (!document.fullscreenElement) {
    document.documentElement.requestFullscreen?.();
  } else {
    document.exitFullscreen?.();
  }
});

document.addEventListener('keydown', (e) => {
  if (e.metaKey || e.ctrlKey || e.altKey) return;
  const tag = document.activeElement?.tagName;
  const isFormControl = tag === 'INPUT' || tag === 'TEXTAREA' || tag === 'SELECT';

  if (e.key === 'Escape' && state.overviewOpen) {
    e.preventDefault();
    toggleOverview(false);
    return;
  }

  if (state.overviewOpen) return;

  if (e.key === 'ArrowRight' || e.key === 'PageDown') {
    e.preventDefault();
    goToSlide(state.index + 1);
  } else if (e.key === 'ArrowLeft' || e.key === 'PageUp') {
    e.preventDefault();
    goToSlide(state.index - 1);
  } else if (e.key === ' ' && !isFormControl && tag !== 'BUTTON') {
    e.preventDefault();
    goToSlide(state.index + 1);
  } else if (e.key === 'Home') {
    e.preventDefault();
    goToSlide(0);
  } else if (e.key === 'End') {
    e.preventDefault();
    goToSlide(SLIDES.length - 1);
  } else if ((e.key === 'g' || e.key === 'G') && !isFormControl) {
    e.preventDefault();
    toggleOverview();
  } else if ((e.key === 'f' || e.key === 'F') && !isFormControl) {
    e.preventDefault();
    elBtnFullscreen.click();
  } else if (['1', '2', '3', '4'].includes(e.key) && !isFormControl) {
    e.preventDefault();
    jumpToLesson(Number(e.key));
  } else if (e.key === '0' && !isFormControl) {
    e.preventDefault();
    goToSlide(0);
  }
});

window.addEventListener('hashchange', () => {
  const hashIdx = getIndexFromHash();
  if (hashIdx !== state.index) goToSlide(hashIdx);
});

state.index = getIndexFromHash();
render();
