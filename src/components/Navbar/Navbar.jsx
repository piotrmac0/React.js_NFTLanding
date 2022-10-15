import React from 'react'
import './navbar.scss';

const Navbar = () => {
  return (
    <nav className="navbar_container">

        
          <ul className="navbar_menu">
                <li className="navbar_menu_item">
                <a href="#">Home</a>
                </li>
                <li className="navbar_menu_item">
                <a href="#">Gallery</a>
                </li>
                <li className="navbar_menu_item">
                <a href="#">Contact</a>
                </li>
           </ul>
        
        <div className="navbar_logo">
            <h1 className="navbar_logo_item">Paula Mac</h1>
        </div>
  
        <div className="navbar_button">
            <a href="#" className="navbar_button_item">Connect Wallet</a>
        </div>
  
        
      </nav>
  )
}

export default Navbar