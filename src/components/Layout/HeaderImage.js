import React from "react";

import mealsImage from "../../assets/meals.jpg";
import "./HeaderImage.css";

function HeaderImage() {
    return (
        <div className="header-img">
            <img src={mealsImage} alt="A table fulll of different meals" />
        </div>
    );
};

export default HeaderImage;
