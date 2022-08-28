// every method():
// It takes a callback function as an input.
// The callback function should always return a boolean value, i.e., either tru3 or false!
// every() method also return a boolean value, i.e., either true or false!

const numbers = [2, 4, 6, 8, 10];

const ans = numbers.every(number => number % 2 === 0);
console.log(ans);

// Or, (Real-world Application):

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

const answer = products.every((productItem) => productItem.price > 250);
console.log(answer);
