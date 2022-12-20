import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";

import "./css/ContactMe.css";

export default function ContactMe() {
    return (
        <div className="ContactMe" id="ContactMe">
            <h4>Contact Me</h4>
            <p>
                It was a pleasure to present my page to you!
                <br />
                If you have any questions or would like to get in touch, please
                don't hesitate to contact me!
            </p>
            <a
                href="https://www.linkedin.com/in/amanda-yumi-nagao"
                target="_blank"
                rel="noreferrer"
            >
                <FontAwesomeIcon icon={faLinkedin} />
            </a>
            <a
                href="https://github.com/amandanagao"
                target="_blank"
                rel="noreferrer"
            >
                <FontAwesomeIcon icon={faGithub} />
            </a>
            <div className="ContactMe-contact">
                <FontAwesomeIcon icon={faEnvelope} /> amandanagao@hotmail.com
                <br />
                <FontAwesomeIcon icon={faWhatsapp} /> (+351) 939 234 150
            </div>
            <div className="ContactMe-location">
                <FontAwesomeIcon icon={faLocationDot} /> Funchal, Ilha da
                Madeira, Portugal
            </div>
        </div>
    );
}