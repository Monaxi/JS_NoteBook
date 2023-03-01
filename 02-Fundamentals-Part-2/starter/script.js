///////////////////////////////////////
// ✅ 032.Activating Strict Mode
//       激活严格模式（Strict Mode）
'use strict';
/* 
// 举例说明
let hasDriversLicense = false;
const passTest = true;

// a bug:hasDriversLicense 写错了
// 打开严格模式会报错，不打开就会正常运行不报错，但不会显示log里的话
// if (passTest) hasDriverLicense = true;
// if (hasDriversLicense) console.log('I can drive :D');

// interface 是js的保留词，所以会报错
// const interface = 'Audio';
 */
/* 
📒 Note： 
    1. 将激活严格模式的命令写在脚本的最前面，易于编写更安全的代码，避免编写代码时的意外错误
    2. 严格模式：1) 禁止我们做某些事情；2) js悄咪咪的失败时他会将错误可视化
*/
///////////////////////////////////////



///////////////////////////////////////
// ✅ 033.Functions
//       函数
/* // 定义：是一段可以被重复使用的代码

// 创建一个函数
function logger() {
    console.log('My name is Mona');
}
// 使用这个函数（调用） calling / running /invoking function
// 且可以使用多次
logger();
logger();
logger();

// 函数也可以接收值、返回值给我们，且函数必须被调用至少一次
// 举例说明：把水果放进加工机，给我们做好的食品

function fruitProcessor(apples, oranges) {
    // console.log(apples, oranges)
    const juice = `Juice with ${apples} apples and ${oranges} oranges!`;
    return juice;
}

// 只是这样调用函数，只会显示第42行的结果
fruitProcessor(5, 0);
// 如果想要return的值，我们需要把调用的函数存储在一个变量中再输出
const appleJuice = fruitProcessor(5, 0);
console.log(appleJuice);
// 56行与53+54行有同样效果
// console.log(fruitProcessor(5, 0));

const appleOrangeJuice = fruitProcessor(2, 4);
console.log(appleOrangeJuice);

const num = Number('23')
 */
///////////////////////////////////////



///////////////////////////////////////
// ✅ 034.Function Declarations vs. Expressions
//        函数声明 及 函数表达式
/* 
// Function Declaration
function calcAge1(birthYear) {
    return 2037 - birthYear;
}
const age1 = calcAge1(1997);

// Fuction Expression
const clacAge2 = function (birthYear) {
    return 2037 - birthYear;
}
const age2 = calcAge2(1997);

console.log(age1, age2);
*/
/* 
📒 Note： 
    1. Function 实际上就是一个值
    2. 对函数的调用必须写在声明后面
*/
///////////////////////////////////////



///////////////////////////////////////
// ✅ 035.Arrow functions
//       箭头函数【必须要掌握】
/* 
// Function expression
const clacAge2 = function (birthYear) {
    return 2037 - birthYear;
}

// Arrow Function
// 格式：存储在这个变量的名称 = 要传入的值 => 要返回的值
// const calcAge3 = birthYear => 2037 - birthYear;
// const age3 = calcAge3(1997);
// console.log(age3);

// const yearsUntilRetirement = birthYear => {
//     const age = 2037 - birthYear;
//     const retirement = 65 - age;
//     return retirement;
// }

// console.log(yearsUntilRetirement(1997));

// 更多参数
const yearsUntilRetirement = (birthYear, firstName) => {
    const age = 2037 - birthYear;
    const retirement = 65 - age;
    return `${firstName} retires in ${retirement} years`;
}

console.log(yearsUntilRetirement(1997, 'Mona'));
 */
/* 
📒 Note： 
    1. 要注意根据参数和代码的数量决定使用那种函数定义形式
*/
///////////////////////////////////////



///////////////////////////////////////
// ✅ 036.Functions Calling Other Functions
//        函数调用其他函数
/* 
// 在水果加工机的基础上加一个条件：它只能用较小的水果块制作果汁
function cutFruitPieces(fruit) {
    return fruit * 4;
}

function fruitProcessor(apples, oranges) {

    // 调用新机器
    const applePieces = cutFruitPieces(apples);
    const orangePieces = cutFruitPieces(oranges);
    const juice = `Juice with ${applePieces} pieces of apples and ${orangePieces} pieces of oranges!`;
    return juice;
}

console.log(fruitProcessor(2, 3));
*/
///////////////////////////////////////



