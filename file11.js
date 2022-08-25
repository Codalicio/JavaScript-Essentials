// undefined :

// 'var' and 'let' can be left undefined as a variable but that's not the case with 'const',
// i.e., when declaring a constant using 'const', you must have to give it a value.

var firstName; // (valid syntax).
console.log(firstName);
console.log(typeof firstName);

firstName = "Amit";
console.log(firstName);
console.log(typeof firstName);

let lastName;// (valid syntax).
console.log(lastName);
console.log(typeof lastName);

lastName = "raj";
console.log(firstName, lastName);
console.log(typeof lastName);

// const fullName; (invalid syntax).


// null :
// 'null' doesn't means zero (0), it simply means null (not any).

let myVariable = null;
console.log(myVariable);
console.log(typeof myVariable);

myVariable = [1, 3, 5, 7, 9];
console.log(myVariable);
console.log(myVariable[myVariable.length - 3]);
console.log(typeof myVariable);
console.log(Array.isArray(myVariable));
console.log(typeof null); // This gives 'object' as an output and it's a 'bug' (error) in JavaScript.


// BigInt
// 'BigInt' was introduced in the year 2020.
// 'BigInt' is used to store any number; i.e., integer or number greater than 'MAX_SAFE_INTEGER' (9007199254740991)!
// 'BigInt' can't be mixed with other data types; i.e., arithmetic operations can be done on two or more "BigInt's" only!

let myNumber = (Number.MAX_SAFE_INTEGER);
console.log(myNumber);
console.log(typeof myNumber);

myNumber = BigInt(123456789123456789);
console.log(myNumber);
console.log(typeof myNumber);

myNumber = 123456789123456789123456789n;
console.log(myNumber);
console.log(typeof myNumber);

myNumber = BigInt(126);
console.log(myNumber);
console.log(typeof myNumber);

myNumber = BigInt(true);
console.log(myNumber);
console.log(typeof myNumber);

myNumber = BigInt(false);
console.log(myNumber);
console.log(typeof myNumber);

// Or,

let num1 = BigInt(120);
let num2 = 45n;

const sumTwoBigInt = () => {
    return ((num1 + num2) / 3n);
}

console.log(sumTwoBigInt());


