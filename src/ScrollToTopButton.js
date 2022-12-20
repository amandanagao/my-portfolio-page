import React, { useState, useEffect } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleChevronUp } from "@fortawesome/free-solid-svg-icons";

import "./css/ScrollToTopButton.css";

export default function ScrollToTopButton() {
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 100) {
                setVisible(true);
            } else {
                setVisible(false);
            }
        });
    }, []);

    function scrollToTop() {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    }

    return (
        <div className="ScrollToTopButton">
            {visible && (
                <FontAwesomeIcon
                    icon={faCircleChevronUp}
                    className="ScrollToTopButton-icon-position ScrollToTopButton-icon-style"
                    onClick={scrollToTop}
                />
            )}
        </div>
    );
}
