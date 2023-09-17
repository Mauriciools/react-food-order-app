import React from "react";

import "./Input.css";

function Input(props) {
    return (
        <div className="input-form">
            <label htmlFor={props.input.id}>{props.label}</label>
            <input {...props.input}></input>
        </div>
    );
};

export default Input;
