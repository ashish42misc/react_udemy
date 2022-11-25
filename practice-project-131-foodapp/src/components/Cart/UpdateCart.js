import react, { Fragment, useContext } from "react";
import Button from "../UI/Button/Button";
import CartContext from "../store/cartcontext";

const UpdateCart = (props) => {

    const cartCtx = useContext(CartContext);

    const onClickHandler = () => {
        cartCtx.onUpdateCart(props.id)
    }

    return (<Fragment>
        <Button> - </Button>
        <Button onClick={onClickHandler} id={props.id}> + </Button>

    </Fragment>)
}

export default UpdateCart;