// Block scope vs function scope:

// 'let and const' are 'block scope':
// 'var' is 'function scope':

// Block scope:

{
    const firstName = "Harshit";
    console.log(firstName);
};
// console.log(firstName);

{
    const firstName = "Mohit";
    console.log(firstName);
};
// console.log(firstName);

const firstName = "Garima";
console.log(firstName);

// {
//     var firstName = "Amit";
//     console.log(firstName);
// };
// console.log(firstName);

console.log(lastName);
{
    var lastName = "Raj";
    var fullName = "Amit Raj";
    console.log(fullName);
    console.log(lastName);
};
console.log(fullName);
console.log(lastName);

{
    console.log(lastName);
};

// Or,

if(true) {
    var lastName = "Singh";
    var fullName = "Sonu Singh";
    console.log(firstName);
    console.log(fullName);
    console.log(lastName);
};
console.log(fullName);
console.log(lastName);

{
    const firstName = "monu";
};

{
    console.log(firstName);
};

if(true) {
    let userId = 1;
    console.log(userId);
};
// console.log(userId);

// function scope:

let userId = 3;
function myApp() {
    if(true) {
        var userId = 10;
        console.log(userId);
    };
    if(true) {
        console.log(userId);
    }
    console.log(userId);
};
myApp();
