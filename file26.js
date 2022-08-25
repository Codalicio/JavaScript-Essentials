// Intro to Array :

// Array is a (reference data type) :

// All the reference types can be called as 'objects'!
// Thus, array is also an object.

// Arrays are ordered collection of items or elements.
// We can store any and every data types in 'arrays' :


// How to create arrays :

let fruits = ["apple", "mango", "orange", "guava"];

console.log(fruits);
console.log(typeof fruits);
console.log(fruits[1]);
console.log(Array.isArray(fruits));

fruits[1] = "grapes";
console.log(fruits);
console.log(typeof fruits);
console.log(fruits[1]);
console.log(Array.isArray(fruits));

// Or,

let numbers = [1, 2, 3, 4, 5, 67];

console.log(numbers);
console.log(typeof numbers);
console.log(numbers[4]);
console.log(Array.isArray(numbers));

// Or,

let mixed = [5, 5.6, 'Amit', null, undefined, true, 124n, {lastName : 'Raj'}, ['a', 'b']];

for (let i = 0 ; i <= mixed.length - 1; i++) {
    console.log(mixed[i]);
}

console.log(mixed);
console.log(typeof mixed);
console.log(mixed[8]);
console.log(Array.isArray(mixed));

// Objects :

let obj = {}; // Object literal
console.log(obj);
console.log(typeof obj);
console.log(Array.isArray(obj));

// Array indexing :




