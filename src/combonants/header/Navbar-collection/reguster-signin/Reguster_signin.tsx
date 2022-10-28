import React, { useContext } from 'react'
import {BsPerson} from "react-icons/bs";
import {motion } from "framer-motion";
import "./style/style.scss";

import RegusterDatabar from '../../../../DataUse/RegusterBar';
import { useNavigate } from '@saas-ui/react';
import { Login_Create_Context } from '../../../../context-api/authntication-context';




function Reguster_signin() {
    const Navi=useNavigate();
    const loginContext=useContext(Login_Create_Context);


    const gotoselect=(event:any)=>{
        let datause=(event.currentTarget.getAttribute("datatype"))
        if(datause.includes("/")){
            Navi(datause)
        }else{
            loginContext.setsignin(true)
            loginContext.setsignup(false)
        }
    }


  return (

    <>
        {loginContext.AllUserDaata==false?  
            <li className='reguster-holder'>
                    <motion.span whileHover={{scale:1.2}}><BsPerson/></motion.span>
                    <ul className='bar-section-element'>
                        {RegusterDatabar.map(({name,type},i)=>(<li key={i} className='element' onClick={gotoselect} datatype={type}>{name}</li>))}
                    </ul>
            </li>:<></>
        }
    </>
)
}

export default Reguster_signin