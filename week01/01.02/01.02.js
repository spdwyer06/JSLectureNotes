// CHALLENGE 1
// Who's name is longer?

/* 
BRONZE
    Write two variables. One will store your name and another will store a friend's name. Find out what property you can 
    use to check how long the names are. Console log how many letters are in each name.
*/

/* 
SILVER
    Expand on what you have already done and write a conditional to see who has the longer name. Using string interpolation 
    console log who's name is longer. 
        Example Result: My name is longer than Adam's.
*/

/* 
GOLD
    In the console log include how many letters difference there are between the names.
        Example Result: Adam's name is shorter than mine by 4 letters.
    There is also one additional case that should be handled that has not been mentioned so far. See if you can add that to your conditional!
*/

let myName = 'Sean';
let partnerName = 'Aaron';

// BRONZE
console.log(myName.length);
console.log(partnerName.length);

// SILVER
if (myName.length > partnerName.length) {
    console.log(`${myName} is longer than ${partnerName}.`);
}
else if (myName.length < partnerName.length) {
    console.log(`${partnerName} is longer than ${myName}.`);
}
else {
    console.log(`${myName} is the same length as ${partnerName}.`);
}

if (myName.length > partnerName.length)
    console.log('test');
else if (myName.length < partnerName.length)
    console.log('hazaah!');
else
    console.log('same');

// GOLD
let difference = Math.abs(myName.length - partnerName.length);
console.log(`The length difference in names is: ${difference}`);



// CHALLENGE 2
// Types Challenge

/* 
BRONZE
    Create an Object that contains a string, number, boolean, and object.
    Console.log the type of one of the values in the object.
*/

/* 
SILVER
    Write a conditional that checks the type of one of the values stored in the object 
    and console logs the data type. If the value is not a string, number, boolean, or object console log 'What are you?!'
*/

let person = {
    race: 'human'
}


// BRONZE

let sean = {
    lastName: 'Dwyer',
    age: 28,
    isMale: true,
    //baseClass: person
    baseClass: {
        race: 'human'
    }
}
console.log(`Type: ${typeof sean.age} Value: ${sean.age}`);

const number = 1;
const string = '';
const bool = true;
const obj = person;

// SILVER
if (typeof sean.age == typeof number)
    console.log('Data Type: Number');
else if (typeof sean.age == typeof string)
    console.log('Data Type: String');
else if (typeof sean.age == typeof bool)
    console.log('Data Type: Boolean');
else if (typeof sean.age == typeof obj)
    console.log('Data Type: Object');
else
    console.log('What are you?!');

if (typeof sean.age === 'number')
    console.log('Data Type: Number');
else if (typeof sean.age === 'string')
    console.log('Data Type: String');
else if (typeof sean.age === 'boolean')
    console.log('Data Type: Boolean');
else if (typeof sean.age === 'object')
    console.log('Data Type: Object');
else
    console.log('What are you?!');

// if (typeof sean.age === typeof number)
//     console.log('hello');
// else
//     console.log('blarg!');
