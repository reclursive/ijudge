import React from 'react';
import './header.css'; // Make sure to link to the CSS file

const Header = () => {
    return (
        <header className="header">
            <div className="logo">
                iJudge
            </div>
            <nav>
                <ul className="nav-links">
                    <li><a href="#services">Services</a></li>
                    <li><a href="#about">About Us</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;
