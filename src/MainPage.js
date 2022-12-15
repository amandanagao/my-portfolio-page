import React from "react";
import profilePhoto from "./Yumi-crop.jpg";

import "./MainPage.css";

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
                    Hi! I am
                    <span className="MainPage-name">Amanda</span>
                    <br />
                    <span className="MainPage-role">
                        I am a React Developer
                    </span>
                </div>
            </div>
        </div>
    );
}
