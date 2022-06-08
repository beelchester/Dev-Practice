import ExpenseItems from "./components/ExpenseItems";
function App() {
  return (
    <div>
      <h2>Let's get started</h2>
      <ExpenseItems></ExpenseItems>
    </div>
  );
}
// ? This is a JSX syntax invented by react and it works because of the dependancy we've already added

export default App;

// * jsx is js xml and html is also xml
// * jsx syntax is not recognized by the browser but instead it is transfordmed to normal js code which can be complex for dev

// * with react we build our own custom html elements i.e components
// * components are basically custom html elements
// ? we have Declarative approach in react
// with React
// we defined the desired target state and React is then responsible
// for generating and running the actual DOM instructions
// ? DOM manipulation in js is imperative approach
// * It is a good practice to create new files for new components
// So now we are creating a new folder in src called components 
// * we will not add App.js in that because it is a special type of component i.e root component
// * It is the main component that will be getting rendered in the index.js file

//* in react we build a component tree that is nested components, components inside components
// * and the the top of that App.js lies 
// ? Its a convention to write component file names in all first letter of words in capital
// Ex: ExpenseItems.js
//! go to ExpenseItems.js for furthur notes
