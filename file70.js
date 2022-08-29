// How to clone objects using 'Object.assign()':

const obj1 = {
    key1: 'value1',
    key2: 'value2'
};

// const obj2 = obj1;
// const obj2 = {...obj1};
const obj2 = Object.assign({}, obj1); // Object.assign({}, obj) to clone.
console.log(obj2);

obj1.key3 = 'value3';
console.log(obj1);
console.log(obj2);
