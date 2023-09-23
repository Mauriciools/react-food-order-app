import React from "react";

import "./Input.css";

const Input = React.forwardRef((props, ref) => {
    return (
        <div className={props.className}>
            <label htmlFor={props.input.id}>{props.label}</label>
            <input ref={ref} {...props.input}></input>
        </div>
    );
});

export default Input;
