import React from "react";
import test from "./images/Fouet.png";

import "./Projects.css";

export default function Projects() {
    return (
        <div className="Projects">
            <h4>Projects</h4>
            <p>
                While doing the SheCodes Workshops, I was able to develop some
                projects using React.
                <br />
                Please check them below!
            </p>
            <div className="Projects-card">
                <img src={test} alt="test" width={150} className="img-fluid" />
                <p>test test test</p>
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
                <img src={test} alt="test" width={150} className="img-fluid" />
                <p>test test test</p>
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
