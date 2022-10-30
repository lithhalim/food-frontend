import React from 'react'
import Main_Information from './1-main-information/Main_Information'
import { RevineuCharts } from './2-revinue-chart/Revenue_Charts'
import { CashResive } from './3-cash-reseve/Cash_Reseve';
import Sidebar_Dashboard from './Sidebar/Sidebar_Dashboard';

import "./style/style.scss"

function Main_Dashboard() {
  return (
    <div className='container-dashboard'>
        <div className='side-bar-section'>
          <Sidebar_Dashboard/>
        </div>
        <div className='all-item-dashbard'>
          <div className='container-header'>
            <h3>DASHBOARD</h3>
            <p>welcome to you dashboard</p>
          </div>
          <Main_Information/>
          <div className='first-charts'>
            <RevineuCharts/>
            <CashResive/>
          </div>
        </div>      
    </div>
  )
}

export default Main_Dashboard