///////////////////////////////////////
// ✅ 037.Reviewing Functions
//       复习以下前面学的函数相关内容
/* 
const calcAge = function (year) {
    return 2037 - year;
}

const yearsUntilRetirement = function (birthYear, firstName) {
    const age = calcAge(birthYear);
    const retirement = 65 - age;

    if (retirement > 0) {
        console.log(`${firstName} retires in ${retirement} years!`);
        return retirement;
    } else {
        console.log(`${firstName} has already retired💐`);
        return -1;
    }
    // return retirement;
}

console.log(yearsUntilRetirement(1997, 'Mona'));
console.log(yearsUntilRetirement(1950, 'Mike'));
 */
/* 
📒 Note： 
    1. return 后面的语句不再执行。
    2. 下一行移到上一行快捷键：alt+up
    3. 同时更换相同名称的变量快捷键：选中单词后按cmd+d，改几个按几下
*/
///////////////////////////////////////



///////////////////////////////////////
// ✅ 038.Coding Challenge #1

/*
Back to the two gymnastics teams, the Dolphins and the Koalas! There is a new gymnastics discipline, which works differently.
Each team competes 3 times, and then the average of the 3 scores is calculated (so one average score per team).
A team ONLY wins if it has at least DOUBLE the average score of the other team. Otherwise, no team wins!

1. Create an arrow function 'calcAverage' to calculate the average of 3 scores
2. Use the function to calculate the average for both teams
3. Create a function 'checkWinner' that takes the average score of each team as parameters ('avgDolhins' and 'avgKoalas'), and then logs the winner to the console, together with the victory points, according to the rule above. Example: "Koalas win (30 vs. 13)".  
4. Use the 'checkWinner' function to determine the winner for both DATA 1 and DATA 2.
5. Ignore draws this time.

TEST DATA 1: Dolphins score 44, 23 and 71. Koalas score 65, 54 and 49
TEST DATA 2: Dolphins score 85, 54 and 41. Koalas score 23, 34 and 27

HINT: To calculate average of 3 values, add them all together and divide by 3
HINT: To check if number A is at least double number B, check for A >= 2 * B. Apply this to the team's average scores 😉

GOOD LUCK 😀
*/

/* 
const calcAverage = (score1, score2, score3) => {
    return (score1 + score2 + score3) / 3;
}

// Test 1
let scoreDolphins = calcAverage(44, 23, 71);
let scoreKoalas = calcAverage(65, 54, 49);
console.log(scoreDolphins, scoreKoalas);

const checkWinner = function (avgDolphins, avgKoalas) {
    if (avgDolphins >= 2 * avgKoalas) {
        return `Dolphins win 🏆 (${avgDolphins} vs. ${avgKoalas})`;
    } else if (avgKoalas >= 2 * avgKoalas) {
        return `Koalas win 🏆 (${avgKoalas} vs. ${avgDolphins})`;
    }else return `No team wins...`
}

console.log(checkWinner(scoreDolphins, scoreKoalas));

// Test 2
scoreDolphins = calcAverage(85, 54, 41);
scoreKoalas = calcAverage(23, 34, 27);
console.log(scoreDolphins, scoreKoalas);
console.log(checkWinner(scoreDolphins, scoreKoalas));
*/
///////////////////////////////////////



