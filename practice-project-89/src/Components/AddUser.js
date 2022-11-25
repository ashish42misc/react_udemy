import React, { useState } from "react";
import Card from "../UI/Card";
import UserForm from "./UserForm";
import ModalForm from "../UI/ModalForm";

const AddUser = (props) => {
  const [DisplayInvalidInputModalForm, setDisplayInvalidInputModalForm] =
    useState("");

  const addNewUserHandler = (newUserData) => {
    props.AddNewUser(newUserData);
    setDisplayInvalidInputModalForm("");
  };

  const modalClickHandler = () =>{
    setDisplayInvalidInputModalForm("");
  }
  const invalidInputHandler = (errorMessage) => {
    setDisplayInvalidInputModalForm(errorMessage);
  };

  return (
    <Card>
      <UserForm
        AddNewUser={addNewUserHandler}
        InvalidInput={invalidInputHandler}
      ></UserForm>
      {DisplayInvalidInputModalForm.trim().length > 0 && (
        <ModalForm Message={DisplayInvalidInputModalForm} onClick={modalClickHandler}></ModalForm>
      )}
    </Card>
  );
};

export default AddUser;
