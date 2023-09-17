import React from "react";

import Button from "../General/Button";
import Input from "../General/Input";
import "./MealItemForm.css";

function MealItemForm(props) {
    return (
        <form>
            <Input label="Amount" input={{
                id: 'amout_' + props.id,
                type: 'number',
                min: '1',
                step: '1',
                defaultValue: '1'
            }} />
            <Button className="test" type="submit">+ Add</Button>
        </form>
    );
};

export default MealItemForm;
