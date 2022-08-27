import React from 'react';
import './About.css'


const  NavBar = () => {
    return (
        <>
        <div className="about-me">
            <nav className="nav">
                <div className="logo">
                    Oluwatobi
                </div>
                <div className="nav-bar-content">
                   
                    <div className="home">
                        <a href="#" className="link" > About Me </a>
                    </div>
                    <div className="home">
                        <a href="#" className="link" > Projects</a>
                    </div>
                    <div className="home">
                        <a href="#"  className="link"> Testimonial</a>
                    </div>
                    <div className="home">
                        <a href="#"  className="link"> Skill Set</a>
                    </div>
                    <div className="home">
                        <a href="#"  className="link">Contact Me</a>
                    </div>
                </div>
            </nav>

        </div>
        </>

    )
}
export default NavBar