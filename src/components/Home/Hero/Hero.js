import React, {useEffect} from 'react';
import Avatar from '@material-ui/core/Avatar';
import './Hero.css';
import mks from "./image/mks.png";
import TypeIt from "typeit-react";
import { motion } from "framer-motion";

function Hero() {
    useEffect(() => {
        const btn = document.querySelector('.btn');
        btn.onmousemove = function(e){
            const x = e.pageX - btn.offsetLeft;
            const y = e.pageY - btn.offsetTop;

            btn.style.setProperty('--x',x + 'px');
            btn.style.setProperty('--y',y + 'px');
        }
    }, [])

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

    const stagger = {
        initial: {},
        animate: {
            transition:{
                staggerChildren:0.2,
            }
        }
    }

    return (
        <motion.div variants={stagger} initial="initial" animate="animate" transition={{ delay: 0.2 }} className="gpt3__header section__padding">
            <motion.div variants={variants} className="gpt3__header-content">
                <h2 className="heading">Hi<span className="wave">👋</span>, I'm</h2>
                <h1 className="gradient__text">Mohit Kumar Singh</h1>
                <br/>
                <h2 className='default'><TypeIt options={{
                                                    speed: 200,
                                                    loop: true,
                                                    waitUntilVisible: true,
                                                }}
                                                getBeforeInit={(instance) => {
                                                    instance.pause(500).type("Full Stack Developer")
                                                    .pause(1000).move(-10).delete(10).pause(500).type("React")
                                                    .pause(1000).delete(5).type("App")
                                                    .pause(1000).move(10).delete(13)
                                                    .pause(1000).type("Freelancer")
                                                    .pause(1000).delete(10).type("Java Developer");
                                                    return instance;
                                                }} /></h2>
                <p>Intermediate at - React, React Native, Firebase. Love to play with DOMS.
                   <br/>Trying to Build something new 
                </p>
                <br/>
                <a href="/" className="btn"><span>Resume</span></a>
                <div className="sectionDivider" />
            </motion.div>

            <motion.div variants={variants} className="gpt3__header-image">
                <Avatar alt="MKS" src={mks} className='avatar' />
            </motion.div>
        </motion.div>
    )
}

export default Hero
