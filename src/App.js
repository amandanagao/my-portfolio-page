import MenuDate from "./MenuDate";
import Profile from "./Profile";
import MainPage from "./MainPage";
import Skills from "./Skills";
import MenuBar from "./MenuBar";
import AboutMe from "./AboutMe";
import Certifications from "./Certifications";
import Projects from "./Projects";
import ContactMe from "./ContactMe";
import ScrollToTopButton from "./ScrollToTopButton";

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import "./css/App.css";

export default function App() {
    return (
        <div className="App">
            <Row>
                <Col xs={12} md={5} lg={4} xl={3} className="App-sidebar">
                    <Row  className="App-sidebar-date">
                        <MenuDate />
                    </Row>
                    <Row className="App-sidebar-profile">
                        <Profile />
                    </Row>
                    <Row>
                        <MenuBar />
                    </Row>
                </Col>
                <Col xs={12} md={7} lg={8} xl={9} className="App-content">
                    <Row className="App-content-main">
                        <MainPage />
                    </Row>
                    <Row xs={1} md={1} lg={1} xl={2}>
                        <Col>
                            <AboutMe />
                        </Col>
                        <Col>
                            <Skills />
                        </Col>
                    </Row>
                    <Certifications />
                    <Projects />
                    <ContactMe />
                    <ScrollToTopButton />
                </Col>
            </Row>
        </div>
    );
}
