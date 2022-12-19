import MenuBar from "./MenuBar";
import MainPage from "./MainPage";
import AboutMe from "./AboutMe";
import Skills from "./Skills";
import Certifications from "./Certifications";
import Projects from "./Projects";
import ContactMe from "./ContactMe";

import "./App.css";

export default function App() {
    return (
        <div className="App">
            <div className="container">
                <MenuBar />
                <MainPage />
                <AboutMe />
                <Skills />
                <Certifications />
                <Projects />
                <ContactMe />
            </div>
        </div>
    );
}
