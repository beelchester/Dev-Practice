import React from 'react'
import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card'
import './ExpenseItems.css';

function ExpenseItems(props) {
  
  function clickHandler(){
   console.log("clicked")
  //  the state of the program wont be updated once rendered so to update state we use useState() function from react library
  }
  return (
   
      <Card className='expense-item'>
        <ExpenseDate date={props.date}/> 

        <div className='expense-item__description '>
          <h2>{props.title}</h2>
        </div>
        <div className='expense-item__price'>{props.amount}</div>
        <button onClick={clickHandler}>click</button> 
        {/* dont use () after mentioning a function here bcz it will just be pointing not calling it and we 
        dont want it to call as we want to run it only when button is clicked*/}
      </Card>

  );
}

export default ExpenseItems;
