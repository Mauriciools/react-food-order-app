import React from "react";

import HeaderButton from "./HeaderButton";
import HeaderImage from "./HeaderImage";
import "./Header.css";

function Header() {
    return (
        <>
            <header className="header">
                <h1>Meals</h1>
                <HeaderButton>Cart</HeaderButton>
            </header>
            <HeaderImage />
        </>
    );
};

export default Header;
