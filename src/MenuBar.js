import React from "react";

import Navbar from 'react-bootstrap/Navbar';
import Container from "react-bootstrap/Container";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

import "./css/MenuBar.css";

export default function MenuBar() {
    return (
        <div className="MenuBar">
            <Navbar className="MenuBar-navbar" expand="md">
                <Container className="MenuBar-container">
                    <a href="#AboutMe">About Me</a>
                    <a href="#Certifications">Certifications</a>
                    <a href="#Projects">Projects</a>
                    <a href="#ContactMe">Contact Me</a>
                    <div className="MenuBar-icons">
                        <a
                            href="https://www.linkedin.com/in/amanda-yumi-nagao"
                            target="_blank"
                            rel="noreferrer"
                            className="MenuBar-icon-linkedin"
                        >
                            <FontAwesomeIcon icon={faLinkedin} />
                        </a>
                        <a
                            href="https://github.com/amandanagao"
                            target="_blank"
                            rel="noreferrer"
                            className="MenuBar-icon-github"
                        >
                            <FontAwesomeIcon icon={faGithub} />
                        </a>
                    </div>
                </Container>
            </Navbar>
        </div>
    );
}
