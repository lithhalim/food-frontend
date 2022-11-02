import React from 'react';
import {FaBars} from "react-icons/fa";
import {AiFillMail} from "react-icons/ai"

function Header_Dashboard() {
  const showSidebar=()=>{
    document.querySelector(".side-bar-section")?.classList.toggle("active")
  }
  return (
        <div className='container-header'>
            <span onClick={showSidebar}><FaBars/></span>
            <h3>FOODINZOO</h3>
            <div className='icon-section'>
              <img src="https://upload.wikimedia.org/wikipedia/commons/8/8c/Cristiano_Ronaldo_2018.jpg" alt="" />
            </div>
        </div>
  )
}

export default Header_Dashboard
