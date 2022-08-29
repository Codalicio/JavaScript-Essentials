// Optional Chaining:
// Used mainly for 'nested objects':

const user = {
    firstName: 'Amit',
    // address: {houseNumber: 1234}
};

// let user;

console.log(user?.firstName);
console.log(user?.address);
console.log(user?.address?.houseNumber);
