//! index.js is the first js file to be loaded

import ReactDOM from 'react-dom/client'; //? from the package/dependancy we already have
// ? checkout package.json... in brief react and react-dom dependancies forms the react library

import './index.css';
import App from './App'; //? importing App function from App.js
// *  this function here is one of a component for our project... later which will get rendered in div root
const root = ReactDOM.createRoot(document.getElementById('root')); //? creates main entry point to UI with react// * omit extension for js while importing (.js) for others it is needed

root.render(<App />); 
//* public/index.html is the single html file that gets loaded to the webpage.. also called single page application
// *all the changes will be handled by react
// * that index.html file contains root id
// * so basically that const root is telling ReactDom (a part of react library) which is the root file i.e the only html file that;ll get rendered
// ? root.render adds/renders App.js content to that root i.e the root div in index.html 
//! check App.js