import React,{useContext,useEffect,useState} from 'react'
import Card_Section from '../Card/Card';
import "./style/style.scss"

import MainData from '../../DataUse/FoodData';
import DataChange from "./search-section/2-select-section/Select_Section"

function Select_Catagory_section() {

  const [state,setstate]=useState("show filter")


  const getDataSelect=(data:any)=>{

    console.log(data)
  }



  //show and hide filter bar 
  const showFilter=()=>{if(state=="show filter"){
    setstate("Hide Filter")
    document.querySelector(".container-all-search")?.classList.add("active")
  }else{
    setstate("show filter")
    document.querySelector(".container-all-search")?.classList.remove("active")
  }}



  return (
    <div className='container-catagory'>
      
      <p className="showitem-section"><span onClick={showFilter} >{state}</span></p>

        <div className='catagory-section'>
          <DataChange getDataSelect={getDataSelect}/>
            <div className='container-item'>
                {MainData.map((data,i)=>(<Card_Section key={i} datause={data}/>))}
            </div>
        </div>
    </div>
  )
}

export default Select_Catagory_section