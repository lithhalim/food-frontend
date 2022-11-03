import React, { useContext } from 'react';
import {AiOutlineCloseCircle} from "react-icons/ai";
import { Login_Create_Context } from '../../../context-api/authntication-context';


function Signin_Header() {
    const loginContext=useContext(Login_Create_Context);      

  return (
    <div className='container-header-sign'>
        <h1 className='signup-header'>Create An Account</h1>
        <span  className='icon-close'  onClick={()=>{loginContext.setsignin(false)}} >< AiOutlineCloseCircle /></span>
    </div>
)
}

export default Signin_Header