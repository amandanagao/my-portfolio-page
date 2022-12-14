import React from "react";

import "./MenuDate.css";

export default function MenuDate() {
    const date = new Date();
    const day = ("0" + date.getDay()).slice(-2);
    const month = ("0" + (date.getMonth() + 1)).slice(-2);
    const year = date.getFullYear();

    return (
        <div className="MenuDate">
            {day}.{month}.{year}
        </div>
    );
}
