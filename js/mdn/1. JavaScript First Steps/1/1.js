// Dynamic code: ability to update the display of a web page/app to show different things in different circumstances, generating new content as required.
// Static code — it just shows the same content all the time.

// document.addEventListener('DOMContentLoaded', () => { // This is an event listener, which listens for the browser's DOMContentLoaded event, which signifies that the HTML body is completely loaded and parsed. The JavaScript inside this block will not run until after that event is fired, therefore the error is avoided
  // modern alternative to using this <script src="script.js" defer></script> {defer attribute} add this in html file
  // async attribute is also a solution... defer is better [it will run in the order they appear in the page and execute them as soon as the script and content are downloaded]
  function buttonclicked(){
    const para = document.createElement('p');
    para.textContent="You've clicked the button";
    document.body.appendChild(para);
  }
  const buttons = document.querySelectorAll('button');
  for (const button of buttons){
    button.addEventListener('click',buttonclicked);
  };
  