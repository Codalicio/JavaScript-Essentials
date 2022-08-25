// while loop (Example) :

// Loop formula is slow as compared to Math formula
// as it takes linear time while the later takes constant time! 

let total = 0;
let i = 0;

while (i <= 10) {
    total = total + i;
    i++;
}

console.log(total);

// total = 0,1,3,6,10,15,21,28,36,45,55.
// i = 0,1,2,3,4,5,6,7,8,9,10.

// Or,

// Math formula is fast as it is taking constant time!

// Sum of n natural numbers = (n (n + 1) /2) :

const totalValue = (num) => ((num * (num + 1)) / 2);

console.log(totalValue(100));

// Or,

let days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

let j = 0;

while (j <= days.length - 1) {
    console.log(days[j]);
    j++;
}






