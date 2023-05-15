import "./css/Profile.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

export default function Profile() {
    return (
        <div className="Profile">
            <main className="Profile-container">
                <div className="Profile-icons">
                    <a
                        href="https://www.linkedin.com/in/amanda-yumi-nagao"
                        target="_blank"
                        rel="noreferrer"
                        className="Profile-icon-linkedin"
                    >
                        <FontAwesomeIcon icon={faLinkedin} />
                    </a>
                    <a
                        href="https://github.com/amandanagao"
                        target="_blank"
                        rel="noreferrer"
                        className="Profile-icon-github"
                    >
                        <FontAwesomeIcon icon={faGithub} />
                    </a>
                </div>
            </main>
        </div>
    );
}