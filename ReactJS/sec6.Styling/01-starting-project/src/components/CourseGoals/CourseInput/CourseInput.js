import React, { useState } from 'react';

import Button from '../../UI/Button/Button';
import './CourseInput.css';

const CourseInput = props => {
  const [enteredValue, setEnteredValue] = useState('');

  const goalInputChangeHandler = event => {
    if(event.target.value.length > 0) {
      setIsValid(true)
    }
    setEnteredValue(event.target.value);
  };
const [isValid,setIsValid]=useState(true)
  const formSubmitHandler = event => {
    event.preventDefault();
    if(enteredValue.length===0){
      setIsValid(false)
      return ;
    }
    props.onAddGoal(enteredValue);
  };

  return (
    <form onSubmit={formSubmitHandler}>
      <div className="form-control">
        <label style={{color : !isValid ? 'red' : 'black'}}>Course Goal</label>
        <input style={{borderColor : !isValid ? 'red' : 'black'}} type="text" onChange={goalInputChangeHandler} />
      </div>
      <Button type="submit">Add Goal</Button>
    </form>
  );
};

export default CourseInput;
