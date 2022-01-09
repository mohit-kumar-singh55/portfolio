import React, { useRef, useEffect, useState } from 'react';
import "./Contact.css";
import mapboxgl from '!mapbox-gl'; // eslint-disable-line import/no-webpack-loader-syntax
import { motion } from "framer-motion";

mapboxgl.accessToken = 'pk.eyJ1Ijoic25pcGVyLW1rcy01NSIsImEiOiJja3VkdmpzMDAweHhrMnJtdHBkbG5tNWJxIn0.1XWgY-Eh_jdJqCfFc4pW3A';

function Contact() {
    const mapContainer = useRef(null);
    const map = useRef(null);
    const [lng, setLng] = useState(78.103542);
    const [lat, setLat] = useState(29.9252298);
    const [zoom, setZoom] = useState(11);

    useEffect(() => {
        if (map.current) return; // initialize map only once
        map.current = new mapboxgl.Map({
            container: mapContainer.current,
            style: 'mapbox://styles/mapbox/dark-v10',
            center: [lng, lat],
            zoom: zoom
        });

        if (!map.current) return; // wait for map to initialize
        map.current.on('move', () => {
            setLng(map.current.getCenter().lng.toFixed(4));
            setLat(map.current.getCenter().lat.toFixed(4));
            setZoom(map.current.getZoom().toFixed(2));
        });
    });

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
        <div className="Contact-Me">
            <motion.div variants={stagger} initial="initial" animate="animate" transition={{ delay: 0.2 }} className='box'>
                <span className='dot dot1'></span>
                <span className='dot dot2'></span>
                <span className='dot dot3'></span>
                <h2 className='gradient__text contact_heading'>Contact Me</h2>
                <motion.div variants={variants} className='box_content'>
                    <div className='c_gridContainer'>
                        <div className="c_links">
                            <ul className="linkList">
                                <div className="linkColumn">
                                    <h4 className="linkTitle">Call</h4>
                                    <a className="linkItem" href="tel:9105577623">9105577623</a>
                                </div>
                                <div className="linkColumn">
                                    <h4 className="linkTitle">Email (Click me)</h4>
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
                                    <a className="linkItem" href="www.mksio.netlify.app">www.mksio.netlify.app</a>
                                </div>
                            </ul>
                        </div>
                        <div className="c_map">
                            <div ref={mapContainer} className="map-container" />
                            <div className="c_socialMedia">
                                <div className="sm">
                                    <a href="https://instagram.com/sniper.mks_55" target="_blank" rel="noreferrer"><i className="fab fa-instagram"></i></a>
                                    <a href="https://www.linkedin.com/in/mohit-kumar-singh-128ab4217/" target="_blank" rel="noreferrer"><i className="fab fa-linkedin-in"></i></a>
                                    <a href="https://github.com/mohit-kumar-singh55" target="_blank" rel="noreferrer"><i className="fab fa-github"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </motion.div>
        </div>
    )
}

export default Contact