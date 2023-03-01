'use strict';
/* 
// Document是一种特殊的对象，允许在js中选择html中的内容，是DOM的入口
// document.querySelector(选择器)，其中选择器是class用.classname，是id用#idname;
console.log(document.querySelector('.message').textContent);
 */
/* 
NOTE:
1. 什么是DOM？
  DOM(Document Object Model, 文档对象模型)，是HTML文档的结构化表示，允许我们使用js访问HTML元素和样式并可以操作他们
2. DOM可以做什么
  更改文本、更改HTML的属性、更改CSS样式等。
  DOM相当于一个HTML和JS代码之间的一个桥梁。
3. DOM属于JS嘛？
  不属于，DOM实际上是Web API的一部分，js可以直接使用。
*/

//////////////////////////////
// ✅ 072. Selecting and Manipulating Elements
//    对元素的选择与操作
/* 
// 将message类中的文本修改为其他文本
document.querySelector('.message').textContent = '🎉 Correct Number!';
console.log(document.querySelector('.message').textContent);

// 更改number类和score类的内容
document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 10;

// 更改并获取输入的数值（value）
document.querySelector('.guess').value = 23;
console.log(document.querySelector('.guess').value);
 */
////////////////////////////////////

////////////////////////////////////
// ✅ 073.Handling Click Events
//        解决点击的事件
// addEventListener(1, 2):添加时间监听器，参数是
// 1.传入的事件类型，告诉浏览器当进行该操作时，执行函数
// 2.事件处理函数，传入一个函数值，该函数包含需要做的操作，这个函数在执行时不会立即被调用，而是事件发生后才会被调用
/* 
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  if (!guess) {
    document.querySelector('.message').textContent = '⛔️ No Number!';
  }
});
 */
////////////////////////////////////

////////////////////////////////////
// ✅ 074. Implementing the Game Logic
// 需要在外部对秘密数字进行对照
let secretNumber = Math.trunc(Math.random() * 20) + 1;
// 方便对score进行修改,不要总是依赖DOM来存储数值
let score = 20;
// 让？部分显示随机数
// document.querySelector('.number').textContent = secretNumber;

let highScore = 0;

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);
  // when player is no input
  if (!guess) {
    // document.querySelector('.message').textContent = '⛔️ No Number!';
    displayMessage('⛔️ No Number!');
    // when player is wins
  } else if (guess < 1 || guess > 20) {
    // document.querySelector('.message').textContent =
    //   '⚠️ Please input a number between 1 and 20!';
    displayMessage('⚠️ Please input a number between 1 and 20!');
  } else if (guess === secretNumber) {
    document.querySelector('.message').textContent = '🎉 Correct Number!';

    // 更改body中的属性，需要如下操作,被赋予的值需要以字符串的形式表示
    document.querySelector('body').style.backgroundColor = '#60b347';

    //当猜对时，改变？处的宽度，并显示数字
    document.querySelector('.number').style.width = '30rem';
    document.querySelector('.number').textContent = secretNumber;
    // 当猜对时看score是否是highscore
    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }
    // when guess is too high
  } else if (guess !== secretNumber) {
    if (score > 1) {
      // document.querySelector('.message').textContent =
      //   guess > secretNumber ? '📈 Too high!' : '📉 Too low!';
      displayMessage(guess > secretNumber ? '📈 Too high!' : '📉 Too low!');
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      // document.querySelector('.message').textContent = '💥 You lost the game!';
      displayMessage('💥 You lost the game!');
      document.querySelector('.score').textContent = 0;
    }
  }
  // else if (guess > secretNumber) {
  //   if (score > 1) {
  //     document.querySelector('.message').textContent = '📈 Too high!';
  //     score--;
  //     document.querySelector('.score').textContent = score;
  //   } else {
  //     document.querySelector('.message').textContent = '💥 You lost the game!';
  //     document.querySelector('.score').textContent = 0;
  //   }
  //   // when guess is too low
  // } else if (guess < secretNumber) {
  //   if (score > 1) {
  //     document.querySelector('.message').textContent = '📉 Too low!';
  //     score--;
  //     document.querySelector('.score').textContent = score;
  //   } else {
  //     document.querySelector('.message').textContent = '💥 You lost the game!';
  //     document.querySelector('.score').textContent = 0;
  //   }
  // }
});

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;

  // document.querySelector('.message').textContent = 'Start guessing...';
  displayMessage('Start guessing...');
  document.querySelector('.score').textContent = score;
  // document.querySelector('.number').textContent = secretNumber;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});

///////////////////////////////////////
// Coding Challenge #1

/* 
Implement a game rest functionality, so that the player can make a new guess! Here is how:

1. Select the element with the 'again' class and attach a click event handler
2. In the handler function, restore initial values of the score and secretNumber variables
3. Restore the initial conditions of the message, number, score and guess input field
4. Also restore the original background color (#222) and number width (15rem)

GOOD LUCK 😀
*/
