import React,{useContext,useEffect,useState} from 'react'
import Card_Section from '../Card/Card';
import "./style/style.scss"

import DataChange from "./search-section/2-select-section/Select_Section"
import { Page_Contextapi } from '../../context-api/Select_catagory';

import {useQuery} from "@tanstack/react-query";
import axios from 'axios';
import Loading_Section from '../loading-section/loading';
import Page_Not_Found from '../page-not-found/Page_Not_Found';


function Select_Catagory_section() {

  const [state,setstate]=useState("show filter");
  const Page_Contextapi_Catagory=useContext(Page_Contextapi);


  function usePosts() {
    return useQuery([`catagory${Page_Contextapi_Catagory.Selectcatagory}`], async () => {
      const { data } = await axios.get(
        `${process.env.REACT_APP_API}getpostesCatagory/${Page_Contextapi_Catagory.Selectcatagory}`
      );
      return data;
    });
  }  

  const { status, data, error, isFetching } = usePosts();

  console.log(data)
  
  if(isFetching)return<Loading_Section/>
  if(error)return<Page_Not_Found/>



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
                {data!==undefined?  data.map((data:any,i:any)=>(<Card_Section key={i} datause={data}/>)):<></>}
            </div>
        </div>
    </div>
  )
}

export default Select_Catagory_section