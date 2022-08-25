// String concatenation :

let string1 = "Amit";
let string2 = "Raj";

let fullName = (string1 + " " + string2);
console.log(fullName);

fullName = (`My name is ${string1} ${string2}.`);
console.log(fullName);

let string3 = "17";
let string4 = "10";

let newString = (string3 + string4);
console.log(newString);
console.log(typeof newString);

newString = +(newString);
console.log(newString);
console.log(typeof newString);

newString = (+string3 + +string4);
console.log(newString);
console.log(typeof newString);

