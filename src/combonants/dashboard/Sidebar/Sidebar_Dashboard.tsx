import React,{useContext} from 'react';
import { Trade_Information_Context } from '../../../context-api/Select-Trade';
import Select_Dashboard_All_Data from './select-data-information';
import "./style/style.scss"


function Sidebar_Dashboard() {
    const Slider_Context=useContext(Trade_Information_Context);

    const gotopage=(event:any)=>{
        Slider_Context.setSleder_Dashboard_Count(Number(event.currentTarget.getAttribute("datatype")))
    }
  return (
    <div className='side-bar-dashboard'>
        <div className='header-dashboard'>
            <img src="https://upload.wikimedia.org/wikipedia/commons/8/8c/Cristiano_Ronaldo_2018.jpg" alt="" />
            <h3>Ronaldo do</h3>
            <p>Admin For Foodinzo Group</p>
        </div>

        <div className='select-item-dashboard'>
            {Select_Dashboard_All_Data.map((data,i)=>(
                <div>
                    <h4 className='catagory'>{data.type}</h4>
                    {data.item.map(({icon,name,page},i)=>(<div key={i} datatype={page} onClick={gotopage} className="item"><span>{icon}</span><span>{name}</span></div>))}
                </div>
            ))}
        </div>

    </div>
  )
}

export default Sidebar_Dashboard