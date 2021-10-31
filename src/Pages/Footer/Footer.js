import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faYoutube, faFacebook, faInstagram, faTwitter} from "@fortawesome/free-brands-svg-icons";
import './Footer.css';

const Footer = () => {
    return (
        <div className="footer-area">
            <div className="container">
                <div className="footer-fl">
                    <div className="footer-col">
                        <h4>About Me</h4>
                        <ul>
                            <li>About Travel With Atik</li>
                            <li>Advertise With Us (PDF)</li>
                            <li>Write for Travel Oregon</li>
                            <li>Privacy Policy,</li>
                            <li>Terms of Use & Accessibility</li>
                        </ul>
                    </div>
                    <div className="footer-col">
                        <h4>Travel Industry</h4>
                        <ul>
                            <li>Submit Your Lodging Listing</li>
                            <li>Travel Industry</li>
                            <li>Travel Oregon Press Room</li>
                            <li>Recognition Programs</li>
                        </ul>
                    </div>
                    <div className="footer-col">
                        <h4>Contact With Me</h4>
                        <ul>
                            <li>Address: 13323 California St.Omaha, NE, 18813</li>
                            <li>Tel: 1 (855) 123 780 456</li>
                            <li>Email: farukabdullahal9@gmail.com</li>
                        </ul>
                    </div>
                    <div className="footer-col">
                        <h4>Follow Us</h4>
                        <div className="social-link">
                        <a href="https://www.youtube.com/"
                            className="youtube-1 social" target="_blank">
                            <FontAwesomeIcon icon={faYoutube} size="2x" />
                        </a>
                        <a href="https://www.facebook.com/abdullah.alfaruk.599"
                            className="facebook-1 social" target="_blank">
                            <FontAwesomeIcon icon={faFacebook} size="2x" />
                        </a>
                        <a href="https://www.instagram.com/abdullah_faruk1/"
                            className="instagram-1 social" target="_blank">
                            <FontAwesomeIcon icon={faInstagram} size="2x" />
                        </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;