import React from "react";
import UserList from "./UserList";
import Card from "../UI/Card";

const Users = (props) => {
  return (
    <Card>
      <UserList allUsersList={props.allusers}></UserList>
    </Card>
  );
};

export default Users;
