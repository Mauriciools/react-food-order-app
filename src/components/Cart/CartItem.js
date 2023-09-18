import React from "react";

import "./CartItem.css";

function CartItem(props) {
    return (
        <li className="cart-item">
            <div>
                <h2>{props.name}</h2>
                <div className="cart-item-info">
                    <span className="cart-item-price">${props.price}</span>
                    <span className="cart-item-amount">x{props.amount}</span>
                </div>
            </div>
            <div className="cart-item-buttons">
                <button>-</button>
                <button>+</button>
            </div>
        </li>
    );
};

export default CartItem;
