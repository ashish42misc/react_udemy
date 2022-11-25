import React, { useState } from "react";
import AddUser from "./Components/AddUser";
import Users from "./Components/Users";

function App() {
  //const allUsers = [];
  const [UserList, UpdateUserList] = useState([]);

  const addNewUserHandler = (newUser) => {
    let newUserData = {
      id: Math.random().toString(),
      username: newUser.username,
      age: newUser.age,
    };

    UpdateUserList((prevUsers) => {
      return [newUserData, ...prevUsers];
    });
  };

  return (
    <React.Fragment>
      <AddUser
        AddNewUser={addNewUserHandler}
      ></AddUser>
      <Users allusers={UserList}></Users>
    </React.Fragment>
  );
}

export default App;
