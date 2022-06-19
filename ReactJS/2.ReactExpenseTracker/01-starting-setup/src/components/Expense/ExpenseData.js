import React, { useState } from "react";
import ExpenseList from "./ExpenseList";
import "./ExpenseData.css";
import Card from "../UI/Card";
import ExpenseChart from "./ExpenseChart";

import ExpensesFilter from "../ExpenseFilter/ExpenseFilter";
function ExpenseData(props) {
  const [filteredValue, setFilteredValue] = useState("");
  const addFilterHandler = (addFilterValue) => {
    setFilteredValue(addFilterValue);
  };
  // filtering the data
  const filteredExpenses = props.items.filter(
    (filterYear) => filterYear.date.getFullYear().toString() === filteredValue
  );
  
  return (
    <li>
      
    <Card className="expenses">
      <ExpensesFilter
        // selected={filteredValue}

        onAddFilter={addFilterHandler}
      />
          <ExpenseChart expense={filteredExpenses}/>
      <ExpenseList item={filteredExpenses}/>
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
      {/* {filteredExpenses.map((item )=> <ExpenseItems
      key = {item.id} //? required so that the all the elements would not get updated for the same result.. only new element at the top should be create
      title = {item.title}
      amount = {item.amount}
      date = {item.date}
      />)}  */}
      {/* this will add every element of object expenses to ExpenseItems*/}

      {/* Conditional output */}
      {/* ?  gives the output of <p> if true 
      : means else condition to output 
      these are js ternary operator*/}
      {/* {filteredExpenses.length === 0? <p style={{color:"white"}} >No expense found</p>
       :    filteredExpenses.map((item )=> <ExpenseItems
        key = {item.id} //? required so that the all the elements would not get updated for the same result.. only new element at the top should be create
        title = {item.title}
        amount = {item.amount}
        date = {item.date}
        />)}  */}
      {/* this is not easy to read so we wil abuse the js code */}
      {/* using ? requires : too in it... we here will use && */}
      {/* && will run code later to it only if before code is true */}
      {/* {filteredExpenses.length === 0 && <p style={{color:"white"}} >No expense found</p>}
         {filteredExpenses.length >0 && filteredExpenses.map((item )=> <ExpenseItems
          key = {item.id} //? required so that the all the elements would not get updated for the same result.. only new element at the top should be create
          title = {item.title}
          amount = {item.amount}
          date = {item.date}
          />)}  */}
      {/* now this still is too much code inside jsx so here's the third way */}
      {/* go up where we created the variable expenseContent */}
    </Card>
          </li>
  );
}
export default ExpenseData;
