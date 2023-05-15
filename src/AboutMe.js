import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faIdBadge } from "@fortawesome/free-solid-svg-icons";

import "./css/AboutMe.css";

export default function AboutMe() {
    return (
        <div className="AboutMe" id="AboutMe">
            <h4>
                <FontAwesomeIcon icon={faIdBadge} />{" "}
                About Me
            </h4>
            <div className="AboutMe-text">
                Hey there, my name is <span className="AboutMe-text-name">Amanda Yumi Nagao</span>!
                I'm a <strong>Frontend Developer</strong> from Brazil  but currently located in Portugal.
                <br />
                I'm new to coding but already really <strong>addicted</strong> to it 🤓! I'm always curious and want to learn more and more!
                <br />
                I'm also passionate about <strong>games 🎮</strong>, <strong>animes 📺</strong> and <strong>photography 📸</strong>!
                Oh, and I'm a <strong>cat lover 🐈‍⬛💖</strong> too!
                <br />
                I'm open to <strong>Job opportunities</strong> where I can develop new abilities, improve my skills and grow!
                Please don't hesitate to contact me if you have a good opportunity that matches my skills.
            </div>
            <a href="https://amandanagao.github.io/Resume/" target="_blank" rel="noreferrer" className="AboutMe-resume">Resume</a>
        </div>
    );
}
