import React, { useContext } from 'react'

function SignIn_Notificarion({statusEmail}) {


  return (
    <div>
            <button className='submit-botton' type="submit">Sign In</button>          
            <p className='special-text' style={{color:"red",marginTop:"10px"}}>{statusEmail!==false?<span>{statusEmail}</span>:<></>} </p>
    </div>
  )
}

export default SignIn_Notificarion