// function expressions:

const singHappyBirthday = function() {
    console.log("Happy Birthday...");
};

singHappyBirthday();

// Or,

const sumThreeNumbers = function(num1, num2, num3) {
    return (num1 + num2 + num3);
};

const outputValue = sumThreeNumbers(5, 1, 3);
console.log(outputValue);

// Or,

// const isEven = function(num) {
//     if(num % 2 === 0) {
//         return true;
//     }
//     return false;
// };

// const result = isEven(7);
// console.log(result);

// Or,

const isEven = function(num) {
    return num % 2 === 0;
};

const result = isEven(9);
console.log(isEven(9));

// Or,

// const isOdd = function(num) {
//     if(num % 2 !== 0) {
//         return true;
//     }
//     return false;
// }

// const output = isOdd(11);
// console.log(output);

// Or,

const isOdd = function(num) {
    return num % 2 !== 0;
};

const output = isOdd(10);
console.log(output);

// Output the first character of a string:

const firstChar = function(str) {
    return str[0];
};

console.log(firstChar('Sonu'));

//Or,

const firstCharacter = function(str) {
    return str.slice(0, 1);
};

console.log(firstCharacter('Sonu'));

// Or,

const firstCharAt = function(str) {
    return str.charAt(0);
};

console.log(firstCharAt('Monu'));

// Or,

const findTarget = function(array, target) {
    for(let i = 0; i < array.length; i++) {
        if(array[i] === target) {
            return i;
        }
    }
    return -1;
};

const myArray = [55, 7, 8, 9, 111];
const returnedValue = findTarget(myArray, 100);
console.log(returnedValue);

