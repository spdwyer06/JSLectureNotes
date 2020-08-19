/**************************
FIZZ BUZZ (Conditionals Only)
**************************/
/*
    Challenge:
    Create a variable named FB that takes numbers
    Write an ELSE/IF conditional that: 
    Prints out "Fizz" if the number is divisible by 3
    Prints out "Buzz" if the number is divisible by 5
    Prints out "Fizz Buzz" if the number is divisible by BOTH 3 and 5
    Convert this to SWITCH STATEMENT and then a TERNARY
*/

let FB = 15;


// ELSE-IF:

if (FB % 3 == 0 && FB % 5 == 0) {
    console.log('Fizz Buzz');
}
else if (FB % 5 == 0) {
    console.log('Buzz');
}
else if (FB % 3 == 0) {
    console.log('Fizz')
}
else {
    console.log('Nothing');
}

// SWITCH CASE:

// switch (FB % 3 == 0 && FB % 5 == 0 || FB % 5 == 0 || FB % 3 == 0) {
switch (true) {
    case (FB % 3 == 0 && FB % 5 == 0):
        console.log('Fizz Buzz');
        break;
    case (FB % 5 == 0):
        console.log('Buzz');
        break;
    case (FB % 3 == 0):
        console.log('Fizz');
        break;
    default:
        console.log('Nothing');
        break;
}

// TERNARY:

FB % 3 == 0 && FB % 5 == 0 ? console.log('Fizz Buzz')
    : FB % 5 == 0 ? console.log('Buzz')
        : FB % 3 == 0 ? console.log('Fizz')
            : console.log('Nothing');



/*
************
 FOR LOOPS
************
    - Loops offer us a quick and easy way to do something repeadetly
*/
/*
    Challenge: 
        - Add the even indexes from the alphabet array to a new array using a for loop
*/
/* BRONZE
    - Write a for loop that runs until it's reached the end of the alphabet array, and prints each letter to the console.
*/
/* SILVER
- Write a conditional that is nested inside of the for loop that checks if the index of each character in the alphabet array is even or odd. If the index is even, console.log the letter. If the index is odd, console.log 'the index is an odd number'.
*/
/* GOLD
- Declare a variable of arr that is initialized as an empty array. If the index of the character in the alphabet array is even, add that character to the variable of arr, and console.log arr. If the index is odd - using string interpolation - console.log 'the index ___ is an odd number'.
- Use Google to search for an array method that allows you to add one or more elements to an array
*/
/* PLATINUM
    - Convert the conditional into a ternary
*/

// BRONZE:
let alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

for (let i = 0; i < alphabet.length; i++) {
    console.log(alphabet[i]);
}

// Also works:
// alphabet.forEach(char => {
//     console.log(char);
// });

//  Also works:
// for (char in alphabet) {
//     console.log(alphabet[char]);
// }

// SILVER
let alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

for (let i = 0; i < alphabet.length; i++) {
    if (i % 2 == 0) {
        console.log(alphabet[i]);
    }
    else {
        console.log('The index is an odd number');
    }
}

// GOLD
let alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
let arr = [];

for (let i = 0; i < alphabet.length; i++) {
    if (i % 2 == 0) {
        arr.push(alphabet[i]);
        // console.log(arr);
    }
    else {
        console.log(`The index of ${alphabet[i]} is an odd number.`);
    }
}

console.log(arr);

// PLATINUM
let alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
let arr = [];

for (let i = 0; i < alphabet.length; i++) {
    (i % 2 == 0) ? (arr.push(alphabet[i]), console.log(arr))
        : console.log(`The index of ${alphabet[i]} is an odd number.`);
}

// console.log(arr);



/*
************
 FOR OF LOOPS
************
    - For Of Loops parse through an iterable list of numbers - so that makes them great for working with arrays
    - Arrays contain what are known as iterable properties. Each property - or value - in an array, each contains it's own index (the first item in an array has an index of 0, and so on).
                     value
        let arr = ['chicken', 'turkey', 'duck']
                       0         1        2
                     index
*/

/* BRONZE
    - Using a for of loop, console.log the name of each pie from the pies array using string interpolation.
*/
/* SILVER
    - Nest a conditonal inside of the for of loop that checks if a single pie from the pies array is of the type 'fruit pie' - ie. apple pie is a fruit pie / chocolate peanut butter pie is not a fruit pie. Then, using string interpolation, console.log either 'the  __ pie is a fruit pie!' or 'the __ pie is not a fruit pie :('
    - Use google to search for an array method that checks if an array includes a certain value
*/
/* GOLD
    - Have the conditional check if EACH pie from the pies array is of the type 'fruit pie'.
*/

// BRONZE

let pies = ['apple', 'blueberry', 'peach', 'chocolate peanut butter', 'cherry', 'oreo', 'chicken pot', 'shepherd'];

for (pie of pies) {
    console.log(`${pie}`);
}

// SILVER

let pies = ['apple', 'blueberry', 'peach', 'chocolate peanut butter', 'cherry', 'oreo', 'chicken pot', 'shepherd'];
let fruitPies = ['apple', 'blueberry', 'peach', 'cherry'];

// if (pies.some(v => fruitPies.indexOf(v) !== -1)) {
//     console.log(v);
// }

// var _ = require('underscore');
// console.log(_.intersection(pies, fruitPies));

// for (pie of pies) {
//     if (typeof pie == 'fruit pie') {
//         console.log(`The ${pie} pie is a fruit pie!`);
//     }
//     else {
//         console.log(`The ${pie} pie is not a fruit pie =(`);
//     }
// }

