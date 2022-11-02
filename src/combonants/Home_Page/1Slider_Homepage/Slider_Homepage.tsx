import React, { useContext } from 'react';
import  { Navigation, Pagination, Scrollbar, A11y,Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import MainData from '../../../DataUse/Home_SliderData';
import {motion} from "framer-motion"



import "./style/style.scss";

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import { Page_Contextapi } from '../../../context-api/Select_catagory';
import { useNavigate } from "react-router-dom";




function Slider_Homepage() {
  const Page_ContextapiType=useContext(Page_Contextapi);
  const Navi=useNavigate()
  
  //go To Select Type 
  const Gotoshop=(event:any)=>{
    let data=event.target.getAttribute("datatype")
    Page_ContextapiType.setSelectcatagory(data)
    Navi("/catagory")
  }


  return (
    <div className='swiper-container-all'>
        <Swiper
            modules={[ Pagination,Autoplay]} //moduls will be active
            spaceBetween={50}//the space between item
            slidesPerView={1}//number of item in one page
            pagination={{ clickable: true }}//you can click right and left
            effect={'coverflow'}
            loop
            speed={3000}
            autoplay={{ delay: 3000 }}
            >
              {MainData.map(({image,header,discription,page},i)=>(
                    <SwiperSlide key={i}>
                        <div className='sliderItem'>
                            <img src={image} alt="" />
                              <motion.div className='text-area' >
                                    <h3>{header}</h3>
                                    <p>{discription}</p>
                                    <button onClick={Gotoshop} datatype={page} style={{cursor:"pointer"}}> SHOP NOW {page}</button>
                            </motion.div>
                        </div>
                    </SwiperSlide>              
              ))}
            </Swiper>
    </div>
  )
}

export default Slider_Homepage
