import React from 'react'
import './header.scss';
import { motion } from 'framer-motion';

import HeaderNFT1 from '../../assets/HeaderNFT1.png';
import HeaderNFT2 from '../../assets/HeaderNFT2.jpg';
import HeaderNFT3 from '../../assets/HeaderNFT3.jpg';
import metamask from '../../assets/metamask.png';
import binance from '../../assets/binance.png';
import coinbase from '../../assets/coinbase.png';


const Header = () => {




  return (
    <div class="header_container">
        
        
        <div class="header_titles" >
        <motion.div whileInView={{ x: [-100, 0], opacity: [0, 1] }} transition={{ duration: 0.5 }}>
            <h1 className="header_titles_h1">Discover & Collect <span>Super Rare </span> real Art NFTs</h1>
        </motion.div>

        <motion.div
        whileInView={{ x: [-100, 0], opacity: [0, 1] }}
        transition={{ duration: 0.7 }}
        className="app__header-info"
        >
            <p className="header_titles_p">Created by hands of the unique talented creator. Made possible by blockchain technology</p>
        </motion.div>

        <motion.div
        whileInView={{ x: [-100, 0], opacity: [0, 1] }}
        transition={{ duration: 0.9 }}
        className="app__header-info"
        >
            <div class="header_button_wrapper">
            <a href="#"><button className="header_btn1">Let's Explore</button></a>
            <a href="#"><button className="header_btn2">Go to Opensea</button></a>
            </div>
        </motion.div>
        </div>


        <div className="header_media">
            
            <div className="header_media_cont">
                    <img src={HeaderNFT2} className="header_img1" alt="NFT"/>
                    <img src={HeaderNFT3} className="header_img2"alt="NFT"/>
                    <img src={HeaderNFT1} className="header_img3" alt="NFT"/>
            </div>
            
            <div className="header_media_text">
                <div className="header_media_text_item">
                     <img src={metamask} alt="me"/>
                </div>
                <div className="header_media_text_item">
                     <img src={binance} alt="me"/>
                </div>
                <div className="header_media_text_item">
                    <img src={coinbase} alt="me"/>
                </div>
            </div>

        </div>
        
    </div>
  )
}

export default Header