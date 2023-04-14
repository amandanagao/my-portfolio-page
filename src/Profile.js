import React from "react";

import profilePhoto from "./images/Yumi-crop.jpg";

import "./css/Profile.css";

export default function Profile() {
    return (
        <div className="Profile">
            <main>
                <section className="Profile-photo">
                    <img
                        src={profilePhoto}
                        alt="profile"
                        className="img-fluid"
                    />
                </section>
                <section className="Profile-text">
                    <div className="Profile-name">
                        <span className="Profile-name-first-letter">A</span>manda
                        {" "}
                        <span className="Profile-name-first-letter">N</span>agao
                    </div>
                    <div className="Profile-role">Frontend Developer</div>
                </section>
            </main>
        </div>
    );
}