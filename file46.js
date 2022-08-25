// Arrow function:

const singHappyBirthday = () => "Happy Birthday...";
const outputValue = singHappyBirthday();
console.log(outputValue);

// Or,

const sumThreeNumbers = (num1, num2, num3) => (num1 + num2 +num3);
const result = sumThreeNumbers(7, 45, 80);
console.log(result);

// Or,

// const isEven = (num) => num % 2 === 0;
// const output = isEven(11);
// console.log(output);

// Or,

const isEven = num => {
    if(num % 2 === 0) {
        return true;
    }
    return false;
};
const output = isEven(84);
console.log(output);

// Or,

// const isOdd = (num) => num % 2 !== 0;
// const outcome = isOdd(98);
// console.log(outcome);

// Or,

const isOdd = num => {
    if(num % 2 !== 0) {
        return true;
    }
    return false;
};

const answer = isOdd(99);
console.log(answer);

// Output the first character of a string:

const firstChar = str => str[0];
console.log(firstChar('neeraj'));

// Or,

const firstCharacter = str => str.slice(0, 1).toUpperCase();
console.log(firstCharacter('chhotu'));

// Or,

const firstCharAt = str => str.charAt(0).toLowerCase();
console.log(firstCharAt('Vishwajeet'));

// Or,

const findTarget = (array, target) => {
    for(let i = 0; i < array.length; i++) {
        if(array[i] === target) {
            return i;
        }
    }
    return -1;
};

const mainArray = [75, 15, 'Sumit', 'Raj', 99];
const returnedValue = findTarget(mainArray, 'Sumit');
console.log(returnedValue);
