import React from "react";

import basics from "./images/SheCodes Basics.png";
import plus from "./images/SheCodes Plus.png";
import react from "./images/SheCodes React.png";
import addOn from "./images/SheCodes React Add-On.png";

import "./css/Certifications.css";

export default function Certifications() {
    return (
        <div className="Certifications" id="Certifications">
            <h4>Certifications</h4>
            <p>
                Please check the certificates from the SheCodes Workshops below!
            </p>
            <img src={basics} alt="shecodes-basics-workshop" />
            <img src={plus} alt="shecodes-plus-workshop" />
            <img src={react} alt="shecodes-react-workshop" />
            <img src={addOn} alt="shecodes-react-add-on-workshop" />
        </div>
    );
}
