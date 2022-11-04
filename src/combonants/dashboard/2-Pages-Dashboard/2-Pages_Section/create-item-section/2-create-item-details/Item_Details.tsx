import React, { useContext, useState } from 'react';
import "./style/style.scss";
import {Trade_Information_Context} from "../../../../../../context-api/Select-Trade"
import Car_Details2 from './Item_Details_Section2/1-item_Details2';



let dataSave:any={};
let NumberData:any;

function Create_Item_Details() {
  const [GoNextPage,setGoNextPage]=useState(false);
  const SelectPageContext=useContext(Trade_Information_Context);

  const [DataSaveFirst,setDataSaveFirst]=useState(false)




  const getAllData=(e:any)=>{

    //get the name of the select item
    let name=e.target.name;
    //get the option select
    let data=e.target.options[e.target.selectedIndex].text;

    if(name!==data){
      dataSave[name]=data
      NumberData=Object.entries(dataSave).length
      NumberData==4?setGoNextPage(true):setGoNextPage(false)
    }
    else{
      delete  dataSave.name
      setGoNextPage(false)
    }

    setDataSaveFirst(dataSave)
  
  }




  const submitCarDetails=()=>{
    SelectPageContext.setSelectStage({stage:"two"})
  }






  return (
    <div>
            {
            SelectPageContext.SelectStage.stage=="one"?
                <form className='contaiber-car-details' onChange={getAllData}>
                    <>
                      {DataUseHere.map(({data}:any,i:any)=>(
                        data.name!=="CarBrands"?
                              <select name={data.name} id="" key={i} placeholder={data.name} required	 >
                                {data.option.map((a:any,i:any)=>(
                                  i==0?<option  key={i}>{a}</option>:<option value={a} key={i}>{a}</option>
                                ))}
                              </select> :<select name={data.name} id="" key={i} placeholder={data.name} required	 >
                                {data.option.map(({name,image}:any,i:any)=>(
                                  i==0?<option  key={i}>{data.name}</option>:<option value={name} key={i} style={{textTransform:"capitalize"}}><span>{name}</span> <img src={image} alt="" /></option>
                                ))}
                              </select>
                        ))}
                        {GoNextPage==true?<div className='submit-button active' onClick={submitCarDetails}>Submit</div>:<div className='submit-button ' >Submit</div>}
                    </>
                </form>
                :
              <Car_Details2 DataSaveFirst={DataSaveFirst}/>
            }
    </div>
  )
}

export default Create_Item_Details



let DataUseHere=[
  {data: {name:"categories",option:["Categories","Arabic Food","Pizza","Fried Chicken","Spaghetti"]}},
  {data: {name:"calories",option:["Calories","100-500","500-1000","1000-1500","1500-1750","1750-2000","2000-2500"]}},
  {data:{name:"type",option:["Type","junk food","healthy food"]}},
  {data:{name:"popularity",option:["Popularity","Populer","Most Order"]}},
]
