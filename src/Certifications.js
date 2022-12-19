import React from "react";

import basics from "./images/SheCodes Basics.png";
import plus from "./images/SheCodes Plus.png";
import react from "./images/SheCodes React.png";
import addOn from "./images/SheCodes React Add-On.png";

import "./Certifications.css";

export default function Certifications() {
    return (
        <div className="Certifications">
            <h4>Certifications</h4>
            <p>
                Please check the certificates from the SheCodes Workshops below!
            </p>
            <a href={basics} target="_blank" rel="noreferrer">
                <img src={basics} alt="basics-workshop" width={250} />
            </a>
            <a href={plus} target="_blank" rel="noreferrer">
                <img src={plus} alt="plus-workshop" width={250} />
            </a>
            <a href={react} target="_blank" rel="noreferrer">
                <img src={react} alt="react-workshop" width={250} />
            </a>
            <a href={addOn} target="_blank" rel="noreferrer">
                <img src={addOn} alt="react-add-on-workshop" width={250} />
            </a>
        </div>
    );
}
