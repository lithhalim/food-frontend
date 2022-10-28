import React, { useContext } from 'react';
import {useSelector} from "react-redux"
import { Login_Create_Context } from '../../context-api/authntication-context';
import Add_Cart_Icon from './Navbar-collection/add-cart/Add_Cart_Icon';
import Reguster_signin from './Navbar-collection/reguster-signin/Reguster_signin';
import Search_icon_section from './Navbar-collection/search/Search';


import PersonalBar  from "../../DataUse/PersonalBar"
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Favorate_Icon_Header from './Navbar-collection/favorate/Favorate_Icon_Header';





function Icon_section() {

  const Navi=useNavigate();
  const loginContext=useContext(Login_Create_Context);


  const gotoselect=(event:any)=>{
      let datause=(event.currentTarget.getAttribute("datatype"))
      if(datause.includes("/")){
          Navi(datause)
      }else{
        axios.post(`${process.env.REACT_APP_API}logout/${loginContext.AllUserDaata.regusterid}`)
        loginContext.setAllUserData(false)
        window.localStorage.removeItem('SaveAuthnticaiton');
       }
  }

    
  return (
    <ul className='icon-section'>
      <Search_icon_section/>
      <Reguster_signin/>
      <Favorate_Icon_Header/>
      <Add_Cart_Icon/>
      {loginContext.AllUserDaata!==false?
          <li className='reguster-holder'>
                  <span><img src={loginContext.AllUserDaata.image} style={{width:"35px",height:"35px",borderRadius:"50%"}}  alt="" /></span>
                      <ul className='bar-section-element'>
                          {PersonalBar.map(({name,type},i)=>(<li key={i} className='element' onClick={gotoselect} datatype={type}>{name}</li>))}
                      </ul>
          </li>
      :<></>}
    </ul>
  )
}

export default Icon_section
