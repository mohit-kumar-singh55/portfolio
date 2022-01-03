import React from 'react';
import Card from "./Card/Card";
import "./Projects.css";
import { motion } from "framer-motion";

function Projects() {
    const stagger = {
        initial: {},
        animate: {
            transition:{
                staggerChildren:0.2,
            }
        }
    }

    return (
        <div className='section'>
            <div className="sectionTitle gradient__text">
                Projects
            </div>
            <motion.div variants={stagger} initial="initial" animate="animate" transition={{ delay: 0.2 }} className="gridContainer">
                <Card />
            </motion.div>
        </div>
    )
}

export default Projects
