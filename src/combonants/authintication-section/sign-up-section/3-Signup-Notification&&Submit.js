import React, { useContext } from 'react'
import { Login_Create_Context } from '../../../context-api/authntication-context';

function Signup_Notification({statusEmail}) {
const loginContext=useContext(Login_Create_Context);

  //Go to login Section 
const loginsection=()=>{
  loginContext.setsignup(false)
  loginContext.setsignin(true)
}

  return (
    <div>
          <p className='special-text'> Already Have An Account ? <span onClick={loginsection}>Login Here</span> </p>
          <p className='special-text' style={{color:"red",marginTop:"10px"}}>{statusEmail!==false?<span>{statusEmail}</span>:<></>}</p>

          <button className='submit-botton' type="submit">Reguster</button>
    </div>
  )
}

export default Signup_Notification