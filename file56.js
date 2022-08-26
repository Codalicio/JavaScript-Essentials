// Important Array Methods:

const numbers = [4, 5, 8, 85];

const myFunc = (number, index) => {
    console.log(`Index is ${index}, ${number} * 2 = ${number * 2}.`);
};

// for(let i = 0; i < numbers.length; i++) {
//     console.log(myFunc(numbers[i], i));
// };


// forEach() method:
// forEach() method takes argument as a callback function.

numbers.forEach(myFunc);

// Or,

const numbs = [4,5,6,7,8,9,10,11,12];

const myFunc2 = (numb, i) => {
    console.log(`Index is ${i}, Number is ${numb}, ${numb} * 3 = ${numb * 3}.`);
};

numbs.forEach(myFunc2);

// Or,

const integers = [5, 7, 9];

integers.forEach(
    function (num, i) {console.log(`Index is ${i}, Number is ${num}, ((${num} * 3) - 2) = ${(num * 3) - 2}.`)}
);

// Or,

integers.forEach(
    function(number) {
        console.log(`${number * 2}`);
    }
);

// Or, (Real-world Example):

const users = [
    {firstName: 'Amit', age: 25},
    {firstName: 'John', age: 22},
    {firstName: 'Harshit', age: 23},
    {firstName: 'Nitish', age: 21},
    {firstName: 'Garima', age: 18}
];

// users.forEach(
//     function(user) {
//         console.log(user["firstName"]);
//     }
// );

// Also, you can use arrow function in place of an anonymous function as a callback for forEach Array Method:

users.forEach((user, index) => {console.log(`${user["firstName"]}, Index is ${index}.`);});

// Alternate:

// for(let user of users) {
//     console.log(user.firstName);
// };

// map() method, very useful in React:
// map() method also takes callback function as an input.
// The callback function must always use the 'return' statement as it always gives a 'new array' as an output.

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

// filter() method:
// filter() method also takes a callback function as an input.
// The callback function of filter() method must always 'return' a 'Boolean value'; i.e., either 'True or False'.

const numbArray = [1, 3, 2, 4, 6, 9];

// Even Numbers:

const isEven = number => number % 2 === 0;

const evenNumbers = numbArray.filter(isEven);
console.log(evenNumbers);

evenNumbers.forEach(number => console.log(number));

// Or,
// Odd Numbers:

const oddNumbers = numbArray.filter(number => number % 2 !== 0);
console.log(oddNumbers);

oddNumbers.forEach(number => console.log(number));

// Alternate:

const isOdd = (number) => {
    return (number % 2 !== 0);
};

const oddNumbersArray = numbArray.filter(isOdd);
console.log(oddNumbersArray);

const odd = number => console.log(number);

oddNumbersArray.forEach(odd);

// reduce() method:

