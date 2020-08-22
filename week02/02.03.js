/*
************
 FUNCTIONS
************
    - JavaScript functions are defined with the function keyword, and can be written as a function declaration or a function expression.
        - function declarations are hoisted in our code, and run only when we call them. So any function in our code sits and waits to be ran until we call it by it's name. Think of it as student with his or her hand up, waiting to ask a question. That student doesn't ask their question until the teach calls upon them.
        - function expressions are not hoisted, and are generally stored in variables
            - after a function has been stored in a variable, that variables name can then be called to run the function
    - functions without names are known as anonymous functions
*/



// FUNCTION DECLARATION

sayHello(); // Functions get hoisted

// This is a statement
function sayHello() {
    console.log('Hello!');
}

sayHello; // Won't run, () are what tells the function to run
sayHello(); // Function invocation (calling the function)


// FUNCTION EXPRESSIONS

//greetings(); // Function expressions do not get hoisted

let greetings = function () { // Anonymous Function (function w/out a name)
    console.log('Hi!');
}

greetings();
greetings; // Doesn't run

let y = sayHello;
y(); // Runs the sayHello function

/*
************
 PARAMETERS
************
    - think of parameters as a newly declared variable that we haven't given a value to yet.
        - the value we pass into our function when we call the function to run (also known as an argument), is the value that gets assigned to the parameter.
    - general naming convention for function parameters: the parameter should be named something related to the information we're passing into the function. If we're passing in an integer, we may name our parameter num or number
*/

function fullName(firstName, lastName) {
    console.log(`Full Name: ${firstName} ${lastName}`);
}

fullName('Sean', 'Dwyer'); // Arguments(values): 'Sean' & 'Dwyer'   Params: firstName & lastName

let name = fullName; // Function Reference, not actually running the function
name(); // Will run the function, but will assign undefined to params
name('Sean', 'Dwyer');

function allMyDogs(dog1, dog2, dog3) {
    if (dog1 === undefined || dog2 === undefined || dog3 === undefined) {
        console.log('No arguments or not enough arguments passed to function.');
    }
    else {
        console.log(`My dogs are named: ${dog1}, ${dog2}, and ${dog3}`);
    }
}

allMyDogs();
allMyDogs('Molly');
allMyDogs('Molly', 'Sachmo');
allMyDogs('Molly', 'Sachmo', 'Luna');

/*
************
   RETURN
************
    - functions can also manipulate the data sent to them, and return a new value
*/

// Function in arrow function format
// const averageWeightArrow = (x, y, z) => Math.round((x + y + z) / 3);

function findAverageWeight(x, y, z) {
    let totalWeight = x + y + z;
    let averageWeight = Math.round(totalWeight / 3); // Math.round() --> rounds the value to the nearest integer

    return averageWeight;
}

let average = findAverageWeight(15, 60, 55);
console.log(`Average Weight: ${average} lbs`);

console.log('Average Weight: ' + findAverageWeight(15, 60, 55) + ' lbs'); // Same as lines aboves


/*
************
ARROW FUNCTIONS
************
*/

// Function Statement
function func1() {
    // stuff here
}

// Function Expression
let func2 = function () {
    // stuff here
}

// Arrow Funcion
// let functionName = (/*params here*/) => /*logic here*/;


// Identity Function
let f = (x) => x;
console.log(f(40));

// Concise-Body Arrow Function
let func3 = (x) => x + 5;
console.log(f(40));

// Block-Body Arrow Function
let g = (x) => {
    console.log(x);
}
g(7);

let a = (x) => {
    console.log(x);
    return x + 6;
}
console.log(a(7));

const f0 = (x) => x * 3;

const f1 = (x) => {
    return x * 3;
}

const func = x => (() => x * 3); // Function within a function -- returns 3x the function value
console.log(func(4)());


// Building Up Expressions

const returnFirstArg = (x, y) => x;

/*
function returnFirstArg(x, y){
    return x;
}
*/

const returnSecondArg = (x, y) => y;
const returnThree = (x) => 3;
const returnFalse = (x) => false;
const multiplyNumbers = (x, y) => x * y;
const multiplyNums = (x, y) => (x + 3) * y;
const whoKnows = (x, y) => returnThree((x + 3) * y);
const addToAandBObject = (x, y) => ({
    a: x,
    b: y
});
const addToArray = (x, y) => [x, y];
const completeName = (firstName, middleName, lastName) => `${firstName} ${middleName} ${lastName}`;

console.log(returnFirstArg(4, 5));
console.log(`Hi, my name is ${completeName('Sean', 'Patrick', 'Dwyer')}`);