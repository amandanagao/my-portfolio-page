import MenuBar from "./MenuBar";
import MainPage from "./MainPage";
import AboutMe from "./AboutMe";
import Skills from "./Skills";
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
            <div className="container">
                <Row>
                    <Col>
                        <MenuBar />
                        <MainPage />
                        <AboutMe />
                        <Skills />
                        <Certifications />
                        <Projects />
                        <ContactMe />
                        <ScrollToTopButton />
                    </Col>
                </Row>
            </div>
        </div>
    );
}
