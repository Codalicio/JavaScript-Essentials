// Methods of Arrays :
// Arrays are mutable!

/*
1.) push();
2.) pop();
3.) shift();
4.) unshift();
*/

// Array methods 'push() and pop()' are faster than 'shift() and unshift()'.

// 1.) push(); :

let fruits = ["mango", "apple", "orange"];

console.log(fruits);

let pushedFruit = [fruits.push("grapes")];
console.log(fruits);
console.log(`pushedFruit is ${pushedFruit}.`);
console.log(typeof pushedFruit);
console.log(Array.isArray(pushedFruit));

// 2.) pop(); :

let poppedFruit = [fruits.pop()];
console.log(fruits);
console.log(`poppedFruit is ${poppedFruit}.`);
console.log(typeof poppedFruit);
console.log(Array.isArray(poppedFruit));

// 3.) shift(); :

console.log(fruits);
let removedFruit = [fruits.shift()];
console.log(fruits);
console.log(`removedFruit is ${removedFruit}.`);
console.log(typeof removedFruit);
console.log(Array.isArray(removedFruit));

// 4.) unshift(); :

console.log(fruits);

let addedFruit = [fruits.unshift("banana", "guava")];
console.log(fruits);
console.log(`addedFruit is ${addedFruit}.`);
console.log(typeof addedFruit);
console.log(Array.isArray(addedFruit));



