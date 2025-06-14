// File: src/components/Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      <h1>👫 School Friends Forever</h1>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/gallery">Gallery</Link></li>
        <li><Link to="/videos">Videos</Link></li>
        <li><Link to="/calendar">Birthday Calendar</Link></li>
        <li><Link to="/game">Game</Link></li>
        <li><Link to="/chat">Chat</Link></li>
      </ul>
      
    </nav>
    
  );
}

export default Navbar;