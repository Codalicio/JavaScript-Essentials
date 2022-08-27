// Array methods (Revision):
// forEach (), map(), filter(), reduce() and sort():

const users = [
    {
        name: 'John',
        age: 53
    },
    {
        name: 'Amit',
        age: 32
    },
    {
        name: 'Ashmit',
        age: 18
    },
    {
        name: 'Sumit',
        age: 18
    }
];

const output = users.map(user => user.name).sort();
console.table(output);

console.table(users);

const result = users.find(user => user.name[0] === "J");
console.table(result);

users.forEach(user => console.table(`${user.age} : ${user.name}`));

const sumOfAge = users.reduce((accumulator, currentValue) => {return accumulator + currentValue.age}, 0);
console.log(sumOfAge);

const above18A = users.filter(user => user.age === 18 && user.name[0] === 'A');
console.table(above18A);

const above18 = users.filter(user => user.age === 18 || user.name[0] === 'A');
console.table(above18);
