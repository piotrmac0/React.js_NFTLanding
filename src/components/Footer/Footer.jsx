import React from 'react';
import './footer.scss';

import { BsInstagram, BsFacebook, BsTwitter } from 'react-icons/bs';
import {FaTiktok  } from 'react-icons/fa';

const Footer = () => {
  return (
    <div className="footer_container">
      <div className="footer_logo"><h2>PaulaMac</h2></div>
      <div className="footer_social">
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"><BsTwitter /></a>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"><BsInstagram /></a>
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"><BsFacebook /></a>
                <a href="https://tiktok.com" target="_blank" rel="noopener noreferrer"><FaTiktok /></a>
      </div>
        
    </div>
  )
}

export default Footer