// __proto__ property or chaining of an object:

const obj1 = {
    key1: "value1",
    key2: "value2"
};

// __proto__ :
// __proto__ is written as [[Prototype]] in official ecmascript documentation and Chrome Developer's Tool(CDT).
// Thus __proto__ === [[Prototype]].
// But __proto__ ([[Prototype]]) is different from 'prototype'.
// __proto__ ([[Prototype]]) is for 'Objects' whereas prototype is for 'functions'!

// const obj2 = {};
// There is also a second approach to create an empty object:
const obj2 = Object.create(obj1); // returns an empty object, where obj1 is a [[Prototype]] of obj2.

obj2.key3 = "value3";
obj2.key2 = "uniqueValue";

console.table(obj2);
console.log(obj2.key3);
console.log(obj2.key2);
console.log(obj2.key1);

console.table(obj2.__proto__);
console.table(obj2.__proto__ === obj1);
