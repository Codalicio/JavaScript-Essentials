// Rules for naming a variable :

// 1.) You cannot start the variable name with a 'number'.

// var 1value = 10; (invalid variable name).

var value1 = 9; // (valid variable name).
console.log(value1);
console.log(typeof value1);
console.log(length.value1);
// console.log(value1[0]);
console.log(10 - value1);
console.log(value1 + 10); // Addition.
console.log(value1 - 9); // Subtraction.
console.log(value1 * 3); // Multiplication.
console.log(value1 / 9); // Division.
console.log(value1 % 4); // The modulus gives the remainder after division.
console.log(value1 ** 2); // Square of 'value1'.
console.log(value1 ** 3); // Cube of 'value1'.
console.log(value1 ** 0.5); // Square-root of 'value1'.

// 2.) You can use only underscore (_) or dollar symbol ($), when assigning variable names.

let $firstName = "Amit"; // (valid variable name).
console.log($firstName);

let last$Name = "Raj"; // (valid variable name).
console.log(last$Name);

const _firstName = "Sonu"; // (valid variable name).
console.log(_firstName); // (Snake case writing).

const last_Name = "Kumar"; // (valid variable name).
console.log(last_Name); // (Snake case writing).

// 3.) You cannot use spaces when writing a variable name.
// let first Name = "Monu";  (invalid variable name).
// console.log(first Name);

// Convention for writing variable names :

// * Start the variable name with a small letter and use camelCase writing :

let myApp = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(myApp); // (camelCase writing).
console.log(typeof myApp);
console.log(length.myApp);
console.log(myApp[5]);
console.log(Array.isArray(myApp));