import React, { useState } from "react";
import axios from "axios";
import MenuOffcanvas from "./MenuOffcanvas";

import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Offcanvas from "react-bootstrap/Offcanvas";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

import "./MenuBar.css";

export default function MenuBar() {
    const [show, setShow] = useState(false);
    const [weather, setWeather] = useState({});

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    function displayTemperature(response) {
        setWeather({
            city: response.data.name,
            temperature: Math.round(response.data.main.temp),
        });
    }

    function axiosCall(actionObj) {
        let latitude = actionObj.coords.latitude;
        let longitude = actionObj.coords.longitude;
        let apiKey = "0015190f5e67719a30af19f379a87e30";
        let unit = "metric";
        let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=${unit}`;
        axios.get(apiUrl).then(displayTemperature);
    }

    function displayGeolocation(position) {
        axiosCall(position);
    }

    function getCurrentLocation() {
        navigator.geolocation.getCurrentPosition(displayGeolocation);
    }

    return (
        <div className="MenuBar">
            <Navbar className="MenuBar-navbar">
                <Container>
                    <button onClick={handleShow}>
                        <FontAwesomeIcon icon={faBars} />
                    </button>
                    <span className="MenuBar-local-temperature">
                        {getCurrentLocation()}
                        {weather.city}, {weather.temperature}°C
                    </span>
                    <Offcanvas show={show} onHide={handleClose}>
                        <MenuOffcanvas />
                    </Offcanvas>
                </Container>
            </Navbar>
        </div>
    );
}
