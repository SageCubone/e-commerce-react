import React from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';

export default function Navbar() {
    return (
        <>

            <header>
                <div class="container">
                    <div id="branding">
                        <h1><span class="highlight">Game</span>World</h1>
                        <nav>
                            <ul>
                                <li><Link to="/home"> Home </Link></li>
                                <li><Link to="/product"> Products </Link></li>
                                <li><Link to="/contact"> Contact </Link></li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </header>
        </>
    )
};