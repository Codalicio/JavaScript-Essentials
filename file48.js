// functions inside functions:

const app = () => {
    const myFunc = () => {
        console.log("Hello from my Func");
        const hello = () => "Hello World";
        console.log(hello());
    };
    const addTwo = (num1, num2) => (num1 + num2);
    const mulTwo = (num1, num2) => (num1 * num2);
    console.log("inside app");
    myFunc();
    console.log(addTwo(5, 7));
    console.log(mulTwo(5, 2));
};

app();
