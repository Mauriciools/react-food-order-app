import React from "react";

import MealsDescription from "./MealsDescription";
import MealsList from "./MealsList";
import "./Meals.css";

function Meals() {
    return (
        <>
            <MealsDescription />
            <MealsList />
        </>
    );
};

export default Meals;
