import React from 'react'
import Hero from './Hero/Hero';
import BgAnimation from './BackgroundAnimation/BackgroundAnimation';

function Home() {
    return (
        <div>
            <Hero />
            <BgAnimation className="bgAnimation"/>
        </div>
    )
}

export default Home