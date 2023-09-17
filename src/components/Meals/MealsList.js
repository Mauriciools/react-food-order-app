import React from "react";

import Card from "../General/Card";
import MealItem from "./MealItem";
import "./MealsList.css";

// Currently only hardcoded for practicing FrontEnd :)
const DUMMY_MEALS = [
    {
        id: 'm1',
        name: 'Sushi',
        description: 'Finest fish and veggies.',
        price: 22.99,
    },
    {
        id: 'm2',
        name: 'Schnitzel',
        description: 'A german specialty.',
        price: 16.5,
    },
    {
        id: 'm3',
        name: 'Barbecue Burger',
        description: 'American, raw, meaty.',
        price: 12.99,
    },
    {
        id: 'm4',
        name: 'Green Bowl',
        description: 'Healthy...and green...',
        price: 18.99,
    },
    {
        id: 'm5',
        name: 'Rice and Beans',
        description: 'A taste of Brazil.',
        price: 15.59,
    },
];

function MealsList() {
    return (
        <section>
            <Card className="meals-list">
                <ul>
                    {DUMMY_MEALS.map((meal) => <MealItem key={meal.id} id={meal.id} name={meal.name} description={meal.description} price={meal.price} />)}
                </ul>
            </Card>
        </section>
    );
};

export default MealsList;
