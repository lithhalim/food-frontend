import React from 'react'
import Card_Section from '../Card/Card';
import "./style/style.scss"

import MainData from '../../DataUse/FoodData';

function Select_Catagory_section() {


  return (
    <div className='catagory-section'>
        <div className='container-item'>
            {MainData.map((data,i)=>(<Card_Section key={i} datause={data}/>))}
        </div>
    </div>
  )
}

export default Select_Catagory_section