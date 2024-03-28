import React from 'react';
import { Link } from 'react-router-dom'; 
import '../App.css';

const Navbar = () => {
  return (
    <nav>
        <h2><a href="#" id="logo"></a></h2>
        <button className="nav-button fa fa-bars"></button>
        
        <ul className="horizontal-list">
            <li><a href="#" className="active">welcome</a></li>
            <li><a href="/experiencias">Experiences</a></li>
            <li><a href="#">reservations</a></li>
            <li><a href="#">news</a></li>
            <li><a href="#">contact</a></li>
        </ul>
    </nav>
  );
};

export default Navbar;
