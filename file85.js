// Creating a function (Constructor function) to create many objects (Part - 5),
// Using 'this' keyword to create an object inside the function.
// Using 'new' keyword that sets the __proto__ of the created object as prototype of the function on it's own:
// Constructor functions starts with a 'capital letter'.

// Constructor function:
function CreateUser(firstName, lastName, email, age, address) {
    // const user = {};
    // const user = Object.create(createUser.prototype); // Creates an empty object with prototype of the function as its __proto__ !
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
    this.age = age;
    this.address = address;
};

// console.log(createUser.prototype);

CreateUser.prototype.about = function() {
    return (`${this.firstName} ${this.lastName} is ${this.age} years old!`);
};
CreateUser.prototype.is18 = function() {
    return this.age >= 18;
};
CreateUser.prototype.sing = function() {
    return (`Toon toon tana tan hahaha lalala hoo...!`);
};
CreateUser.prototype.sum = function(a, b) {
    return (a + b);
};

const user1 = new CreateUser('Harshit', 'Singh', 'harshsingh@gmail.com', 28, 'My address');
const user2 = new CreateUser('Amit', 'Raj', 'rajamitnine@gmail.com', 14, 'Hajipur, Bihar - 844101');
const user3 = new CreateUser('Sumit', 'Mishra', 'sumitmishra@gmail.com', 36, 'Patna, Bihar');
console.log(user1);
console.log(user2);
console.log(user3);

console.log(user1.about());
console.log(user2.about());
console.log(user3.about());

console.log(user1.is18());
console.log(user2.is18());
console.log(user3.is18());

console.log(user1.sing());
console.log(user2.sing());
console.log(user3.sing());

console.log(user1.sum(71, 10));
console.log(user2.sum("Amit", " Raj"));
console.log(user3.sum(12, 4));
