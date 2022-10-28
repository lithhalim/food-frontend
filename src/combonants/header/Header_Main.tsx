import React, { useContext } from 'react';
import Icon_section from './Icon_Section';
import Promotion from './Promotion';
import Select_Section from './Select_Section';
import "./style/style.scss";
import {FaBars} from "react-icons/fa";


function Header_Main() {
    const showselect=()=>{
        document.querySelector(".select-item")?.classList.toggle("active")
    }
  return (
    <>
        <Promotion/>
        <div className='header-container'>
            <p className='Nav-bar' onClick={showselect}><FaBars/></p>
            <h2>Foodinzo</h2>
            <Select_Section/>
            <Icon_section/>
        </div>
    </>
  )
}

export default Header_Main
