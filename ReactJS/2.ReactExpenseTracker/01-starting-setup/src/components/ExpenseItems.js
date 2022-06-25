import React from 'react';
import './ExpenseItems.css'
function ExpenseItems(props) {
  return (
 <div className='expense-items-main' >
   <h2 className='expense-items-title'>{props.title}</h2> 
   <h2 className='expense-items-price'>{props.amount}</h2> 
  </div>
    )
}
export default ExpenseItems