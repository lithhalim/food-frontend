import React, { useContext } from 'react';
import {GrView} from "react-icons/gr";
import { useNavigate } from 'react-router-dom';
import { Page_Contextapi } from '../../../context-api/Select_catagory';


function ViewPage_Button({datause}:any) {
  const {id}=datause

  const Select_page_context=useContext(Page_Contextapi);
  const Navi=useNavigate();

  const gotoview=(event:any)=>{
    let id=(event.currentTarget.getAttribute("datatype"))
    window.localStorage.selectPageSave=id
    Select_page_context.setselectPage(id)
    Navi("/page")
  }

  return (
    <div className='specific-item' onClick={gotoview} datatype={id}>
      <span><GrView/></span> <p>View </p>
    </div>
  )
}

export default ViewPage_Button