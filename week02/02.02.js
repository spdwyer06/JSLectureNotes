// LITERALS

// Number
// String 
// Boolean
// Object
// Array

let num = 3;
let str = 'moon';
let bool = true;
let obj = {
    a: 3,
    b: 8
};

let arr = [4, 'b', true];

function addNum(numOne, numTwo) {
    console.log(numOne + numTwo);
}
addNum(2, 2);
addNum('cat', 'fish');

//  STATEMENTS VS. EXPRESSIONS

let x = 3; // This is a statement, the 3 is an expression
// Expression is just the value

for (let i of ['a', 'b', 'c']) {
    console.log(i);
}

for (let i of 3 > 4 ? ['a', 'b', 'c'] : ['d', 'e', 'f']) {
    console.log(i);
}

const dog = 'chihuahua';
function printDog(dog) {
    return `${dog} is a good dog`;
}
const dogArray = ['whippet', 'st bernard', 'goldendoodle', 'skye terrier', 'chinese crested'];
const dogStatements = [];
for (let dog of dogArray) {
    dogStatements.push(dog.length > 9 ? 'not a good dog' : printDog(dog));
}

// HOISTING EXAMPLE
function multiplyNumbers(a, b) {
    let tally = 0;
    for (let i = 0; i < a; i++) {
        tally = addNumbers(tally, b);
    }
    return tally;
}
console.log(multiplyNumbers(4, 5));
function addNumbers(a, b) {
    return a + b;
}
