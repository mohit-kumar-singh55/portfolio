import React, {useEffect} from 'react';
import Avatar from '@material-ui/core/Avatar';
import './Hero.css';
import mks from "./image/mks.png";

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

    return (
        <div className="gpt3__header section__padding">
            <div className="gpt3__header-content">
                <h2 className="heading">Hi<span className="wave">👋</span>, I'm</h2>
                <h1 className="gradient__text">Mohit Kumar Singh</h1>
                <br/>
                <h2 className='default'>Web Developer</h2>
                <p>Intermediate at - React, React Native, Firebase. Love to play with DOMS.
                   <br/>Trying to Build something new 
                </p>
                <br/>
                <a href="/" className="btn"><span>Resume</span></a>
                <div className="sectionDivider" />
            </div>

            <div className="gpt3__header-image">
                <Avatar alt="MKS" src={mks} className='avatar' />
            </div>
        </div>
    )
}

export default Hero
