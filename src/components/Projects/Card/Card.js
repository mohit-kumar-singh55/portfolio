import React from 'react';
import "./Card.css";
import { projects } from '../constants/constants';

const Card = () =>{
    return (
        projects.map(({ id, image, title, description, tags, source, visit }) => (
            <div className='blogCard' key={id}>
                <img className="img" src={image} alt='Project' />
                <div className="titleContent">
                    <div className="headerThree">{title}</div>
                    <div className="hr" />
                </div>
                <div className="cardInfo">{description}</div>
                <div>
                    <div className="titleContent stack">Stack</div>
                    <ul className='tagList'>
                    {tags.map((tag, i) => (
                        <li className="tag" key={i}>{tag}</li>
                    ))}
                    </ul>
                </div>
                <ul className="utilityList">
                    <a href={visit} target="_blank" rel="noreferrer" className="btn"><span>View</span></a>
                    <a href={source} target="_blank" rel="noreferrer" className="btn"><span>Code</span></a>
                </ul>
            </div>
        ))
    )
}

export default Card
