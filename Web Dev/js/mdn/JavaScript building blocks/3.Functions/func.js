// Functions store a piece of code that does a single task inside a defined block, and then call that code whenever you need it using a single short command — rather than having to type out the same code multiple times.

// use () for a function

// invoking a function (ruuning a func) 
// example

function hi(){
    console.log("hi");
}
hi(); //output: hi

// Function Parameters... are required in some functions inside paranthesis
// math.random() is a built-in function and doesnt require parameters
const myNumber = Math.random();
// replace() requires parameters
const myText = 'I am a string';
const newString = myText.replace('string', 'sausage');

// sometimes parameters are optional like in join()

const myArray = ['I', 'love', 'chocolate', 'frogs'];
const madeAString = myArray.join(' ');
console.log(madeAString);
// returns 'I love chocolate frogs'

const madeAnotherString = myArray.join(); //, is added by default if no parameter
console.log(madeAnotherString);
// returns 'I,love,chocolate,frogs'

// Anonymous Functions
// When a function does not have a name
// Often used when we have to add a function inside a function's parameter
// example
function logKey(event) {
    console.log(`You pressed "${event.key}".`);
  }
  
  textBox.addEventListener('keydown', logKey);

// instead of defining logkey function separately we candirectly write
textBox.addEventListener('keydown', function(event) {
    console.log(`You pressed "${event.key}".`);
  });

// Alternatively, arrow function can also be used
// Instead of function(event), you write (event) =>
textBox.addEventListener('keydown', (event) => {
    console.log(`You pressed "${event.key}".`);
  });
//   curly brackets can be omitted if writing in one line
textBox.addEventListener('keydown', (event) => console.log(`You pressed "${event.key}".`));
// () around arrow function can also be omiited if only one parameter exist like in this case
textBox.addEventListener('keydown', event => console.log(`You pressed "${event.key}".`));

// if your function needs to return a value, and contains only one line, you can also omit the return statement.

const originals = [1, 2, 3];
const doubled = originals.map(item => item * 2);
console.log(doubled); // [2, 4, 6]

// We recommend that you use arrow functions, as they can make your code shorter and more readable.
// more example
const textBox = document.querySelector("#textBox");
const output = document.querySelector("#output");

textBox.addEventListener('keydown', event => output.textContent = `You pressed "${event.key}".`);
// instead of event any name can be used its just a name for a parameter of an ananymous function

// Function scope
// variables inside a function in js are within the scope of its own seperate variable meaning outside of a function those variables cant be accessed
// variables outside of a function are global scope
// function can call variables from outside but outside code cant call variables from inside the function

// Function inside function
// functions can be called inside a function
// example
let myValue = 2;
function myBigFunction() {

  subFunction1();
  subFunction2();
  subFunction3();
}
function subFunction1() {
  console.log(myValue);
}
function subFunction2() {
  console.log(myValue);
}
function subFunction3() {
  console.log(myValue);
}
myBigFunction();

// For building a function module's notes look up function-start.html

// !Return Values
// ?the values that a function returns when it has completed
// *example
const myText = 'The weather is cold';
const newString = myText.replace('cold', 'warm');
console.log(newString); // Should print "The weather is warm"
// the replace() string function takes a string,
// replaces one substring with another, and returns
// a new string with the replacement made
// *.replace() function returns a value and some functions dont like the displayMessage() function we did earlier, which does not return value in console.log() if called out
// return value of replace function :
// A new string, with some or all matches of a pattern replaced by a replacement.

// *TO add return value in a custom function
// example
function numberFive() {
  return 5;
  // can also be written as
  // const result = 5;
  // return result;
  // But the first version is quicker to write, and more compact.
}
console.log(numberFive()); //5

// active learning of this @function-library.html