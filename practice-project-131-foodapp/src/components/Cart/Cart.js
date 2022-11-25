import react, { Fragment, useContext } from "react";
import Card from "../UI/Card/Card";
import classes from "./Cart.module.css"
import CartContext, { CartContextProvider } from "../store/cartcontext";
import CartItems from "./CartItems";
import Button from "../UI/Button/Button";

const Cart = (props) => {

    const onOrderHandler = () => {
        console.log("Ordering...")
    }

    const cartCtx = useContext(CartContext);
    return <div className={props.ClassName}>
        <Card className={classes.cart}>
            <CartItems/>
            <hr />
            <span>Total: {cartCtx.cartTotal}</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <span><Button onClick={props.onClick}>Close</Button>&nbsp;<Button onClick={onOrderHandler}>Order now</Button></span>

        </Card>
    </div>
    
}

export default Cart;