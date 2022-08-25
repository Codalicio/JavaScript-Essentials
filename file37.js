// Difference between dot and bracket notation:
// Keys are in strings by default.

const key = "email";
const newKey = "phone number";

const person = {
    name: 'Sumit',
    age: 23,
    hobbies: ["guitar", "music", "programming"]
}

person["full Name"] = person.name + ' Raj';
person["gender"] = 'Male';
console.table(person);
console.log(person["name"]);
console.log(person["age"]);
console.log(person["hobbies"]);
console.log(person["full Name"]);
console.log(person["gender"]);

person[key] = 'rajamitnine@gmail.com';
console.table(person);

person[newKey] = 7257938190;
console.table(person);

// Ternary Operator:
// const myVal = 0;
// const data = myVal > 0 ? "Yes, that's right!" : "No, that's wrong!"; 
// console.log(data);
