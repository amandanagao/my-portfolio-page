import React from "react";

import basics from "./images/SheCodes Basics.png";
import plus from "./images/SheCodes Plus.png";
import react from "./images/SheCodes React.png";
import addOn from "./images/SheCodes React Add-On.png";
import brainnestFDCourse from "./images/Brainnest FD Course.jpg";

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import "./css/Certifications.css";

export default function Certifications() {
    return (
        <div className="Certifications" id="Certifications">
            <h4>Certifications</h4>
            <div className="Certifications-text">
                Please check out my certificates below!
            </div>
            <Row>
                <Col>
                    <img src={basics} alt="SheCodes Basics Workshop Certificate" />
                </Col>
                <Col>
                    <img src={plus} alt="SheCodes Plus Workshop Certificate" />
                </Col>
                <Col>
                    <img src={react} alt="SheCodes React Workshop Certificate" />
                </Col>
                <Col>
                    <img src={addOn} alt="SheCodes React Add-On Workshop Certificate" />
                </Col>
                <Col>
                    <img src={brainnestFDCourse} alt="Brainnest Frontend Development Industry Training Certificate" />
                </Col>
            </Row>
        </div>
    );
}
