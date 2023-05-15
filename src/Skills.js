import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPuzzlePiece } from "@fortawesome/free-solid-svg-icons";
import { faHtml5 } from "@fortawesome/free-brands-svg-icons";
import { faCss3Alt } from "@fortawesome/free-brands-svg-icons";
import { faJs } from "@fortawesome/free-brands-svg-icons";
import { faReact } from "@fortawesome/free-brands-svg-icons";
import { faBootstrap } from "@fortawesome/free-brands-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

import "./css/Skills.css";

export default function Skills() {
    return (
        <div className="Skills" id="Skills">
            <h4>
                My Skills{" "}
                <FontAwesomeIcon icon={faPuzzlePiece} />
            </h4>
            <Container fluid>
                <Row className="Skills-text" xs="auto">
                    <Col className="Skills-title">
                        <FontAwesomeIcon icon={faHtml5} className="Skills-icon-html" title="HTML5"/> HTML
                    </Col>
                    <Col className="Skills-title">
                        <FontAwesomeIcon icon={faCss3Alt} className="Skills-icon-css" title="CSS3"/> CSS
                    </Col>
                    <Col className="Skills-title">
                        <FontAwesomeIcon icon={faJs} className="Skills-icon-javascript" title="JavaScript"/> JavaScript
                    </Col>
                    <Col className="Skills-title">
                        <FontAwesomeIcon icon={faReact} className="Skills-icon-react" title="React"/> React
                    </Col>
                    <Col className="Skills-title">
                        <FontAwesomeIcon icon={faBootstrap} className="Skills-icon-bootstrap" title="Bootstrap"/> Bootstrap 5
                    </Col>
                    <Col className="Skills-title">
                        <a
                            href="https://github.com/amandanagao"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <FontAwesomeIcon icon={faGithub} className="Skills-icon-github" title="GitHub"/> GitHub
                        </a>
                    </Col>
                    <Col className="Skills-title">VS Code</Col>
                    <Col className="Skills-title">APIs</Col>
                </Row>
            </Container>
        </div>
    );
}
