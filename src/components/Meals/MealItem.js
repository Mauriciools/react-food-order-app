import React from "react";

import MealItemForm from "./MealItemForm";
import "./MealItem.css";

function MealItem(props) {
    return (
        <li className="meal">
            <div className="meal-info">
                <h3>{props.name}</h3>
                <div className="meal-description">{props.description}</div>
                <div className="meal-price">${props.price.toFixed(2)}</div>
            </div>
            <div className="meal-amount">
                <MealItemForm id={props.id} />
            </div>
        </li>
    );
};

export default MealItem;
