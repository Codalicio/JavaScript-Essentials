// reduce() method:
// The first parameter should always be named as 'accumulator' and the second parameter as 'currentValue' always, as per the documentation of JavaScript!

const marks = [1, 3, 4, 7, 9, 11, 21, 8, 9, 100];

// aim: sum of all the numbers in the array - marks.

const sum = marks.reduce((accumulator, currentValue) => (accumulator + currentValue), 500);
console.log(sum);

// Tracking:
// ( accumulator, currentValue, return )
// (     1      ,       3     ,    4   )
// (     4      ,       4     ,    8   )
// (     8      ,       7     ,    15  )
// (     15     ,       9     ,    24  )
// (     24     ,       11    ,    35  )
// (     35     ,       21    ,    56  )
// (     56     ,       8     ,    64  )
// (     64     ,       9     ,    73  )
// (     73     ,       100   ,    173 )

// Or,

const numbers = [5, 7, 2, 10, 3];

const multiplication = numbers.reduce((accumulator, currentValue) => {
    return (accumulator * currentValue);
});

console.log(multiplication);

// Target:
// ( accumulator, currentValue, return )
// (     5      ,      7      ,   35   )
// (     35     ,      2      ,   70   )
// (     70     ,      10     ,   700  )
// (     700    ,      3      ,   2100 )

// Or,

const i = [5, 4, 2, 9, 15];

const returnedValue = i.reduce((accumulator, currentValue) => {
    return ((accumulator * currentValue) + 10);
});

console.log(returnedValue);

// Or,(Real-world Application):

const userCart = [
    {productId: 1, productName: "Mobile-Phone", price: 12000},
    {productId: 2, productName: "Laptop", price: 22000},
    {productId: 3, productName: "Television", price: 17000}
];

const totalAmount = userCart.reduce((totalPrice, currentProduct) => {
    return totalPrice + currentProduct.price;
}, 0);

console.log(totalAmount);

// Alternate:

// const totalAmount = (totalPrice, currentProduct) => totalPrice + currentProduct.price;

// const cartTotal = userCart.reduce(totalAmount, 0);
// console.log(cartTotal);

// Target:
// ( totalPrice, currentProduct = {}, return )
// (     0     ,  {}.price = 12000  ,  12000 )
// (   12000   ,  {}.price = 22000  ,  34000 )
// (   34000   ,  {}.price = 17000  ,  51000 )

