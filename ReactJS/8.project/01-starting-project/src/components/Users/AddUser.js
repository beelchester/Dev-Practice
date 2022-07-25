import React from "react";
import { useState } from "react";
import Card from "../UI/Card";
import classes from "./AddUser.module.css";
import Button from "../UI/Button";
function AddUser(props) {
  const [enteredUsername, setEnteredUsername] = useState("");
  const usernameChangeHandler = (event) => {
    setEnteredUsername(event.target.value);
  };
  const [enteredAge, setEnteredAge] = useState("");
  const ageChangeHandler = (event) => {
    setEnteredAge(event.target.value);
  };
  const addUserHandler = (event) => {
    event.preventDefault();
    if(enteredUsername.trim().length===0 || enteredAge.trim().length===0 || +enteredAge< 1){
      return;
    }
    props.onAddUser(enteredUsername, enteredAge);
    setEnteredAge("");
    setEnteredUsername("");
  };

  return (
    <Card className={classes.input}>
      <form onSubmit={addUserHandler}>
        <label htmlFor="username">Username</label>
        <input id="username" type="text" onChange={usernameChangeHandler} value={enteredUsername}/>
        <label htmlFor="age">Age</label>
        <input id="age" type="number" onChange={ageChangeHandler} value={enteredAge} />
        <Button type="submit">Add User</Button>
      </form>
    </Card>
  );
}

export default AddUser;
