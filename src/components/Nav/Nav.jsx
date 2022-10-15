import React, { useState } from 'react';
import './nav.scss';
import { BsPlayCircle } from 'react-icons/bs';
import { BiHomeHeart } from 'react-icons/bi';
import { AiOutlineShopping } from 'react-icons/ai';
import { FiArrowDownCircle } from 'react-icons/fi';
import { motion } from 'framer-motion';

import { BsInstagram, BsFacebook, BsTwitter } from 'react-icons/bs';
import {FaTiktok, FaEthereum  } from 'react-icons/fa';

function App() {

    return (
        < Nav >
            <NavItem icon={ <BiHomeHeart /> } />
            <NavItem icon={ <BsPlayCircle /> } />
            <NavItem icon={ <AiOutlineShopping /> } />
            <NavItem icon={ < FiArrowDownCircle /> }>
            { /* Dropdown menu */ }
                < DropdownMenu />
            
            </NavItem>   
        </Nav>
    );
}


function DropdownMenu() {

        //state which menu is currently visible
        const [ activeMenu, setActiveMenu ] = useState('main');

        function DropdownItem(props) {
            return (
                <a href="#" className="menu_item">
                    <span className="icon_button">{props.leftIcon}</span>
                    {props.children}
                </a>
            );
        }

    return (
            <div className="dropdown">
                    <div className="menu">
                        <DropdownItem leftIcon={< BiHomeHeart />} >Gallery</DropdownItem>
                        <DropdownItem leftIcon={< FaEthereum />} >Opensea</DropdownItem>
                        <DropdownItem leftIcon={<AiOutlineShopping />} >Shop</DropdownItem>
                        <div className="dropdown_socials">
                            <a href="https://twitter.com" target="_blank"rel="noopener noreferrer"><BsTwitter /></a>
                            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"><BsInstagram /></a>
                            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"><BsFacebook /></a>
                            <a href="https://tiktok.com" target="_blank" rel="noopener noreferrer"><FaTiktok /></a>
                        </div>
                    </div>
            </div>
    );
}




function Nav(props) {

    return (
        <nav className="nav_container">
      
            <div className="nav_socials">
                <a href="https://twitter.com" target="_blank"rel="noopener noreferrer"><BsTwitter /></a>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"><BsInstagram /></a>
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"><BsFacebook /></a>
                <a href="https://tiktok.com" target="_blank" rel="noopener noreferrer"><FaTiktok /></a>
            </div>
       
            <h1 className="navbar_logo_item">Paula Mac</h1>
            <ul className="nav_menu">
                { props.children }
           </ul>
        </nav>
    );
}

function NavItem(props) {

    const [open, setOpen] = useState(false);

    return (
        <li className="nav_item">
              <a href="#" className="icon_button" onClick={ ()=> setOpen(!open)}>
                {props.icon}
              </a>

              {open && props.children}
        </li>
    );
}

export default App