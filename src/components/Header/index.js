import React from 'react';
import { NavLink } from 'react-router-dom';
import './styles.css';

const Header =(props) => {
    
    const submitSearch = (e) => {
        e.preventDefault();
        alert("Searched");
    }
    
    
    
    
    return (
        <header className="header">
            <nav className="headerMenu">
                <NavLink to="/">Home</NavLink>
                <NavLink to="/projects">Projects</NavLink>
                <NavLink to="/articles">Articles</NavLink>
                <NavLink to="/about">About</NavLink>
                <NavLink to="/contact">Contact</NavLink>
            </nav>
            <div className="search">
                <form onSubmit={submitSearch}>
                    <input type="text" className="searchinput" placeholder="search"/>
                    <img src={require('../../assets/icons/search.png')} alt='s'/>    
                </form>
            </div>
        </header>
    );
} 

export default Header;