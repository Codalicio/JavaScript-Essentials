// Hoisting:

console.log(hello());
function hello() {
    return "Hello";
};
console.log(hello());

// console.log(sorry());
// var sorry = function() {
//     return "Sorry";
// };
// console.log(sorry());

// console.log(no());
// let sorry = () => "Sorry";
// console.log(no());

// console.log(hi());
// const hi = () => "Hi everyone!";
// console.log(hi());

console.log(helloHi);
var helloHi = "Hello World!";
console.log(helloHi);

// console.log(bye);
// let bye = "bye bye!";
// console.log(bye);

console.log(welcome);
const welcome = "Welcome to the world of coding!";
console.log(welcome);
