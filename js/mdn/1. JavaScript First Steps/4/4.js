const buttonA = document.querySelector('#button_A');
const headingA = document.querySelector('#heading_A');

buttonA.onclick = () => {
  const name = prompt('What is your name?');
  alert(`Hello ${name}, nice to see you!`);
  headingA.textContent = `Welcome ${name}`;
}

// to define a variable var can also be used but let is modern & better
// JavaScript is a "dynamically typed language", which means that, unlike some other languages, you don't need to specify what data type a variable will contain (numbers, strings, arrays, etc).
// As well as variables, you can declare constants. These are like variables, except that:
// you must initialize them when you declare them
// you can't assign them a new value after you've initialized them. except if object is declared using const

// Use const when you can, and use let when you have to.