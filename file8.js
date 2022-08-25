// Data types (Primitive Data Types) :

// 1.) Strings : "Amit"
// 2.) Numbers : 2, 4, 5.6
// 3.) Booleans : true, false
// 4.) undefined
// 5.) null
// 6.) BigInt
// 7.) Symbol


// typeof Operator :

console.log(typeof [1, 2]);
console.log(Array.isArray([1, 2]));

console.log(typeof "Raj");
console.log(typeof 3);
console.log(typeof false);
console.log(typeof undefined);
console.log(typeof null);
console.log(typeof BigInt(5));
console.log(typeof 125n);



let age = 22;
let firstName = "Amit";

console.log(typeof age);
console.log(typeof firstName);

// Converting a 'number' to a 'string' :

// age = (age + "");
age = String(age);
console.log(age);
console.log(typeof age);

// Converting a 'string' a to 'number' :

// firstName = +(firstName);
firstName = Number(firstName);
console.log(firstName);
console.log(typeof firstName);


let myString = "36";
console.log(myString);
console.log(typeof myString);

// myString = +(myString);
myString = Number(myString);
console.log(myString);
console.log(typeof myString);

