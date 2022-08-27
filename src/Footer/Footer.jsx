import React from 'react';
import {FaGithubSquare, FaLinkedin,  FaWhatsapp, FaTwitter, FaInstagram, } from 'react-icons/fa'
import './Footer.css'

const Footer = ()=> {
return (
    <div>
        <footer className="footer">
            <div className="footer-icons">
            <a href="https://www.linkedin.com/in/joshua-oluwatobi-a21ab4158">
                    <i className="fa fa-facebook-square"> <FaLinkedin /> </i>
                </a>
                <a href="https://www.github.com/oluwatobi2001">
                    <i className="fa fa-facebook-square"> <FaGithubSquare /></i>
                </a>
                <a href="https://twitter.com/Oluwato25390240?t=daN0mOIbjs_XCx2mhPEpww&s=08">
                    <i className="fa fa-facebook-square"> <FaTwitter /></i>
                </a>
                <a href="https://wa.me/2347015878080">
                    <i className="fa fa-facebook-square"> <FaWhatsapp /></i>
                </a>
                <a href="https://www.instagram.com/tobilyn7/">
                    <i className="fa fa-facebook-square"> <FaInstagram /></i>
                </a>
            </div>
            <div className="copyright">
                 <span>&copy; 2022</span> Joshua Oluwatobi
            </div>
       

        </footer>
    </div>
)
}
export default Footer;
