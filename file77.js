// Short Syntax for methods of an Object:
// functions inside objects are called as methods.

const user1 = {
    firstName: 'Garima',
    age: 25,
    gender: 'female',
    about() {
        console.log(this);
        console.log(this.firstName, this.gender, this.age);
    }
};

user1.about();

