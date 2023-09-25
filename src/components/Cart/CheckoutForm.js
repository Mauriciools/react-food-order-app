import React, { useRef } from "react";

import useInput from "../../hooks/useInput";
import Button from "../General/Button";
import Input from "../General/Input";
import "./CheckoutForm.css";

const validateInput = ((value) => value.trim().length > 0);
const warningMessage = ((value) => <p className="error-text">Please provide a valid {value}.</p>);

function CheckoutForm(props) {
    const nameRef = useRef();
    const addressRef = useRef();
    const postalCodeRef = useRef();
    const cityRef = useRef();

    const { 
        enteredValue: enteredName, 
        valueIsValid: nameIsValid, 
        hasError: nameHasError, 
        valueChangeHandler: nameChangeHandler, 
        valueBlurHandler: nameBlurHandler, 
        reset: resetName } = useInput(validateInput);

    const { 
        enteredValue: enteredAddress, 
        valueIsValid: addressIsValid, 
        hasError: addressHasError, 
        valueChangeHandler: addressChangeHandler, 
        valueBlurHandler: addressBlurHandler, 
        reset: resetAddress } = useInput(validateInput);

    const { 
        enteredValue: enteredPCode, 
        valueIsValid: pCodeIsValid, 
        hasError: pCodeHasError, 
        valueChangeHandler: pCodeChangeHandler, 
        valueBlurHandler: pCodeBlurHandler, 
        reset: resetPCode } = useInput(validateInput);

    const { 
        enteredValue: enteredCity, 
        valueIsValid: cityIsValid, 
        hasError: cityHasError, 
        valueChangeHandler: cityChangeHandler, 
        valueBlurHandler: cityBlurHandler, 
        reset: resetCity } = useInput(validateInput);

    const formIsValid = nameIsValid && addressIsValid && pCodeIsValid && cityIsValid;

    const confirmOrderHandler = (event) => {
        event.preventDefault();

        if (!formIsValid)
            return;

        props.onConfirm({
            name: enteredName,
            address: enteredAddress,
            postalCode: enteredPCode,
            city: enteredCity
        });

        resetName();
        resetAddress();
        resetPCode();
        resetCity();
    };

    return (
        <form className="form" onSubmit={confirmOrderHandler}>
            <div className="checkout-form-control">
                <h2>Personal Info:</h2>
                <Input ref={nameRef} input={{
                    id: 'name',
                    type: 'text'
                }}
                label="Your Name"
                className={`checkout-form ${nameHasError ? 'invalid' : ''}`}
                onChange= {nameChangeHandler}
                onBlur= {nameBlurHandler}
                value= {enteredName} />
                {nameHasError && warningMessage('name')}

                <Input ref={addressRef} input={{
                    id: 'address',
                    type: 'text'
                }} 
                label="Address"
                className={`checkout-form ${addressHasError ? 'invalid' : ''}`}
                onChange= {addressChangeHandler}
                onBlur= {addressBlurHandler}
                value= {enteredAddress} />
                {addressHasError && warningMessage('address')}

                <Input ref={postalCodeRef} input={{
                    id: 'postal-code',
                    type: 'text'
                }} 
                label="Postal Code"
                className={`checkout-form ${pCodeHasError ? 'invalid' : ''}`}
                onChange= {pCodeChangeHandler}
                onBlur= {pCodeBlurHandler}
                value= {enteredPCode} />
                {pCodeHasError && warningMessage('postal code')}

                <Input ref={cityRef} input={{
                    id: 'city',
                    type: 'text'
                }} 
                label="City"
                className={`checkout-form ${cityHasError ? 'invalid' : ''}`}
                onChange= {cityChangeHandler}
                onBlur= {cityBlurHandler}
                value= {enteredCity} />
                {cityHasError && warningMessage('city')}
            </div>
            <div className="checkout-form-actions">
                <Button className="close-button" type="button" onClick={props.onCancel}>Cancel</Button>
                <button className="confirm-button" type="submit" disabled={!formIsValid}>Confirm</button>
            </div>
        </form>
    );
};

export default CheckoutForm;
