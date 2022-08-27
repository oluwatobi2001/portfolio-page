import React from 'react';
import SwipeableViews from 'react-swipeable-views'
import {FaGithub, FaReact, FaHtml5, FaJs, FaCss3, FaAngular, FaNodeJs, FaPython, FaWordpress, FaBootstrap, FaFlask, FaFigma} from 'react-icons/fa'
import {DiMongodb, DiPostgresql, DiPhotoshop, DiHeroku, DiVisualstudio, DiFirebase, DiPython } from 'react-icons/di'

import './Skills.css'


const Skills = () => {
    const styles = {
        slide: {
            
        padding: 15,
        minHeight: 100,
        color: '#fff',
      },
      slide1: {
        backgroundColor: '#FEA900',
      },
      slide2: {
        backgroundColor: '#B3DC4A',
      },
      slide3: {
        backgroundColor: '#6AC0FF',
      },
    
    
    };
return (

    <div className="skills-container" >
        <div className="header">
<div className="line">
</div>
   <div className="header-text">My Skill-Set
       </div> 
    <div className="line-1">
</div>
    </div>
        <div className="body">
            <div className="body-header">
           Here are some of the tools/frameworks I'm proficient in     

            </div>
            <div className="body-content">
                
            <div className="body-frameworks">
                    <h3> Programming / Markup Languages </h3>
                    <ul>
                        <li>
                           HTML 5 <FaHtml5 />
                        </li>
                        <li>
                           CSS 3 <FaCss3 />
                        </li>
                        <li>
                           JavaScript <FaJs/>
                        </li>
                        <li>
                          Python<DiPython />
                        </li>
                        
                    </ul>
                </div>
                <div className="body-frameworks">
                    <h3> FrameWorks / Libraries </h3>
                    <ul>
                        <li>
                           React JS <FaReact />
                        </li>
                        <li>
                           Angular <FaAngular />
                        </li>
                        <li>
                           ExpressJS
                        </li>
                        <li>
                           D3.JS  
                        </li>
                        <li>
                           TailwindCSS

                        </li>
                        <li>
                          Bootstrap <FaBootstrap />
                        </li>
                        <li>
                          Flask  <FaFlask /> 
                        </li>
                        <li>
                           Material-UI 
                        </li>
                       
                    </ul>
                </div>
                <div className="body-databases">
                    <h3> Databases</h3>
                    <ul>
                        <li>
                           Mongo DB <DiMongodb />
                        </li>
                        <li>
                          Postgres SQL <DiPostgresql />
                        </li>
                        <li>
                           MySQL 
                        </li>
                       
                    </ul>
                </div>
                <div className="body-tools">
                    <h3> Softwares </h3>
                    <ul>
                        <li>
                            Git <FaGithub />
                        </li>
                        <li>
                            VSCode  <DiVisualstudio />
                        </li>
                        <li>
                            PostMan
                        </li>
                        <li>
                           Wordpress <FaWordpress/>
                        </li>
                        <li>
                          Adobe PhotoShop  <DiPhotoshop />
                        </li>
                        <li>
                         Figma <FaFigma />
                        </li>
                        <li>
                           Firebase <DiFirebase />
                        </li>
                       
                    </ul>
                </div>
                
               
                
  
               
            </div>

        </div>
    </div>
)
}

export default Skills