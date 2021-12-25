import React from 'react';
import Card from "./Card/Card";
import "./Projects.css";

function Projects() {
    return (
        <div className='section'>
            <div className="sectionTitle gradient__text">
                Projects
            </div>
            <div className="gridContainer">
                <Card />
            </div>
        </div>
    )
}

export default Projects
