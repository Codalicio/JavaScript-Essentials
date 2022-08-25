// Nested Destructuring:

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

const [user1, user2, user3, user4] = users;
console.table(user4);

const [{firstName: user1firstName, userId: user1userId}, {userId: user2userId}, , {firstName: user4firstName}] = users;
console.log(user1firstName, user1userId);
console.log(user2userId);
console.log(user4firstName);