///////////////////////////////////////
// ✅ 039.Introduction to Arrays
//       数组简介
/* 
const friend1 = 'Wind';
const friend2 = 'Crystal';
const friend3 = 'Louisa';
// 使用数组（array）存储并表示上面的数据
const friends = ['Wind', 'Crystal', 'Louisa'];
console.log(friends);

// 另一种方式
// const years = new Array(1996, 1996, 2021, 2022);

// 单个访问数组中的元素
console.log(friends[0]);
// 查看数组的长度
console.log(friends.length);
// 访问数组中最后一个元素（访问也可以用.length表示）
console.log(friends[friends.length - 1]);

// 改变数组元素
friends[2] = 'Jane';
console.log(friends);

// 不可以替换数组
// friends = ['Bob', 'Alice'];


const firstName = 'Mona';
const mona = [firstName, 'Lau', 2037 - 1997, 'student', friends];

// friends数组不会被直接输出，而是显示为Array(3)，展开可看
console.log(mona);
// 数组长度为5
console.log(mona.length);

// Exercise
const calcAge = function (birthYear) {
    return 2037 - birthYear;
}

const years = [1990, 1997, 2002, 2019, 2022];

// 下面是一个行不通的方法，原因是：参数想要的是一个值，接收到数组会不知道怎么处理它
// calcAge(years);
const age1 = calcAge(years[0]);
const age2 = calcAge(years[1]);
const age3 = calcAge(years[years.length - 1]);
console.log(age1, age2, age3);

const ages = [calcAge(years[0]), calcAge(years[1], calcAge(years[years.length - 1]))];
console.log(ages);
 */
/* 
📒 Note： 
    1. new出来的是一个对象，括号里的参数是用来描述（构造）这个对象的
    2. const定义的变量不可变，const定义的整个数组也不可变，但是数组内的元素可以改变。（数组是对象，变量里存的是数组的引用，并没有存里面的值，所以值可以改变）
    3. 不可以直接对数组进行操作，但是可以遍历数组里的值，再进行操作
*/
///////////////////////////////////////



///////////////////////////////////////
// ✅ 040.Basic Array Operations (Methods)
//        数组的基础操作（方法）
/* 
const friends = ['Wind', 'Crystal', 'Louisa'];

// Add elements
// 1. push(): 在数组末尾加元素
const newLength = friends.push('Jane');// Last
console.log(friends);
// push函数实际是返回值的——返回的是数组的长度
console.log(newLength);

// 2. unshift(): 在数组头部加元素，也是返回数组的长度
friends.unshift('John');// First
console.log(friends);

// Remove elements
// pop(): 每调用一次就删除最后一个元素
friends.pop();// Last
const popped = friends.pop();
console.log(popped);
console.log(friends);

friends.shift();// First
console.log(friends);

// 查看元素索引
// indexOf(): 返回元素的下标
console.log(friends.indexOf('Wind')); // 0
console.log(friends.indexOf('Mona')); // -1(因为不存在)

// includes(): 返回true or fasle，使用了严格等于来检查
console.log(friends.includes('Wind')); // true
console.log(friends.includes('Mona')); // false
friends.push(23);
console.log(friends.includes('23')); // false

if (friends.includes('Wind')) {
    console.log('You have a friend called Wind');
}
*/

/* 
📒 Note： 
    1. 在数组末尾添加元素方法： 1) push() 2) unshift()
    2. 删除操作：1) pop() 2) shift()
    3. 查看元素索引：indexOf(),返回元素下标
    4. 检查元素是否存在：includes(),返回true or false,且使用严格等于
*/
///////////////////////////////////////



///////////////////////////////////////
// Coding Challenge #2

/*
Steven is still building his tip calculator, using the same rules as before: Tip 15% of the bill if the bill value is between 50 and 300, and if the value is different, the tip is 20%.

1. Write a function 'calcTip' that takes any bill value as an input and returns the corresponding tip, calculated based on the rules above (you can check out the code from first tip calculator challenge if you need to). Use the function type you like the most. Test the function using a bill value of 100.
2. And now let's use arrays! So create an array 'bills' containing the test data below.
3. Create an array 'tips' containing the tip value for each bill, calculated from the function you created before.
4. BONUS: Create an array 'total' containing the total values, so the bill + tip.

TEST DATA: 125, 555 and 44

HINT: Remember that an array needs a value in each position, and that value can actually be the returned value of a function! So you can just call a function as array values (so don't store the tip values in separate variables first, but right in the new array) 😉

GOOD LUCK 😀
*/

// Test 1
/* 
const calcTip = function (bill) {
    return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
}
console.log(calcTip(100))

const bills = [125, 555, 44];
const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
const total = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];

console.log(bills, tips, total);
*/

