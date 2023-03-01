'use strict';

// Chapter 093. Scoping in practice
/* 
function calcAge(birthYear) {
  const age = 2037 - birthYear;

  function printAge() {
    let output = `${firstName}, you are ${age}, born in ${birthYear}`;
    console.log(output);

    if (birthYear >= 1981 && birthYear <= 1998) {
      var millenial = true;
      const firstName = 'Steven';

      const str = `Oh, and you're a millenial, ${firstName}`;
      console.log(str);

      function add(a, b) {
        return a + b;
      }

      output = `NEW OUTPUT`;
    }
    console.log(millenial);
    // add(2, 3);
    // console.log(add(2, 3))
    console.log(output);
  }
  printAge();

  return age;
}

const firstName = 'Mona';
calcAge(1997);
 */

/* 
// Chapter 095. Hoisting and TDZ in practice
// Variables
console.log(me);
// console.log(job);
// console.log(year);

var me = 'Mona';
let job = 'student';
const year = 1997;

// Functions
console.log(addDecl(2, 3)); // 5
// console.log(addExpr(2, 3)); // ReferenceError
// console.log(addArrow(2, 3)); // TypeError

function addDecl(a, b) {
  return a + b;
}

const addExpr = function (a, b) {
  return a + b;
};

var addArrow = (a, b) => a + b;

// Example： 少用var！！！
console.log(numProducts);
if (!numProducts) deleteShoppingCart();

var numProducts = 10;

function deleteShoppingCart() {
  console.log('All products deleted!');
}


var x = 1;
let y = 2;
const z = 3;

// Var 会创建一个属性在全局窗口对象上Windows,在某些情况下，会产生一些影响
console.log(x === window.x);
console.log(y === window.y);
console.log(z === window.z);

 */
/* 
// Chapter 097. this keyword in practice
//              this 关键字的各种用法

// Example 1. 全局范围下的this指向window
// console.log(this); // this在全局范围是窗口对象

// Example 2. 作为常规函数调用的this 指向undefined
const calcAge = function (birthYear) {
  console.log(2037 - birthYear); // 40
  // console.log(this); // undefined
};

// 作为常规函数调用，this为undefined
calcAge(1997);

// Example 3. 箭头函数的this即为父函数或父范围的this指针所指
const calcArrow = birthYear => {
  console.log(2037 - birthYear); // 40
  // console.log(this); // Window
};

// 箭头函数被调用，这时箭头函数没有自己的this关键字，那他就用他的父函数或者父范围的this keyword，这里的箭头函数没有父范围，所以作用域就被查找到了全局去，全局的范围就是window
calcArrow(1997);

// Example 4. 作为Method方法调用的this指向正在调用该方法的对象
const mona = {
  year: 1997,
  calcAge: function () {
    console.log(this); // mona Object
    console.log(2037 - this.year);
  },
};
// 这里是作为Method来调用，因此指向正在调用该方法的对象——mona
// 所以这里输出的是2037 - 1997 = 40
mona.calcAge(); // 40

const matilda = {
  year: 2017,
};

matilda.calcAge = mona.calcAge;
// 这样做以后，在console中输入matilda，可以看到calcAge也在matilda中————Method borrowing 方法借用

// 这里正在调用方法的对象是matilda，因此this指向matilda
// 所以这里输出的是2037 - 2017 = 20
matilda.calcAge(); // 20

const f = mona.calcAge;
console.log(f); // 输出了 calcAge()函数的内容
f(); // undefined 这里的f 属于普通函数调用，所以this关键字也是undefined
 */

// Chapter 098. Regular functions vs. Arrow functions
//              常规函数 vs. 箭头函数
/* 
// NOTE: 这里的mona对象不算是一个块级，没有自己的作用域
const mona = {
  firstName: 'mona',
  year: 1997,
  calcAge: function () {
    console.log(this); // mona Object
    console.log(2037 - this.year);
  },
  // 用arrow function表示的great function
  great: () => console.log(`Hey ${this.firstName}`),
};

// great 是箭头函数，因此这里的this为父范围的this，父范围为全局范围，所以this为window object
mona.great(); // Hey undefined
console.log(this); // window
console.log(this.firstName); // undefined
 */

/* 
// 如果用var声明变量，它会在全局创建这个属性，会变得很危险，如下例

var firstName = 'Matilda';

const mona = {
  firstName: 'mona',
  year: 1997,
  calcAge: function () {
    console.log(this); // mona Object
    console.log(2037 - this.year);
  },
  // 用arrow function表示的great function
  great: () => console.log(`Hey ${this.firstName}`),
};

// great 是箭头函数，因此这里的this为父范围的this，父范围为全局范围，所以this为window object
// 但window中的firstName为Matilda，因为用var声明变量，它便会在全局对象上创建这个属性。
mona.great(); // Hey Matilda
console.log(this); // window
console.log(this.firstName); // Matilda

// IMPORTANT： 永远不要用箭头函数作为Method进行调用，也不要用var来声明变量！！！
 */

const mona = {
  firstName: 'mona',
  year: 1997,
  calcAge: function () {
    console.log(this); // mona Object
    console.log(2037 - this.year);

    const isMillenial = function () {
      console.log(this); // undefined
      console.log(this.year >= 1981 && this.year <= 1998);
    };
    // 常规函数调用 this = undefined
    isMillenial();
  },
  // Method表示，指向正在调用它的object
  great: function () {
    console.log(this); // mona object
    console.log(`Hey ${this.firstName}`);
  },
};
mona.great(); // mona object & Hey mona
mona.calcAge(); // undefined

// 关于上例的解决方法
/* 
// 一、使用self变量。
const mona = {
  firstName: 'mona',
  year: 1997,
  calcAge: function () {
    // console.log(this); // mona Object
    // console.log(2037 - this.year);

    // IMPORTANT：在这里有个改变
    const self = this; // self = mona object

    const isMillenial = function () {
      console.log(self); // mona object
      // console.log(this.year >= 1981 && this.year <= 1998);
      console.log(self.year >= 1981 && self.year <= 1998); // true
    };
    isMillenial();
  },
  // 常规函数表示
  great: function () {
    console.log(this); // mona object
    console.log(`Hey ${this.firstName}`);
  },
};
mona.great(); // Hey mona
mona.calcAge(); // true
 */

// 二、使用箭头函数
