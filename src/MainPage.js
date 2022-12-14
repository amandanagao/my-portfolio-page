import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

import "./MainPage.css";

export default function MainPage() {
    return (
        <div className="MainPage">
            Hi! I'm
            <div className="MainPage-name">Amanda Yumi Nagao</div>
            and I'm a React Developer <FontAwesomeIcon icon={faStar} />
        </div>
    );
}
