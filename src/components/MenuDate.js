import React from "react";

import "./css/MenuDate.css";

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
    const date = ("0" + today.getDate()).slice(-2);
    const month = ("0" + (today.getMonth() + 1)).slice(-2);
    const year = today.getFullYear();

    return (
        <div className="MenuDate">
            <div className="MenuDate-date">
                {day}, {date}.{month}.{year}
            </div>
            <div className="MenuDate-time">
                {new Date().toLocaleTimeString("en-US", {
                    hour12: false,
                })}
            </div>
        </div>
    );
}
