import React, { useEffect } from 'react';
import "./About.css";
import cpp from "./images/cpp.jpg";
import js from "./images/js.png";
import java from "./images/java.png";
import py from "./images/py.png";
import go from "./images/go.png";
import swift from "./images/swift.png";
import ts from "./images/ts.png";
import $ from "jquery";
import technology from "./technology.svg";
import slanguages from "./slanguages.svg";

function About() {
    useEffect(() => {
        $('.skill-per').each(function () {
            var $this = $(this);
            var per = $this.attr('per');
            $this.css("width", per + '%');
            $({ animatedValue: 0 }).animate({ animatedValue: per }, {
                duration: 1000,
                step: function () {
                    $this.attr('per', Math.floor(this.animatedValue) + '%');
                },
                complete: function () {
                    $this.attr('per', Math.floor(this.animatedValue) + '%');
                }
            });
        });
    }, [])

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
                        <br />
                        <p>I love to play with DOM</p>
                        <br />
                        <p>I'm quite confident, curious and <em>consistently working to improve and expand my skills</em></p>
                        <br />
                        <p>Looking forward to gain some experience</p>
                        <br />
                        <p><em><strong>~Thank you for your time</strong></em></p>
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
                <div className='technology_box'>
                    <span className='dot dot1'></span>
                    <span className='dot dot2'></span>
                    <span className='dot dot3'></span>
                    <h2 className='gradient__text technology_heading'>Technologies</h2>
                    <div className='technology_box_content'>
                        <div className='technology_skills'>
                            <div className="skills">
                                <div className="skill">
                                    <div className="skill-name">ReactJS</div>
                                    <div className="skill-bar">
                                        <div className="skill-per" per="70"></div>
                                    </div>
                                </div>
                                <div className="skill">
                                    <div className="skill-name">NodeJS</div>
                                    <div className="skill-bar">
                                        <div className="skill-per" per="60"></div>
                                    </div>
                                </div>
                                <div className="skill">
                                    <div className="skill-name">MangoDb</div>
                                    <div className="skill-bar">
                                        <div className="skill-per" per="80"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='technology_svg'>
                            <img className='technologySVG' src={technology} alt="Technology SVG" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="s_languages">
                <div className='s_languages_box'>
                    <span className='dot dot1'></span>
                    <span className='dot dot2'></span>
                    <span className='dot dot3'></span>
                    <h2 className='gradient__text s_languages_heading'>Speaking Languages</h2>
                    <div className='s_languages_box_content'>
                        <div className='s_languages_svg'>
                            <img className='s_languagesSVG' src={slanguages} alt="Speaking Languages" />
                        </div>
                        <div className='s_languages_skills'>
                            <div className="skills">
                                <div className="skill">
                                    <div className="skill-name">Hindi</div>
                                    <div className="skill-bar">
                                        <div className="skill-per" per="100"></div>
                                    </div>
                                </div>
                                <div className="skill">
                                    <div className="skill-name">English</div>
                                    <div className="skill-bar">
                                        <div className="skill-per" per="70"></div>
                                    </div>
                                </div>
                                <div className="skill">
                                    <div className="skill-name">Japanese</div>
                                    <div className="skill-bar">
                                        <div className="skill-per" per="50"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default About
