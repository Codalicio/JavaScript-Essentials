// Rest Parameters:

function myFunc(a, b, ...c) {
    console.log(`a is ${a}.`);
    console.log(`b is ${b}.`);
    console.log(`c is ${c}.`);
    console.log(typeof c);
    console.log(Array.isArray(c));
};

myFunc(1, 2, 3, 4, 5, 6, 7, 8, 9);

// Or,

function addAll(...numbers) {
    let total = 0;
    for(let number of numbers) {
        console.log(number);
        total = total + number;
    };
    return (`${total}, ${numbers}, ${typeof numbers}, ${Array.isArray(numbers)}`);
};

const ans = addAll( 5, 6, 7, 8, 9, 10);
console.log(ans);

