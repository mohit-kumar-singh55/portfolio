import React from 'react'
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
    let location = useLocation();

    return (
        <div>
            <nav>
                <ul>
                    <li><Link className='a' style={{color:`${location.pathname === '/' ? "red" : "cyan"}`}} to="/"><i className="fas fa-house-damage"></i></Link></li>
                    <li><Link className='a' style={{color:`${location.pathname === '/about' ? "red" : "cyan"}`}} to="/about"><i className="fas fa-user-tie"></i></Link></li>
                    <li><Link className='a' style={{color:`${location.pathname === '/projects' ? "red" : "cyan"}`}} to="/projects"><i className="fas fa-laptop-code"></i></Link></li>
                    <li><Link className='a' style={{color:`${location.pathname === '/contact' ? "red" : "cyan"}`}} to="/contact"><i className="far fa-address-card"></i></Link></li>
                </ul>
            </nav>
        </div>
    )
}

export default Navbar