import ExpenseData from "./components/ExpenseData";
function App() {
  const expenses = [
    {
      id: 'e1',
      title: 'Toilet Paper',
      amount: 94.12,
      date: new Date(2020, 7, 14),
    },
    { id: 'e2', title: 'New TV', amount: 799.49, date: new Date(2021, 2, 12) },
    {
      id: 'e3',
      title: 'Car Insurance',
      amount: 294.67,
      date: new Date(2021, 2, 28),
    },
    {
      id: 'e4',
      title: 'New Desk (Wooden)',
      amount: 450,
      date: new Date(2021, 5, 12),
    },
  ];
  return (

    <div>
      <h2>Expense Tracker</h2>
      {/* after ExpenseItems notes start from here */}
      {/* <ExpenseItems></ExpenseItems> can also be created as below (self closing tag)*/}
      {/* Here we are adding custom js by using {} in custom attributes which will get passed to ExpenseItems */}
      {/* <ExpenseItems title={expenses[0].title} amount = {expenses[0].amount} date = {expenses[0].date}/>
      <ExpenseItems title={expenses[1].title} amount = {expenses[1].amount} date = {expenses[1].date}/>
      <ExpenseItems title={expenses[2].title} amount = {expenses[2].amount} date = {expenses[2].date}/>
      <ExpenseItems title={expenses[3].title} amount = {expenses[3].amount} date = {expenses[3].date}/> */}
      {/* now go back to ExpenseItems.js */}
      {/* now adding ExpenseItems in ExpenseData.js instead of App.js*/}
      <ExpenseData expenses={expenses}/>
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

// ! Composition: process of building UI using small blocks i.e components
// !Go to Card.js