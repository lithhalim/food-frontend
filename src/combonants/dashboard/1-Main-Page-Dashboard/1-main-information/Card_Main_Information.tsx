import React from 'react'
import {FcAbout,FcSalesPerformance,FcBusinessman,FcBullish} from "react-icons/fc";


function Card_Main_Information({datause}:any) {
    let customData
    switch (datause.type) {
        case "email-sent":customData={icon:<FcAbout/>,name:"Email Sents",discription:"all Email Recive Last Month"}
        break;

        case "sales-obtained":customData={icon:<FcSalesPerformance/>,name:"sale Obtained",discription:"all sale Recive Last Month"}
        break;    

        case "new-clinets":customData={icon:<FcBusinessman/>,name:"New Clinets",discription:"all new Clinets Recive Last Month"}
        break;    

        case "traffic-recevied":customData={icon:<FcBullish/>,name:"Traffic Recived",discription:"all Traffic Recive Last Month"}
        break;        
    }
  return (
    <ul className='containercard'>
        <li className='data'>
            <p>{customData?.name}</p>
            <p style={{fontSize:".8em",width:"120px"}}>{customData?.discription}</p>
        </li>

        <li className='icons-section'>
            <p style={{fontSize:"1.4em"}}>{customData?.icon}</p>
            <p>{datause.data}</p>
        </li>
    </ul>
  )
}

export default Card_Main_Information
