import "./Footer.css";

import React from 'react'
import { FaFacebook, FaGithub, FaHome, FaLinkedin, FaMailBulk, FaPhone, FaTwitter } from "react-icons/fa";

const Footer = () => {
    return (
        <div className="footer">
            <div className="footer-container">
                <div className="left">
                    <div className="location">
                        <FaHome size={20} style={{ color: "#fff", marginRight: "2rem" }} />
                        <div>
                            <p>A408 Block-A Ghokalenagar </p>
                            <p>SB Road Opposite JW maraoitte</p>
                            <p>Maharashtra ,India</p>
                        </div>
                    </div>
                    <div className="phone">
                        <h4>
                            <FaPhone size={20} style={{ color: "#fff", marginRight: "2rem" }} />
                            +91-1234567890
                        </h4>
                    </div>
                    <div className="email">
                        <h4>
                            <FaMailBulk size={20} style={{ color: "#fff", marginRight: "2rem" }} />
                            abc@gmail.com
                        </h4>
                    </div>
                </div>
                <div className="right">
                    <h4>
                        About the me
                    </h4>
                    <p>Hi, I’m a Full-Stack Developer specializing in Java, Spring Boot, React, and MySQL. I have experience building scalable web applications and leading development teams.</p>
                    <div className="social">

                        <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                            <FaFacebook size={30} style={{ color: "#fff", marginRight: "1rem" }} />
                        </a>
                        <a href="https://www.twitter.com" target="_blank">
                        <FaTwitter size={30} style={{ color: "#fff", marginRight: "1rem" }} />
                        </a>
                        <a href="https://www.linkedin.com/in/saudahmedkadapa/" target="_blank">
                        <FaLinkedin size={30} style={{ color: "#fff", marginRight: "1rem" }} />
                        </a>
                        <a href="https://github.com/SaudahmedKadapa" target="_blank">
                        <FaGithub size={30} style={{ color: "#fff", marginRight: "1rem" }} />
                        </a>
                        
                        


                    </div>
                </div>
            </div>

        </div>
    )
}

export default Footer
