// for in loop in arrays:

const fruits = ["apple", "mango", "grapes", "fruit4", "fruit5"];
const fruits1 = [];

for(let index in fruits) {
    fruits1.push(fruits[index].toUpperCase());
}
console.log(fruits1);