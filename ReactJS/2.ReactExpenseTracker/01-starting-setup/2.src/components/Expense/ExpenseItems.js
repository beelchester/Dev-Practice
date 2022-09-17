import React, {useState} from 'react'

import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card'
import './ExpenseItems.css';


function ExpenseItems(props) {
  //*  the state of the program wont be updated once rendered so to update state we use useState() function from react library
  // ? below is array destructure syntax from modern js

  const [title,setTitle] = useState(props.title); // inside useState we write default value(that you want to be updated) 
  // and using array destructure we assign it
  // the value of title and setTitle is a function (named conventionally) that updates the value of title
  function clickHandler(){
    setTitle('updated')
    //  console.log(title) // this will still show the old value because it gets run before setTitle
  }

  return (
    <div>

      <Card className='expense-item'>
        <ExpenseDate date={props.date}/> 

        <div className='expense-item__description '>
          <h2>{title}</h2>
        </div>
        <div className='expense-item__price'>{props.amount}</div>
        <button onClick={clickHandler}>click</button> 
        {/* dont use () after mentioning a function here bcz it will just be pointing not calling it and we 
        dont want it to call as we want to run it only when button is clicked*/}
      </Card>

    </div>
  );
}

export default ExpenseItems;

// ! Go to Newexpense now