///////////////////////////////////////



///////////////////////////////////////
// ✅ 042.Introduction to Objects
//       对象简介
/* 
// object 用 {} 定义，内容为键值对，顺序并不重要
const mona = {
    firstName: 'Mona',
    lastName: 'Lau',
    age: 2037 - 1997,
    job: 'student',
    friends: ['Wind', 'Crystal', 'Jane']
}; */
///////////////////////////////////////



///////////////////////////////////////
// ✅ 043.Dot vs. Bracket Notation
//       如何在对象中检索数据、更改数据、点和中括号的表示法
/* 
const mona = {
    firstName: 'Mona',
    lastName: 'Lau',
    age: 2037 - 1997,
    job: 'student',
    friends: ['Wind', 'Crystal', 'Jane']
};
// 在console中显示时会按照首字母拼写排序，但这无关紧要
console.log(mona);


// 使用两种方式检索数据
// 点.
console.log(mona.lastName);
// 中括号[]
console.log(mona['lastName']);


// 对于中括号[]的使用，有一个特例如下
// 将对象key名中相同的部分存在一个变量中
const nameKey = 'Name';
// 在调用时进行如下操作依旧可以获得对象中的相应value
console.log(mona['first' + nameKey]);
console.log(mona['last' + nameKey]);
// 但使用点.就不能达到上述效果（会报错）
// console.log(mona.'last' + nameKey);

// 特例使用情况：
// 在网页上会弹出窗口，并允许输入字符串
const interestedIn = prompt('What do you want to know about Mona? Choose between firstName, lastName, age, job, and friends');
// 这种情况会显示undefined，因为mona中没有interestedIn
// console.log(mona.interestedIn);
// 但使用[]就可以，因为这里将网页中输入的字符串赋予了interestedIn，并在mona中调用了。
// console.log(mona[interestedIn]);


// 处理输入的字符串不在mona中的情况
if (mona[interestedIn]) {
    console.log(mona[interestedIn]);
} else {
    console.log('Wrong request! Choose between firstName, lastName, age, job, and friends');
}


// 使用两种方式为对象新增属性
// 点.
mona.location = 'Beijing';
// 中括号[]
mona['wechat'] = 'nn2dd_';
console.log(mona);


// Challenge
// "(Mona) has (3) friends, and her best friend is called (Wind)"
// Hint: use multiple dots to get the number of riends
console.log(`${mona.firstName} has ${mona.friends.length} friends, and her best friend is called ${mona.friends[0]}`)
 */
/* 
📒 Note： 
    1. 在有需要特例的情况，使用中括号[]表达对象中的键值对，其他情况使用点.来表示会比较简洁
*/
///////////////////////////////////////


///////////////////////////////////////
// ✅ 044.Object Methods
//        对象方法
/* 
// 将function加入object中
const mona = {
    firstName: 'Mona',
    lastName: 'Lau',
    birthYear: 1997,
    job: 'student',
    friends: ['Wind', 'Crystal', 'Jane'],
    hasDriversLicense: true,

    // 属性：值（这里的值是函数）
    // calcAge: function (birthYear) {
    //     return 2037 - birthYear;
    // }
    // 下面这种是不起作用的，需要写成上面的格式
    // function calcAge(birthYear){
    //     return 2037 - birthYear;
    // }
    
    // this的用法
    // calcAge: function () {
    //     console.log(this);
    //     return 2037 - this.birthYear;
    // }
    
    calcAge: function () {
        // 直接用this创建新属性
        this.age = 2037 - this.birthYear;
        return this.age;
    },

    getSummary: function () {
        return `${this.firstName} is a ${this.calcAge()}-year old ${mona.job}, and he has ${this.hasDriversLicense ? 'a' : 'no'} driver's license`
    }
};



// 也是可以使用点.和中括号[]来访问的（注意中括号的访问格式）
// console.log(mona.calcAge());
// console.log(mona['calcAge'](1997));

// 上述违背了make your code DRY的原则，因为在重复输入1997，如果输入错误就会出大问题，所以需要进行一定的优化
// 所以引入了一个难缠的特殊变量——this，引入后一定要先调用calcAge()才能直接调用mona.age
// console,log(mona.calcAge());
// console.log(mona.age);

// Challenge
// "(Mona) is a (40)-year old student, and she has a(no) driver's license"
console.log(mona.getSummary());
 */

