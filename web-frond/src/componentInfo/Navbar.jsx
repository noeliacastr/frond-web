
import * as React from 'react';
import '../App.css';

const Navbar = () => {
  return (
    <nav>
        <h2><a href="#" id="logo"></a></h2>
        <button className="nav-button fa fa-bars"></button>
        
            <ul className="horizontal-list">
                <li><a href="/" className="active">Santuary Spa</a></li>
                <li><a href="/menu">Menu</a></li>
                <li><a href="experiencias">Experiencias</a></li>
                <li><a href="#">News</a></li>
                <li><a href="#">Contactenos</a></li>
            </ul>
        
    </nav>

  );
};

export default Navbar;