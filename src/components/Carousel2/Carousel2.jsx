import React, { useState } from 'react';
import './carousel2.scss';
import { motion } from 'framer-motion';

import NFT from '../NFT/NFT';
import Following from '../Following/Following';



const Carousel2 = () => {

  const [active, setActive] = useState("NFT");

  return (

    <div class="carousel2_container">
          <motion.div whileInView={{ y: [100, 0], opacity: [0, 1] }} transition={{duration:0.5, type: 'tween'}}>
        <h2 className="carousel_title"> Buy NFT or printed art </h2>
        </motion.div>
        <motion.div whileInView={{ y: [100, 0], opacity: [0, 1] }} transition={{duration:0.7, type: 'tween'}}>
        <div className="carousel_switch">
            <button onClick={() => setActive("NFT")} >NFT</button>
            <button onClick={() => setActive("Following")} >Prints</button>
        </div>
        </motion.div>
<div>
<> 
{active === "NFT" && <NFT />}
{active === "Following" && <Following />}
</>
</div>       
      </div>
  )

}

export default Carousel2