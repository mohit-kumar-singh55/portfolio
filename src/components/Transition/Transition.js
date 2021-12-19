import React, { useEffect } from 'react';
import './Transition.css';
import Loader from '../Loader/Loader';
import gsap from "gsap";

function Transtition() {

    const animation = () => {
        const tl = gsap.timeline({ defaults: { ease: 'power1.out' } })

        tl.to('.slider', { y: "-100%", duration: 1, delay: 3.5 })
        tl.to('.intro', { y: "-100%", duration: 2.5 }, "-=1")
    }

    useEffect(() => {
        animation();
    }, [])

    return (
        <div>
            <div className="intro">
                <div className="intro-text">
                    <div className="hide">
                        <Loader />
                    </div>
                </div>
            </div>

            <div className="slider"></div>
        </div>
    )
}

export default Transtition