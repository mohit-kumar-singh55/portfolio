import React from 'react';
import "./Card.css";
import cpp from "../../About/images/cpp.jpg"

function Card() {
    return (
        <div className='blogCard'>
            <img className="img" src={cpp} alt='C++' />
            <div className="titleContent">
                <div className="headerThree">Java Title</div>
                <div className="hr" />
            </div>
            <div className="cardInfo">This is the Project which i have made to compete with others</div>
            <div>
                <div className="titleContent stack">Stack</div>
                <ul className='tagList'>
                    <li className="tag">React</li>
                    <li className="tag">Node</li>
                    <li className="tag">Express</li>
                    <li className="tag">MongoDB</li>
                </ul>
            </div>
            <ul className="utilityList">
                <a href="www.google.com" target="_blank" className="btn"><span>View</span></a>
                <a href="www.google.com" target="_blank" className="btn"><span>Code</span></a>
            </ul>
        </div>
    )
}

export default Card
