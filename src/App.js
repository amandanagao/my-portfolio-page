import MenuBar from "./MenuBar";
import MainPage from "./MainPage";

import "./App.css";

export default function App() {
    return (
        <div className="App">
            <div className="container">
                <MenuBar />
                <MainPage />
            </div>
        </div>
    );
}