/* 
📒 Note： 
    1. 前面说过function其实就是另一种类型的值，那么我们可以在对象中创建键值对，其中的值为function（我们可以在对象中添加函数）
    2. this的用法：首先看是哪个对象在调用方法（指的是方法名称前面的点.前面的anything），那么this就指向这个anything。
    3. 数组其实是一种特殊的对象，也具有一些功能（如pop(), push()等）
*/
///////////////////////////////////////




///////////////////////////////////////
// Coding Challenge #3

/*
Let's go back to Mark and John comparing their BMIs! This time, let's use objects to implement the calculations! Remember: BMI = mass / height ** 2 = mass / (height * height). (mass in kg and height in meter)

1. For each of them, create an object with properties for their full name, mass, and height (Mark Miller and John Smith)
2. Create a 'calcBMI' method on each object to calculate the BMI (the same method on both objects). Store the BMI value to a property, and also return it from the method.
3. Log to the console who has the higher BMI, together with the full name and the respective BMI. Example: "John Smith's BMI (28.3) is higher than Mark Miller's (23.9)!"

TEST DATA: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95 m tall.

GOOD LUCK 😀
*/
/* 
const mark =  {
    Name: "Mark Miller",
    mass: 78,
    height: 1.69,
    calcBMI: function () {
        return this.mass / this.height ** 2;
    }
}

const john = {
    Name: "John Smith",
    mass: 92,
    height: 1.95,
    calcBMI: function () {
        return this.mass / this.height ** 2;
    }
}

const higher = function (markBMI, johnBMI) {
    if (markBMI > johnBMI) {
        console.log(`${mark.Name}'s BMI(${mark.calcBMI()}) is higher than ${john.Name}'s BMI(${john.calcBMI()})`)
    } else {
        console.log(`${john.Name}'s BMI(${john.calcBMI()}) is higher than ${mark.Name}'s BMI(${mark.calcBMI()})`)
    }
}
higher(mark.calcBMI(), john.calcBMI());
 */
///////////////////////////////////////



///////////////////////////////////////
// ✅ 046.Iteration: The for Loop
//       for循环
/* 
// for loop keeps running while condition is TRUE
for (let rep = 1; rep <= 10; rep++){
    console.log(`Lifting weights repetition ${rep} 🏋🏻`);
} 
*/
///////////////////////////////////////


///////////////////////////////////////
// ✅ 047.Looping Arrays, Breaking and Continuing
//        对数组的循环、跳出(break)、继续(continue)
/* 
const mona = [
    'Mona',
    'Lau',
    2037 - 1997,
    'student',
    ['Michael', 'Peter', 'Steven']
];
// 创建一个空数组，使用循环存储mona数组中的数据类型
const types = [];

// 循环读取数组中的值并打印
for (let i = 0; i < mona.length; i++){
    // Reading from jonas array
    console.log(mona[i], typeof mona[i]);
    // Filling types array
    // types[i] = typeof mona[i];
    types.push(typeof mona[i]);
}

console.log(types);
 
const years = [1991, 1997, 2007, 2022];
const ages = [];

for (let i = 0; i < years.length; i++){
    // 以下两种写法都可以
    // ages[i] = 2037 - years[i];
    ages.push(2037 - years[i]);
}
console.log(ages);

// continue: 退出循环当前的迭代并进行下一个
console.log('--- ONLY STRINGS ---')
for (let i = 0; i < mona.length; i++){
    // 不是string的数据直接跳过（continue）不打印
    if (typeof mona[i] !== 'string') continue;
    console.log(mona[i], typeof mona[i]);
}

// break: 完全退出当前循环
console.log('--- BREAK WITH NUMBER ---')
for (let i = 0; i < mona.length; i++){
    // 当遇到第一个为Number数据类型时，直接跳出循环
    if (typeof mona[i] === 'number') break;
    console.log(mona[i], typeof mona[i]);
}
 */
