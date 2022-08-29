// methods:
// function defined inside an object as a value, also called methods:
// 'this' is the object in which it is written.
// 'this' used inside an arrow function refers to the window object!
// 'this' inherits the object properties inside which the method is used!

function personInfo() {
    console.log(`Person's name is ${this.firstName} and person's age is ${this.age}.`);
};

const person1 = {
    firstName: 'Sonu',
    age: 23,
    // about: function() {
    //     console.log(this);
    //     console.log(`Person's name is ${this.firstName} and person's age is ${this.age}.`);
    // }
    about: personInfo
};

console.log(person1.firstName);
console.log(person1["age"]);
person1.about();

const person2 = {
    firstName: 'Amit',
    age: 25,
    // about: function() {
    //     console.log(this);
    //     console.log(`Person's name is ${this.firstName} and person's age is ${this.age}.`);
    // }
    about: personInfo
};

console.log(person2.firstName);
console.log(person2["age"]);
person2.about();

const person3 = {
    firstName: 'Monu',
    age: 21,
    // about: function() {
    //     console.log(this);
    //     console.log(`Person's name is ${this.firstName} and person's age is ${this.age}.`);
    // }
    about: personInfo
};

console.log(person3.firstName);
console.log(person3["age"]);
person3.about();

personInfo();
