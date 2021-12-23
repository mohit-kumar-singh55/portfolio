import React from 'react';
import "./About.css";
import cpp from "./images/cpp.jpg";
import js from "./images/js.png";
import java from "./images/java.png";
import py from "./images/py.png";
import go from "./images/go.png";
import swift from "./images/swift.png";
import ts from "./images/ts.png";

function About() {
    return (
        <div className="container">
            <div className="About-Me">
                <div className='box'>
                    <span className='dot dot1'></span>
                    <span className='dot dot2'></span>
                    <span className='dot dot3'></span>
                    <h2 className='gradient__text about_heading'>About Me</h2>
                    <div className='box_content'>
                        <p>Welcome to my Arena</p>
                        <p>My name is <strong>Mohit Kumar Singh</strong></p>
                        <p>I am currently in 2nd year of Bsc Computer Science</p>
                        <br/>
                        <p>I love to play with DOM</p>
                        <br/>
                        <p>I'm quite confident, curious and <em>consistently working to improve and expand my skills</em></p>
                        <br/>
                        <p>Looking forward to gain some experience</p>
                        <br/>
                        <p><em><strong>~Thanks you for your time</strong></em></p>
                    </div>
                </div>
            </div>
            <div className="languages">
                <div className="wrap">
                    <div className="tile"><img src={cpp} alt="C++" /></div>
                    <div className="tile"><img src={go} alt="" /></div>
                    <div className="tile"><img src={swift} alt="" /></div>
                    <div className="tile"><img src={js} alt="" /></div>
                    <div className="tile"><img src={ts} alt="" /></div>
                    <div className="tile"><img src={py} alt="" /></div>
                    <div className="tile"><img src={java} alt="" /></div>
                </div>
            </div>
            <div className="Technology-">

            </div>
        </div>
    )
}

export default About