///////////////////////////////////////


///////////////////////////////////////
// ✅ 048.Looping Backwards and Loops in Loops
//       向后循环一个数组, 循环套循环

// const mona = [
//     'Mona',
//     'Lau',
//     2037 - 1997,
//     'student',
//     ['Michael', 'Peter', 'Steven']
// ];

// // 0, 1, ..., 4
// // 4, 3, ..., 0

// for (let i = mona.length - 1; i >= 0; i--) {
//     console.log(i, mona[i]);
// }

// for (let exercise = 1; exercise < 4; exercise++){
//     console.log(`-------Starting exercise ${exercise} `);
//     for (let rep = 1; rep < 6; rep++){
//         console.log(`Exercise ${exercise}: Lifting weight repettion ${rep} 🏋🏻`);
//     }
// }

///////////////////////////////////////


///////////////////////////////////////
// ✅ 049.The while Loop
//        while循环
// for (let rep = 1; rep <= 10; rep++){
//     console.log(`Lifting weights repetition ${rep} 🏋🏻`);
// }

// while循环的写法
// let rep = 1;
// while (rep <= 10) {
//     console.log(`Lifting weights repetition ${rep} 🏋🏻`);
//     rep++;
// }
/* 
// 掷骰子，掷到 6就停
// Math.random()会随机生成一个0-1之间的数
// Math.trunc()会把小数点后面的数字抹掉只保留整数
let dice = Math.trunc(Math.random() * 6) + 1;
// console.log(dice);

while (dice !== 6) {
    console.log(`You rolled a ${dice}`);
    dice = Math.trunc(Math.random() * 6) + 1;
    if (dice === 6) console.log('Loop is about to end...')
}
 */
/* 
📒 Note： 
    1. while语句可以不依赖任何计数器变量（像for循环中的i++这种操作）

*/
///////////////////////////////////////


///////////////////////////////////////
// ✅ 050.Coding Challenge #4

/*
Let's improve Steven's tip calculator even more, this time using loops!

1. Create an array 'bills' containing all 10 test bill values
2. Create empty arrays for the tips and the totals ('tips' and 'totals')
3. Use the 'calcTip' function we wrote before (no need to repeat) to calculate tips and total values (bill + tip) for every bill value in the bills array. Use a for loop to perform the 10 calculations!

TEST DATA: 22, 295, 176, 440, 37, 105, 10, 1100, 86 and 52

HINT: Call calcTip in the loop and use the push method to add values to the tips and totals arrays 😉

4. BONUS: Write a function 'calcAverage' which takes an array called 'arr' as an argument. This function calculates the average of all numbers in the given array. This is a DIFFICULT challenge (we haven't done this before)! Here is how to solve it:
  4.1. First, you will need to add up all values in the array. To do the addition, start by creating a variable 'sum' that starts at 0. Then loop over the array using a for loop. In each iteration, add the current value to the 'sum' variable. This way, by the end of the loop, you have all values added together
  4.2. To calculate the average, divide the sum you calculated before by the length of the array (because that's the number of elements)
  4.3. Call the function with the 'totals' array

GOOD LUCK 😀
*/
const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];

const tips = [];
const total = [];
const arr = [];

const calcTip = function (bill) {
    return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
}

for (let i = 0; i < bills.length; i++){
    const tip = calcTip(bills[i]);
    // 将计算好的tips加入tips array
    tips.push(tip);
    // 将计算好的total加入total array
    total.push(bills[i] + tip);
}
// BONUS
const calcAverage = function (array) {
    let sum = 0;
    for (let i = 0; i < array.length; i++){
        sum += array[i];
    }
    let average = sum / array.length;
    return average;
}
console.log(`bills[${bills}],
tips[${tips}], 
total[${total}]`);
console.log(`The average of bills is ${calcAverage(bills)}`);
console.log(`The average of bills is ${calcAverage(tips)}`);
console.log(`The average of bills is ${calcAverage(total)}`);


///////////////////////////////////////

