import React, { Fragment, useRef, useState, useEffect } from "react";
import { useContext } from "react/cjs/react.development";
import CartContext, { CartContextProvider } from "../store/cartcontext";
import Button from "../UI/Button/Button";
import classes from "./MealItem.module.css"


const MealItem = (props) => {

    const cartCtx = useContext(CartContext)
    const itemCountInputRef = useRef();
    
    const onItemUpdate = (event) => {
        event.preventDefault();
        cartCtx.onmenuItemAdd(itemCountInputRef.current.value, props.price, props.id, props.title)
    }
    return <React.Fragment>
        <div className={classes.mealitemcontainer}>
            <div className={classes.mealitem}>
                <div className={classes.title}>{props.title}
                </div>
                <div className={classes.description}>{props.description}
                </div>
                <div className={classes.price}>${props.price}</div>
            </div>
            <div >
                <form onSubmit={onItemUpdate}>
                Amount
                <input type="number" min="1" max="10" id={props.id} ref={itemCountInputRef} defaultValue="1"></input>
                <Button >+Add</Button>
                </form>
            </div>
        </div>
        <hr></hr>
    </React.Fragment>
}

export default MealItem;