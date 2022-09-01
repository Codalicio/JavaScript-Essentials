// Same method in 'sub class' overrides that particular same method of the super class,
// if it is invoked by the base class:

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

const animal1 = new Animal("Tom", 2);

console.log(animal1);
console.log(animal1.eat());
console.log(animal1.isSuperCute());
console.log(animal1.isCute());

console.log(Animal.prototype);

console.log(Object.getPrototypeOf(animal1));
console.log(animal1.__proto__);

console.log(Object.getPrototypeOf(animal1) === Animal.prototype);
console.log(animal1.__proto__ === Animal.prototype);

// for(let key in animal1) {
//     console.log(key);
// };

// Here Dog is called as 'sub class' or 'derived class' which is created by extending the 'base class':

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

const dog1 = new Dog("Tommy", 1, 45);

console.log(dog1);
console.log(dog1.eat());
console.log(dog1.isSuperCute());
console.log(dog1.isCute());
console.log(dog1.run());

console.log(Dog.prototype);

console.log(Object.getPrototypeOf(dog1));
console.log(dog1.__proto__);

console.log(Object.getPrototypeOf(dog1) === Dog.prototype);
console.log(dog1.__proto__ === Dog.prototype);

// Important, to note:
console.log(Animal.prototype === Dog.prototype);
console.log(animal1.__proto__ === dog1.__proto__);
