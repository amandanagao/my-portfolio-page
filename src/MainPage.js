import React from "react";
import profilePhoto from "./images/Yumi-crop.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faReact } from "@fortawesome/free-brands-svg-icons";

import "./css/MainPage.css";

export default function MainPage() {
    return (
        <div className="MainPage">
            <div className="row">
                <div className="col-4">
                    <div className="MainPage-photo">
                        <img
                            src={profilePhoto}
                            alt="profile"
                            className="img-fluid"
                        />
                    </div>
                </div>
                <div className="col-8">
                    Hi! I am <span className="MainPage-name">Amanda</span>
                    <br />
                    <span className="MainPage-role">
                        I am a React Developer{" "}
                        <FontAwesomeIcon icon={faReact} spin />
                    </span>
                </div>
            </div>
        </div>
    );
}
