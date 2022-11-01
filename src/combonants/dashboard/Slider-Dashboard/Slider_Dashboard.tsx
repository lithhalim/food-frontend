import React,{useContext,useEffect,useRef} from 'react';
import { Trade_Information_Context } from '../../../context-api/Select-Trade';


import Table_Get_Data from '../1-Data-section-Dashboard/Table-get-Data/Table_Get_Data';
import Main_Information from '../1-Main-Page-Dashboard/1-main-information/Main_Information';
import { RevineuCharts } from '../1-Main-Page-Dashboard/2-revinue-chart/Revenue_Charts';
import { CashResive } from '../1-Main-Page-Dashboard/3-cash-reseve/Cash_Reseve';
import All_Item_Dashboard from '../2-Pages-Dashboard/2-Pages_Section/all-item-have/All_Item_Dashboard_Section';
import Create_Item_Section from '../2-Pages-Dashboard/2-Pages_Section/create-item-section/Create_Section_Main';
import "./style/style.scss";



function Slider_Dashboard() {
    const Sleder_Context=useContext(Trade_Information_Context);
    const GetSlider=useRef<any>(null)

    useEffect(() => {
        let hightSlider=GetSlider.current.clientHeight
        GetSlider.current.style.cssText=`transform: translateY(-${hightSlider*Sleder_Context.Sleder_Dashboard_Count}px);transition: all .5s;        `
    }, [Sleder_Context.Sleder_Dashboard_Count])
    


  return (
    <div className='slider-container-dashboard'>
      <div className='slider-dashboard-section' ref={GetSlider}>

        <div className='item-container'>
            <Main_Information/>
            <div className='first-charts'>
              <RevineuCharts/>
              <CashResive/>
            </div>
        </div>
        <div className='item-container'>
          <Table_Get_Data datause="admin"/>
        </div>

        <div className='item-container'>
          <Table_Get_Data datause="user"/>
        </div>


        <div className='item-container'>
            <Create_Item_Section/>
        </div>
        <div className='item-container'>
          <All_Item_Dashboard/>
        </div>

      </div>
    </div>
  )
}

export default Slider_Dashboard
