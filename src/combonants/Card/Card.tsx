import React from 'react';
import "./style/style.scss";
import AddCart_Button from './Icon/AddCart_Button';
import Like_Button from './Icon/Like_Button';
import ViewPage_Button from './Icon/ViewPage_Button';


interface DataInter{
    image:string;
    id:number;
    name:string;
    discription?:string;
    price?:number;
    quantity?:number;
}


function Card_Section({datause}:any) {
   const {image,name}=datause
  return (
        <div className='crad_container'>
            <div className='imagecontainer'>
                <img src={image} alt="" />
            </div>
            <p className='nameProduct'> {name}</p>
            <div className='icon-section'>
                <ViewPage_Button datause={datause}/>
                <Like_Button datause={datause}/>
                <AddCart_Button datause={datause}/>
            </div>
        </div>

  )
}

export default Card_Section