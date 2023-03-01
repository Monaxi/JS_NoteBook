/*
////////////////////////////////////
// ✅ 009.Linking a JavaScript File
let js = "amazing";
console.log(40 + 8 + 23 - 10);

////////////////////////////////////
// ✅ 010.Values and Variables
//        数值和变量
console.log("Jonas");
console.log(23);

let firstName = "Matilda";

console.log(firstName);
console.log(firstName);
console.log(firstName);

// Variable name conventions
let jonas_matilda = "JM";
let $function = 27;

let person = "jonas";
let PI = 3.1415;

let myFirstJob = "Coder";
let myCurrentJob = "Teacher";

let job1 = "programmer";
let job2 = "teacher";

console.log(myFirstJob);

////////////////////////////////////
// ✅ 012. Data Type
//        值的数据类型
let javascriptIsFun = true;
console.log(javascriptIsFun);

// console.log(typeof true);
console.log(typeof javascriptIsFun);
// console.log(typeof 23);
// console.log(typeof 'Jonas');

javascriptIsFun = 'YES!';
console.log(typeof javascriptIsFun);

let year;
console.log(year);
console.log(typeof year);

year = 1991;
console.log(typeof year);

console.log(typeof null);

////////////////////////////////////
// ✅ 013.let, const 和 var 的区别与使用
let age = 30;
age = 31;

const birthYear = 1991;
// birthYear = 1990;
// const job;

var job = 'programmer';
job = 'teacher'

lastName = 'Schmedtmann';
console.log(lastName);

////////////////////////////////////
// ✅ 014.Basic Operators
//       基本运算符
// Math operators
const now = 2037;
const ageJonas = now - 1991;
const ageSarah = now - 2018;
console.log(ageJonas, ageSarah);

console.log(ageJonas * 2, ageJonas / 10, 2 ** 3);
// 2 ** 3 means 2 to the power of 3 = 2 * 2 * 2

const firstName = 'Jonas';
const lastName = 'Schmedtmann';
console.log(firstName + ' ' + lastName);

// Assignment operators
let x = 10 + 5; // 15
x += 10; // x = x + 10 = 25
x *= 4; // x = x * 4 = 100
x++; // x = x + 1
x--;
x--;
console.log(x);

// Comparison operators
console.log(ageJonas > ageSarah); // >, <, >=, <=
console.log(ageSarah >= 18);

const isFullAge = ageSarah >= 18;

console.log(now - 1991 > now - 2018);

////////////////////////////////////
// ✅ 015.Operator Precedence 
//       运算符优先级
const now = 2037;
const ageJonas = now - 1991;
const ageSarah = now - 2018;

console.log(now - 1991 > now - 2018);

let x, y;
x = y = 25 - 10 - 5; // x = y = 10, x = 10
console.log(x, y);

const averageAge = (ageJonas + ageSarah) / 2;
console.log(ageJonas, ageSarah, averageAge);
*/

////////////////////////////////////
// ✅ 016.Coding Challenge #1

/*
Mark and John are trying to compare their BMI (Body Mass Index), which is calculated using the formula: BMI = mass / height ** 2 = mass / (height * height). (mass in kg and height in meter).

1. Store Mark's and John's mass and height in variables
2. Calculate both their BMIs using the formula (you can even implement both versions)
3. Create a boolean variable 'markHigherBMI' containing information about whether Mark has a higher BMI than John.

TEST DATA 1: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95 m tall.
TEST DATA 2: Marks weights 95 kg and is 1.88 m tall. John weights 85 kg and is 1.76 m tall.

GOOD LUCK 😀
*/

/*
////////////
// My code
////////////
// Mark
let markWeights = 78;
let markHigher = 1.69;
// John
let johnWeights = 92;
let johnHigher = 1.95;

// BMI formula
let BMIOfMark = markWeights / (markHigher ** 2);
let BMIOfJohn = johnWeights / (johnHigher ** 2);
console.log(BMIOfMark, BMIOfJohn);
*/


/* 
// teacher's code

// const massMark = 78;
// const heightMark = 1.69;
// const massJohn = 92;
// const heightJohn = 1.95;

const massMark = 95;
const heightMark = 1.88;
const massJohn = 85;
const heightJohn = 1.76;


const BMIMark = massMark / heightMark ** 2;
const BMIJohn = massJohn / (heightJohn * heightJohn);
const MarkHigherBMI = BMIMark > BMIJohn;

console.log(BMIMark, BMIJohn, MarkHigherBMI);
 */


/* 
////////////////////////////////////
// ✅ 018.Taking Decisions: if / else Statements
//        判断语句（注意let存在块级作用域）

const age = 15;
const isOldEnough = age >= 18;
if (isOldEnough) { 
    console.log('Mona can start driving license 🚗');
}
else {
    const yearsLeft = 18 - age;
    console.log(`Mona is too young. Wait another ${yearsLeft} years :)`);
}

let century;
const birthYear = 1997;
if (birthYear <= 2000) {
    century = 20;
} else {
    century = 21;
}
console.log(century);
 */

////////////////////////////////////
// ✅ 019.Coding Challenge #2

