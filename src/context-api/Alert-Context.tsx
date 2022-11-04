import React, { useState } from "react";

//use to create the context 
export const Alert_Create_Context=React.createContext<any|null>(null);


export function Alert_Provider(props:any) {
    const [RunAlert,setRunAlert]=useState(false);
    



  return (
    <Alert_Create_Context.Provider value={{RunAlert,setRunAlert}}>
        {props.children}
    </Alert_Create_Context.Provider>
  ) 
}
