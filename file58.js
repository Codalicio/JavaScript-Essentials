// filter() method:
// filter() method also takes a callback function as an input.
// The callback function of filter() method must always 'return' a 'Boolean value'; i.e., either 'True or False'.
// filter() method always gives a new array as an output after execution.

const numbArray = [1, 3, 2, 4, 6, 9];

// Even Numbers:

const isEven = number => number % 2 === 0;

const evenNumbers = numbArray.filter(isEven);
console.log(evenNumbers);

evenNumbers.forEach(number => console.log(number));

// Or,
// Odd Numbers:

const oddNumbers = numbArray.filter(number => number % 2 !== 0);
console.log(oddNumbers);

oddNumbers.forEach(number => console.log(number));

// Alternate:

const isOdd = (number) => {
    return (number % 2 !== 0);
};

const oddNumbersArray = numbArray.filter(isOdd);
console.log(oddNumbersArray);

const odd = number => console.log(number);

oddNumbersArray.forEach(odd);
