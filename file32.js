// while loop in arrays:

// let i = 0;
// while(i <= 10) {
//     console.log(i);
//     i++;
// }

const fruits = ["apple", "mango", "grapes"];
const fruits1 = [];
let i = 0;
while(i < fruits.length) {
    fruits1.push(fruits[i].toUpperCase());
    i++;
}

console.log(fruits1);
