import React, { useContext, useState } from 'react'
import {BiSearchAlt} from "react-icons/bi";
import {motion}  from "framer-motion";
import { useNavigate } from "react-router-dom";

import {Page_Contextapi} from "../../../../context-api/Select_catagory"

import axios from 'axios';


function Search_icon_section() {

    const Page_Contextapi_selectPage=useContext(Page_Contextapi)
    const Navi=useNavigate()
    const [datause,setdatause]=useState<any>();
    const [dataAfterFilter,setDataAfterFilter]=useState<any>()
    const [HideSearch,setHideSearch]=useState<any>(true)


    //get the search Data
    const showSearch=()=>{
        document.querySelector(".Search-Section")?.classList.toggle("active")
        axios.get(`${process.env.REACT_APP_API}searchSection`).then((data)=>(setdatause(data.data)))
        HideSearch==true?setHideSearch(false):setHideSearch(false)
    }


   //get all input data onchange
    const InputData=(event:any)=>{
        if(event.currentTarget.value!==""){
            let newdata=datause.filter((data:any)=>(data.productName.toLowerCase().startsWith(event.currentTarget.value.toLowerCase())))
            setDataAfterFilter(newdata)  
            setHideSearch(true)
        }
    }

    //go to select page
    const gotopage=(event:any)=>{
        Page_Contextapi_selectPage.setselectPage(event.target.getAttribute("datatype"))
        Navi("/page")
        document.querySelector(".Search-Section")?.classList.toggle("active")
        setHideSearch(false)
    }




  return (
        <li><BiSearchAlt onClick={showSearch}/>
            <motion.input type="text"    animate={{ x: 0 }} initial={{x:-300}} transition={{ duration: 2 }} placeholder='Search Here ...' className='Search-Section' onChange={InputData}/>
            {HideSearch==true?
            <div className='data-search-item'>
                {dataAfterFilter?dataAfterFilter.map(({productName,id}:any,i:any)=>(<p key={i} datatype={id} onClick={gotopage}>{productName}</p>)):<></>}
            </div>:<></>}
        </li>
    )
}

export default Search_icon_section
