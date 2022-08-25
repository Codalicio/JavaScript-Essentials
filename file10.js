// Template string :

let age = 22;
let firstName = "Amit";

// To print : My name is Amit and my age is 22 :

// Normal 'string concatenation' :

// let aboutMe = ("My name is " + firstName + " and my age is " + age + ".");
// console.log(aboutMe);

// 'String concatenation' using 'Template String' :

let aboutMe = (`My name is ${firstName} and my age is ${age}.`);
console.log(aboutMe);