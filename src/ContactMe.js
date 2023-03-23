import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import "./css/ContactMe.css";

export default function ContactMe() {
    return (
        <div className="ContactMe" id="ContactMe">
            <h4>Contact Me</h4>
            <div className="ContactMe-text">
                It was a pleasure to present my page to you!
                <br />
                If you have any questions or would like to get in touch, please
                don't hesitate to contact me!
            </div>
            <Container>
                <Row>
                    <Col>
                        <a
                            href="https://www.linkedin.com/in/amanda-yumi-nagao"
                            target="_blank"
                            rel="noreferrer"
                            className="ContactMe-icon-linkedin"
                        >
                            <FontAwesomeIcon icon={faLinkedin} />
                        </a>
                        <a
                            href="https://github.com/amandanagao"
                            target="_blank"
                            rel="noreferrer"
                            className="ContactMe-icon-github"
                        >
                            <FontAwesomeIcon icon={faGithub} />
                        </a>
                    </Col>
                </Row>
                <Row>
                    <div className="ContactMe-contact">
                        <FontAwesomeIcon icon={faEnvelope} />{" "}
                        amandanagao@hotmail.com
                    </div>
                </Row>
            </Container>
            <div className="ContactMe-location">
                <FontAwesomeIcon icon={faLocationDot} /> Funchal, Ilha da Madeira, Portugal
            </div>
        </div>
    );
}
