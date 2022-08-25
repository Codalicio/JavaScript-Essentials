// lexical scope:

const myVar1 = "Hi there!";
const myVar = "value99";

const myApp = () => {
    // const myVar = "value1";

    const myFunc = function() {
        const myVar = "value89";
        console.log(myVar);
        console.log("inside myFunc", myVar1);
    };
    function myFunc2() {
        function hello() {
            console.log(myVar);
            console.log("inside hello", myVar);
        };
        hello();
    };
    const myFunc3 = () => {
        const bye = "bye!";
        console.log(bye);
        console.log(myVar);
        console.log(myVar1);
    };
    var age = 34;
    console.log(age);
    {
        var age = 23;
    };
    console.log(age);
    console.log(myVar);
    myFunc();
    myFunc2();
    myFunc3();
    console.log(myVar1);
};

myApp();

