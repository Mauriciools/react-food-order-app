import React from "react";

import CartIcon from "../Cart/CartIcon";
import "./HeaderButton.css";

function HeaderButton(props) {
    return (
        <button className="header-button" onClick={props.onClick}>
            <span className="header-button-icon"><CartIcon /></span>
            <span>Your Cart</span>
            <span className="header-button-price">Price</span>
        </button>
    );
};

export default HeaderButton;
