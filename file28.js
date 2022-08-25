// Primitive Data Types vs Reference Data Types :

// Primitive Data Types:
// let num1 = 6;
// let num2 = num1;
// console.log(`Value of num1 is ${num1}.`);
// console.log(`Value of num2 is ${num2}.`);
// num1++;
// console.log(`After incrementing num1:`);
// console.log(`Value of num1 is ${num1}.`);
// console.log(`Value of num2 is ${num2}.`);

// let str1 = "Amit";
// let str2 = str1;
// console.log(`Value of str1 is ${str1}.`);
// console.log(`Value of str2 is ${str2}.`);
// str1 = str1 + " Singh";
// console.log(`After redeclaring str1:`);
// console.log(`Value of str1 is ${str1}.`);
// console.log(`Value of str2 is ${str2}.`);

// Reference Data Types:
// Array:
let array3 = "abc";
let array1 = ["item1", "item2"];
let array2 = array1;
console.log(`Value of array1 is ${array1}.`);
console.log(`Value of array2 is ${array2}.`);
array1.push("item3");
console.log(`After pushing an element to array1`);
console.log(`Value of array1 is ${[array1]}.`);
console.log(`Value of array2 is ${[array2]}.`);
console.log(Array.isArray(array1));
console.log(Array.isArray(array2));

