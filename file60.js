// sort() method:
// sort() method sort an array either in 'ascending order' or 'descending order'.
// sort() method uses the 'ascii values' to sort the array.

// sort() method on numbers:

// for ascending order sorting:
// if (a - b) = positive (greater than 0) ---> (b, a)
// if (a - b) = negative (less than 0) ---> (a, b)

const numbers = [5, 9, 100, 2000, 5000];

const ascendingNumbers = numbers.slice(0).sort((a, b) => a - b);
console.log(ascendingNumbers);

// for descending order sorting:
// if (b - a) = positive (greater than 0) ---> (a, b)
// if (b - a) = negative (less than 0) ---> (b, a)

const descendingNumbers = numbers.slice(0).sort((a, b) => b - a);
console.log(descendingNumbers);

// Or,

const friends = ["Ashish", "Sonu", "Abhishek", "Raju", "Aditya", "Avinash", "Raka", "Naveen"];

const myFriends = friends.slice(0).sort();
console.log(myFriends);

// Or, (Real-world Application):

// price lowToHigh or highToLow:

const products = [
    {
        productId: 1,
        productName: 'p1',
        price: 320
    },
    {
        productId: 2,
        productName: 'p2',
        price: 3020
    },
    {
        productId: 3,
        productName: 'p3',
        price: 3200
    },
    {
        productId: 4,
        productName: 'p4',
        price: 200
    },
    {
        productId: 5,
        productName: 'p5',
        price: 199
    }
];

const lowToHigh = products.slice(0).sort((a, b) => a.price - b.price);
console.table(lowToHigh);

const highToLow = products.slice(0).sort((a, b) => b.price - a.price);
console.table(highToLow);
