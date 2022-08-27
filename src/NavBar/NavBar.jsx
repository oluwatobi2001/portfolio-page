import React from 'react';
import Picture from '../asset/Tobi.jpg'
import Typical from 'react-typical'
import Carousel from 'carousel-react-rcdev'

import './NavBar.css'

const About = () => {
    return (
        <div className="about">
            <div className="layout">
            <div className="picture">
  <div className="picture-bg" >

  </div>

</div> 
            <div className="desc">
<div className="intro">
    <h2> Hi! My name is <span className="tobiski">Oluwatobi</span> </h2>
</div>

<div className="main-text">

<span className="main-text-desc">
{" "}
<h1>
    {" "}
    <Typical loop={Infinity} 
    steps= {[
        "World-Class Techie",
        1500,
        "Technical  Writer",
        1500,
        "Front-End Web Developer",
        1500,
        "Back-End Developer",
        1500,
        "Full-Stack Web Developer",
        1500,
        " BlockChain Developer",
        1500,

    ]}/>
</h1>
</span>
</div>

<div className="buttons">
    <button className="button-1"><a href="tobi-resume.pdf" className="button-link"> My Resume</a></button>
    
    <button className="button-2"><a href="https://www.upwork.com/freelancers/~01e5728ca62e2a816f" className="button-link"> Hire Me </a></button>
</div>

            </div>

</div>
        </div>
    )

}
export default About;
