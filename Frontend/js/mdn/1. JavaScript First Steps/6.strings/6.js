// In JavaScript, you can choose single quotes or double quotes to wrap your strings in. Both of the following will work okay
// !Escaping characters in a string : 
const bigmouth = 'I\'ve got no right to take my place...';
console.log(bigmouth);
//  !Concatenating strings:
// Concatenate just means "join together". To join together strings in JavaScript you can use a different type of string, called a template literal.
// A template literal looks just like a normal string, but instead of using single or double quote marks (' or "), you use backtick characters (`):
// This can work just like a normal string, except you can include variables in it, wrapped inside ${ } characters, and the variable's value will be inserted into the result:
const name = 'Chris';
const greeting = `Hello, ${name}`;
console.log(greeting); // "Hello, Chris"
const one = 'Hello, ';
const two = 'how are you?';
const joined = `${one}${two}`;
console.log(joined); // "Hello, how are you?"
// You can also concatenate strings using the + operator:
const greeting = "Hello";
const name = "Chris";
console.log(greeting + ", " + name); // "Hello, Chris"
// but using template is more readable

// !every number has a method called toString() that converts it to the equivalent string
const myNum2 = 123;
const myString2 = myNum2.toString();
console.log(typeof myString2);
// *methods are similar to functions(at this point i dont really know thhe difference), we apply method by const.methodName
// !Expressions inside a string
const song = 'Fight the Youth';
const score = 9;
const highestScore = 10;
const output = `I like the song ${song}. I gave it a score of ${score/highestScore * 100}%.`;
console.log(output);  // "I like the song Fight the Youth. I gave it a score of 90%."

// !template can make multiline strings

const output = `I like the song.
I gave it a score of 90%.`;
console.log(output);  // I like the song.
                      // I gave it a score of 90%.
// alternatively we could've used \n in a normal quoted string

// * variable string can act as an object
const string = 'This is my string';
// i.e. so many properties can be applied to it
// !length of a string
const browserType = 'mozilla';
browserType.length;

browserType[0]; // to get the first character
browserType[browserType.length-1]; // to get the last character

// !Testing if a string contains a substring
// .includes() return true or false
const browserType = 'mozilla';

if (browserType.includes('zilla')) {
  console.log('Found zilla!');
} else {
  console.log('No zilla here!');
}

// similarly,
// startsWith() and endsWith(): 
// can be used

// !Extracting a substring from a string
// slice()
const browserType = 'mozilla';
console.log(browserType.slice(1, 4)); // "ozi"
browserType.slice(2); // "zilla"

// !Changing case
// toLowerCase() and toUpperCase()
const radData = 'My NaMe Is MuD';
console.log(radData.toLowerCase());
console.log(radData.toUpperCase());

// !Updating parts of a string
// replace()

const browserType = 'mozilla';
const updated = browserType.replace('moz','van');

console.log(updated);      // "vanilla"
console.log(browserType);  // "mozilla"

//  If you want to update the original browserType
let browserType = 'mozilla';
browserType = browserType.replace('moz','van');
console.log(browserType);  // "vanilla"
// Also note that we now have to declare browserType using let, not const, because we are reassigning it.
