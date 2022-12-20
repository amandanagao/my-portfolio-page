import React from "react";

import Offcanvas from "react-bootstrap/Offcanvas";

import "./css/MenuOffcanvas.css";

export default function MenuOffcanvas() {
    return (
        <div className="MenuOffcanvas">
            <Offcanvas.Header closeButton>
                <Offcanvas.Title className="MenuOffcanvas-title">
                    My Portfolio Page
                </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
                <ul>
                    <li>
                        <a href="/#AboutMe">About Me</a>
                    </li>
                    <li>
                        <a href="/#Skills">Technical Skills</a>
                    </li>
                    <li>
                        <a href="/#Certifications">Certifications</a>
                    </li>
                    <li>
                        <a href="/#Projects">Projects</a>
                    </li>
                    <li>
                        <a href="/#ContactMe">Contact Me</a>
                    </li>
                </ul>
            </Offcanvas.Body>
        </div>
    );
}
