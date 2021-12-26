import React from 'react';
import "./Contact.css";
import mapboxgl from 'mapbox-gl';

function Contact() {
    return (
        <>
            {/* <div className='c_section'>
                <div className="c_gridContainer">

                </div>
            </div> */}
            <div className="Contact-Me">
                <div className='box'>
                    <span className='dot dot1'></span>
                    <span className='dot dot2'></span>
                    <span className='dot dot3'></span>
                    <h2 className='gradient__text contact_heading'>Contact Me</h2>
                    <div className='box_content'>
                        <div className='c_gridContainer'>
                            <div className="c_links">
                                <ul className="linkList">
                                    <div className="linkColumn">
                                        <h4 className="linkTitle">Call</h4>
                                        <a className="linkItem" href="tel:9105577623">9105577623</a>
                                    </div>
                                    <div className="linkColumn">
                                        <h4 className="linkTitle">Email</h4>
                                        <a className="linkItem" href="mailto:mohitkumarsingh12344@gmail.com">mohitkumarsingh12344@gmail.com</a>
                                    </div>
                                    <div className="linkColumn">
                                        <h4 className="linkTitle">City</h4>
                                        <div className="linkItem">Haridwar</div>
                                    </div>
                                    <div className="linkColumn">
                                        <h4 className="linkTitle">State</h4>
                                        <div className="linkItem">Uttarakhand</div>
                                    </div>
                                    <div className="linkColumn">
                                        <h4 className="linkTitle">Country</h4>
                                        <div className="linkItem">India</div>
                                    </div>
                                    <div className="linkColumn">
                                        <h4 className="linkTitle">Website</h4>
                                        <a className="linkItem" href="www.mks.co.in">www.mks.co.in</a>
                                    </div>
                                </ul>
                            </div>
                            <div className="c_map">
                                This is Map
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Contact