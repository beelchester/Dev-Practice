// else is not always compulsary 
// else if for multiple if conditions, if one is not true it will move to another

// comparison operators conditions 
// === and !== — test if one value is identical to, or not identical to, another.
// < and > — test if one value is less than or greater than another.
// <= and >= — test if one value is less than or equal to, or greater than or equal to, another.

// Any value that is not false, undefined, null, 0, NaN, or an empty string ('') actually returns true
// example 
let shoppingDone = true;
let childsAllowance;

if (shoppingDone) { // don't need to explicitly specify '=== true'
  childsAllowance = 10;
} else {
  childsAllowance = 5;
}
console.log(childsAllowance)
// output : 10

// nested if else
// example
if (choice === 'sunny') {
    if (temperature < 86) {
      para.textContent = `It is ${temperature} degrees outside — nice and sunny. Let\'s go out to the beach, or the park, and get an ice cream.`;
    } else if (temperature >= 86) {
      para.textContent = `It is ${temperature} degrees outside — REALLY HOT! If you want to go outside, make sure to put some sunscreen on.`;
    }
  }


// Logical operators
// If you want to test multiple conditions without writing nested if...else statements, logical operators can help you.
// && — AND; allows you to chain together two or more expressions so that all of them have to individually evaluate to true for the whole expression to return true.
// || — OR; allows you to chain together two or more expressions so that one or more of them have to individually evaluate to true for the whole expression to return true.
// ! - NOT; can be used to negate an expression.'
// examples
if (choice === 'sunny' && temperature < 86) {
    para.textContent = `It is ${temperature} degrees outside — nice and sunny. Let\'s go out to the beach, or the park, and get an ice cream.`;
  } else if (choice === 'sunny' && temperature >= 86) {
    para.textContent = `It is ${temperature} degrees outside — REALLY HOT! If you want to go outside, make sure to put some sunscreen on.`;
  }
// -----------
  if (iceCreamVanOutside || houseStatus === 'on fire') {
    console.log('You should leave the house quickly.');
  } else {
    console.log('Probably should just stay in then.');
  }
// ! example
if (!(iceCreamVanOutside || houseStatus === 'on fire')) {
    console.log('Probably should just stay in then.');
  } else {
    console.log('You should leave the house quickly.');
  } //In this snippet, if the OR statement returns true, the NOT operator will negate it so that the overall expression returns false.

// multiple logical conditions
if ((x === 5 || y > 3 || z <= 10) && (loggedIn || userName === 'Steve')) {
    // run the code
  }
  

// wrong
let x = 10
if (x === 5 || 7 || 10 || 20) {
    console.log("true")
  }
  
// correct
if (x === 5 || x === 7 || x === 10 || x === 20) {
    console.log("true")
  }
  
// SWITCH STATEMENTS:
// drawback of if else statement -
// They are mainly good for cases where you've got a couple of choices, and each one requires a reasonable amount of code to be run, and/or the conditions are complex 
// For cases where you just want to set a variable to a certain choice of value or print out a particular statement depending on a condition, the syntax can be a bit cumbersome, especially if you've got a large number of choices.

// switch statements take a single expression/value as an input, and then look through a number of choices until they find one that matches that value, executing the corresponding code that goes along with it.
// pseudocode -
switch (expression) {
    case choice1:
    //   run this code
      break;
  
    case choice2:
    //   run this code instead
      break;
  
    // include as many cases as you like
  
    default:
    //   actually, just run this code
  }

// break is used to stop executing the code block of switch statement if the particular case is satisfied 
// default is run if no case is satisfied, no break is required

// TERNARY OPERATOR .... / CONDITIONAL OPERATOR
// small syntax code that returns one value if its true or another if its false
// example
let isBirthday = false
let greeting = ( isBirthday ) ? 'Happy birthday!' : 'Good morning';
console.log(greeting) //Output: Good morning
// The ternary operator is not just for setting variable values; you can also run functions, or lines of code — anything you like.
