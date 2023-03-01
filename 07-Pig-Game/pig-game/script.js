'use strict';
// 一些方便写的变量
const diceEl = document.querySelector('.dice');
const score0El = document.getElementById('score--0');
const score1El = document.getElementById('score--1');
const current0El = document.getElementById('current--0');
const current1El = document.getElementById('current--1');
const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');

const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

let scores, currentScore, activePlayer, playing;

// 一些初始界面的操作
const init = function () {
  scores = [0, 0];
  currentScore = 0;
  activePlayer = 0;
  playing = true;
  player0El.classList.add('player-active');
  player1El.classList.remove('player-active');
  // 隐藏筛子图片
  diceEl.classList.add('hidden');
  player0El.classList.remove('player--winner');
  player1El.classList.remove('player--winner');

  score0El.textContent = 0;
  score1El.textContent = 0;
  current0El.textContent = 0;
  current1El.textContent = 0;
};
init();

const switchPlayer = function () {
  // document.getElementById(`score--${activePlayer}`).textContent = currentScore;
  currentScore = 0;
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  // 转换状态
  document
    .querySelector(`.player--${activePlayer}`)
    .classList.remove('player-active');
  activePlayer = activePlayer === 0 ? 1 : 0;
  player0El.classList.toggle('player--active');
  player1El.classList.toggle('player--active');
};

// 点击Roll Dice
btnRoll.addEventListener('click', function () {
  // 1. 随机生成一个1-6的数
  const dice = Math.trunc(Math.random() * 6) + 1;
  // 2. 显示相应数字的骰子图片
  diceEl.classList.remove('hidden');
  diceEl.src = `dice-${dice}.png`;
  console.log(diceEl.src);
  // 3. 判断是否骰子数为1
  if (dice !== 1) {
    // 不是：在当前玩家的currentscore中叠加
    currentScore += dice;
    document.getElementById(`current--${activePlayer}`).textContent =
      currentScore;
  } else {
    // 是：切换玩家
    switchPlayer();
  }
});

// 点击hold键
btnHold.addEventListener('click', function () {
  if (playing) {
    // 获取当前分数
    scores[activePlayer] += currentScore;
    document.getElementById(`score--${activePlayer}`).textContent =
      scores[activePlayer];
    // 判断当前的分数是否超过100分
    if (scores[activePlayer] >= 100) {
      // 结束游戏
      playing = false;
      // 骰子藏起来
      diceEl.classList.add('hidden');
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add('player--winner');
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove('player--active');
    } else {
      switchPlayer();
    }
  }
});

btnNew.addEventListener('click', init);
