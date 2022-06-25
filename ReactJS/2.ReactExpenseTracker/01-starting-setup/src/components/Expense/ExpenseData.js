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

        onAddFilter={addFilterHandler}
      />
          <ExpenseChart expense={filteredExpenses}/>
      <ExpenseList item={filteredExpenses}/>
      
    </Card>
          </li>
  );
}
export default ExpenseData;
