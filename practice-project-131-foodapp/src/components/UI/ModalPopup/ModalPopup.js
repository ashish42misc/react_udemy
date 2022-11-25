import React, {Fragment} from "react";
import ReactDOM from "react-dom";
import classes from "./ModalPopup.module.css";
import Cart from "../../Cart/Cart";
import Card from "../Card/Card";

const ModalPopup = (props) => {
    return <React.Fragment>
        {ReactDOM.createPortal(
            <Backdrop onClick={props.onClick} className={classes.backdrop} />,
            document.getElementById("backdrop-root")
        )}
        {ReactDOM.createPortal(
            <Card className={classes.modalpopup} ><Cart onClick={props.onClick}></Cart></Card>,
            document.getElementById("overlay")
        )}        
    </React.Fragment>
}

const Backdrop = (props) => {
    return <div className={props.className} onClick={props.onClick}></div>
}

export default ModalPopup;