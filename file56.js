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
