import React from 'react';
import {motion} from "framer-motion"

function Promotion() {
  return (
    <div className='promotion'>
        <motion.p initial={{opacity:0}} animate={{opacity:1}} transition={{repeat:Infinity,duration:3}}>Our offers are inclusive of all types of food by 30% What are you waiting for order now.........</motion.p>
    </div>
  )
}

export default Promotion
