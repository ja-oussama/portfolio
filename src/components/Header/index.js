import React from 'react';
import './styles.css';

const Header =(props) => {
    return (
        <header className="header">
            <nav className="headerMenu">
                <a href="#">Home</a>
                <a href="#">Projects</a>
                <a href="#">Articles</a>
                <a href="#">AboutMe</a>
                <a href="#">ContactUs</a>
            </nav>
            <div>
                links
            </div>
        </header>
    );
} 

export default Header;