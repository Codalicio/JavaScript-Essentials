const user1 = {
    firstName: "Amit",
    age: 25,
    about: function() {
        console.log(this);
        console.log(this.firstName, this.age);
    }
};
user1.about();

// Don't do this mistake:

const myFunc = user1.about.bind(user1);
myFunc();

// const myFunc2 = myFunc.bind(user1);
// myFunc2();
