import React from "react";

import Offcanvas from "react-bootstrap/Offcanvas";

import "./MenuOffcanvas.css";

export default function MenuOffcanvas() {
    return (
        <div className="MenuOffcanvas">
            <Offcanvas.Header closeButton>
                <Offcanvas.Title className="MenuOffcanvas-title">
                    Projects
                </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
                <ul>
                    <li>
                        <a
                            href="https://dashing-speculoos-82148a.netlify.app"
                            target="_blank"
                            rel="noreferrer"
                        >
                            Dictionary App
                        </a>
                    </li>
                    <li>
                        <a
                            href="https://famous-hotteok-3cf4d5.netlify.app"
                            target="_blank"
                            rel="noreferrer"
                        >
                            Weather App
                        </a>
                    </li>
                </ul>
            </Offcanvas.Body>
        </div>
    );
}
