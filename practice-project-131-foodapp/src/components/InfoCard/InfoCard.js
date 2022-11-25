import react from "react";
import Card from "../UI/Card/Card";
import classes from "./InfoCard.module.css"

const InfoCard = (props) =>{
    return <Card className={classes.infocard}>{props.children}</Card>
}

export default InfoCard;