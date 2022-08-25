// Parameter Destructuring:

// Object
// React

const person = {
    firstName: 'Amit',
    gender: 'Male',
    age: 23
};

function getDetails(obj) {
    console.log(obj.firstName);
    console.log(obj["gender"]);
    console.log(obj.age);
    console.log(obj.address);
};
getDetails(person);

// Or,

function printDetails({firstName: name, age, gender}) {
    console.log(name);
    console.log(gender);
    console.log(age);
};

printDetails(person);

// Array

const myArray = ['Amit', 'Raj', 25];
const myArrayFunc = ([firstName, lastName, age]) => (`firstName: ${firstName}, lastName: ${lastName}, age: ${age}.`);
console.log(myArrayFunc(myArray));

