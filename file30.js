// for loop in arrays:

// for(i = 0; i <= 10; i++) {
//     console.log(i);
// }

let fruits = ["apple", "mango", "grapes", "banana"];
// console.log(fruits[fruits.length - 1]);

for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i].toUpperCase().toLowerCase());
}


let fruits1 = [];
for (let i = 0; i < fruits.length; i++) {
    fruits1.push(fruits[i].toUpperCase());
}
console.log(fruits1);

