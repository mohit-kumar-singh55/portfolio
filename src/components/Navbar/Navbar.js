import React from 'react'
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
    let location = useLocation();

    return (
        <div>
            <nav>
                <ul>
                    <li><Link className='a' style={{color:`${location.pathname === '/mks.github.io/' ? "red" : "cyan"}`}} to="/mks.github.io/"><i className="fas fa-house-damage"></i></Link></li>
                    <li><Link className='a' style={{color:`${location.pathname === '/mks.github.io/about' ? "red" : "cyan"}`}} to="/mks.github.io/about"><i className="fas fa-user-tie"></i></Link></li>
                    <li><Link className='a' style={{color:`${location.pathname === '/mks.github.io/projects' ? "red" : "cyan"}`}} to="/mks.github.io/projects"><i className="fas fa-laptop-code"></i></Link></li>
                    <li><Link className='a' style={{color:`${location.pathname === '/mks.github.io/contact' ? "red" : "cyan"}`}} to="/mks.github.io/contact"><i className="far fa-address-card"></i></Link></li>
                </ul>
            </nav>
        </div>
    )
}

export default Navbar