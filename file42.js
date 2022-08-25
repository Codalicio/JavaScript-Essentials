// objects inside array (very useful in real-world application):

const array1 = [
    {
        name: 'Amit',
        "full-name": 'Amit Raj',
        address: 'Hajipur',
        age: 25
    },
    {
        name: 'Sonu',
        "full-name": 'Sonu Kumar',
        address: 'Patna',
        age:23
    }
];

// Array Destructuring:
// let [obj1, obj2] = array1;
// console.table(obj1);
// console.table(obj2);

// const func1 = (o) => {
//     console.log(o["address"]);
// }
// func1(obj2);

// for in loop in array:
// for(key in array1) {
//     console.table(array1[key]);
// };

// for of loop in array:
// for(key of array1) {
//     console.log(key["name"]);
// };

// for loop in array:
// for(let i = 0; i < array1.length; i++) {
//     console.table(array1[i]);
// };

// while loop in arrays:
// let i = 0;
// while(i < array1.length) {
//     console.table(array1[i]);
//     i++;
// };

// do while loop in arrays:
// let i = 0;
// do {
//     console.table(array1[i]);
//     i++;
// } while (i < array1.length);

// object destructuring:
// const [obj1, obj2] = array1;
// console.table(obj1);

// const {name: myName, age: timeSpent} = obj1;
// console.log(myName);
// console.log(timeSpent);

// const {name: myName1, age: timeSpent1} = obj2;
// console.log(myName1);
// console.log(timeSpent1);

const users = [
    {
        userId: 1,
        firstName: 'Harshit',
        gender: 'Male'
    },
    {
        userId: 2,
        firstName: 'Mohit',
        gender: 'Male'
    },
    {
        userId: 3,
        firstName: 'Nitish',
        gender: 'Male'
    },
    {
        userId: 4,
        firstName: 'Garima',
        gender: 'Female'
    }
];
console.table(users);

for(let user of users) {
    console.table(user);
}

for(let user of users) {
    console.log(user.firstName);
}

