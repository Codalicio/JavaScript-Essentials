// some() method:
// Takes a callback function as an input.
// The callback function should return a boolean value as an output.
// The some() method also returns a boolean value as an output.

const numbers = [59, 3, 9, 14, 19, 12];

const ans = numbers.some(number => number % 2 !== 0);
console.log(ans);

const result = numbers.some(number => number % 2 === 0);
console.log(result);

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

const output = products.some(productItem => productItem.price > 60000);
console.log(output);
