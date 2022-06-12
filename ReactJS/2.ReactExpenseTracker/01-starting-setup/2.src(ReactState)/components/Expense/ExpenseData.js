import React, { useState } from "react";
import ExpenseItems from "./ExpenseItems";
import "./ExpenseData.css";
import Card from "../UI/Card";
import ExpensesFilter from "../ExpenseFilter/ExpenseFilter";
function ExpenseData(props) {
  const [filteredValue, setFilteredValue] = useState("2020");
  const addFilterHandler = (addFilterValue) => {
    setFilteredValue(addFilterValue);
  };
  return(

    <Card className="expenses">
    <ExpensesFilter
      selected={filteredValue} //sending default year option to ExpenseForm
      // ! didnt rendered tho lets see tha later
      onAddFilter={addFilterHandler}
    />
      <ExpenseItems
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
      />
    </Card>);
};
export default ExpenseData;
