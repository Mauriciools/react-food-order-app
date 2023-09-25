import React, { useContext, useState, useReducer } from "react";

import CartContext from "../../store/cart-context";
import Button from "../General/Button";
import Modal from "../General/Modal";
import CheckoutForm from "./CheckoutForm";
import CartItem from "./CartItem";
import "./Cart.css";

const initialSubmitState = { isSubmitting: false, didSubmit: false };
const submitReducer = (state, action) => {
    if (action.type === "SUBMITTING") {
        return { isSubmitting: true, didSubmit: false };
    };
    if (action.type === "SUBMITTED") {
        return { isSubmitting: false, didSubmit: true };
    };

    return initialSubmitState;
};

function Cart(props) {
    const [isCheckout, setIsCheckout] = useState(false);
    const [submitState, dispatchSubmit] = useReducer(submitReducer, initialSubmitState);

    const cartCtx = useContext(CartContext);

    const orderHandler = () => {
        setIsCheckout(true);
    };

    const addItemAmountHandler = (item) => {
        cartCtx.addItem(item);
    };

    const removeItemAmountHandler = (id) => {
        cartCtx.removeItem(id);
    };

    const confirmOrderHandler = async (userInfo) => {
        const dbUrl = "https://react-movie-http-4bf03-default-rtdb.firebaseio.com/orders.json";

        dispatchSubmit({ type: "SUBMITTING" });

        try {
            const response = await fetch(dbUrl, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    user: userInfo,
                    orderedItems: cartCtx.items,
                    totalPrice: cartCtx.totalPrice
                })
            });

            if (!response.ok)
                throw new Error("Something went wrong...");

            dispatchSubmit({ type: "SUBMITTED" });
            cartCtx.clearCart();
        }
        catch (error) {
            console.log(error.message);
        }
    };

    let isCheckoutContent = <div className="cart-buttons">
        <Button className="close-button" onClick={props.onHideCart}>Close</Button>
        {cartCtx.items.length > 0 && <Button className="confirm-button" onClick={orderHandler}>Order</Button>}
    </div>;
    if (isCheckout)
        isCheckoutContent = <CheckoutForm onConfirm={confirmOrderHandler} onCancel={props.onHideCart} />;

    const normalCart = <>
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
        {isCheckoutContent}
    </>;

    const submitting = <p>The order is being submitted...</p>;
    const submitted = <div className="submitted">
        <p>The order has been successfully submitted! I hope you enjoy your meal :)</p>
        <Button className="close-button" onClick={props.onHideCart}>Close</Button>
    </div>;

    return (
        <Modal onHideCart={props.onHideCart}>
            {!submitState.isSubmitting && !submitState.didSubmit && normalCart}
            {submitState.isSubmitting && !submitState.didSubmit && submitting}
            {!submitState.isSubmitting && submitState.didSubmit && submitted}
        </Modal>
    );
};

export default Cart;
