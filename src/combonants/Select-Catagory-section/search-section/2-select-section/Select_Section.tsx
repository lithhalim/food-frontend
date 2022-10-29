import React, { useState } from 'react';
import Select_Information from '../1-select-information/Select_Information_element';
import "./style/style.scss";
import DataUseHere from "../select-information"

let selectedData:any={}
function Select_Section({getDataSelect}:any) {

    const DataChange=(event:any)=>{
            let Catagory=event.target.name.split("###")[0]
            let selectItem=event.target.name.split("###")[1]

            if(selectedData[Catagory]==undefined){
                selectedData[Catagory]=[selectItem]
            }else{
                if(selectedData[Catagory].includes(selectItem)){
                    let newData= selectedData[Catagory].filter((data:any)=>(data!==selectItem))
                    selectedData[Catagory]=newData
                    if(selectedData[Catagory].length==0){
                        delete selectedData[Catagory]
                    }
                }else{
                    selectedData[Catagory].push(selectItem)  
                }
            }
            //save the data in local storage becuse in rerender will remove all data
            window.localStorage.savaselectdata=JSON.stringify(selectedData)

            getDataSelect(selectedData)

    }
  return (
    <form onChange={DataChange} className="container-all-search">
        <div className='selector-header-section'>
            <h1>Filter Result</h1>
            <button>Reset</button>
        </div>
        <div className='selector-container-section'>
            {DataUseHere.map(({data,type},i)=>(
                <Select_Information optionItem={data} type={type} key={i}/>
            ))}
        </div>

        <div className='price-section'>
            <label htmlFor=""> Price Range</label>
                <input type="number" defaultValue="0"   placeholder='Start Price' />
                <input type="number" defaultValue="1000"  placeholder='end Price' />
            <p className='show-result-search-item-add'>
                        Data Will Show Direct
            </p>
        </div>

    </form>
  )
}

export default Select_Section