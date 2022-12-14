import React, { useState } from "react";
import MenuOffcanvas from "./MenuOffcanvas";
import MenuDate from "./MenuDate";

import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Offcanvas from "react-bootstrap/Offcanvas";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

import "./MenuBar.css";

export default function MenuBar() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <div className="MenuBar">
            <Navbar className="MenuBar-navbar">
                <Container>
                    <button onClick={handleShow}>
                        <FontAwesomeIcon icon={faBars} />
                    </button>
                    <Offcanvas show={show} onHide={handleClose}>
                        <MenuOffcanvas />
                    </Offcanvas>
                    <MenuDate />
                </Container>
            </Navbar>
        </div>
    );
}
