// map() method, very useful in React:
// map() method also takes callback function as an input.
// The callback function must always use the 'return' statement as it always gives a 'new array' as an output.
// map() method always gives a new array as an output after execution!

const ints = [6, 8, 5, 4];

const square = function(number) {
    return (number ** 2);
};

const squareNumber = ints.map(square);
console.log(squareNumber);

// Or,

const cubeOfNumber = ints.map((number, index) => (`${number ** 3}, Index is ${index}.`));
console.log(cubeOfNumber);

// Or,(Real-world application):

const customers = [
    {firstName: 'Amit', age: 25},
    {firstName: 'John', age: 22},
    {firstName: 'Harshit', age: 23},
    {firstName: 'Nitish', age: 21},
    {firstName: 'Garima', age: 18}
];

const customerNames = customers.map(customer => (customer["firstName"]));
console.log(customerNames);

// Thus:
const customerName = (customerFirstName) => {
    console.log(`Costumer's Name: ${customerFirstName}`);
};

customerNames.forEach(customerName);

// Or,

customerNames.forEach(customerName => {console.log(`firstName of the customer: ${customerName}.`);});

// Alternate:

for(let customerName of customerNames) {
    console.log(customerName);
};