/*
Use the BMI example from Challenge #1, and the code you already wrote, and improve it:

1. Print a nice output to the console, saying who has the higher BMI. The message can be either "Mark's BMI is higher than John's!" or "John's BMI is higher than Mark's!"
2. Use a template literal to include the BMI values in the outputs. Example: "Mark's BMI (28.3) is higher than John's (23.9)!"

HINT: Use an if/else statement 😉

GOOD LUCK 😀
*/
/* 
// const massMark = 78;
// const heightMark = 1.69;
// const massJohn = 92;
// const heightJohn = 1.95;

const massMark = 95;
const heightMark = 1.88;
const massJohn = 85;
const heightJohn = 1.76;


const BMIMark = massMark / heightMark ** 2;
const BMIJohn = massJohn / (heightJohn * heightJohn);

if (BMIMark > BMIJohn) {
    console.log(`Mark's BMI(${BMIMark}) is higher than John's(${BMIJohn}).`)
} else {
    console.log(`John's BMI(${BMIJohn}) is higher than Mark's(${BMIMark}).`)
} 
*/
/* 
////////////////////////////////////
// ✅ 020.Type Conversion and Coercion
//       类型转换及类型强制转换


// type conversion
const inputYear = '1991';
console.log(Number(inputYear), inputYear);
console.log(Number(inputYear) + 18);

console.log(Number('Jonas'));
console.log(typeof NaN);

console.log(String(23), 23);

// type coercion
// 字符串+数字+字符这种 中间的数字会因运算符触发强制转换机制自动处理为字符串输出
console.log('I am ' + 23 + ' years old');
console.log('23' - '10' - 3);
console.log('23' / '2');

let n = '1' + 1; // '11'
n = n - 1;
console.log(n);
 */

/* 
////////////////////////////////////
// ✅ 021.Truthy and Falsy Values
//        真值与假值

// 5个假值：0, '', undefined, null, NaN(Not a Number)
// 当boolean为以上值时，会变为false

console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean('Mona'));
console.log(Boolean({}));
console.log(Boolean(''));

const money = 0;
// money被强制转换为boolean类型
if (money) {
    console.log("Don't spend it all ;)");
} else {
    console.log("You should get a job!");
}

// 
let height = 0;
if (height) {
    console.log("YAY! Height is defined!");
} else {
    console.log("Height is UNDEFINED");
}
 */

/* 
////////////////////////////////////
// ✅ 022.Equality Operators: == vs. ===
//       等号（== vs. ===）
// ===:严格相等运算符（strict equality operator），不执行类型强制
// == :相等运算符（loose equality operator），可以执行类型强制，比如字符串的数字18可以等于数字18
const age = 18;
if (age === 18) console.log("You just became an adult(strict)");
if (age == 18) console.log("You just became an adult(loose)");

// prompt：提示
const favourite = prompt("what's your favourite number?");

console.log(favourite);
console.log(typeof favourite);

// 这里使用===的话不会出现log中的语句
if (favourite == 23) { // '23' == 23
    console.log('Cool! 23 is an amazing number!')
} 

// 但如果进行如下操作
// number函数只对prompt的值感兴趣
const favourite = Number(prompt("what's your favourite number?"));

console.log(favourite);
console.log(typeof favourite);

// 这里使用===就没问题了
if (favourite === 23) { // 23 == 23
    console.log('Cool! 23 is an amazing number!')
} else if (favourite === 7) {
    console.log('7 is also a cool number!')
} else {
    console.log('Number is not 23 or 7')
}

// !== : 不严格等于
if (favourite !== 23) console.log('Why not 23?')
*/

////////////////////////////////////
// ✅ 023.Logical Operators
//       基本逻辑运算符
// AND： 全真则真，否则为假
// OR： 一真则真，全假则假
// NotA NotB ：反转真假
/* 
const hasDriversLicense = true; //A 
const hasGoodVision = true; // B

// && : AND
console.log(hasDriversLicense && hasGoodVision);
// || : OR
console.log(hasDriversLicense || hasGoodVision);
// !_ : NOT
console.log(!hasDriversLicense);

// if (hasDriversLicense && hasGoodVision) {
//     console.log("Mona is able to drive!")
// } else {
//     console.log("someone else should drive!")
// }

const isTired = true; // C

console.log(hasDriversLicense && hasGoodVision && isTired);

if (hasDriversLicense && hasGoodVision && !isTired) {
    console.log("Mona is able to drive!")
} else {
    console.log("someone else should drive!")
}
 */

////////////////////////////////////
// ✅ 024.Coding Challenge #3
/*
There are two gymnastics teams, Dolphins and Koalas. They compete against each other 3 times. The winner with the highest average score wins the a trophy!

1. Calculate the average score for each team, using the test data below
2. Compare the team's average scores to determine the winner of the competition, and print it to the console. Don't forget that there can be a draw, so test for that as well (draw means they have the same average score).

juuuuuuuuuuuuuuuuuuu\uuuuuuuuu4. BONUS 2: Minimum score also applies to a draw! So a draw only happens when both teams have the same score and both have a score greater or equal 100 points. Otherwise, no team wins the trophy.

TEST DATA: Dolphins score 96, 108 and 89. Koalas score 88, 91 and 110
TEST DATA BONUS 1: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 123
TEST DATA BONUS 2: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 106

GOOD LUCK 😀
*/

