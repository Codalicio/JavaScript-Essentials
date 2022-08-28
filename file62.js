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

// Or,

const products = [
    {
        productId: 1,
        productName: "Hard-Disk 1TB",
        price: 10400
    },
    {
        productId: 2,
        productName: "Mobile-Phone",
        price: 23499
    },
    {
        productId: 3,
        productName: "Dell Keyboard + Wireless-Mouse",
        price: 1259
    },
    {
        productId: 4,
        productName: "Logical Reasoning Book",
        price: 750
    },
    {
        productId: 5,
        productName: "Aloe-vera gel",
        price: 300
    },
    {
        productId: 6,
        productName: "LG Refrigerator",
        price: 45900
    },
    {
        productId: 7,
        productName: "Adidas Neo Shoe",
        price: 2559
    },
    {
        productId: 8,
        productName: "LED-TV",
        price: 27999
    },
    {
        productId: 9,
        productName: "Laptop",
        price: 55900
    },
    {
        productId: 10,
        productName: "Mobile-Cover",
        price: 249
    }
];

const lowToHigh = products.sort((a, b) => a.price - b.price);
console.table(lowToHigh);

const highToLow = products.sort((a, b) => b.price - a.price);
console.table(highToLow);
