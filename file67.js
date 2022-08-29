// iterables,
// on which we can use the 'for of loop':

// 'Strings' and 'Arrays' are iterables.

// String Iterables:

const firstName = "Harshit";

for(let char of firstName) {
    console.log(char);
};

// Array Iterables:

const items = ['item1', 'item2', 'item3'];

for(let item of items) {
    console.log(item);
};

// Object Iterables:
// Objects are not iterables.

// const users = {
//     key1: 'value1',
//     key2: 'value2'
// };

// for(user of users) {
//     console.log(user);
// };

// array like object,
// which has the '.length()' property,
// and also that can be accessed using their 'index'.

// Strings are array like object.

const lastName = "Vashistha";
console.log(lastName.length);
console.log(lastName[2].toUpperCase());
