import React from 'react';
import image from "../../assest/favorate/favorate.jpg";
import image2 from "../../assest/favorate/favorate2.jpg";
import image3 from "../../assest/favorate/favore3.jpg";
import image4 from "../../assest/favorate/favorate4.jpg";



function Side_SectionFavorate() {
  return (
  <div className='checkou-button-section'>
    <ul className='favoratelist-containet'>
      <li><img src={image} alt="" /> <img src={image2} alt="" /></li>
      <li><img src={image3} alt="" /> <img src={image4} alt="" /></li>
    </ul>
    <div className='favorate-list'>
        <h3>Favorate list</h3>
        <p>We have the most delicious dishes and all Arab and Western items are ready to order, you just have to choose and we will determine the desired item for you</p>
    </div>
  </div>
)
}

export default Side_SectionFavorate


