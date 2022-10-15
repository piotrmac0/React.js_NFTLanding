import React from 'react';
import './subscribe.scss';
import { motion } from 'framer-motion';


const Subscribe = () => {
  return (

    <div className="subscribe_container">
        <div className="subscribe_wrapper">
            <h2>Never miss a drop</h2>
            <p>Subscribe to super-exclusive drop list and be the first to know about upcoming drops</p>
            <motion.div whileInView={{ x: [-100, 0], opacity: [0, 1] }} transition={{ duration: 0.5 }}>
            <form action="post" className="subscribe_form">
                <input type="email" className="subscribe_form_email" name='email' placeholder='Your email' required />
                <a href="#"><button className="subscribe_btn1">Subscribe</button></a>
            </form>
            </motion.div>
        </div>
    </div>

  )
}

export default Subscribe