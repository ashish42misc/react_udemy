import React, { useState } from "react";
import Button from "../UI/Button";
import styles from "./UserForm.module.css";


const UserForm = (props) => {
  const [userName, setUserName] = useState("");
  const [userAge, setUserAge] = useState("");

  const addUserHandler = (event) => {
    let newUser = { username: userName, age: userAge };
    event.preventDefault();
    if (
      userName.trim().length === 0 ||
      userAge.trim().length === 0 ||
      +userAge < 1
    ) {
      props.InvalidInput("Please enter valid Name and age (non-empty values)");
    } else {
      setUserName("");
      setUserAge("");
      props.AddNewUser(newUser);
    }
  };

  const userNameChangeHandler = (event) => {
    setUserName(event.target.value);
  };

  const userAgeChangeHandler = (event) => {
    setUserAge(event.target.value);
  };

  return (
    <form name="addUserForm" onSubmit={addUserHandler} className={styles.input}>
      <label htmlFor="userName">User Name</label>
      <input
        id="userName"
        type="text"
        value={userName}
        onChange={userNameChangeHandler}
      ></input>
      <label htmlFor="userAge">Age (Years)</label>
      <input
        id="userAge"
        type="number"
        max="100"
        onChange={userAgeChangeHandler}
        value={userAge}
      ></input>
      <Button type="submit">Add User</Button>
    </form>
  );
};

export default UserForm;
