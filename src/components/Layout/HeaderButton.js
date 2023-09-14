import React from "react";

import CartIcon from "../Cart/CartIcon";
import "./HeaderButton.css";

function HeaderButton() {
    return (
        <button className="header-button">
            <span className="header-button-icon"><CartIcon /></span>
            <span>Your Cart</span>
            <span className="header-button-price">Price</span>
        </button>
    );
};

export default HeaderButton;
