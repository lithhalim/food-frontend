import React from 'react'
import Header_Dashboard from './header-dashboard/Header_Dashboard';
import Sidebar_Dashboard from './Sidebar/Sidebar_Dashboard';
import Slider_Dashboard from './Slider-Dashboard/Slider_Dashboard';

import "./style/style.scss"

function Main_Dashboard() {
  return (
    <div className='container-dashboard'>
        <div className='side-bar-section'>
          <Sidebar_Dashboard/>
        </div>
        <div className='all-item-dashbard'>
            <Header_Dashboard/>
            <Slider_Dashboard/>      
        </div>
    </div>
  )
}

export default Main_Dashboard
