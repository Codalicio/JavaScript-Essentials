// while loop :

// DRY (Don't Repeat Yourself!).

let i = 0;

while (i <= 9) {
    console.log(i);
    i++;
}

console.log(`Current value of "i" is ${i}.`)

console.log('');

// Or,

const repeatTo9 = (i) => {
    while (i <= 9) {
        console.log(i);
        i++;
    }
    console.log(`Curreent value of "i" is ${i}.`);
}

repeatTo9(0);
