// Creating a function to create many objects (Part - 2):

const userMethods = {
    about : function() {
        return (`${this.firstName} ${this.lastName} is ${this.age} years old!`);
    },
    is18 : function() {
        return this.age >= 18;
    }
};

function createUser(firstName, lastName, email, age, address) {
    const user = {};
        user.firstName = firstName;
        user.lastName = lastName;
        user.email = email;
        user.age = age;
        user.address = address;
        user.about = userMethods.about;
        user.is18 = userMethods.is18;
        return user;
};

const user1 = createUser('Harshit', 'Singh', 'harshsingh@gmail.com', 28, 'My address');
const user2 = createUser('Amit', 'Raj', 'rajamitnine@gmail.com', 14, 'Hajipur, Bihar - 844101');
const user3 = createUser('Sumit', 'Mishra', 'sumitmishra@gmail.com', 36, 'Patna, Bihar');
console.table(user1);
console.table(user2);
console.table(user3);

console.log(user1.about());
console.log(user2.about());
console.log(user3.about());

console.log(user1.is18());
console.log(user2.is18());
console.log(user3.is18());
