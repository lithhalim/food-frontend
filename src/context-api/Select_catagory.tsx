import React, { useState } from "react";



//use to create the context 
export const Page_Contextapi=React.createContext<any|null>(null);


export function PageContext_Provider(props:any) {

    const [Selectcatagory,setSelectcatagory]=useState(window.localStorage.savePage?window.localStorage.savePage:false);
    const [selectPage,setselectPage]=useState(window.localStorage.selectPageSave?window.localStorage.selectPageSave:false)
  return (
    <Page_Contextapi.Provider value={{Selectcatagory,setSelectcatagory,selectPage,setselectPage}}>
        {props.children}
    </Page_Contextapi.Provider>
  ) 
}
