import react from "react";
import Card from "../UI/Card/Card";
import MealItem from "./MealItem";
import classes from "./Meals.module.css"

const menuList = [
    { "id": "1", "title": "Sushi", "description": "Finest fish and veggies", "price": "20" },
    { "id": "2", "title": "Chicken Soup", "description": "Smmoth cheick soup with corn and veggies", "price": "5" },
    { "id": "3", "title": "Pav Bhaji", "description": "Indian Streen food made of potatoes and eaten with butterd bun", "price": "10" },
]

const Meals = () => {
    return <Card className={classes.meals}>
        <ul>
            {menuList.map((menuitem) => {
                return (
                    <li key={menuitem.id} >
                        <MealItem title={menuitem.title} description={menuitem.description} price={menuitem.price} id={menuitem.id} ></MealItem>
                    </li>
                )
            })}
        </ul>
    </Card>
}

export default Meals;