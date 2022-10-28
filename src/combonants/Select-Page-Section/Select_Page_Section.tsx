import React from 'react';
import {FcIdea,FcViewDetails} from "react-icons/fc"
import AddCart_Button from '../Card/Icon/AddCart_Button';
import Like_Button from "../Card/Icon/Like_Button"
import Slider_Specific from '../Home_Page/2Slider_Specific/Slider_Specific';
import "./style/style.scss";



function Select_Page_Section() {
    const datause={id:5, image:"https://tmbidigitalassetsazure.blob.core.windows.net/rms3-prod/attachments/37/1200x1200/Pizza-from-Scratch_EXPS_FT20_8621_F_0505_1_home.jpg",name:"Pizza from Scratch",discription:"Turn onto a floured surface; knead until smooth and elastic, 6-8 minutes. Place in a greased bowl, turning once to grease top. Cover and let rest in a warm place for 10 minutes.",price:10,quantity:100 }

    const {image,name,discription,price} =datause

  return (
    <div className='select-apage-container'>
        <div className='first-section'>
                <div className='image-container'>
                    <img src={image} alt="" />
                </div>
                <ul className='text-container'>
                    <li><h3>{name}</h3></li>
                    <li ><p >new product</p></li>
                    <li><h3>Price : {price} JOD</h3></li>

                    <li className='icon-section'>
                        <AddCart_Button datause={datause}/>
                        <Like_Button datause={datause}/>
                    </li>
                    <li>
                        <div className='delevery'>
                            <h3>Delevery section</h3>
                            <p className='freedelevery'>free delevery</p>
                            <p className='container'><span><FcIdea/></span> <p>If you order from more than one branch, this will cancel the free delivery and increase the waiting time until the food arrives to you, thank you</p></p>
                        </div>
                    </li>
                    <li><span><FcViewDetails/></span> <p className='discription '>{discription} </p></li>

                </ul>
        </div>

        <Slider_Specific/>
    </div>
  )
}

export default Select_Page_Section
