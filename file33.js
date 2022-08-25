// for of loop in arrays:

const fruits = ["apple", "mango", "grapes", "fruit4", "fruit5"];
const fruits1 = [];

for(let fruit of fruits) {
    fruits1.push(fruit.toUpperCase());
}
console.log(fruits1);
