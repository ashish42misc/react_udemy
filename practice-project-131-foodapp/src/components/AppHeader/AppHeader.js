import React, {Fragment} from "react";
import CartSummary from "./CartSummary";
import classes from "./AppHeader.module.css"
import mealsImage from "../../assets/MAZF5397.JPG"


const AppHeader = (props) => {
    return <Fragment>
        <header className={classes.applicationheader} >
        <h1>React Meals 4 You</h1>
        <CartSummary/>
    </header>
    {/* <div>
        <img src={mealsImage} alt="Tasty meals for you" height="400px" width="100%"/>
    </div> */}
    </Fragment>
}
export default AppHeader;