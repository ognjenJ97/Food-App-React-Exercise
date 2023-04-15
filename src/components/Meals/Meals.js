import { Fragment } from "react";
import MealsSummary from "./MealsSummary";
import AvalibleMeals from "./AvalibleMeals";



const Meals = () => {
    return (
        <Fragment>
            <MealsSummary />
            <AvalibleMeals />
        </Fragment>
    )
}

export default Meals;