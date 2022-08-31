// Invoking a function using the 'new' keyword:

function createUser(firstName, age) {
    // this = {};
    this.firstName = firstName;
    this.age = age;
};

createUser.prototype.about = function() {
    console.log(this.firstName, this.age);
};

// Work done by new keyword:
// 1.) It creates an empty object, where 'this' refers to that empty object.
// 2.) We added some properties to that empty object.
// 3.) Then, it will 'return this'.
// 4.) Then, it will add the prototype properties to the object created by 'this' on its own,
//     i.e., it will set the '__proto__' of the object created by the new keyword as the prototype of the function.

const user1 = new createUser("harshit", 18);
const user2 = new createUser("amit", 25);
console.log(user1);
console.log(user2);
user1.about();
user2.about();
