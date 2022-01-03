import React from 'react';
import "./Card.css";
import { projects } from '../constants/constants';
import { motion } from "framer-motion";

const Card = () =>{
    const variants = {
        initial: {
            opacity: 0,
            y: 100
        },
        animate: {
            opacity: 1,
            y: 0
        }
    }

    return (
        projects.map(({ id, image, title, description, tags, source, visit }) => (
            <motion.div variants={variants} className='blogCard' key={id}>
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
            </motion.div>
        ))
    )
}

export default Card
