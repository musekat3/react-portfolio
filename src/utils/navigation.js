import React from 'react';
import './index.css';

const NavigationBar = () => {
    return (
        <nav className="navigation-bar">
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="/portfolio">Portfolio</a></li>
            <li><a href="/resume">Resume</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </nav>
       );
   };

   export default NavigationBar;