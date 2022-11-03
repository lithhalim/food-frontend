import React, { useContext } from 'react'
import { Login_Create_Context } from '../../../context-api/authntication-context';

function SignIn_Notificarion({statusEmail}) {

    const loginContext=useContext(Login_Create_Context);

    const signupSectioon=()=>{
        loginContext.setsignin(false)
        loginContext.setsignup(true)
      }
      
      const gotoSelect=()=>{
        loginContext.setsignin(false);
        loginContext.setforgetPassword(true);
      }      


  return (
    <div>
        <p  onClick={gotoSelect} className='forget-password'>Forget Password Click Here....</p>
            <button className='submit-botton' type="submit">Sign In</button>          
            <p className='special-text' style={{color:"red",marginTop:"10px"}}>{statusEmail!==false?<span>{statusEmail}</span>:<></>} </p>
        <p className='special-text' style={{cursor:"pointer" ,padding:"10px"}} onClick={signupSectioon}>You Dont Have Account ? Sign Up </p>
    </div>
  )
}

export default SignIn_Notificarion