/* 
// My code
// scores of two teams
// const dolphins_score_1 = 96
// const dolphins_score_2 = 108
// const dolphins_score_3 = 89

// const koalas_score_1 = 88
// const koalas_score_2 = 91
// const koalas_score_3 = 110

// // average score of two teams
// let averageScoreOfDolphins = (dolphins_score_1 + dolphins_score_2 + dolphins_score_3) / 3;
// let averageScoreOfKoalas = (koalas_score_1 + koalas_score_2 + koalas_score_3) / 3;

// if (averageScoreOfDolphins > averageScoreOfKoalas) {
//     console.log(`Dolphins (${averageScoreOfDolphins}) is the winner!🏆`)
// } else if (averageScoreOfDolphins < averageScoreOfKoalas) {
//     console.log("Koalas is the winner!🏆")
// } else if (averageScoreOfDolphins === averageScoreOfKoalas) {
//     console.log("Two teams have the same average score!")
// }

// teacher's code

// const scoreDolphins = (96 + 108 + 89) / 3;
// const scoreKoalas = (88 + 91 + 110) / 3;
// console.log(scoreDolphins, scoreKoalas);

// if (scoreDolphins > scoreKoalas) {
//   console.log('Dolphins win the trophy 🏆');
// } else if (scoreKoalas > scoreDolphins) {
//   console.log('Koalas win the trophy 🏆');
// } else if (scoreDolphins === scoreKoalas) {
//   console.log('Both win the trophy!');
// }

// BONUS 1
const scoreDolphins = (97 + 112 + 80) / 3;
const scoreKoalas = (109 + 95 + 50) / 3;
console.log(scoreDolphins, scoreKoalas);

if (scoreDolphins > scoreKoalas && scoreDolphins >= 100) {
  console.log('Dolphins win the trophy 🏆');
} else if (scoreKoalas > scoreDolphins && scoreKoalas >= 100) {
  console.log('Koalas win the trophy 🏆');
} else if (scoreDolphins === scoreKoalas && scoreDolphins >= 100 && scoreKoalas >= 100) {
  console.log('Both win the trophy!');
} else {
  console.log('No one wins the trophy 😭');
}
 */
////////////////////////////////////
// ✅ 025.The switch Statement
//       switch语句的用法
const day = 'monday'

switch (day) {
    case 'monday': //day === 'monday'
        console.log('Plan course structure')
        console.log('Go to coding meetup')
        break;
    case 'tuesday': // day === 'tuesday'
        console.log('Prepare')
    case 'wednesday':
    case 'thursday':
    case 'friday':
    case 'saturday':
    case 'sunday':
    default:
        console.log('Not a valid day!')
}




////////////////////////////////////
// ✅ 026.Statements and Expressions
//        语句与表达式

// 表达式（expression）：代表、产生一定的值
3 + 4
1991
true && false && !false

// 语句（statement）：本身不产生值，仅仅是做一些操作，比如下面的if else statement 只是定义了一个str常量
if (23 > 10) {
  const str = '23 is bigger';
}

const me = 'Mona';
console.log(`I'm ${2037 - 1997} years old ${me}`);

////////////////////////////////////
// ✅ 027.The Conditional (Ternary) Operator
//        条件运算符（三元表达式）
const age = 23;
// age >= 18 ? console.log('I like to drink wine 🍷') : console.log('I like to drink water 💧');

const drink = age >= 18 ? 'wine 🍷' : 'water 💧';
console.log(drink);

let drink2;
if (age >= 18) {
  drink2 = 'wine 🍷';
} else {
  drink2 = 'water 💧';
}
console.log(drink2);

console.log(`I like to drink ${age >= 18 ? 'wine 🍷' : 'water 💧'}`);

////////////////////////////////////
// ✅ 028.Coding Challenge #4
/*
Steven wants to build a very simple tip calculator for whenever he goes eating in a resturant. In his country, it's usual to tip 15% if the bill value is between 50 and 300. If the value is different, the tip is 20%.

1. Your task is to caluclate the tip, depending on the bill value. Create a variable called 'tip' for this. It's not allowed to use an if/else statement 😅 (If it's easier for you, you can start with an if/else statement, and then try to convert it to a ternary operator!)
2. Print a string to the console containing the bill value, the tip, and the final value (bill + tip). Example: 'The bill was 275, the tip was 41.25, and the total value 316.25'

TEST DATA: Test for bill values 275, 40 and 430

HINT: To calculate 20% of a value, simply multiply it by 20/100 = 0.2
HINT: Value X is between 50 and 300, if it's >= 50 && <= 300 😉

GOOD LUCK 😀
*/

/* 
const bill = 275;
let tip = (bill >= 50 && bill <= 300) ? (bill * 0.15) : (bill * 0.20)
console.log(`The bill was ${bill}, the tip was ${tip}, and the total value ${bill+tip}`)
 */




