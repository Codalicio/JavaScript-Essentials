// splice() method:
// start, delete, insert
// splice() method mutates the original array.

let myArray = ['item1', 'item2', 'item3'];

const deletedItem = myArray.splice(1, 2);
console.log(myArray);
console.log("Deleted-Items: ", deletedItem);

myArray = [...myArray, ...deletedItem];
console.log(myArray);

myArray.splice(1, 0, 'inserted item');
console.log(myArray);

// delete and insert simultaneously:

const returnedItem = myArray.splice(1, 2, 'insertedItem-1', 'insertedItem-2');
console.log(myArray);
console.log("Deleted-Items: ", returnedItem);
