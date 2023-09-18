import React from "react";

import HeaderButton from "./HeaderButton";
import HeaderImage from "./HeaderImage";
import "./Header.css";

function Header(props) {
    return (
        <>
            <header className="header">
                <h1>Meals</h1>
                <HeaderButton onClick={props.onShowCart}>Cart</HeaderButton>
            </header>
            <HeaderImage />
        </>
    );
};

export default Header;
