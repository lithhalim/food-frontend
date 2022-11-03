import React, { useContext } from 'react';
import {AiOutlineCloseCircle} from "react-icons/ai";
import { Login_Create_Context } from '../../../context-api/authntication-context';


function Signup_header() {
    const loginContext=useContext(Login_Create_Context);


  return (
    <div className='container-header-sign'>
        <h1 className='signup-header'>Create An Account</h1>
        <span  className='icon-close' onClick={()=>{loginContext.setsignup(false)}}><AiOutlineCloseCircle/></span>
    </div>
)
}

export default Signup_header