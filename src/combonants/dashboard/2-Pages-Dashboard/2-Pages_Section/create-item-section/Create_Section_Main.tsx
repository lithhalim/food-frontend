import React from 'react';
import Create_Item_Details from './2-create-item-details/Item_Details';
import Create_Item_Header from './1-create-item-header/Creat_Item_Header';
import "./style/style.scss";

import image from "../../../../../assest/upload/upload2.jpg";
import image3 from "../../../../../assest/upload/upload3.png";




function Create_Item_Section() {
  return (
        <div className='tradein-container'>
          <img className='main-image' src={image}/>
          <img src={image3} className='select-image-side-section'/>
            <Create_Item_Header/>
            <Create_Item_Details/>
        </div>
  )
}

export default Create_Item_Section
