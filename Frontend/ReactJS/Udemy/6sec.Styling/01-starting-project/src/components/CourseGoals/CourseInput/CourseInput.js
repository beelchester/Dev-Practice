import React, { useState } from "react";

import Button from "../../UI/Button/Button";
import styles from "./CourseInput.module.css";
// const FormControl = styled.div`
//   margin: 0.5rem 0;


// & label {
//   font-weight: bold;
//   display: block;
//   margin-bottom: 0.5rem;
//   color: ${props => props.invalid? 'red' : 'black'}
// }

// & input {
//   display: block;
//   width: 100%;
//   // border: 1px solid #ccc;
//   border: 1px solid ${props => (props.invalid? 'red':'#ccc')};
//   background: ${props => (props.invalid? 'lightpink':'transparent')};
//   font: inherit;
//   line-height: 1.5rem;
//   padding: 0 0.25rem;
// }

// & input:focus {
//   outline: none;
//   background: #fad0ec;
//   border-color: #8b005d;
// }

// // &.invalid label {
// //   color: red ;
// // }
// // &.invalid input {
// //   border-color: red;
// //  background-color:  lightpink;
// }`

const CourseInput = (props) => {
  const [enteredValue, setEnteredValue] = useState("");

  const goalInputChangeHandler = (event) => {
    if (event.target.value.length > 0) {
      setIsValid(true);
    }
    setEnteredValue(event.target.value);
  };
  const [isValid, setIsValid] = useState(true);
  const formSubmitHandler = (event) => {
    event.preventDefault();
    if (enteredValue.length === 0) {
      setIsValid(false);
      return;
    }
    props.onAddGoal(enteredValue);
  };

  return (
    <form onSubmit={formSubmitHandler}>
      {/* <FormControl className={!isValid && 'invalid'}>  */}
      {/* <FormControl invalid = {!isValid}>  */}
      <div className={`${styles['form-control']} ${!isValid && styles.invalid}`}> 
      {/* the above class is a dynamic class */}
        {/* <label style={{ color: !isValid ? "red" : "black" }}>Course Goal</label> */}
        <label >Course Goal</label>
        <input
        //   style={{ borderColor: !isValid ? "red" : "black",
        // backgroundColor: !isValid? "light_pink" : "transparent"
        // }}
          type="text"
          onChange={goalInputChangeHandler}
        />
      </div>
      <Button type="submit">Add Goal</Button>
    </form>
  );
};

export default CourseInput;
