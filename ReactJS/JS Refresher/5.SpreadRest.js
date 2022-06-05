// ! Spread/Rest operator is denoted by ...
// ? Spread is used to merge old array or old object in new one 
// ? Rest is used to merge list of functions in an array

// Spread
const number= [1,2,3];
const newNumber= [...number,4]; //[ 1, 2, 3, 4 ]
console.log(newNumber);
// * if we dont use ... the older array will be added as a one element of a new array [ [ 1, 2, 3 ], 4 ]
// const newNumber= [number,4];

// Spread in objects
const Person= {
  name:"Sahil"
}
const NewPerson= {
  ...Person,
  age:19
}
console.log(NewPerson);

// Rest
const toFilter = (...args) => {
  return args.filter(el => el===1)
}
console.log(toFilter(1,2,3))

// MDN
//* The rest parameter syntax allows a function to accept an indefinite number of arguments as an 
//* array, providing a way to represent variadic functions in JavaScript.

// ex:
function sum(...theArgs) {
  return theArgs.reduce((previous, current) => {
    return previous + current;
  });
}

console.log(sum(1, 2, 3));
// expected output: 6