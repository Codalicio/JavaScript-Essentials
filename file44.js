// Basics of functions:
// function declaration (Anonymous function):

// console.log("Happy Birthday...");
// console.log("Happy Birthday...");
// console.log("Happy Birthday...");

// function singHappyBirthday() {
//     for(let i = 1; i <= 10; i++) {
//         console.log(i);
//         console.log("Happy Birthday...");
//     }
// };
// singHappyBirthday();

// Or,
// function twoPlusFour() {
//     console.log(2 + 4);
// };
// twoPlusFour();

// DRY :-> Don't repeat yourself.
// Reusable function:
// 'num1' and 'num2' are called parameters.

// function sumOfTwo(num1, num2) {
//     return (num1 + num2);
// }

// const returnedValue = sumOfTwo(+prompt("Enter num1:"), +prompt("Enter num2:"));
// console.log(returnedValue);
// console.log(undefined + returnedValue);
// console.log(undefined + undefined);

// Or,

// function sumOfThree(a, b, c) {
//     return (a + b + c);
// };

// const outputValue = sumOfThree(+prompt("Enter the value of a:"), +prompt("Enter the value of b:"), +prompt("Enter the value of c:"));
// console.log(outputValue, typeof outputValue);
// console.log(2 + 3 + undefined);

// Or,

// Is even:

// function isEven(num) {
//     if(num % 2 === 0) {
//         return true;
//     }
//     return false;
// };

// console.log(isEven(45));

// Or,

// function isEven(num) {
//     return num % 2 === 0;
// };

// console.log(isEven(88));

// Or,

const isEven = (num) => num % 2 === 0;
console.log(isEven(10));

// Is odd:

const isOdd = (num) => num % 2 !== 0;
console.log(isOdd(54));

// Output the first character of a string:

function firstChar(str) {
    return str[0];
};
console.log(firstChar('Amit Raj'));

// Using slice(); method:

function firstCharAt(str) {
    return str.slice(0, 1);
};

console.log(firstCharAt('Amit Raj'));

// Using charAt(); method:

function firstCharacter(str) {
    return str.charAt(0).toLowerCase();
};
console.log(firstCharacter('Amit Raj'));

// function
// input: Array, target
// output: index of target if target is present otherwise (-1).

function findTarget(array, target) {
    for(let i = 0; i < array.length; i++) {
        if(array[i] === target) {
            return i;
        }
    }
    return -1;
};

const myArray = [1, 2, 'Amit', 3, 'Raj'];
const answer = findTarget(myArray, 'Raj');
console.log(answer);
