import "./css/HeaderPage.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faReact } from "@fortawesome/free-brands-svg-icons";

export default function HeaderPage() {
    return (
        <div className="HeaderPage">
            <section className="HeaderPage-text">
                <div>Hi!</div>
                I'm{" "}
                <span className="HeaderPage-name">Amanda</span>,
                <br />
                <div className="HeaderPage-role">
                    Frontend Developer{" "}
                    <FontAwesomeIcon icon={faReact} spin />
                </div>
            </section>
        </div>
    );
}