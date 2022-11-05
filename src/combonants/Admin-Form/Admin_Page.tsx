import React,{useContext, useEffect} from 'react';
import "./style/style.scss";
import Image from "../../assest/admin/adminImage.png"
import Signin_Admin from './Admin-signin/Signnin_Admin';





function Admin_Page() {
  return (
    <div className='Admin-Login-conatiner'>
      <div className='image-container'>
        <img src={Image} alt="" />
      </div>
      <div className='signin-admin-section'>
        <h3>Login As Admin User</h3>
        <Signin_Admin/>
      </div>
    </div>
  )
}

export default Admin_Page

