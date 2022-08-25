// Spread Operator:

// Spread Operator in arrays:

const array1 = [1, 2, 3];
const array2 = [5, 6, 7];

const newArray = [...array1, ...array2, 8, 9];
console.log(newArray);

const strArray = [..."abc"];
console.log(strArray);

// Integers are not iterables whereas strings and arrays are iterables.
const numbs = [..."123456789"];
console.log(numbs);

// Spread Operator in objects:

const obj1 = {
    key1: "value1",
    key2: "value2",
    key1: "value9"
};
console.table(obj1);

const obj2 = {
    key1: "value-unique",
    key3: "value3",
    key4: "value4"
};

// const newObject = {...obj1, ...obj2, name: 'Amit'};
const newObject = {...obj2, ...obj1, name: "Amit", age: 23};
console.table(newObject);

const strObj = {..."abc"};
console.table(strObj);

const arrayObj = {...["item1", "item2"]};
console.table(arrayObj);

const alphabet = {..."abcdefghijklmnopqrstuvwxyz"};
// console.table(alphabet);
console.table(alphabet[16]);
