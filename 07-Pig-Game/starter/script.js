'use strict';
//score0El: 0号玩家的分数，El表示element
const score0El = document.querySelector('#score--0');
// 如果使用的是id的话，对于上面句式还有一种表示方法
// getElementById('idname');
const score1El = document.getElementById('score--1');
const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');
const current0El = document.getElementById('current--0');
const current1El = document.getElementById('current--1');
const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');

// 初始化操作

let scores, currentScore, activePlayer, playing;

const init = function () {
  // // 将两个玩家的分数记录在数组中,初始化总分设为0
  scores = [0, 0];
  // 当前分数设为0
  currentScore = 0;
  // 默认玩家0
  activePlayer = 0;
  // 是否在玩设为是
  playing = true;
  // 显示一些内容
  score0El.textContent = 0;
  score1El.textContent = 0;
  current0El.textContent = 0;
  current1El.textContent = 0;
  // 游戏刚开始时不需要显示骰子
  diceEl.classList.add('hidden');
  player0El.classList.remove('player--winner');
  player1El.classList.remove('player--winner');
  player0El.classList.add('player--active');
  player1El.classList.remove('player--active');
};
init();

const switchPlayer = function () {
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  currentScore = 0;
  // activePlayer = 1 - activePlayer; 也可以，但上面的表达方式更易读
  activePlayer = activePlayer === 0 ? 1 : 0;
  // toggle():如果传入的参数已存在，则删除，如果不存在，则创建
  player0El.classList.toggle('player--active');
  player1El.classList.toggle('player--active');
};

btnRoll.addEventListener('click', function () {
  if (playing) {
    // 1. 随机掷骰子
    const dice = Math.trunc(Math.random() * 6) + 1;
    // 2. 显示相应点数的骰子
    diceEl.classList.remove('hidden');
    diceEl.src = `dice-${dice}.png`;
    // 3. 检查是否掷到了1，掷到1需要换玩家
    if (dice !== 1) {
      // 不等于1 将当前的骰子数为currentscore
      currentScore += dice;
      // 动态的改变玩家及分数
      document.getElementById(`current--${activePlayer}`).textContent =
        currentScore;
    } else {
      // 等于1 换玩家
      switchPlayer();
    }
  }
});

btnHold.addEventListener('click', function () {
  if (playing) {
    // 将currentscore加到score中
    scores[activePlayer] += currentScore;
    document.getElementById(`score--${activePlayer}`).textContent =
      scores[activePlayer];
    // 检查总分数是否>=100
    if (scores[activePlayer] >= 100) {
      // 是：结束游戏
      playing = false;
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add('player--winner');
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove('player--active');
    } else {
      // 否：更换玩家
      switchPlayer();
    }
  }
});

btnNew.addEventListener('click', init);
