import React from "react";

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


                {/* <strong>
                    New to coding but excited to learn more and build a career
                    in the IT world.
                </strong>
                <br />
                Graduated in Law in 2015, after working 3 years as a lawyer, I
                came to the conclusion that this area wasn't meant for me. I
                wasn't happy. So I decided to look for other roles.
                <br />
                In 2020, I moved to Dublin, Ireland, with my husband, to study
                and improve my English skills. I had the opportunity to work in
                a bakery, as a confectioner. I liked working there but, still,
                it wasn't what I was looking for as a job to pursue a career.
                <br />
                In January 2022, another opportunity appeared, to move to
                Funchal, Madeira Island, Portugal, where we are currently
                living. I kept looking for a job and, in July, I decided to
                study IT. <em>And that was what I was looking for!</em> I
                started learning C, and after a month, I enrolled the SheCodes
                workshops and started learning <strong>HTML</strong>,{" "}
                <strong>CSS</strong> and <strong>Javascript</strong>. Now I'm
                focusing in <strong>React</strong>, which is becoming a passion.
                <br />
                I'm a self-motivated and enthusiastic person. I have a keen
                interest in developing new abilities and improving my skills,
                always giving my best to not disappoint anyone. I may be new to
                this area but I know that with my hardwork and focus, I can
                achieve anything and deliver results with excellence. */}
            </div>
        </div>
    );
}
