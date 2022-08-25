// How to iterate objects:

const person = {
    name: 'Sumit',
    age: 23,
    "person's hobbies": ["guitar", "music", "programming"]
}

// for in loop:

for(let key in person) {
    // console.log(key);
    // console.log(person[key]);
    // console.log(`${key}: ${person[key]}`);
    // console.log(key + ": " + person[key]);
    console.log(key, ": ", person[key]);
}

// Object.keys:

console.log(Object.keys(person));
console.log(typeof (Object.keys(person)));
const val = Array.isArray(Object.keys(person));
console.log(val);

for(let key of Object.keys(person)) {
    // console.log(key);
    console.log(key, ": ", person[key]);
}
