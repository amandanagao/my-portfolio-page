import dictionaryApp from "./images/React Dictionary App.png";
import weatherApp from "./images/React Weather App.png";
import restaurantWebPage from "./images/Restaurant Web Page.png";
import rockPaperScissorsGame from "./images/Rock-Paper-Scissors Game.png";
import gameCollection from "./images/Game Collection.png";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faListCheck } from "@fortawesome/free-solid-svg-icons";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import { faHtml5 } from "@fortawesome/free-brands-svg-icons";
import { faCss3Alt } from "@fortawesome/free-brands-svg-icons";
import { faJs } from "@fortawesome/free-brands-svg-icons";
import { faReact } from "@fortawesome/free-brands-svg-icons";
import { faBootstrap } from "@fortawesome/free-brands-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

import Tab from 'react-bootstrap/Tab';
import Figure from 'react-bootstrap/Figure';
import Nav from 'react-bootstrap/Nav';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

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
            <Tab.Container className="Projects-container">
                <Row className="Projects-row justify-content-center">
                    <Col sm={12}>
                        <Nav variant="pills" className="Projects-nav justify-content-center">
                            <Nav.Item className="Projects-nav-item">
                            <Nav.Link eventKey="dictionary" aria-current="page">React Dictionary App</Nav.Link>
                            </Nav.Item>
                            <Nav.Item className="Projects-nav-item">
                            <Nav.Link eventKey="weather">React Weather App</Nav.Link>
                            </Nav.Item>
                            <Nav.Item className="Projects-nav-item">
                            <Nav.Link eventKey="restaurant">Restaurant Web Page</Nav.Link>
                            </Nav.Item>
                            <Nav.Item className="Projects-nav-item">
                            <Nav.Link eventKey="rockPaperScissorsGame">Rock-Paper-Scissors Game</Nav.Link>
                            </Nav.Item>
                            <Nav.Item className="Projects-nav-item">
                            <Nav.Link eventKey="gameCollection">Game Collection Page</Nav.Link>
                            </Nav.Item>
                        </Nav>
                    </Col>
                    <Col sm={4}>
                        <Tab.Content className="Projects-tabs">
                            <Tab.Pane eventKey="dictionary" title="React Dictionary App" className="Projects-tab">
                                <Figure className="Projects-tab-content">
                                    <Figure.Caption className="Projects-tab-caption">
                                        <div className="Projects-tab-description">
                                            <FontAwesomeIcon icon={faHtml5} className="Projects-icon-html" title="HTML5"/>
                                            <FontAwesomeIcon icon={faCss3Alt} className="Projects-icon-css" title="CSS3"/>
                                            <FontAwesomeIcon icon={faJs} className="Projects-icon-javascript" title="JavaScript"/>
                                            <FontAwesomeIcon icon={faReact} className="Projects-icon-react" title="React"/>
                                            <FontAwesomeIcon icon={faBootstrap} className="Projects-icon-bootstrap" title="Bootstrap"/>
                                        </div>
                                        <div className="Projects-tab-links">
                                            <a
                                                href="https://dashing-speculoos-82148a.netlify.app"
                                                target="_blank"
                                                rel="noreferrer"
                                            >
                                                <FontAwesomeIcon icon={faPaperPlane} />
                                            </a>
                                            <a
                                            href="https://github.com/amandanagao/shecodes-react-dictionary-project"
                                            target="_blank"
                                            rel="noreferrer"
                                            className="ContactMe-icon-github"
                                            >
                                                <FontAwesomeIcon icon={faGithub} />
                                            </a>
                                        </div>
                                    </Figure.Caption>
                                    <Figure.Image
                                        src={dictionaryApp}
                                        alt="Dictionary App"
                                    />
                                </Figure>
                            </Tab.Pane>
                            <Tab.Pane eventKey="weather" title="React Weather App" className="Projects-tab">
                                <Figure className="Projects-tab-content">
                                    <Figure.Caption className="Projects-tab-caption">
                                        <div className="Projects-tab-description">
                                            <FontAwesomeIcon icon={faHtml5} className="Projects-icon-html" title="HTML5"/>
                                            <FontAwesomeIcon icon={faCss3Alt} className="Projects-icon-css" title="CSS3"/>
                                            <FontAwesomeIcon icon={faJs} className="Projects-icon-javascript" title="JavaScript"/>
                                            <FontAwesomeIcon icon={faReact} className="Projects-icon-react" title="React"/>
                                            <FontAwesomeIcon icon={faBootstrap} className="Projects-icon-bootstrap" title="Bootstrap"/>
                                        </div>
                                        <div className="Projects-tab-links">
                                            <a
                                                href="https://famous-hotteok-3cf4d5.netlify.app"
                                                target="_blank"
                                                rel="noreferrer"
                                            >
                                                <FontAwesomeIcon icon={faPaperPlane} />
                                            </a>
                                            <a
                                            href="https://github.com/amandanagao/shecodes-react-project"
                                            target="_blank"
                                            rel="noreferrer"
                                            className="ContactMe-icon-github"
                                            >
                                                <FontAwesomeIcon icon={faGithub} />
                                            </a>
                                        </div>
                                    </Figure.Caption>
                                    <Figure.Image
                                        src={weatherApp}
                                        alt="Weather App"
                                    />
                                </Figure>
                            </Tab.Pane>
                            <Tab.Pane eventKey="restaurant" title="Restaurante Web Page" className="Projects-tab">
                                <Figure className="Projects-tab-content">
                                    <Figure.Caption className="Projects-tab-caption">
                                        <div className="Projects-tab-description">
                                            <FontAwesomeIcon icon={faHtml5} className="Projects-icon-html" title="HTML5"/>
                                            <FontAwesomeIcon icon={faCss3Alt} className="Projects-icon-css" title="CSS3"/>
                                        </div>
                                        <div className="Projects-tab-links">
                                            <a
                                                href="https://amandanagao.github.io/Brainnest-FD-Course-CSS-Assignment/"
                                                target="_blank"
                                                rel="noreferrer"
                                            >
                                                <FontAwesomeIcon icon={faPaperPlane} />
                                            </a>
                                            <a
                                            href="https://github.com/amandanagao/Brainnest-FD-Course-CSS-Assignment"
                                            target="_blank"
                                            rel="noreferrer"
                                            className="ContactMe-icon-github"
                                            >
                                                <FontAwesomeIcon icon={faGithub} />
                                            </a>
                                        </div>
                                    </Figure.Caption>
                                    <Figure.Image
                                        src={restaurantWebPage}
                                        alt="Restaurante Web Page"
                                    />
                                </Figure>
                            </Tab.Pane>
                            <Tab.Pane eventKey="rockPaperScissorsGame" title="Rock-Paper-Scissors Game" className="Projects-tab">
                                <Figure className="Projects-tab-content">
                                    <Figure.Caption className="Projects-tab-caption">
                                        <div className="Projects-tab-description">
                                            <FontAwesomeIcon icon={faJs} className="Projects-icon-javascript" title="JavaScript"/>
                                        </div>
                                        <div className="Projects-tab-links">
                                            <a
                                                href="https://amandanagao.github.io/Brainnest-FD-Course-JS-Part-1-Assignment/"
                                                target="_blank"
                                                rel="noreferrer"
                                            >
                                                <FontAwesomeIcon icon={faPaperPlane} />
                                            </a>
                                            <a
                                            href="https://github.com/amandanagao/Brainnest-FD-Course-JS-Part-1-Assignment"
                                            target="_blank"
                                            rel="noreferrer"
                                            className="ContactMe-icon-github"
                                            >
                                                <FontAwesomeIcon icon={faGithub} />
                                            </a>
                                        </div>
                                    </Figure.Caption>
                                    <Figure.Image
                                        src={rockPaperScissorsGame}
                                        alt="Rock-Paper-Scissors Game"
                                    />
                                </Figure>
                            </Tab.Pane>
                            <Tab.Pane eventKey="gameCollection" title="Game Collection Page" className="Projects-tab">
                                <Figure className="Projects-tab-content">
                                    <Figure.Caption className="Projects-tab-caption">
                                        <div className="Projects-tab-description">
                                            <FontAwesomeIcon icon={faHtml5} className="Projects-icon-html" title="HTML5"/>
                                            <FontAwesomeIcon icon={faCss3Alt} className="Projects-icon-css" title="CSS3"/>
                                            <FontAwesomeIcon icon={faJs} className="Projects-icon-javascript" title="JavaScript"/>
                                        </div>
                                        <div className="Projects-tab-links">
                                            <a
                                                href="https://amandanagao.github.io/Brainnest-Adv-FD-Course---Game-Collection/"
                                                target="_blank"
                                                rel="noreferrer"
                                            >
                                                <FontAwesomeIcon icon={faPaperPlane} />
                                            </a>
                                            <a
                                            href="https://github.com/amandanagao/Brainnest-Adv-FD-Course---Game-Collection"
                                            target="_blank"
                                            rel="noreferrer"
                                            className="ContactMe-icon-github"
                                            >
                                                <FontAwesomeIcon icon={faGithub} />
                                            </a>
                                        </div>
                                    </Figure.Caption>
                                    <Figure.Image
                                        src={gameCollection}
                                        alt="Game Collection"
                                    />
                                </Figure>
                            </Tab.Pane>
                        </Tab.Content>
                    </Col>
                </Row>
            </Tab.Container>
        </div>
    );
}
