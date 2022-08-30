// proto, prototype, class
// Object-oriented Programming (OOP):

// const user = {
//     firstName: 'Harshit',
//     lastName: 'Vashistha',
//     email: 'harshitvashistha@gmail.com',
//     age: 19,
//     address: 'House Number, Colony, Pin-Code, State',
//     about() {
//         console.log(`${this.firstName} ${this.lastName} is ${this.age} years old!`);
//     },
//     is18() {
//         return this.age >= 18;
//     }
// };

// user.about();

// const aboutUser = user.about;
// aboutUser.bind(user).call();

// Creating a function to create many objects:

function createUser(firstName, lastName, email, age, address) {
    const user = {};
        user.firstName = firstName;
        user.lastName = lastName;
        user.email = email;
        user.age = age;
        user.address = address;
        user.about = function() {
            console.log(`${this.firstName} ${this.lastName} is ${this.age} years old!`);
        },
        user.is18 = function() {
            return this.age >= 18;
        }
        return user;
};

const user1 = createUser('Harshit', 'Singh', 'harshsingh@gmail.com', 17, 'My address');
const user2 = createUser('Amit', 'Raj', 'rajamitnine@gmail.com', 25, 'Hajipur, Bihar - 844101');
console.table(user1);
console.table(user2);

// const is18 = user1.is18();
// console.log(is18);
const is18 = user2.is18();
console.log(is18);

const aboutUser = user1.about;
aboutUser.bind(user1).call();
// const aboutUser = user2.about;
// aboutUser.bind(user2).call();
