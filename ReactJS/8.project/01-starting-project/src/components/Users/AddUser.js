import React from 'react';
import Card from '../UI/Card';
import classes from './AddUser.module.css'
function AddUser(props) {
  const addUserHandler = (event) => {
    event.preventDefault();
    console.log('submitted')
  }
  return(
    <Card className={classes.input}>

<form onSubmit={addUserHandler}>
  <label htmlFor='username' >Username</label>
  <input id='username' type="text" />
  <label htmlFor='age' >Age</label>
  <input id='age' type="number" />
  <button type='submit'>Submit</button>
</form>
    </Card>
)}

export default AddUser;