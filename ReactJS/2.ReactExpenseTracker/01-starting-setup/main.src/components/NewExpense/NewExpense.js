
import React,{useState} from "react"
import './NewExpense.css'
import ExpenseForm from "./ExpenseForm"
function NewExpense(props) {
  const  saveExpenseDataHandler  = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData, 
      id: Math.random().toString() 
    }
   
    props.onAddExpense(expenseData)
  }
  const [buttonState,setButtonState] =useState(false)
  const buttonStateHandler = () => {
    setButtonState(true)
  }
  if (buttonState===false){ 
    return <div className="new-expense">
  <button onClick={buttonStateHandler}>Add New Expense</button>
    </div> 
  }
  const cancelButtonStateHandler = () => {
    setButtonState(false)
  }
  return <div className="new-expense">
  <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} onCancelButton = {cancelButtonStateHandler}/>
  </div> 
}

export default NewExpense