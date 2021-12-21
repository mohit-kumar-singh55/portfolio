import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import './Hero.css';
import mks from "./image/mks.png";

function Hero() {
    return (
        <div className="gpt3__header section__padding">
            <div className="gpt3__header-content">
                <h1 className="gradient__text">Let&apos;s Build Something amazing with GPT-3 OpenAI</h1>
                <p>Yet bed any for travelling assistance indulgence unpleasing. Not thoughts all exercise blessing. Indulgence way everything joy alteration boisterous the attachment. Party we years to order allow asked of.</p>
            </div>

            <div className="gpt3__header-image">
                {/* <img src={mks} alt='MKS' /> */}
                <Avatar alt="MKS" src={mks} className='avatar' />
            </div>
        </div>
    )
}

export default Hero
