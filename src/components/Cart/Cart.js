import React from "react";

import Modal from "../General/Modal";
import CartItem from "./CartItem";
import "./Cart.css";

function Cart(props) {
    const orderHandler = () => {
        console.log("Ordering...");
    };

    return (
        <Modal onHideCart={props.onHideCart}>
            <ul className="cart-items">
                <CartItem name="Sushi" price="12.99" amount="4" />
            </ul>
            <div className="cart-price">
                <span>Total Amount</span>
                <span>$x</span>
            </div>
            <div className="cart-buttons">
                <button className="close-button" onClick={props.onHideCart}>Close</button>
                <button className="order-button" onClick={orderHandler}>Order</button>
            </div>
        </Modal>      
    );
};

export default Cart;
