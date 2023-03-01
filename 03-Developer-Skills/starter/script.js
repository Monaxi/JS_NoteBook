// emoji 快捷键 ctrl+cmd+space
// Remember, we're gonna use strict mode in all scripts now!
'use strict';
// 可使用.prettierrc更改各种格式的设置
// 具体方法访问Google上的prettier->三->options
/* 
const x = 23;
if (x === 23) console.log(23);

// 当只有一个参数的时候，不想看到参数被括起来，可以用.prettierrc设置
const calcAge = birthYear => 2037 - birthYear;

console.log(1997);
 */
// cmd + k -> 清理终端内容

///////////////////////////
// ✅ 059.Use Google, StackOverflow and MDN
//       学会使用谷歌、StackOverflow 和 MDN

// PROBLEM 1:
// We work for a company building a smart home thermometer. Our most recent task is this: "Given an array of temperatures of one day, calculate the temperature amplitude(温度幅度). Keep in mind that sometimes there might be a sensor error（传感器错误）."
/* 
const temperatures = [3, -2, -6, -1, 'error', 9, 13, 17, 15, 14, 9, 5];
 */
// 1) Understanding the problem
// - 什么是温度幅度？ Ans: 高低温度差
// - 如何计算最高温度和最低温度？
// - 传感器错误是什么样的？当出现时要做什么？ Ans: 出现错误会有‘error’字样，当出现时需要忽略它

// 2) Breaking up into sub-problems
// - 怎么忽视传感器错误的结果
// - 寻找最高温度和最低温度
// - 用最大值减去最小值并返回
/* 
const calcTempAmplitude = function (temps) {
  // 需要做的research:寻找数组中的最大值
  let max = temps[0];
  let min = temps[0];
  for (let i = 0; i < temps.length; i++) {
    const curTemp = temps[i];
    if (typeof temps[i] !== 'number') continue;
    if (temps[i] > max) max = temps[i];
    if (temps[i] < min) min = temps[i];
  }
  console.log(max, min);
  return max - min;
};

const amplitude = calcTempAmplitude(temperatures);
console.log(amplitude);
 */
// PROBLEM 2:
// Function should now receive 2 arrays of temps

// 1) Understanding the problem
// - With 2 arrays, should we implement functionality twice? NO! Just merge two arrays

// 2) Breaking up into sub-problems
// - Merge 2 arrays

// Array.concat()用法
// const array1 = ['a', 'b', 'c'];
// const array2 = ['d', 'e', 'f'];
// const array3 = array1.concat(array2);
/* 
const calcTempAmplituBug = function (t1, t2) {
  const temps = t1.concat(t2);
  console.log(temps);
  // 需要做的research:寻找数组中的最大值
  let max = temps[0];
  let min = temps[0];
  for (let i = 0; i < temps.length; i++) {
    const curTemp = temps[i];
    if (typeof temps[i] !== 'number') continue;
    if (temps[i] > max) max = temps[i];
    if (temps[i] < min) min = temps[i];
  }
  console.log(max, min);
  return max - min;
};

const amplitudeNew = calcTempAmplitudeNew([3, 5, 1], [9, 0, 5]);

console.log(amplitudeNew);
 */
///////////////////////////////////////

///////////////////////////////////////
// ✅ 061.Debugging with the Console and BreakPoints
/* 
const measureKelvin = function () {
  const measurement = {
    type: 'temp',
    unit: 'celsius', // 单位: 摄氏度
    // C. FIX
    // 将输入的字符串转换为Number类型，有以下两种方法，可达到同样的效果
    // value: Number(prompt('Degrees celsius:')),
    // value: +prompt('Degrees celsius:'),
    value: 10,
  };
  // B. FIND
  // console.log(measurement);
  // 用表格的形式显示
  // console.table(measurement);

  // console.log(measurement.value);
  // console.warn(measurement.value);
  // console.error(measurement.value);

  const kelvin = measurement.value + 273;
  return kelvin;
};
// A. IDENTIFY
console.log(measureKelvin());

// Using a debugger
const calcTempAmplitudeBug = function (t1, t2) {
  const temps = t1.concat(t2);
  console.log(temps);
  // 需要做的research:寻找数组中的最大值
  // 这里加入一个bug
  let max = 0;
  let min = 0;
  for (let i = 0; i < temps.length; i++) {
    const curTemp = temps[i];
    if (typeof temps[i] !== 'number') continue;
    //如果想要在代码中debug，只需要在这里加入下面这句话，相当于在这里加了一个断点
    // debugger;
    if (temps[i] > max) max = temps[i];
    if (temps[i] < min) min = temps[i];
  }
  console.log(max, min);
  return max - min;
};
const amplitudeBug = calcTempAmplitudeBug([3, 5, 1], [9, 4, 5]);
// A) IDENTIFY
console.log(amplitudeBug);
 */
///////////////////////////////////////

///////////////////////////////////////
// ✅ 062.Coding Challenge #1

/*
Given an array of forecasted maximum temperatures, the thermometer displays a string with these temperatures.

Example: [17, 21, 23] will print "... 17ºC in 1 days ... 21ºC in 2 days ... 23ºC in 3 days ..."

Create a function 'printForecast' which takes in an array 'arr' and logs a string like the above to the console.

Use the problem-solving framework: Understand the problem and break it up into sub-problems!

TEST DATA 1: [17, 21, 23]
TEST DATA 2: [12, 5, -5, 0, 4]
*/
// 1) Understanding the problem
// - Array transformed to string, separated by ...
// - What is the X days? Answer: index + 1

// 2) Breaking up into sub-problems
// - Transform array into string
// - Transform each element to string with ºC
// - Strings needs to contain day (index + 1)
// - Add ... between elements and start and end of string
// - Log string to console
/* 
const temp1 = [17, 21, 23];
const temp2 = [12, 5, -5, 0, 4];

const printForecast = function (arr) {
  // 方法1
  // 方法1会在log时出现换行现象，为了解决这个问题可以采用方法2
  // for (let i = 0; i < arr.length; i++) {
  //   console.log(`... ${arr[i]}ºC in ${i + 1} days `);
  // }
  let str = ''; // 定义一个空字符串str
  for (let i = 0; i < arr.length; i++) {
    // 将每次获得的字符串加在空字符串后面就实现了不换行输出
    str += `${arr[i]}ºC in ${i + 1} days...`;
  }
  console.log('...' + str);
};

printForecast(temp1);
 */
///////////////////////////////////////
