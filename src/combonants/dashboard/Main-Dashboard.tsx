import React,{useContext,useEffect} from 'react'
import { useNavigate } from 'react-router-dom';
import { Login_Create_Context } from '../../context-api/authntication-context';
import Header_Dashboard from './header-dashboard/Header_Dashboard';
import Sidebar_Dashboard from './Sidebar/Sidebar_Dashboard';
import Slider_Dashboard from './Slider-Dashboard/Slider_Dashboard';

import "./style/style.scss"

function Main_Dashboard() {
  const Login_Create_Context_Admin=useContext(Login_Create_Context);
  const Navi=useNavigate()

  // useEffect(()=>{Login_Create_Context_Admin.AllUserDaata?.role!=="admin"?Navi("/admin"):<></>},[])

  return (
    <>
      {Login_Create_Context_Admin.AllUserDaata!==false?
        <div className='container-dashboard'>
            <div className='side-bar-section'>
              <Sidebar_Dashboard datause={Login_Create_Context_Admin.AllUserDaata}/>
            </div>
            <div className='all-item-dashbard'>
                <Header_Dashboard datause={Login_Create_Context_Admin.AllUserDaata}/>
                <Slider_Dashboard/>      
            </div>
        </div>:<></>}
    </>
  )
}

export default Main_Dashboard
