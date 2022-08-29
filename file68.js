// Sets (It is iterable):
// It stores 'Data'.
// Sets also have it's own methods.
// No index-based access!
// Order of items is not guaranteed.
// Sets only have 'uniques items', no duplicates allowed (it'll be ignored).

const numbers = new Set([4, 5, 9]);
console.log(numbers);

const string = new Set("Amit");
console.log(string);

const emptySet = new Set();
console.log(emptySet);

const items = ['item1', 'item2', 'item3'];

emptySet.add(7);
emptySet.add(7);
emptySet.add(9);
emptySet.add(1);
emptySet.add(3);
emptySet.add(4);
emptySet.add(11);
emptySet.add(785);
emptySet.add(['item1', 'item2']);
emptySet.add(['item1', 'item2']);
emptySet.add(items);
emptySet.add(items);

console.log(emptySet);

if(emptySet.has(items)) {
    console.log(`items is present: ${items}.`);
} else {
    console.log(`items is not present.`);
};

// Set iterables:

for(let item of emptySet) {
    console.log(item);
};

// Or,

const myArray = [1, 2, 4, 4, 5, 6, 5, 6];

const uniqueElements = new Set(myArray);
console.log(uniqueElements);

// Finding the 'length of a set':

console.log(uniqueElements.size);
// Also,
let length = 0;
for(let element of uniqueElements) {
    length++;
};
console.log(length);

// -------------------------------

console.log(myArray);

for(let uniqueElement of uniqueElements) {
    console.log(uniqueElement);
};

// Or, (Real-world Application):

const persons = [
    {userId: 1},
    {userId: 2},
    {userId: 3},
    {userId: 4},
    {userId: 5},
];

const users = new Set(persons);
console.log(users);

let lengthOfUsers = 0;
for(let person of users) {
    lengthOfUsers++;
};
console.log(lengthOfUsers);

for(let user of users) {
    console.log(user);
};
console.log(users.size);
