import React, { useContext } from 'react';
import Icon_section from './Icon_Section';
import Promotion from './Promotion';
import Select_Section from './Select_Section';
import "./style/style.scss";
import {FaBars} from "react-icons/fa";
import { useNavigate } from "react-router-dom";


function Header_Main() {
  const Navi=useNavigate()
  const showselect=()=>{
        document.querySelector(".select-item")?.classList.toggle("active")
    }

  return (
    <>
        <Promotion/>
        <div className='header-container'>
            <p className='Nav-bar' onClick={showselect}><FaBars/></p>
            <h2 onClick={()=>{Navi("/")}} style={{cursor:"pointer"}}>Foodinzo</h2>
            <Select_Section/>
            <Icon_section/>
        </div>
    </>
  )
}

export default Header_Main
