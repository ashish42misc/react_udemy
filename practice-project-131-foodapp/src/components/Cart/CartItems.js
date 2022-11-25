import react, { Fragment } from "react";
import { useContext } from "react/cjs/react.development";
import CartContext from "../store/cartcontext.js";
import CartItem from "./CartItem.js"
import Button from "../UI/Button/Button.js";
import UpdateCart from "./UpdateCart.js";



const CartItems = () => {
    const cartCtx = useContext(CartContext)


    return (
        <Fragment>
            <ul>
                {cartCtx.currentCart.map((item) => {
                    return (
                        <li id={item.id}>
                            <CartItem title={item.title} price={item.price} quantity={item.quantity} id={item.id}></CartItem>

                        </li>
                    )


                })}
            </ul>
        </Fragment>
    )
}

export default CartItems;