// objects || Reference Data Type:

// arrays are good but not sufficient for real world data.
// objects store 'key: value' pairs.
// objects don't have index.

// How to create objects:

const person = {
    name: 'Ajay',
    age: 23,
    hobbies: ["music", "sleeping", "programming"]
}
// console.table(person);
// console.log(typeof person);


// How to access data from objects:
const array = [1, 2, 3];
// console.log(person.name);
// console.log(person["age"]);
const newArray = (person["hobbies"]);
// newArray.push("amit", "raj");
console.log(newArray);
const array1 = [...newArray, ...array];
console.log(array1);

// How to add 'key-value' pairs to objects:

person["gender"] = "male";

