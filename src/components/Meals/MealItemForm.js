import React, { useRef, useState } from "react";

import Button from "../General/Button";
import Input from "../General/Input";
import "./MealItemForm.css";

function MealItemForm(props) {
    const [isAmountValid, setIsAmountValid] = useState(true);
    const inputRef = useRef();

    const submitHandler = (event) => {
        event.preventDefault();

        if (+inputRef.current.value <= 0 || inputRef.current.value.trim().length === 0) {
            setIsAmountValid(false);
            return;
        }

        props.onAddToCart(+inputRef.current.value);
    };

    return (
        <form onSubmit={submitHandler}>
            <Input label="Amount" ref={inputRef} className="input-form" input={{
                id: 'amout_' + props.id,
                type: 'number',
                min: '1',
                step: '1',
                defaultValue: '1'
            }} />
            <Button className="meal-item-button" type="submit">+ Add</Button>
            {!isAmountValid && <p>The amount selected is not valid!</p>}
        </form>
    );
};

export default MealItemForm;
