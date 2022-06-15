import React,{useState} from "react";
import ExpenseData from "./components/Expense/ExpenseData";
import NewExpense from './components/NewExpense/NewExpense'
const DeafultExpenses = [
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
  }
];
function App() {
  //* to add user input to our data
const [expenses,setExpenses] = useState(DeafultExpenses)
console.log(DeafultExpenses[0].date.getFullYear())
const addExpenseHandler = (expense) => {
  // setExpense([expense, ...expenses]) // !this is wrong as it wont get the latest snapshot of previous state so we do this
  setExpenses((prevExpenses)=>{
    return [expense,...prevExpenses]
  })  

}
  return (

    <div>
      <h2>Expense Tracker</h2>
     <NewExpense onAddExpense={addExpenseHandler} />
      <ExpenseData items={expenses}/>
    </div>
  );
}


export default App;


