import React from "react";
import ReactDOM from "react-dom";

import styles from "./ModalForm.module.css";
import Button from "./Button";
import Card from "./Card";

const Backdrop = (props) => {
  return <div className={styles.backdrop} onClick={props.onClick}></div>;
};

const Overlay = (props) => {
  return (
    <Card className={styles.modalForm}>
      <header className={styles.modalForm_header}>
        Something not right...
      </header>
      <div className={styles.modalForm_body}>{props.Message}</div>
      <footer className={styles.modalForm_actions}>
        <Button onClick={props.onClick}>Close</Button>
      </footer>
    </Card>
  );
};

const ModalForm = (props) => {
  return (
    <React.Fragment>
      {ReactDOM.createPortal(
        <Backdrop onClick={props.onClick} />,
        document.getElementById("backdrop-root")
      )}
      {ReactDOM.createPortal(
        <Overlay onClick={props.onClick} Message={props.Message} />,
        document.getElementById("overlay-root")
      )}      
    </React.Fragment>
  );
};

export default ModalForm;
