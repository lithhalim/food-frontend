import React, { useState } from "react";

//use to create the context 
export const Login_Create_Context=React.createContext<any|null>(null);


export function Login_Provider(props:any) {

    const [AllUserDaata,setAllUserData]=useState(window.localStorage.SaveAuthnticaiton?JSON.parse(window.localStorage.SaveAuthnticaiton):false)
    const [signin,setsignin]=useState(false);
    const [signup,setsignup]=useState(false);
    const [forgetPassword,setforgetPassword]=useState(false);
    



  return (
    <Login_Create_Context.Provider value={{AllUserDaata,setAllUserData,signin,setsignin,signup,setsignup,forgetPassword,setforgetPassword}}>
        {props.children}
    </Login_Create_Context.Provider>
  ) 
}
