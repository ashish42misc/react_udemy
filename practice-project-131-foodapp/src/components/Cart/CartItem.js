import react, { Fragment, useContext } from "react";
import Button from "../UI/Button/Button";
import CartContext from "../store/cartcontext";

const CartItem = (props) => {

    const cartCtx = useContext(CartContext);

    const onAddItemClickHandler = () => {
        cartCtx.onUpdateCart(props.id, 1)
    }

    const onRemoveItemClickHandler = () => {
        cartCtx.onUpdateCart(props.id, -1)
    }

    return (<Fragment>

        <h3>{props.title}</h3>
        <div>{props.price} </div>
        <div>{props.quantity} </div>
        <Button onClick={onRemoveItemClickHandler} id={props.id}> - </Button> &nbsp;&nbsp;
        <Button onClick={onAddItemClickHandler} id={props.id}> + </Button>

    </Fragment>)
}

export default CartItem;