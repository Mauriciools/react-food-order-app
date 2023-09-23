import React, { useRef } from "react";

import Input from "../General/Input";
import "./CheckoutForm.css";

function CheckoutForm(props) {
    const nameRef = useRef();
    const addressRef = useRef();
    const postalCodeRef = useRef();
    const cityRef = useRef();

    const confirmOrderHandler = (event) => {
        event.preventDefault();


    };

    return (
        <form className="form" onSubmit={confirmOrderHandler}>
            <div className="checkout-form-control">
                <h2>Personal Info:</h2>
                <Input label="Your Name" ref={nameRef} className="checkout-form" input={{
                    id: 'name',
                    type: 'text'
                }} />
                <Input label="Address" ref={addressRef} className="checkout-form" input={{
                    id: 'address',
                    type: 'text'
                }} />
                <Input label="Postal Code" ref={postalCodeRef} className="checkout-form" input={{
                    id: 'postal-code',
                    type: 'text'
                }} />
                <Input label="City" ref={cityRef} className="checkout-form" input={{
                    id: 'city',
                    type: 'text'
                }} />
            </div>
            <div className="checkout-form-actions">
                <button className="checkout-cancel-button" type="button" onClick={props.onCancel}>Cancel</button>
                <button className="checkout-confirm-button" type="submit">Confirm</button>
            </div>
        </form>
    );
};

export default CheckoutForm;
