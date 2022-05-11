
const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');
// The resulting constant (ctx) is the object that directly 
// represents the drawing area of the canvas and allows us to draw 2D shapes on it.

const width = canvas.width = window.innerWidth;
const height = canvas.height = window.innerHeight;
// Width and height of the canvas element 
// to equal the width and height of the browser viewport 
// (the area that the webpage appears on — this can be gotten from the Window.innerWidth and Window.innerHeight properties).

// function to generate random number

function random(min, max) {
  const num = Math.floor(Math.random() * (max - min + 1)) + min;
  return num;
}

// function to generate random color

function randomRGB() {
  return `rgb(${random(0, 255)},${random(0, 255)},${random(0, 255)})`;
}