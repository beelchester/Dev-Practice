import React, { useState } from 'react';

import './ExpenseFilter.css';

const ExpensesFilter = (props) => {
  const[filterValue, setFilterValue] = useState('')
  const FilterValueHandler = (event) => {
    setFilterValue(event.target.value)
    // console.log(event.target.value)
  }
  props.onAddFilter (filterValue)
  return (
    <div className='expenses-filter'>
      <div className='expenses-filter__control'>
        <label>Filter by year</label>
        <select value={props.selected} onChange={FilterValueHandler}>
          <option value='2022'>2022</option>
          <option value='2021'>2021</option>
          <option value='2020'>2020</option>
          <option value='2019'>2019</option>
        </select>
      </div>
    </div>
  );
};

export default ExpensesFilter;