import React from "react";
import styles from "./UserInstance.module.css";

const User = (props) => {
  return (
    <div className={styles.div}>
      {props.userName} ({props.userAge} years old)
    </div>
  );
};

export default User;
