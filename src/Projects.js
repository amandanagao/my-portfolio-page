import React from "react";

import dictionaryApp from "./images/React Dictionary App.png";
import weatherApp from "./images/React Weather App.png";
import restaurantWebPage from "./images/Restaurant Web Page.png";
import rockPaperScissorsGame from "./images/Rock-Paper-Scissors Game.png"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faListCheck } from "@fortawesome/free-solid-svg-icons";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import { faHtml5 } from "@fortawesome/free-brands-svg-icons";
import { faCss3Alt } from "@fortawesome/free-brands-svg-icons";
import { faJs } from "@fortawesome/free-brands-svg-icons";
import { faReact } from "@fortawesome/free-brands-svg-icons";
import { faBootstrap } from "@fortawesome/free-brands-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import "./css/Projects.css";

export default function Projects() {
    return (
        <div className="Projects" id="Projects">
            <h4>
                <FontAwesomeIcon icon={faListCheck} />{" "}
                Projects
            </h4>
            <div className="Projects-text">
                Check out the projects I developed so far!
            </div>
            <Container fluid>
                <Row xs={12} md={12} lg={'auto'} xl={3}>
                    <Col>
                        <div className="Projects-card">
                            <img
                                src={dictionaryApp}
                                alt="Dictionary App"
                                width={150}
                                className="img-fluid"
                            />
                            <div className="Projects-card-overlay">
                                <div className="Projects-card-overlay-title">Dictionary App</div>
                                <div className="Projects-card-overlay-description">
                                    <FontAwesomeIcon icon={faHtml5} className="Projects-icon-html" title="HTML5"/>
                                    <FontAwesomeIcon icon={faCss3Alt} className="Projects-icon-css" title="CSS3"/>
                                    <FontAwesomeIcon icon={faJs} className="Projects-icon-javascript" title="JavaScript"/>
                                    <FontAwesomeIcon icon={faReact} className="Projects-icon-react" title="React"/>
                                    <FontAwesomeIcon icon={faBootstrap} className="Projects-icon-bootstrap" title="Bootstrap"/>
                                </div>
                                <Row>
                                    <Col>
                                        <a
                                            href="https://dashing-speculoos-82148a.netlify.app"
                                            target="_blank"
                                            rel="noreferrer"
                                        >
                                            <FontAwesomeIcon icon={faPaperPlane} />
                                        </a>
                                    </Col>
                                    <Col>
                                        <a
                                        href="https://github.com/amandanagao/shecodes-react-dictionary-project"
                                        target="_blank"
                                        rel="noreferrer"
                                        className="ContactMe-icon-github"
                                        >
                                            <FontAwesomeIcon icon={faGithub} />
                                        </a>
                                    </Col>
                                </Row>
                            </div>
                        </div>
                    </Col>
                    <Col>
                        <div className="Projects-card">
                            <img
                                src={weatherApp}
                                alt="Weather App"
                                width={150}
                                className="img-fluid"
                            />
                            <div className="Projects-card-overlay">
                                <div className="Projects-card-overlay-title">Weather App</div>
                                <div className="Projects-card-overlay-description">
                                    <FontAwesomeIcon icon={faHtml5} className="Projects-icon-html" title="HTML5"/>
                                    <FontAwesomeIcon icon={faCss3Alt} className="Projects-icon-css" title="CSS3"/>
                                    <FontAwesomeIcon icon={faJs} className="Projects-icon-javascript" title="JavaScript"/>
                                    <FontAwesomeIcon icon={faReact} className="Projects-icon-react" title="React"/>
                                    <FontAwesomeIcon icon={faBootstrap} className="Projects-icon-bootstrap" title="Bootstrap"/>
                                </div>
                                <Row>
                                    <Col>
                                        <a
                                            href="https://famous-hotteok-3cf4d5.netlify.app"
                                            target="_blank"
                                            rel="noreferrer"
                                        >
                                            <FontAwesomeIcon icon={faPaperPlane} />
                                        </a>
                                    </Col>
                                    <Col>
                                        <a
                                        href="https://github.com/amandanagao/shecodes-react-project"
                                        target="_blank"
                                        rel="noreferrer"
                                        className="ContactMe-icon-github"
                                        >
                                            <FontAwesomeIcon icon={faGithub} />
                                        </a>
                                    </Col>
                                </Row>
                            </div>
                        </div>
                    </Col>
                    <Col>
                        <div className="Projects-card">
                            <img
                                src={restaurantWebPage}
                                alt="Restaurante Web Page"
                                width={150}
                                className="img-fluid"
                            />
                            <div className="Projects-card-overlay">
                                <div className="Projects-card-overlay-title">Restaurante Web Page</div>
                                <div className="Projects-card-overlay-description">
                                    <FontAwesomeIcon icon={faHtml5} className="Projects-icon-html" title="HTML5"/>
                                    <FontAwesomeIcon icon={faCss3Alt} className="Projects-icon-css" title="CSS3"/>
                                </div>
                                <Row>
                                    <Col>
                                        <a
                                            href="https://amandanagao.github.io/Brainnest-FD-Course-CSS-Assignment/"
                                            target="_blank"
                                            rel="noreferrer"
                                        >
                                            <FontAwesomeIcon icon={faPaperPlane} />
                                        </a>
                                    </Col>
                                    <Col>
                                        <a
                                        href="https://github.com/amandanagao/Brainnest-FD-Course-CSS-Assignment"
                                        target="_blank"
                                        rel="noreferrer"
                                        className="ContactMe-icon-github"
                                        >
                                            <FontAwesomeIcon icon={faGithub} />
                                        </a>
                                    </Col>
                                </Row>
                            </div>
                        </div>
                    </Col>
                    <Col>
                        <div className="Projects-card">
                            <img
                                src={rockPaperScissorsGame}
                                alt="Rock-Paper-Scissors Game"
                                width={150}
                                className="img-fluid"
                            />
                            <div className="Projects-card-overlay">
                                <div className="Projects-card-overlay-title">Rock-Paper-Scissors Game</div>
                                <div className="Projects-card-overlay-description">
                                    <FontAwesomeIcon icon={faJs} className="Projects-icon-javascript" title="JavaScript"/>
                                </div>
                                <Row>
                                    <Col>
                                        <a
                                            href="https://amandanagao.github.io/Brainnest-FD-Course-JS-Part-1-Assignment/"
                                            target="_blank"
                                            rel="noreferrer"
                                        >
                                            <FontAwesomeIcon icon={faPaperPlane} />
                                        </a>
                                    </Col>
                                    <Col>
                                        <a
                                        href="https://github.com/amandanagao/Brainnest-FD-Course-JS-Part-1-Assignment"
                                        target="_blank"
                                        rel="noreferrer"
                                        className="ContactMe-icon-github"
                                        >
                                            <FontAwesomeIcon icon={faGithub} />
                                        </a>
                                    </Col>
                                </Row>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}
