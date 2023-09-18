import React from "react";
import ReactDOM from "react-dom";

import "./Modal.css";

function Backdrop(props) {
    return (
        <div className="backdrop" onClick={props.onClick} />
    );
};

function Overlay(props) {
    return (
        <div className="modal">{props.children}</div>
    );
};

function Modal(props) {
    return (
        <>
            {ReactDOM.createPortal(<Backdrop onClick={props.onHideCart} />, document.getElementById('overlays'))}
            {ReactDOM.createPortal(<Overlay>{props.children}</Overlay>, document.getElementById('overlays'))}
        </>
    );
};

export default Modal;
