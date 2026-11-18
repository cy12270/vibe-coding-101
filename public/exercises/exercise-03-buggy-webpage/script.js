const countEl = document.getElementById('member-count');
const addBtn = document.getElementById('btn-add');
// Bug 1：這裡把 ID 拼錯成 btn-rest（HTML 裡是 btn-reset），導致程式直接報錯中斷！
const resetBtn = document.getElementById('btn-rest');
const themeBtn = document.getElementById('btn-theme');
const drawBtn = document.getElementById('btn-draw');
const winnerBox = document.getElementById('winner-box');

const candidates = ['小宇', '阿哲', '小晴', '品妍', '子軒'];

addBtn.addEventListener('click', () => {
  // Bug 2：textContent 讀出來是「文字字串」，直接 + 1 會變成 "1" + 1 = "11" -> "111"！
  countEl.textContent = countEl.textContent + 1;
});

themeBtn.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
});

drawBtn.addEventListener('click', () => {
  // Bug 3：索引範圍多加了 1（變成 1 ~ 5，但陣列有效索引是 0 ~ 4），抽到 5 時就會變成 undefined！
  const randomIndex = Math.floor(Math.random() * candidates.length) + 1;
  winnerBox.textContent = '中獎同學：' + candidates[randomIndex];
});

// 因為上面 resetBtn 是 null，這行會在 Console 噴出 TypeError 紅字！
resetBtn.addEventListener('click', () => {
  countEl.textContent = 0;
});
