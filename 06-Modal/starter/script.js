'use strict';

const modal = document.querySelector('.modal');

const overlay = document.querySelector('.overlay');

const btnCloseModal = document.querySelector('.close-modal');

// document.querySelectorAll用于选择所有该类的元素
const btnsOpenModal = document.querySelectorAll('.show-modal');
// 打开Modal时的操作
const openModal = function () {
  // 可以使用classList来调用remove等方法，多参数可以使用,隔开，而且这里的参数是classname，前面不需要加.
  modal.classList.remove('hidden');
  // 在打开modal的时候背景加阴影
  overlay.classList.remove('hidden');
};
// 关闭Modal时的操作
const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

for (let i = 0; i < btnsOpenModal.length; i++)
  btnsOpenModal[i].addEventListener('click', openModal);

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

///////////////////////////////////////
// ✅ 081.Handling an_ESC_Keypress Event

/*NOTE:
  keyboard events = global events
  无论在哪里都能触发的事件监听
  有三个参数:
  1. keyup: 手离开键盘时触发
  2. keydown: 按下某个键时触发
  3. keypress: 手指一直按住键盘某个键时触发
  如果function没有参数，则按任意键都可以调用function
  如果想知道按的键是什么，则需要传入一个参数e，这个e就可以记录你现在按下的键是什么(可以打印e.key查询)
*/

const test = function (e) {
  console.log(e);
};

document.addEventListener('keydown', function (e) {
  console.log(e.key);
  // 检查e.key是否是escape
  // 检查modal是否被hidden了,没有被hidden的话，我们想要closemodal
  // 使用classList中的contains()来检查该类中是否包含这个类
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});
