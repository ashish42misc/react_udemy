import React, { useState, useEffect } from "react";

const CartContext = React.createContext({
    cartItemCount: 0,
    cartTotal: 0,
    onmenuItemadd: () => { }, //pass on the item object to be added
    onMenuItemRemove: () => { } //use id to delete item in param
});
export default CartContext;

export const CartContextProvider = (props) => {

    const [itemsinCart, setTotalItemsinCart] = useState("0");
    const [itemsinCartTotalBill, setItemsinCartTotalBill] = useState("0");
    const [cart, setCart] = useState([])

    const updateCartHandler = (itemid, updateCount) => {
        console.log("ID to update " + itemid)

        const indexValue = cart.findIndex((item) => item.id === itemid)
        console.log("Index of ID to update " + indexValue)

        setItemsinCartTotalBill((prevVal) => {
            const itemPrice = cart[indexValue].price;
            console.log(+prevVal + (updateCount * itemPrice))
            return +prevVal + (updateCount * itemPrice);
        });

        setTotalItemsinCart((prevVal) => {
            return +prevVal + +updateCount;
        });

        setCart((preValues) => {

            const indexVal = preValues.findIndex((item) => item.id === itemid)
            let xShallow = [...preValues];





            // console.log("+xShallow[indexVal].quantity -  " +  xShallow[indexVal].quantity);
            // console.log("item count " +  updateCount);
            const updatedQuantity = +xShallow[indexVal].quantity + +updateCount
            // console.log("updatedQuantity - " + updatedQuantity )
            if (updatedQuantity === 0) {


        

                xShallow.splice(indexVal, 1);
            }
            else {
                xShallow[indexVal].quantity = updatedQuantity;




            }

            return xShallow;



        })




    }
    const addItemHandler = (itemcount, itemprice, itemid, itemtitle) => {
        setTotalItemsinCart((prevVal) => {
            return +prevVal + +itemcount;
        });

        setItemsinCartTotalBill((prevVal) => {
            console.log(+prevVal + (itemcount * itemprice))
            return +prevVal + (itemcount * itemprice);
        });

        setCart((preValues) => {
            console.log(preValues)
            const newCartItem = { id: 0, name: "", price: 0, quantity: 0 }
            if (preValues.length < 1) {
                console.log("fresh addition")
                return [{ id: itemid, title: itemtitle, price: itemprice, quantity: itemcount }]
            }
            else {
                //console.log(preValues)
                if (preValues.find(item => item.id === itemid)) {
                    console.log("Item already existing");
                    const indexVal = preValues.findIndex((item) => item.id === itemid)

                    let xShallow = [...preValues];

                    console.log("+xShallow[indexVal].quantity -  " + xShallow[indexVal].quantity);
                    console.log("item count " + itemcount);
                    const updatedQuantity = +xShallow[indexVal].quantity + +itemcount
                    console.log("updatedQuantity - " + updatedQuantity)

                    xShallow[indexVal].quantity = updatedQuantity;
                    return xShallow;


                }
                else {
                    console.log("Item not existing");
                    return [{ id: itemid, title: itemtitle, price: itemprice, quantity: itemcount }, ...preValues]
                }

            }

        })

    }

    const removeItemHandler = () => { }

    return (
        <CartContext.Provider
            value={{
                currentCart: cart,
                cartItemCount: itemsinCart,
                cartTotal: itemsinCartTotalBill,
                onmenuItemAdd: addItemHandler,
                onmenuItemDelete: removeItemHandler,
                onUpdateCart: updateCartHandler
            }}
        >
            {props.children}
        </CartContext.Provider>
    );

}

