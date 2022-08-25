// function returning function:

function myFunc() {
    const hello = () => "Hello, World!";
    return hello;
};

const ans = myFunc();
// console.log(ans());
const output = ans();
console.log(output);

// Higher order function:
// 'callback functions' or 'function returning function' is said to be 'Higher-order functions'.

const callbackFunc = () => {
    return {name: 'Amit', age: 25};
};

const func = callback => {
    console.table(callbackFunc());
    function myFunc() {
        return "Hey There!";
    };
    return myFunc;
    // return myFunc();
};

const answer = func(callbackFunc);
// console.log(answer);
const rightAnswer = answer();
console.log(rightAnswer);

// Or,

const saySomething = callback => {
    callback();
    return function() {
        return "India is my country.";
    };
};

const callback = () => {
    console.log("Coding/Programming is fun!");
};

const returnedValue = saySomething(callback);
const accurateResult = returnedValue();
console.log(accurateResult);
