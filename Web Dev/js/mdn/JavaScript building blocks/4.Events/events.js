//! events are actions or occurrences that happen in the system you are programming
// a block of code is ran in case of an event i.e. it will react after event is taking place
// ! that block of code is called an event handler/listener and adding code to it is often called registering the event handler
// example
button.addEventListener('click', () => { }) //enter event handler in {}

// .addEventListener will execute event handler in case the button is clicked
// .addEventListener is The recommended mechanism for adding event handlers in web pages
// inside it we specify two parameters, first the name of event and second the event handler (code block)
// * instead of click we could've also used these events
// focus and blur — The color changes when the button is focused and unfocused; try pressing the tab to focus on the button and press the tab again to focus away from the button. These are often used to display information about filling in form fields when they are focused, or displaying an error message if a form field is filled with an incorrect value. 
// dblclick — The color changes only when the button is double-clicked.
// mouseover and mouseout — The color changes when the mouse pointer hovers over the button, or when the pointer moves off the button, respectively.
// many more
// click can be used for almost every element but some are limited like play event can only be used for an video element

// ? removing an event listener
// if .addEventListener is already there it can be removed using
// * .removeEventListener
// example
btn.removeEventListener('click', changeBackground); 
// will remove changeBackground() event handler
//  Event handlers can also be removed by passing an AbortSignal to addEventListener() and then later calling abort() on the controller owning the AbortSignal. For example, to add an event handler that we can remove with an AbortSignal:

// const controller = new AbortController();

// btn.addEventListener('click', () => {
//   const rndCol = `rgb(${random(255)}, ${random(255)}, ${random(255)})`;
//   document.body.style.backgroundColor = rndCol;
// }, { signal: controller.signal }); // pass an AbortSignal to this handler

// Then the event handler created by the code above can be removed like this:

// controller.abort(); // removes any/all event handlers associated with this controller
// For simple, small programs, cleaning up old, unused event handlers isn't necessary, but for larger, more complex programs, it can improve efficiency. Also, the ability to remove event handlers allows you to have the same button performing different actions in different circumstances: all you have to do is add or remove handlers.
// ? Adding multiple handlers for a single event
myElement.addEventListener('click', functionA);
myElement.addEventListener('click', functionB);

// ? .addEventListener is recommended but there are also two other ways of registering event handlers that you might see: event handler properties and inline event handlers.

// * Evenet handler properties :
// Objects (such as buttons) that can fire events also usually have properties whose name is on followed by the name of the event. For example, elements have a property onclick
// example 
const btn = document.querySelector('button');

function random(number) {
  return Math.floor(Math.random() * (number+1));
}

btn.onclick = () => {
  const rndCol = `rgb(${random(255)}, ${random(255)}, ${random(255)})`;
  document.body.style.backgroundColor = rndCol;
}
// or
// function bgChange() {
//     const rndCol = `rgb(${random(255)}, ${random(255)}, ${random(255)})`;
//     document.body.style.backgroundColor = rndCol;
//   }
  
//   btn.onclick = bgChange;

// instead of .addEventListener

// * cant add multiple handlers for a single event...as it'll overwrite the previous assigned handler

// ? Inline/HTML Event handler
// ! dont use this method, as they are considered bad practice
// example
// html
<button onclick="bgChange()">Press me</button>
// script
function bgChange() {
    const rndCol = `rgb(${random(255)}, ${random(255)}, ${random(255)})`;
    document.body.style.backgroundColor = rndCol;
  }

  


