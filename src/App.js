// import MenuDate from "./MenuDate";
import HeaderPage from "./HeaderPage";
import Profile from "./Profile";
import Skills from "./Skills";
import MenuBar from "./MenuBar";
import AboutMe from "./AboutMe";
import Certifications from "./Certifications";
import Projects from "./Projects";
import ContactMe from "./ContactMe";
import FooterPage from "./FooterPage";
import ScrollToTopButton from "./ScrollToTopButton";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import "./css/App.css";

export default function App() {
    return (
        <div className="App">
            <MenuBar />
            {/* <MenuDate /> */}
            <HeaderPage />
            <section className="App-content-first-section">
                <Container>
                    <Row className="justify-content-md-center">
                        <Col xs lg="4">
                            <Profile />
                        </Col>
                        <Col>
                            <AboutMe />
                        </Col>
                    </Row>
                </Container>
            </section>
            <section className="App-content-second-section">
                <Container>
                    <Row className="justify-content-md-center">
                        <Col xs="12" lg="7">
                            <Certifications />
                        </Col>
                        <Col xs lg="5">
                            <Skills />
                        </Col>
                    </Row>
                </Container>
            </section>
            <Projects />
            <ContactMe />
            <FooterPage />
            <ScrollToTopButton />  
        </div>
    );
}
