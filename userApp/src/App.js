import React,{useState} from 'react';
import AddUser from './components/Users/AddUser';
import UserList from './components/Users/UserList';


function App() {
  
  const [userData, setUserData] = useState([])

  const addUserHandler = (userObj) => {

    setUserData((prevState) => (
      [
        userObj,
        ...prevState
      ]
    ))

  }

  return (
    <div>
      <AddUser onAddUser={addUserHandler}/>
      <UserList users={userData} />
    </div>
  );
}

export default App;
