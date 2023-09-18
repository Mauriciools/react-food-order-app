import React, { useContext, useEffect, useState } from "react";

import CartContext from "../../store/cart-context";
import CartIcon from "../Cart/CartIcon";
import "./HeaderButton.css";

function HeaderButton(props) {
    const [isButtonHighlighted, setIsButtonHighlighted] = useState(false);

    const cartCtx = useContext(CartContext);
    const items = cartCtx.items; 

    const numberOfCartItems = cartCtx.items.reduce((currentNumber, item) => {
        return currentNumber + item.amount;
    }, 0);

    const buttonClassNames = `header-button ${isButtonHighlighted ? 'bump' : ''}`;

    useEffect(() => {
        if (items.length === 0) {
            return;
        }

        setIsButtonHighlighted(true);

        const timerId = setTimeout(() => {
            setIsButtonHighlighted(false);
        }, 300);

        return () => {
            clearTimeout(timerId);
        };
    }, [items]);

    return (
        <button className={buttonClassNames} onClick={props.onClick}>
            <span className="header-button-icon"><CartIcon /></span>
            <span>Your Cart</span>
            <span className="header-button-amount">{numberOfCartItems}</span>
        </button>
    );
};

export default HeaderButton;
