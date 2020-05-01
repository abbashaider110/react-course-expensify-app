// /**
//  * Object Destructuring
//  */

// console.log('hi');

// const person = {
//     name: 'Abbas',
//     age: 26,
//     location:{
//         city: 'Karachi',
//         temp: 72
//     }
// };

// const {name: firstName = 'Anynomous', age} = person; // now we set name as default if there is no name value obj, otherwise it will take value in object

// console.log(`${firstName} is ${age} years`)

// const {city, temp: temperature} = person.location; // we set temp variable a new name temperature

// console.log(`${city} has ${temperature}`);

// const book = {
//     title: 'ego is enemy',
//     author: 'Ryen holiday',
//     publisher:{
//         // name: 'penguin'
//     }
// };

// const {name:publisherName = ' Abbas'} = book.publisher;

// console.log(publisherName);

// /**
//  * Array Destruturing
//  */

const address = ['block 7', 'karachi', 'sindh', '7500'];

const [ , , state] = address; // it matches up with position, if we want just 3rd item, leave empty sapce with comma for 1st and 2nd, if 3rd item is not defiend, set a defauls

console.log(`state is ${state} `);

const item = ['coffe (hot)' , '2.00','2.5','2.75'];

const [type, , cost] = item;
console.log(`A medium ${type} costs ${cost}`);