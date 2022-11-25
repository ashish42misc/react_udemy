import React from "react";
import styles from "./UserList.module.css";
import User from "./User";


const UserList = (props) => {
  if (props.allUsersList === 0) {
    return;
  } else {
    return (
      <ul className={styles.ul}>
        {props.allUsersList.map((user) => {
          return (
            <li key={user.id}>
              <User userName={user.username} userAge={user.age}></User>
            </li>
          );
        })}
      </ul>
    );
  }
};

export default UserList;
