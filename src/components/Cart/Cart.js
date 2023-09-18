import React, { useContext } from "react";

import CartContext from "../../store/cart-context";
import Modal from "../General/Modal";
import CartItem from "./CartItem";
import "./Cart.css";

function Cart(props) {
    const cartCtx = useContext(CartContext);

    const orderHandler = () => {
        console.log("Ordering...");
    };

    const addItemAmountHandler = (item) => {
        cartCtx.addItem(item);
    };

    const removeItemAmountHandler = (id) => {
        cartCtx.removeItem(id);
    };

    return (
        <Modal onHideCart={props.onHideCart}>
            <ul className="cart-items">
                {cartCtx.items.map((item) => 
                <CartItem 
                    key={item.id} 
                    name={item.name} 
                    price={item.price.toFixed(2)} 
                    amount={item.amount} 
                    onAddItemAmount={addItemAmountHandler.bind(null, item)} 
                    onRemoveItemAmount={removeItemAmountHandler.bind(null, item.id)} 
                />)}
            </ul>
            <div className="cart-price">
                <span>Total Amount</span>
                <span>${cartCtx.totalPrice.toFixed(2)}</span>
            </div>
            <div className="cart-buttons">
                <button className="close-button" onClick={props.onHideCart}>Close</button>
                {cartCtx.items.length > 0 && <button className="order-button" onClick={orderHandler}>Order</button>}
            </div>
        </Modal>
    );
};

export default Cart;