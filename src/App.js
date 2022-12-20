import MenuBar from "./components/MenuBar";
import MainPage from "./components/MainPage";
import AboutMe from "./components/AboutMe";
import Skills from "./components/Skills";
import Certifications from "./components/Certifications";
import Projects from "./components/Projects";
import ContactMe from "./components/ContactMe";
import ScrollToTopButton from "./components/ScrollToTopButton";

import "./css/App.css";

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
                <ScrollToTopButton />
            </div>
        </div>
    );
}
