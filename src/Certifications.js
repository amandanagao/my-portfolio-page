import basics from "./images/SheCodes Basics.png";
import plus from "./images/SheCodes Plus.png";
import react from "./images/SheCodes React.png";
import addOn from "./images/SheCodes React Add-On.png";
import brainnestFDCourse from "./images/Brainnest FD Course.jpg";
import brainnestAdvancedFDCourse from "./images/Brainnest Advanced FD Course.jpg";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-solid-svg-icons";
import { faMedal } from "@fortawesome/free-solid-svg-icons";

import Carousel from 'react-bootstrap/Carousel';

import "./css/Certifications.css";

export default function Certifications() {
    return (
        <div className="Certifications" id="Certifications">
            <h4>
                Certifications{" "}
                <FontAwesomeIcon icon={faMedal} />
            </h4>
            <Carousel variant="dark">
                <Carousel.Item className="Certifications-certificate">
                        <img src={basics} alt="SheCodes Basics Workshop Certificate" />
                        <div className="Certifications-certificate-overlay">
                            <div className="Certifications-certificate-overlay-title">SheCodes Basics Workshop</div>
                            <p className="Certifications-certificate-overlay-description">September 2022</p>
                            <a href={basics} target="_blank" rel="noreferrer">
                                <FontAwesomeIcon icon={faEye} />
                            </a>
                        </div>
                </Carousel.Item>
                <Carousel.Item className="Certifications-certificate">
                        <img src={plus} alt="SheCodes Plus Workshop Certificate" />
                        <div className="Certifications-certificate-overlay">
                            <div className="Certifications-certificate-overlay-title">SheCodes Plus Workshop</div>
                            <p className="Certifications-certificate-overlay-description">November 2022</p>
                            <a href={plus} target="_blank" rel="noreferrer">
                                <FontAwesomeIcon icon={faEye} />
                            </a>
                        </div>
                </Carousel.Item>
                <Carousel.Item className="Certifications-certificate">
                        <img src={react} alt="SheCodes React Workshop Certificate" />
                        <div className="Certifications-certificate-overlay">
                            <div className="Certifications-certificate-overlay-title">SheCodes React Workshop</div>
                            <p className="Certifications-certificate-overlay-description">December 2022</p>
                            <a href={react} target="_blank" rel="noreferrer">
                                <FontAwesomeIcon icon={faEye} />
                            </a>
                        </div>
                </Carousel.Item>
                <Carousel.Item className="Certifications-certificate">
                        <img src={addOn} alt="SheCodes React Add-On Workshop Certificate" />
                        <div className="Certifications-certificate-overlay">
                            <div className="Certifications-certificate-overlay-title">SheCodes React Add-On Workshop</div>
                            <p className="Certifications-certificate-overlay-description">December 2022</p>
                            <a href={addOn} target="_blank" rel="noreferrer">
                                <FontAwesomeIcon icon={faEye} />
                            </a>
                        </div>
                </Carousel.Item>
                <Carousel.Item className="Certifications-certificate">
                        <img src={brainnestFDCourse} alt="Brainnest Frontend Development Industry Training Certificate" />
                        <div className="Certifications-certificate-overlay">
                            <div className="Certifications-certificate-overlay-title">Brainnest Frontend Development Industry Training</div>
                            <p className="Certifications-certificate-overlay-description">March 2023</p>
                            <a href={brainnestFDCourse} target="_blank" rel="noreferrer">
                                <FontAwesomeIcon icon={faEye} />
                            </a>
                        </div>
                </Carousel.Item>
                <Carousel.Item className="Certifications-certificate">
                        <img src={brainnestAdvancedFDCourse} alt="Brainnest Frontend Development Advanced Industry Training Certificate" />
                        <div className="Certifications-certificate-overlay">
                            <div className="Certifications-certificate-overlay-title">Brainnest Frontend Development Advanced Industry Training</div>
                            <p className="Certifications-certificate-overlay-description">May 2023</p>
                            <a href={brainnestAdvancedFDCourse} target="_blank" rel="noreferrer">
                                <FontAwesomeIcon icon={faEye} />
                            </a>
                        </div>
                </Carousel.Item>
            </Carousel>
        </div>
    );
}
