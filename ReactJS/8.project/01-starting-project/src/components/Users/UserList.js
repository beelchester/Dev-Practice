import React from 'react';
import Card from '../UI/Card';
import classes from './UserList.module.css'
function UserList(props) {
  return <Card className={classes.users}>
    <ul>
      {props.users.map(user => <li>{user.name},  {user.age} y/o</li>)}
      
    </ul>
  </Card>
}

export default UserList