import React from "react";
import profilePhoto from "./images/Yumi-crop.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faReact } from "@fortawesome/free-brands-svg-icons";

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import "./css/MainPage.css";

export default function MainPage() {
    return (
        <div className="MainPage">
            <Row>
                <Col>
                    <div className="MainPage-photo">
                        <img
                            src={profilePhoto}
                            alt="profile"
                            className="img-fluid"
                        />
                    </div>
                </Col>
                <Col>
                    Hi! I'm <span className="MainPage-name">Amanda</span>!
                    <br />
                    <span className="MainPage-role">
                        I'm a React Developer{" "}
                        <FontAwesomeIcon icon={faReact} spin />
                    </span>
                </Col>
            </Row>
        </div>
    );
}
