// !Adding a form for user input to update expenses

// !Go to ExpenseForm
// * custom named prop onSaveExpenseData in ExpenseForm which will point to a function
//*  function named saveExpenseDataHandler 
import React from "react"
import './NewExpense.css'
import ExpenseForm from "./ExpenseForm"
function NewExpense(props) {
  const  saveExpenseDataHandler  = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData, // * will copy object data from the object assigned to this function parameter
      id: Math.random().toString() //* will give custom unique (not really unique but ok for now) to this
      // ! now go to ExpenseForm
      // * this will be our new expenseData object now
    }
    // console.log(expenseData);
    // * now we want this data to go to App as we want to update the object data(expenses) present there we will do that in next section  
    // * but for now we just want to send this data in App
    // * we will crea onAddExpense prop and assign addExpenseHandler in App 
    // * now adding values in that functions
    // * child to parent is called lifting the state up
    props.onAddExpense(expenseData)
  }
  return <div className="new-expense">
  <ExpenseForm onSaveExpenseData={saveExpenseDataHandler}/>
  </div> 
}

export default NewExpense