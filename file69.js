// Maps Object (Map Data Structure):
// map is an iterable.
// It stores 'Data' in an ordered fashion!
// It stores 'key: value' pairs like (objects).
// Duplicate 'keys' are not allowed unlike objects.

// Difference between maps and objects:
// Objects can only have 'string or symbol' as a key!
// But in maps, you can use any 'DataType' as a key like 'array, number, string, etc...'.

const person = {
    firstName: "Harshit",
    age: 17,
    1: "one"
}; // Object literal

console.log(person.firstName);
console.log(person['age']);
console.log(person[1]);

for(let key in person) {
    console.log(key, typeof key);
};

// Map() object:

const person1 = new Map();
console.log(person1);

person1.set('gender', 'male');
person1.set(7, 'userId');
// person1.set([1, 2, 3], 'oneTwoThree');
// person1.set({4: "four"}, 'oneTwoThreeFour')
console.log(person1);

console.log(person1.get(7));
console.log(person1.get('gender'));
console.log(person1.keys());

for(let key of person1.keys()) {
    console.log(key, typeof key);
};

for(let key of person1) {
    console.log(key);
};

for(let [key, value] of person1) {
    console.log(key, value);
};

const user = new Map([['firstName', 'Amit'], ['age', 25]]);
console.log(user);

for(let [key, value] of user) {
    console.log(`${key} : ${value}`);
} ;

// How to add additional 'key, value' pairs in an object:

const user1 = {
    id: 1,
    firstName: 'Amit'
};

const user2 = {
    id: 2,
    firstName: 'Garima'
};

const extraInfo = new Map();
extraInfo.set(user1, {age: 35, gender: 'male'});
extraInfo.set(user2, {age: 27, gender: 'Female'});
console.log(extraInfo);

console.log(extraInfo.get(user1).age);
console.log(extraInfo.get(user1).gender);

console.log(extraInfo.get(user2).age);
console.log(extraInfo.get(user2).gender);
