import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHtml5 } from "@fortawesome/free-brands-svg-icons";
import { faCss3Alt } from "@fortawesome/free-brands-svg-icons";
import { faJs } from "@fortawesome/free-brands-svg-icons";
import { faReact } from "@fortawesome/free-brands-svg-icons";
import { faBootstrap } from "@fortawesome/free-brands-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

import "./css/Skills.css";

export default function Skills() {
    return (
        <div className="Skills" id="Skills">
            <h4>Technical Skills</h4>
            <section className="Skills-text">
                <ul>
                    <li>
                        <div className="Skills-title">
                            Programming languages:
                        </div>
                        <span class="Skills-icons-description">
                            <FontAwesomeIcon icon={faJs} className="Skills-icon-javascript" title="JavaScript"/> JavaScript,
                        </span>
                        <span class="Skills-icons-description">
                            <FontAwesomeIcon icon={faHtml5} className="Skills-icon-html" title="HTML5"/> HTML5,
                        </span>
                        <span class="Skills-icons-description">
                            <FontAwesomeIcon icon={faCss3Alt} className="Skills-icon-css" title="CSS3"/> CSS3
                        </span>
                    </li>
                    <li>
                        <div className="Skills-title">
                            Frameworks & Libraries:
                        </div>
                        <span class="Skills-icons-description">
                            <FontAwesomeIcon icon={faReact} className="Skills-icon-react" title="React"/> React,
                        </span>
                        <span class="Skills-icons-description">
                            <FontAwesomeIcon icon={faBootstrap} className="Skills-icon-bootstrap" title="Bootstrap"/> Bootstrap 5
                        </span>
                        
                    </li>
                    <li>
                        <span className="Skills-title">Editors & Operating Systems:</span> VS Code, CodeSandBox
                    </li>
                    <li>
                        <span className="Skills-title">
                            Versioning Tools:
                        </span> {" "}
                        <a
                            href="https://github.com/amandanagao"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <FontAwesomeIcon icon={faGithub} className="Skills-icon-github" title="GitHub"/> GitHub
                        </a>
                    </li>
                    <li>
                        <span className="Skills-title">Others:</span> APIs
                    </li>
                    <li>
                        <span className="Skills-title">Miscellaneous:</span> MS Office
                    </li>
                </ul>
            </section>
        </div>
    );
}
