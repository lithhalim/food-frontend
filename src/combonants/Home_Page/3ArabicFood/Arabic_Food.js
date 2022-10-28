import React from 'react';
import image from "../../../assest/arabic/arabicfood.jpg";
import {motion} from "framer-motion";
import "./style/style.scss"

function Arabic_Food() {
  return (
    <div className='arabic-food-container'>
        <div className='arabic-inner'>
            <div className='image-container'><img src={image} alt="" /></div>
            <div className='text-area'>
                <h2>Beef Kofta Kebabs with Tzatziki</h2>
                <p>Beef Kofta—Party Food? Or ULTIMATE Party Food?We fell in love with this generously-spiced beef kofta recipe a few years ago, when we were feeling a little overwhelmed and under-nourished. Funny how those two things so often go hand in hand, isn’t it? Bringing friends and family together around the dinner table is what The Modern Proper</p>
                <motion.h3 initial={{opacity:0,y:"-50px"}} animate={{opacity:1,y:"0px" }} transition={{duration:3,type:"tween",repeat:Infinity,repeatType:"mirror" }}>Now we have discounts up to 30% what are you waiting for come order from here</motion.h3>
                <motion.button initial={{opacity:0,x:"-400px"}} animate={{opacity:1,x:"0px" }} transition={{duration:1}}>Shop Now</motion.button>

            </div>
        </div>
    </div>
  )
}

export default Arabic_Food
