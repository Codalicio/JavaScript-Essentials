// Default Parameters:

// function addTwoNum(a, b) {
//     if(typeof b === "undefined") {
//         b = 4;
//     }
//     return (a + b);
// };

// const ans = addTwoNum(4, 9);
// console.log(ans);

//Or,

const addTwoNum = (a, b = 5) => (a + b);
const ans = addTwoNum(10);
console.log(ans);
