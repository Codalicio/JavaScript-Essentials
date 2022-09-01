// getters and setters, i.e., get and set methods:

class Person {
    constructor(firstName, lastName, age) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    };
    get fullName() {
        return `${this.firstName} ${this.lastName}.`;
    };
    // setName(firstName, lastName) {
    //     this.firstName = firstName;
    //     this.lastName = lastName;
    // };
    // Or,
    set fullName(fullInfo) {
        // fullInfo.split() === ['item1', 'item2', ...];
        const [firstName, lastName, age] = fullInfo.split(",");
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = +age;
    };
};

const person1 = new Person("Amit", "Raj", 25);

console.log(person1);

// console.log(person1.firstName);
// console.log(person1.lastName);
// console.log(person1.age);

// console.log(person1.fullName());
// console.log(person1.fullName);

// person1.setName("Mohit", "Sharma");
// person1.firstName = "Neeraj";
// person1.lastName = "Kumar";

// console.log(person1.firstName);
// console.log(person1.lastName);

// console.log(person1.fullName);

// Or,

person1.fullName = "Harshit, Sharma, 23";

console.log(person1);
console.log(person1.fullName);

// How split() method works:
const one = "Monu Kumar";
const [firstName, lastName] = one.split(" ");
console.log(firstName);
console.log(lastName);
