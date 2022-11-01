import React from 'react';
import Card_Section from '../../Card/Card';
import  {  A11y,Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import {motion} from "framer-motion"


import "./style/style.scss"
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';


import {useQuery} from "@tanstack/react-query";
import axios from 'axios';
import Loading_Section from '../../loading-section/loading';
import Page_Not_Found from '../../page-not-found/Page_Not_Found';




function Slider_Specific({datause}:any) {

  function usePosts() {
    return useQuery([`getSpecicType${datause}`], async () => {
      const { data } = await axios.get(
        `${process.env.REACT_APP_API}getpostes/${datause}`
      );
      return data;
    });
  }  

  const { status, data, error, isFetching } = usePosts();
  
  if(isFetching)return<Loading_Section/>
  if(error)return<Page_Not_Found/>

  return (
    <>
      {data!==undefined?
        <div className='container-specific-slider'style={{padding:"10px 50px"}}>
            <motion.h2 className='Header-information-section' initial={{opacity:0}} animate={{opacity:1}} transition={{duration:1}}>{datause} foods</motion.h2>
            <Swiper
                modules={[ A11y,Autoplay]} //moduls will be active
                spaceBetween={10}//the space between item
                effect={'coverflow'}
                loop
                breakpoints={{
                    0:{slidesPerView:1,spaceBetween:10},
                    480:{slidesPerView:2,spaceBetween:10},
                    768:{slidesPerView:2,spaceBetween:10},
                    1000:{slidesPerView:5,spaceBetween:10},
                    1250:{slidesPerView:6,spaceBetween:10},
                }}
                >
                {data.map((datause:any,i:any)=>(<SwiperSlide key={i}> <Card_Section key={i} datause={datause}/></SwiperSlide>))}
            </Swiper>
        </div>
      :<></>}
    </>
  )
}

export default Slider_Specific