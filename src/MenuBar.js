import React from "react";

import MenuDate from "./MenuDate";

import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";

import "./css/MenuBar.css";

export default function MenuBar() {
    return (
        <div className="MenuBar">
            <Navbar className="MenuBar-navbar">
                <Container className="MenuBar-container">
                    <a href="#AboutMe">About Me</a>
                    <a href="#Skills">Technical Skills</a>
                    <a href="#Certifications">Certifications</a>
                    <a href="#Projects">Projects</a>
                    <a href="#ContactMe">Contact Me</a>
                </Container>
            </Navbar>
            <MenuDate />
        </div>
    );
}
