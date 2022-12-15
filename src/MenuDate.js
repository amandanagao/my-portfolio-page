import React from "react";

import "./MenuDate.css";

export default function MenuDate() {
    const today = new Date();
    const days = [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
    ];
    const day = days[today.getDay()];
    const date = ("0" + today.getDay()).slice(-2);
    const month = ("0" + (today.getMonth() + 1)).slice(-2);
    const year = today.getFullYear();

    return (
        <div className="MenuDate">
            {day}, {date}.{month}.{year}
        </div>
    );
}
