// How to clone Array:

// let array1 = ["item1", "item2"];
// let array2 = ["item1", "item2"];
// let array2 = array1.slice(0);
// let array2 = [].concat(array1);
// let array2 = [...array1];

// array1.push("item3");
// console.log(`array1: ${[array1]}`);
// console.log(`array2: ${[array2]}`);
// console.log(array1 === array2);


// How to concatenate two arrays:

let array1 = ["item1", "item2"];
let newArray = ["mango", "apple", "grapes"];
// let array2 = array1.slice(0).concat("item3", "item4").concat(newArray);
let array2 = [...array1, ...newArray, "item3", "item4"];
console.log(array2);

