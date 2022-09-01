// Array Constructor and prototype of an Array:

let numbers = [1, 2, 3];
// console.log(Array.prototype);
// Or,
console.log(Object.getPrototypeOf(numbers));
console.log(numbers);
console.log(Array.isArray(Array.prototype));

// let numbers = new Array(1, 2, 3);
// console.log(numbers);
// console.log(Array.prototype);

// ---------------------------------------------------------------

// We can change the DataType of the prototype of a function from object to an array,
// but we can't change the prototype of an array from an array to an object:
// for Example - 1:

function hello() {
    console.log("Hello World!");
};
console.log(hello.prototype);

hello.prototype = [];
console.log(hello.prototype);

hello.prototype.push("Amit");
hello.prototype.push("Sonu");
console.log(hello.prototype.length);
console.log(hello.prototype);

// Destructuring of hello.prototype:

const [firstName, lastName] = hello.prototype;
console.log(`My fullname is ${firstName} ${lastName}.`);

// prototype of an array is an array it can't be changed to an object,
// but prototype of a function is an object and it can be changed to an array:
// for Example -2:

const myArray = [5, 6, 7];
console.log(Object.getPrototypeOf(myArray));

Array.prototype = {};
// Object.getPrototypeOf(myArray) = {};
Array.prototype.name = "Amit";
// Object.getPrototypeOf(myArray).name = 'Amit';
Array.prototype.age = 25;
// Object.getPrototypeOf(myArray).age = 25;
console.log(Array.prototype);
// console.log(Object.getPrototypeOf(myArray));

// -----------------------------------------------------------------

