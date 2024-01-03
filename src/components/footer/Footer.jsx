import React from "react";
import {
    FaGithub,
    FaInstagram,
    FaTwitter,
    FaLinkedin,
} from "react-icons/fa";

import ContentWrapper from "../contentWrapper/ContentWrapper";

import "./style.scss";

const Footer = () => {
    return (
        <footer className="footer">
            <ContentWrapper>
                <ul className="menuItems">
                    <li className="menuItem">Terms Of Use</li>
                    <li className="menuItem">Privacy-Policy</li>
                    <li className="menuItem">About</li>
                    <li className="menuItem">Blog</li>
                    <li className="menuItem">FAQ</li>
                </ul>
                <div className="infoText">
                Movies-X is an online database of information related to films, television series, podcasts, home videos, video games, and streaming content online - including cast, production crew and personal biographies, plot summaries, trivia, ratings, and fan and critical reviews.
                </div>
                <div className="socialIcons">
                    <a href="https://github.com/Praveen-2022" target="_blank">
                    <span className="icon">
                        <FaGithub />
                    </span>
                    </a>
                    <a href="https://www.instagram.com/codingwithpraveen" target="_blank">
                    <span className="icon">
                        <FaInstagram />
                    </span>
                    </a>
                    <a href="https://twitter.com/Praveen52" target="_blank">
                    <span className="icon">
                        <FaTwitter />
                    </span>
                    </a>
                    <a href="https://www.linkedin.com/in/praveen-kumar-chauhan" target="_blank">
                    <span className="icon">
                        <FaLinkedin />
                    </span>
                    </a>
                </div>
            </ContentWrapper>
        </footer>
    );
};

export default Footer;
