// find() method:

const myArray = ["Hello", "bat","cat", "dog", "Lion"];

// function isLength3(string) {
//     return string.length === 3;
// };

const ans = myArray.find(string => string.length === 3);
console.log(ans);

// Or, (Real-world Application):

const users = [
    {
        userId: 1,
        userName: "Amit"
    },
    {
        userId: 2,
        userName: "Raj"
    },
    {
        userId: 3,
        userName: "Monu"
    },
    {
        userId: 4,
        userName: "Neeraj"
    },
    {
        userId: 5,
        userName: "Vishwajeet"
    }
];

const myUser = users.find(user => user["userId"] === 5);
console.table(myUser);
