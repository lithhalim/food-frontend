import React from 'react'
import Card_Main_Information from './Card_Main_Information';
import "./style/style.scss"

function Main_Information() {
    let datause=[{type:"email-sent",data:12.50},{type:"sales-obtained",data:500},{type:"new-clinets",data:300},{type:"traffic-recevied",data:100}]
  return (
    <div className='container-main-information'>
        {datause.map((data,i)=>(<Card_Main_Information key={i} datause={data}/>))}      
    </div>
  )
}

export default Main_Information
