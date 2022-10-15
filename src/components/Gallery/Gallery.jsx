import React from 'react'
import './gallery.scss';
import { motion } from 'framer-motion';
import NFT1 from '../../assets/NFT1.png';
import NFT2 from '../../assets/NFT2.png';
import NFT3 from '../../assets/NFT3.png';
import NFT4 from '../../assets/NFT4.png';
import NFT5 from '../../assets/NFT5.png';


const Gallery = () => {
  return (
    <div className="gallery_container">
        
        <div className="gallery_intro">
        <motion.div whileInView={{ y: [100, 0], opacity: [0, 1] }} transition={{duration:0.5, type: 'tween'}}>
            <h1>Most popular NFTs</h1>
        </motion.div>
        <motion.div whileInView={{ y: [100, 0], opacity: [0, 1] }} transition={{duration:0.7, type: 'tween'}}>
            <p>Most popular art NFts on different marketplaces. Explore. </p>
        </motion.div>
        </div>

        <motion.div whileInView={{ y: [100, 0], opacity: [0, 1] }} transition={{duration:0.9, type: 'tween'}}>

        <div className="gallery_items">

            <div className="gallery_item">
                <img src={NFT1} alt="nft1"/>
                <div className="gallery_item_info">
                        <div className="gallery_item_info_1col">
                            <h2>Miles Grogosters</h2>
                            <h3>4.99 ETH</h3>
                        </div>
                        <div className="gallery_item_info_2col">
                            <a href="#"><button className="gallery_btn1">Let's Explore</button></a>
                        </div>
                </div>
            </div>

            <div className="gallery_item">
                <img src={NFT2} alt="nft1"/>
                <div className="gallery_item_info">
                        <div className="gallery_item_info_1col">
                            <h2>Reox Fancxy</h2>
                            <h3>3.27 ETH</h3>
                        </div>
                        <div className="gallery_item_info_2col">
                            <a href="#"><button className="gallery_btn1">Let's Explore</button></a>
                        </div>
                </div>
            </div>

            <div className="gallery_item">
                <img src={NFT3} alt="nft1"/>
                <div className="gallery_item_info">
                        <div className="gallery_item_info_1col">
                            <h2>Miles Grogosters</h2>
                            <h3>4.20 ETH</h3>
                        </div>
                        <div className="gallery_item_info_2col">
                            <a href="#"><button className="gallery_btn1">Let's Explore</button></a>
                        </div>
                </div>
            </div>

            <div className="gallery_item">
                <img src={NFT4} alt="nft1"/>
                <div className="gallery_item_info">
                        <div className="gallery_item_info_1col">
                            <h2>Tuinz Rey</h2>
                            <h3>4.99 ETH</h3>
                        </div>
                        <div className="gallery_item_info_2col">
                            <a href="#"><button className="gallery_btn1">Let's Explore</button></a>
                        </div>
                </div>
            </div>

            <div className="gallery_item">
                <img src={NFT5} alt="nft1"/>
                <div className="gallery_item_info">
                        <div className="gallery_item_info_1col">
                            <h2>Tuinz Rey</h2>
                            <h3>4.99 ETH</h3>
                        </div>
                        <div className="gallery_item_info_2col">
                            <a href="#"><button className="gallery_btn1">Let's Explore</button></a>
                        </div>
                </div>
            </div>

            <div className="gallery_item">
                <img src={NFT4} alt="nft1"/>
                <div className="gallery_item_info">
                        <div className="gallery_item_info_1col">
                            <h2>Tuinz Rey</h2>
                            <h3>4.99 ETH</h3>
                        </div>
                        <div className="gallery_item_info_2col">
                            <a href="#"><button className="gallery_btn1">Let's Explore</button></a>
                        </div>
                </div>
            </div>

        </div>
        </motion.div>

    </div>
  )
}

export default Gallery