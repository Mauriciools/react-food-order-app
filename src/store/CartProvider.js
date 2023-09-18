import React, { useReducer } from "react";

import CartContext from "./cart-context";

const cartReducer = (state, action) => {
    if (action.type === 'ADD') {
        let updatedItems;
        const updatedTotalPrice = state.totalPrice + action.item.price * action.item.amount;      

        const existingCartItemIndex = state.items.findIndex((item) => item.id === action.item.id);
        const existingCartItem = state.items[existingCartItemIndex];
        if (existingCartItem) {
            let updatedItem = {
                ...existingCartItem,
                amount: existingCartItem.amount + action.item.amount
            };

            updatedItems = [...state.items];
            updatedItems[existingCartItemIndex] = updatedItem;
        }
        else {
            updatedItems = state.items.concat(action.item);
        }

        return {
            items: updatedItems,
            totalPrice: updatedTotalPrice
        };
    }

    if (action.type === 'REMOVE') {
        let updatedItems; 

        const existingCartItemIndex = state.items.findIndex((item) => item.id === action.id);
        const existingCartItem = state.items[existingCartItemIndex];
        if (existingCartItem) {
            if (existingCartItem.amount === 1) {
                updatedItems = state.items.filter((item) => item.id !== action.id);
            }
            else {
                let updatedItem = {
                    ...existingCartItem,
                    amount: existingCartItem.amount - 1
                };

                updatedItems = [...state.items];
                updatedItems[existingCartItemIndex] = updatedItem;
            }
        }

        const updatedTotalPrice = state.totalPrice - existingCartItem.price;

        return {
            items: updatedItems,
            totalPrice: updatedTotalPrice
        };
    }

    return defaultCartState;
};

const defaultCartState = {
    items: [],
    totalPrice: 0,
};

function CartProvider(props) {
    const [cartState, dispatchCartAction] = useReducer(cartReducer, defaultCartState);

    const addItemHandler = (item) => {
        dispatchCartAction({ type: 'ADD', item: item });
    };

    const removeItemHandler = (itemId) => {
        dispatchCartAction({ type: 'REMOVE', id: itemId });
    };

    const cartContext = {
        items: cartState.items,
        totalPrice: cartState.totalPrice,
        addItem: addItemHandler,
        removeItem: removeItemHandler
    };

    return (
        <CartContext.Provider value={cartContext}>
            {props.children}
        </CartContext.Provider>
    );
}

export default CartProvider;
