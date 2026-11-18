const canvas = document.getElementById('game-canvas');
const ctx = canvas.getContext('2d');
const scoreEl = document.getElementById('score');
const timerEl = document.getElementById('timer');
const restartBtn = document.getElementById('btn-restart');

let score = 0;
let timeLeft = 20;
let paddleX = 230;
const paddleW = 96;
const paddleH = 14;
let items = [];
const keys = { left: false, right: false };

window.addEventListener('keydown', (e) => {
  if (e.key === 'ArrowLeft') keys.left = true;
  if (e.key === 'ArrowRight') keys.right = true;
});

window.addEventListener('keyup', (e) => {
  if (e.key === 'ArrowLeft') keys.left = false;
  if (e.key === 'ArrowRight') keys.right = false;
});

function startGame() {
  score = 0;
  timeLeft = 20;
  paddleX = canvas.width / 2 - paddleW / 2;
  items = [];
  scoreEl.textContent = score;
  timerEl.textContent = timeLeft;

  // Bug 3：每次按重新開始都沒有清除舊的 setInterval 與 requestAnimationFrame，
  // 導致計時器跟遊戲迴圈重複疊加，越玩越快！
  setInterval(() => {
    timeLeft -= 1;
    timerEl.textContent = timeLeft;
    // Bug 4：完全沒有檢查 timeLeft <= 0 就停止遊戲，秒數會一路變成負數 -1, -2, -3...
  }, 1000);

  requestAnimationFrame(gameLoop);
}

function gameLoop() {
  ctx.fillStyle = '#141414';
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  // Bug 1：左右移動方向寫反了（按左加 X、按右減 X），而且沒有邊界限制，平台會走出畫面消失！
  if (keys.left) paddleX += 6;
  if (keys.right) paddleX -= 6;

  if (Math.random() < 0.035) {
    items.push({
      x: 20 + Math.random() * (canvas.width - 40),
      y: -14,
      speed: 2.5 + Math.random() * 1.5,
      isBomb: Math.random() < 0.28
    });
  }

  const remaining = [];
  for (const item of items) {
    item.y += item.speed;

    const hitY = item.y + 8 >= canvas.height - 28 && item.y - 8 <= canvas.height - 14;
    const hitX = item.x >= paddleX && item.x <= paddleX + paddleW;

    if (hitX && hitY) {
      // Bug 2：獎懲顛倒！接到炸彈反而 +50 分，接到黃色星星竟然 -10 分！
      if (item.isBomb) {
        score += 50;
      } else {
        score -= 10;
      }
      scoreEl.textContent = score;
      continue;
    }

    if (item.y < canvas.height + 20) {
      remaining.push(item);
      ctx.fillStyle = item.isBomb ? '#d92b2b' : '#facc15';
      ctx.fillRect(item.x - 8, item.y - 8, 16, 16);
    }
  }
  items = remaining;

  // 繪製玩家白色平台
  ctx.fillStyle = '#ffffff';
  ctx.fillRect(paddleX, canvas.height - 28, paddleW, paddleH);

  requestAnimationFrame(gameLoop);
}

// 初始待機畫面
ctx.fillStyle = '#141414';
ctx.fillRect(0, 0, canvas.width, canvas.height);
ctx.fillStyle = '#f4f4f1';
ctx.font = 'bold 16px sans-serif';
ctx.textAlign = 'center';
ctx.fillText('點擊右下角「開始 / 重新開始」測試這款故障小遊戲', canvas.width / 2, canvas.height / 2);

restartBtn.addEventListener('click', startGame);
