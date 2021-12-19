import React from 'react'
// import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
    return (
        <div>
            <nav>
                <ul>
                    <li><a href="/"><i class="fas fa-house-damage"></i></a></li>
                    <li><a href="/about"><i class="fas fa-user-tie"></i></a></li>
                    <li><a href="/projects"><i class="fas fa-laptop-code"></i></a></li>
                    <li><a href="/contact"><i class="far fa-address-card"></i></a></li>
                </ul>
            </nav>
        </div>
    )
}

export default Navbar