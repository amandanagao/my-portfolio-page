import React, { useState } from "react";
import MenuOffcanvas from "./MenuOffcanvas";
import MenuDate from "./MenuDate";

import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Offcanvas from "react-bootstrap/Offcanvas";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

import "./css/MenuBar.css";

export default function MenuBar() {
    const [show, setShow] = useState(false);

    const handleClose = () => {
        setShow(false);
    };

    const handleShow = () => setShow(true);

    return (
        <div className="MenuBar">
            <Navbar className="MenuBar-navbar">
                <Container>
                    <button onClick={handleShow}>
                        <FontAwesomeIcon icon={faBars} />
                    </button>
                    <Offcanvas
                        className="MenuBar-offcanvas"
                        show={show}
                        onHide={handleClose}
                    >
                        <MenuOffcanvas />
                        <Offcanvas.Body>
                            <ul>
                                <li>
                                    <a href="#AboutMe" onClick={handleClose}>
                                        About Me
                                    </a>
                                </li>
                                <li>
                                    <a href="#Skills" onClick={handleClose}>
                                        Technical Skills
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="#Certifications"
                                        onClick={handleClose}
                                    >
                                        Certifications
                                    </a>
                                </li>
                                <li>
                                    <a href="#Projects" onClick={handleClose}>
                                        Projects
                                    </a>
                                </li>
                                <li>
                                    <a href="#ContactMe" onClick={handleClose}>
                                        Contact Me
                                    </a>
                                </li>
                            </ul>
                        </Offcanvas.Body>
                    </Offcanvas>
                    <MenuDate />
                </Container>
            </Navbar>
        </div>
    );
}
