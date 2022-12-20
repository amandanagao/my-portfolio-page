import React from "react";
import dictionaryApp from "./images/React Dictionary App.png";
import weatherApp from "./images/React Weather App.png";

import "./css/Projects.css";

export default function Projects() {
    return (
        <div className="Projects" id="Projects">
            <h4>Projects</h4>
            <p>
                While doing the SheCodes Workshops, I was able to develop some
                projects using React.
                <br />
                Please check them below!
            </p>
            <div className="Projects-card">
                <img
                    src={dictionaryApp}
                    alt="Dictionary App"
                    width={150}
                    className="img-fluid"
                />
                <button>
                    <a
                        href="https://dashing-speculoos-82148a.netlify.app"
                        target="_blank"
                        rel="noreferrer"
                    >
                        Dictionary App
                    </a>
                </button>
            </div>
            <div className="Projects-card">
                <img
                    src={weatherApp}
                    alt="Weather App"
                    width={215}
                    className="img-fluid"
                />
                <button>
                    <a
                        href="https://famous-hotteok-3cf4d5.netlify.app"
                        target="_blank"
                        rel="noreferrer"
                    >
                        Weather App
                    </a>
                </button>
            </div>
        </div>
    );
}
