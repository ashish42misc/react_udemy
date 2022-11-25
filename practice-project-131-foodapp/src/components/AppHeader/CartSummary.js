import React, { useContext, Fragment, useEffect, useState } from "react";
import CartContext from "../store/cartcontext";
import Card from "../UI/Card/Card";
import classes from "./CartSummary.module.css"
import ModalPopup from "../UI/ModalPopup/ModalPopup";


const CartSummary = (props) => {

    const cartCtx = useContext(CartContext);

    const [showModalPopup, setShowModalPopup] = useState(false)

    const onClickHandlerCartSummary = () => {
        {
            setShowModalPopup(true);
        }
    }

    const onClickHandlerOverlay = () => {
        setShowModalPopup(false);
    }

    return <React.Fragment>
        <Card className={classes.cartsummary} >
            <span className={props.className}><a onClick={onClickHandlerCartSummary}>Shopping Cart</a></span>
            <span>{cartCtx.cartItemCount}</span>
        </Card>
        {showModalPopup === true && (<ModalPopup onClick={onClickHandlerOverlay} />)}
    </React.Fragment>
}

export default CartSummary;