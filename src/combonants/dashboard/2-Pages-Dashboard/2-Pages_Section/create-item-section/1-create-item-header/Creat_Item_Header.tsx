import React, { useContext } from 'react';
import "./style/style.scss";
import {GrStatusGood} from "react-icons/gr";
import { Trade_Information_Context } from '../../../../../../context-api/Select-Trade';



function Create_Item_Header() {
    const StageSelect=useContext(Trade_Information_Context);


  return (
    <div className='header-trader-section'>
        <ul className='item-section'>
           <li> 
                <div className='container'>
                    {StageSelect.SelectStage.stage==="one"?<p className='firstNumber'>1</p>:<p className='firstNumber'><GrStatusGood style={{color:"white",fontSize:"2em",backgroundColor:"white"}}/></p>}
                    <p>Product Details</p>
                </div>
            </li> 
            <li> 
                <div className='container'>
                    {StageSelect.SelectStage.stage=="two"?<p className='secandNumber'>2</p>:<p className='secandNumber' style={{backgroundColor:"white",color:"black",border:"3px solid black"}}>2</p>}
                    <p>Main Information</p>
                </div>
            </li> 

        </ul>
      
    </div>
  )
}

export default Create_Item_Header
