import React from "react"
import './ExpenseForm.css'
function ExpenseForm(){
  const titleChangeHandler = (event)=>{
    // console.log(event) 
    //* like vanilla js event handler has default event object as parameter it also does here
    //* after console log event object we see that target has value which is = to input we can use that
    console.log(event.target.value) 
    
  }
return <form >
  <div className="new-expense__controls">
    <div className="new-expense__control">
      <label >Title</label>
      <input type="text" onChange={titleChangeHandler}/> 
      {/* onChange works similar to onInput i.e. on every keystroke but also dropdowns so onChange is better */}
    </div>
    <div className="new-expense__control">
      <label >Amount</label>
      <input type="number" min={0.1} step={0.1}/>
    </div>
    <div className="new-expense__control">
      <label >Date</label>
      <input type="date" min="2019-01-01" max="2022-12-31"/>
    </div>
  </div>
  <div className="new-expense__actions">
    <button type="submit">Add Expense</button>
  </div>

</form>
}
export default ExpenseForm