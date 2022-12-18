import React from "react";

import Offcanvas from "react-bootstrap/Offcanvas";

import "./MenuOffcanvas.css";

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
                        <a href="/" target="_blank" rel="noreferrer">
                            About Me
                        </a>
                    </li>
                    <li>
                        <a href="/" target="_blank" rel="noreferrer">
                            Technical Skills
                        </a>
                    </li>
                    <li>
                        <a href="/" target="_blank" rel="noreferrer">
                            Certifications
                        </a>
                    </li>
                    <li>
                        <a href="/" target="_blank" rel="noreferrer">
                            Projects
                        </a>
                    </li>
                </ul>
            </Offcanvas.Body>
        </div>
    );
}
