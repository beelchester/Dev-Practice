import React from 'react'
import "./ExpenseList.css"
import ExpenseItems from './ExpenseItems';
const ExpenseList = (props) => {
  if (props.item.length === 0) {
   return <h2 className='expenses-list__fallback'>No content found</h2>;
    }
  return <ul className='expenses-list'>
    {props.item.map((item) => (
        <ExpenseItems
          key={item.id}
          title={item.title}
          amount={item.amount}
          date={item.date}
        />
      ))}
  </ul>
}
export default ExpenseList