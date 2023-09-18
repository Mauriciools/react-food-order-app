import React, { useContext } from "react";

import CartContext from "../../store/cart-context";
import MealItemForm from "./MealItemForm";
import "./MealItem.css";

function MealItem(props) {
    const cartCtx = useContext(CartContext);

    const addToCartHandler = (amount) => {
        cartCtx.addItem({
            id: props.id,
            name: props.name,
            price: props.price,
            description: props.description,
            amount: amount
        });
    };
    
    return (
        <li className="meal">
            <div className="meal-info">
                <h3>{props.name}</h3>
                <div className="meal-description">{props.description}</div>
                <div className="meal-price">${props.price.toFixed(2)}</div>
            </div>
            <div className="meal-amount">
                <MealItemForm id={props.id} onAddToCart={addToCartHandler} />
            </div>
        </li>
    );
};

export default MealItem;
