import MenuBar from "./MenuBar";
import MainPage from "./MainPage";
import AboutMe from "./AboutMe";
import Projects from "./Projects";

import "./App.css";

export default function App() {
    return (
        <div className="App">
            <div className="container">
                <MenuBar />
                <MainPage />
                <AboutMe />
                <Projects />
            </div>
        </div>
    );
}
