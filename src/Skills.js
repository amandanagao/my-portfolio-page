import React from "react";

import "./css/Skills.css";

export default function Skills() {
    return (
        <div className="Skills" id="Skills">
            <h4>Technical Skills</h4>
            <div className="Skills-text">
                <ul>
                    <li>
                        <span className="Skills-title">
                            Programming languages:
                        </span>{" "}
                        JavaScript, HTML5, CSS3
                    </li>
                    <li>
                        <span className="Skills-title">
                            Frameworks & Libraries:
                        </span>{" "}
                        React, Bootstrap 5
                    </li>
                    <li>
                        <span className="Skills-title">
                            Editors & Operating Systems:
                        </span>{" "}
                        VS Code, CodeSandBox
                    </li>
                    <li>
                        <span className="Skills-title">Versioning Tools:</span>{" "}
                        GitHub
                    </li>
                    <li>
                        <span className="Skills-title">Others:</span> APIs
                    </li>
                    <li>
                        <span className="Skills-title">Miscellaneous:</span> MS
                        Office
                    </li>
                </ul>
            </div>
        </div>
    );
}