for (pie of pies) {
    if (pie.includes('apple')) {
        console.log(`The ${pie} pie is a fruit pie!`);
    }
    else {
        console.log(`The ${pie} pie is not a fruit pie =(`);
    }
}

// for (fruit of fruitPies) {
//     console.log(fruit);
// }


// for (pie of pies) {
//     if (_.intersection(pies, fruitPies)) {
//         console.log('blarg');
//     }
//     else {
//         console.log(`The ${pie} pie is not a fruit pie =(`);
//     }
// }

// GOLD

let pies = ['oreo', 'cookie', 'apple', 'blueberry', 'peach', 'cherry'];
let [pieOne, pieTwo, ...fruitPies] = pies;
let [, , ...fruitPies] = pies;
console.log(pieOne);
console.log(pieTwo);
console.log(fruitPies);

for (pie of pies) {
    if (pie.includes('apple') || pie.includes('blueberry') || pie.includes('peach') || pie.includes('cherry')) {
        console.log(`The ${pie} pie is a fruit pie!`);
    }
    else {
        console.log(`The ${pie} pie is not a fruit pie =(`);
    }
}

// TEST //

let pies = ['apple', 'blueberry', 'peach', 'chocolate peanut butter', 'cherry', 'oreo', 'chicken pot', 'shepherd'];
let fruitPies = ['apple', 'blueberry', 'peach', 'cherry'];

for (pie of pies) {
    if (pie.includes(`${fruit}`)) {
        console.log(`The ${pie} pie is a fruit pie!`);
    }
    else {
        console.log(`The ${pie} pie is not a fruit pie =(`);
    }
}

/*
************
 FOR IN LOOPS
************
    - For In Loops count the enumerable properties in an object.
    - Objects contain what are known as enumerable properties - which just means countable. 
        So although properties in an object don't contain an index like arrays, their properties can be 
        simply counted. 
    - a key - so think a key in an object - goes IN to a lock for it to correctly work and unlock. 
        So for in loops are best used with objects, and that means for of loops are best used with arrays
*/

let obj = {
    key1: 'value',
    key2: 'value',
    key3: 'value'
};

console.log(Object.keys(obj).length);

for (key of obj) {
    console.log(key);
}

/*
    Challenge: 
        - Using a for in loop, add all of the characters from the members key in the fellowshipOfTheRing object, whose names don't begin with a vowel, to a new array. 
*/
/* BRONZE
    - Using a for in loop, console.log the name of each character from the members key in the fellowshipOfTheRing object.
*/
let fellowshipOfTheRing = {
    members: {
        Gandalf: 'Staff',
        Frodo: 'Sting',
        Sam: 'Lembas Bread',
        Aragorn: 'Anduril',
        Legolas: 'Bow of the Galadhrim',
        Gimli: 'Walking Axe',
        Pippin: 'Barrow Blades',
        Merry: 'Barrow Blades',
        Boromir: 'Horn of Gondor'
    },
    purpose: "To take the One Ring to Mordor, where it is to be \"cast into the fiery chasm from whence it came,\" in order for it to be destroyed and Sauron\'s power to come to an end.",
    formed: '25 October, 3018',
    dissolved: '26 February, 3019'
}
// console.log(fellowshipOfTheRing.members.Gandalf)
for (character in fellowshipOfTheRing.members) {
    console.log(character);
    // console.log(fellowshipOfTheRing.members[character]);
}
/* SILVER
    - Add a conditional to the for in loop that checks if the characters name does not begin with a vowel. Then, using string interpolation, console.log either '__'s name does not begin with a vowel' or '__'s name does begin with a vowel'.
*/
let fellowshipOfTheRing = {
    members: {
        Gandalf: 'Staff',
        Frodo: 'Sting',
        Sam: 'Lembas Bread',
        Aragorn: 'Anduril',
        Legolas: 'Bow of the Galadhrim',
        Gimli: 'Walking Axe',
        Pippin: 'Barrow Blades',
        Merry: 'Barrow Blades',
        Boromir: 'Horn of Gondor'
    },
    purpose: "To take the One Ring to Mordor, where it is to be \"cast into the fiery chasm from whence it came,\" in order for it to be destroyed and Sauron\'s power to come to an end.",
    formed: '25 October, 3018',
    dissolved: '26 February, 3019'
}
for (character in fellowshipOfTheRing.members) {
    if (character[0] !== 'A' && character[0] !== 'E' && character[0] !== 'I' && character[0] !== 'O' && character[0] !== 'U') {
        console.log(`${character}'s name does not begin with a vowel.`);
    } else {
        console.log(`${character}'s name does begin with a vowel.`)
    }
}
/* GOLD
    - Declare a globally scoped variable of arr that is initialized as an empty array. If the characters name does not begin with a vowel, add that character to the new array, and then console.log the array.
*/
let fellowshipOfTheRing = {
    members: {
        Gandalf: 'Staff',
        Frodo: 'Sting',
        Sam: 'Lembas Bread',
        Aragorn: 'Anduril',
        Legolas: 'Bow of the Galadhrim',
        Gimli: 'Walking Axe',
        Pippin: 'Barrow Blades',
        Merry: 'Barrow Blades',
        Boromir: 'Horn of Gondor'
    },
    purpose: "To take the One Ring to Mordor, where it is to be \"cast into the fiery chasm from whence it came,\" in order for it to be destroyed and Sauron\'s power to come to an end.",
    formed: '25 October, 3018',
    dissolved: '26 February, 3019'
}
let arr = [];
for (character in fellowshipOfTheRing.members) {
    if (character[0] !== 'A' && character[0] !== 'E' && character[0] !== 'I' && character[0] !== 'O' && character[0] !== 'U') {
        arr.push(character)
    }
}
console.log(arr);