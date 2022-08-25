// callback functions:

function myFunc(callback) {
    console.log("Hello there! I'm a function.");
    console.log(callback('Sumit'));
    console.log("Hello World!");
};

const myFunc2 = (name) => `Inside myFunc2, and your name is ${name}.`;

myFunc(myFunc2);
