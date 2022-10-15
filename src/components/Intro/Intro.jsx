import React from 'react'
import './intro.scss';
import { motion } from 'framer-motion';

import { BsInstagram, BsFacebook, BsTwitter } from 'react-icons/bs';
import {FaTiktok  } from 'react-icons/fa';
import pau from '../../assets/pau.png';


const Intro = () => {
  return (
    <div className="intro_container">
        
        <div className="intro_wrapper">
            <img src={pau} alt="me"/>
            <motion.div
                    whileInView={{ y: [100, 0], opacity: [0, 1] }}
                    whileHover={{scale:1.1}}
                    transition={{duration:0.5, type: 'tween'}}
                >
            <div className="intro_socials">
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"><BsTwitter /></a>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"><BsInstagram /></a>
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"><BsFacebook /></a>
                <a href="https://tiktok.com" target="_blank" rel="noopener noreferrer"><FaTiktok /></a>
               
            </div>
            </motion.div>

            <motion.div
                    whileInView={{  opacity: [0, 1], scale: [0, 1] }}
                    whileHover={{scale:1.1}}
                    transition={{duration:0.7, type: 'tween'}}
            >
            <h2>Paula Mac</h2>
            </motion.div>

            <motion.div
                    whileInView={{  opacity: [0, 1], scale: [0, 1] }}
                    whileHover={{scale:1.1}}
                    transition={{duration:0.9, type: 'tween'}}
              >
            <h4>Poland basen artist which connects human touch with technology in forms of NFTs backed by real physical art.</h4>
            </motion.div>
        </div>

    </div>
  )
}

export default Intro