import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faReact } from "@fortawesome/free-brands-svg-icons";

import "./css/MainPage.css";

export default function MainPage() {
    return (
        <div className="MainPage">
            <main>
                <section className="MainPage-text">
                    <div>Hi,</div>
                    I'm{" "}
                    <span className="MainPage-name">Amanda</span>,
                    <br />
                    <div className="MainPage-role">
                        Frontend Developer{" "}
                        <FontAwesomeIcon icon={faReact} spin />
                    </div>
                </section>
            </main>
        </div>
    );
}
