// static methods and static properties:

class Animal {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    // All static methods and properties are directly related to Animal class:
    static eat() {
        return `Animals love to eat!`;
    };
    static greet() {
        return `Hello all!`;
    };
    static petName = "Rocky";
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
    // All static methods and properties are directly related to Dog class:
    static eat() {
        return `Dogs love bones!`;
    };
    static bark() {
        return `Bow-bow everyone!`;
    };
    static myFavPet = "Chihuahua";
    eat() {
        return `Modified text: ${this.name} eats a lot!`;
    };
    run() {
        return `${this.name} is running at ${this.speed}km/hr.`;
    };
};

const animal1 = new Animal("Tommy", 4);

console.log(animal1)
console.log(animal1.eat());
// console.log(animal1.greet());
console.log(animal1.myFavPet);

console.log(Animal.eat());
console.log(Animal.greet());
// console.log(Animal.bark());

// console.log(animal1.petName);
console.log(Animal.petName);
// console.log(Animal.myFavPet);

const dog1 = new Dog("Bob", 2, 63);

console.log(dog1);
console.log(dog1.run());
console.log(dog1.eat());
// console.log(dog1.bark());
// console.log(dog1.petName);
// console.log(dog1.myFavPet);

console.log(Dog.eat());
console.log(Dog.greet());
console.log(Dog.bark());
console.log(Dog.petName);

console.log(Dog.myFavPet);
