// 'this' keyword in an Arrow functions:
// 'this' keyword of arrow function can't be changed!

const user1 = {
    firstName: 'Harshit',
    age: 23,
    about: () => {
        console.log(this);
        console.log(this.firstName, this.age);
    }
};

user1.about.call(user1);