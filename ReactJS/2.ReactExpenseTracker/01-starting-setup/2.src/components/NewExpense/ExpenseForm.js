import React, { useState } from "react";
import "./ExpenseForm.css";
function ExpenseForm(props) {
  // ? using useState because we want to store that value
  const [enteredTitle, setEnteredTitle] = useState("");
  const titleChangeHandler = (event) => {
    // console.log(event)
    //* like vanilla js event handler has default event object as parameter it also does here
    //* after console log event object we see that target has value which is = to input we can use that
    // console.log(event.target.value)
    setEnteredTitle(event.target.value);
  };

  const [enteredAmount, setEnteredAmount] = useState("");
  const amountChangeHandler = (event) => {
    setEnteredAmount(event.target.value);
    // ? target value is always a empty string initially that's why we are giving useState('') to every one not nos.
  };
  const [enteredDate, setEnteredDate] = useState("");
  const dateChangeHandler = (event) => {
    setEnteredDate(event.target.value);
  };
  // * there is also the alternative concept of one state which I found to be unnecesserily complicated so im skiping that
  // * also multiple state is mostly used like here

  // * use prev to get the latest snapshot of the state as useState without that schedules the change not quickly run it.. example later
  // * now we want those stored values as an object on submit
  // * note use onSubmit in form not button
  const submitHandler = (event) => {
    event.preventDefault(); //* which prevents default behavior no request will be sent.. we need this because
    // * by default after submiting thr page gets refreshed and we dont want that
    const expenseData = {
      title: enteredTitle,
      amount: enteredAmount,
      date: new Date(enteredDate),
    };
    // console.log(expenseData);
    props.onSaveExpenseData(expenseData)
    setEnteredTitle('')
    setEnteredAmount('')
    setEnteredDate('')
  };
  // ? Two way binding
    // but by using state, we have an advantage.
    // We can now implement something
    // which is called two-way binding, which simply means
    // that for inputs we don't just listen to changes,
    // but we can also pass a new value back into the input.
    // So that we can reset or change the input programmatically.
    // * we will do that using value attribute in input which will be the default value of input
    // * also we can set state back to empty string after the form is submitted by using the code below
// * now we want the data to go to Newexpense and the App i.e. child to parent
// * we k that we can do parent to child using props 
// * so to communicate child to parent we will send a function from parent to child
// * and then add the data iside that function in  child file 
// ! note we can go child to parent or parent to child only step by step file to file like here App -> NewWxpense -> ExpenseForm and vice versa
// ! i.e. we cant skip componets in between
// ! Go to NewExpense
// * create props parameter to the main function
// * add props.onSaveExpenseData() and give it the paramater of our data object here
// ! Go back to NewExpense

  return ( 
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            value={enteredTitle}
            onChange={titleChangeHandler}
          />
          {/* onChange works similar to onInput i.e. on every keystroke but also dropdowns so onChange is better */}
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min={0.1}
            step={0.1}
            value={enteredAmount}
            onChange={amountChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2019-01-01"
            max="2022-12-31"
            value={enteredDate}
            onChange={dateChangeHandler}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
      </div>
      
    </form>
  );
}
export default ExpenseForm;
