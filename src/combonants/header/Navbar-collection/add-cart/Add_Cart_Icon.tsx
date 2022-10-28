import React from 'react';
import {GrShop} from "react-icons/gr";
import {useSelector} from "react-redux"
import { useNavigate } from 'react-router-dom';



function Add_Cart_Icon() {
    const selectData=useSelector((state:any)=>(state));
    const Navi=useNavigate()

    const gotopage=()=>{
      Navi("/addcart")
    }

  return (
    <li onClick={gotopage}><GrShop/> {selectData.addToCartSlice.value>0? 
        <p className='notification'>{selectData.addToCartSlice.value}</p>:<></>}
    </li>
    )
}

export default Add_Cart_Icon