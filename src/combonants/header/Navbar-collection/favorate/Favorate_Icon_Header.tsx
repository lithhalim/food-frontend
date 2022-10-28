import React from 'react'
import {RiHeart2Line} from "react-icons/ri";
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';


function Favorate_Icon_Header() {
    const selectData=useSelector((state:any)=>(state));
    const Navi=useNavigate()

    const gotoselelct=()=>{
        Navi("/favorate")
    }

  return (
    <li><RiHeart2Line  onClick={gotoselelct}/>
        {selectData.allLikesIhave.value>0? 
            <p className='notification'>{selectData.allLikesIhave.value}</p>
            :<></>}
     </li>
    )
}

export default Favorate_Icon_Header
