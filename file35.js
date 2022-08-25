// Array Destructuring:

const myArray = ["value1", "value2", "value3", "value4", "value5", "value6"];

// let myVar1 = myArray[0];
// let myVar2 = myArray[1];

// console.log("Value of myVar1: " + myVar1);
// console.log("Value of myVar2: " + myVar2);

// Destructuring:

let [myResult1, myResult2, ...myNewArray] = myArray;
// myResult1 = "value changed";
console.log("Value of myResult1: " + myResult1);
console.log("Value of myResult2: " + myResult2);
console.log(myNewArray);        
