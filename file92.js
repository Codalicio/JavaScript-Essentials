// super class and sub-class:

class Animal {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    eat() {
        return `${this.name} is eating.`;
    };
    isSuperCute() {
        return this.age <= 1;
    };
    isCute() {
        return true;
    };
};

class Dog extends Animal {
    constructor(name, age, speed) {
        super(name, age);
        this.speed = speed;
    };
    eat() {
        return `Modified text: ${this.name} eats a lot!`;
    };
    run() {
        return `${this.name} is running at ${this.speed}km/hr.`;
    };
};

const animal1 = new Animal("Sheru", 5);
console.log(animal1);
console.log(animal1.eat());
