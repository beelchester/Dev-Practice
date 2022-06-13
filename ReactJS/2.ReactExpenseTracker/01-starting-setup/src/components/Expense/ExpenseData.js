import React, { useState } from "react";
import ExpenseItems from "./ExpenseItems";
import "./ExpenseData.css";
import Card from "../UI/Card";
import ExpensesFilter from "../ExpenseFilter/ExpenseFilter";
function ExpenseData(props) {
  const [filteredValue, setFilteredValue] = useState("");
  const addFilterHandler = (addFilterValue) => {
    setFilteredValue(addFilterValue);
    console.log(filteredValue)
  };
  return(

    <Card className="expenses">
    <ExpensesFilter
      // selected={filteredValue} 

      onAddFilter={addFilterHandler}
    />
      {/* <ExpenseItems
        title={props.expenses[0].title}
        amount={props.expenses[0].amount}
        date={props.expenses[0].date}
      />
      <ExpenseItems
        title={props.expenses[1].title}
        amount={props.expenses[1].amount}
        date={props.expenses[1].date}
      />
      <ExpenseItems
        title={props.expenses[2].title}
        amount={props.expenses[2].amount}
        date={props.expenses[2].date}
      />
      <ExpenseItems
        title={props.expenses[3].title}
        amount={props.expenses[3].amount}
        date={props.expenses[3].date}
      /> */}
      {/* The above code is hard code we want it to bw dyamic so we will create an array/object */}
      {props.items.map((item )=> <ExpenseItems
      title = {item.title}
      amount = {item.amount}
      date = {item.date}
      />)} 
      {/* this will add every element of object expenses to ExpenseItems*/}
    </Card>);
};
export default ExpenseData;
