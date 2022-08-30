// Creating a function to create many objects (Part - 3), using __proto__ :

const userMethods = {
    about: function() {
        return (`${this.firstName} ${this.lastName} is ${this.age} years old!`);
    },
    is18: function() {
        return this.age >= 18;
    },
    sing: function() {
        return (`lalala lal lala lalal he hehe he...!`);
    }
};

function createUser(firstName, lastName, email, age, address) {
    // const user = {};
    const user = Object.create(userMethods); // Creates an empty object with userMethods object as its __proto__ !
        user.firstName = firstName;
        user.lastName = lastName;
        user.email = email;
        user.age = age;
        user.address = address;
        return user;
};

const user1 = createUser('Harshit', 'Singh', 'harshsingh@gmail.com', 28, 'My address');
const user2 = createUser('Amit', 'Raj', 'rajamitnine@gmail.com', 14, 'Hajipur, Bihar - 844101');
const user3 = createUser('Sumit', 'Mishra', 'sumitmishra@gmail.com', 36, 'Patna, Bihar');
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
