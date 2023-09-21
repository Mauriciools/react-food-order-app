import React, { useEffect, useReducer } from "react";

import Card from "../General/Card";
import MealItem from "./MealItem";
import "./MealsList.css";

const initialMealsState = {
    value: [],
    isLoading: true,
    error: null
};

const mealsReducer = (state, action) => {
    if (action.type === "MEALS") {
        return { value: action.value, isLoading: state.isLoading, error: state.error };
    }
    if (action.type === "LOADING") {
        return { value: state.value, isLoading: action.isLoading, error: state.error };
    }
    if (action.type === "ERROR") {
        return { value: state.value, isLoading: state.isLoading, error: action.error };
    }

    return initialMealsState;
};

function MealsList() {
    const [mealsState, dispatchMeals] = useReducer(mealsReducer, initialMealsState);

    useEffect(() => {
        const dbUrl = "https://react-movie-http-4bf03-default-rtdb.firebaseio.com/meals.json";

        const fetchData = async () => {
            try {
                const response = await fetch(dbUrl);
                if (!response.ok)
                    throw new Error("Something went wrong...");

                const data = await response.json();
                const loadedMeals = [];

                for (const key in data) {
                    loadedMeals.push({
                        id: data[key].id,
                        name: data[key].name,
                        price: data[key].price,
                        description: data[key].description
                    });
                }

                dispatchMeals({ type: "MEALS", value: loadedMeals });
            }
            catch (error) {
                dispatchMeals({ type: "ERROR", error: error.message });
            }

            dispatchMeals({ type: "LOADING", isLoading: false });
        }

        fetchData();
    }, []);

    if (mealsState.isLoading) {
        return (
            <section className="meals-loading">
                <p>Loading...</p>
            </section>
        );
    };

    if (mealsState.error) {
        return (
            <section className="meals-error">
                <p>{mealsState.error}...</p>
            </section>
        );
    };

    return (
        <section>
            <Card className="meals-list">
                <ul>
                    {mealsState.value.map((meal) => <MealItem key={meal.id} id={meal.id} name={meal.name} description={meal.description} price={meal.price} />)}
                </ul>
            </Card>
        </section>
    );
};

export default MealsList;
