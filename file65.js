// fill() method:
// value, start, end
// fill() method mutates the original array.

const myArray = new Array(10).fill(0);
console.log(myArray);

const array1 = [1, 2, 3, 4, 5, 6, 7, 8];
array1.fill(0, 2, 5);
console.log(array1);
