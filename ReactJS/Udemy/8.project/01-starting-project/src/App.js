import React , {useState} from 'react';
import AddUser from './components/Users/AddUser';
import UserList from './components/Users/UserList';
function App() {
  const [userState, setUserState] = useState([])
  const userHandler = (uname, uage) => {
    setUserState(prevUserList =>{
      return [...prevUserList,{name:uname,age:uage}]
    })
  }
  return (
    <div>
    <AddUser onAddUser = {userHandler}/>
    <UserList users= {userState} />
    </div>
  );
}

export default App;
