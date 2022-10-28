import React,{useContext} from 'react';
import { useNavigate } from 'react-router-dom';
import { Page_Contextapi } from '../../context-api/Select_catagory';
import DataSelect from '../../DataUse/DataSelect';

function Select_Section() {
  const Navi=useNavigate()
  const SelectPage= useContext(Page_Contextapi)



  const gotoselect=(event:any)=>{
    let ElementSelect=event.currentTarget
    //select all element and remove active
    ElementSelect.parentElement.childNodes.forEach((element:any)=>(element.classList.remove("active")))
    //Add active to elemnt select
    ElementSelect.classList.add("active");
    let selectData=(ElementSelect.getAttribute("datatype"))


    //remove active to hide the navbar select after select
    document.querySelector(".select-item")?.classList.remove("active")

    if(selectData.includes('/')){
      Navi(selectData)
    }else{
      window.localStorage.savePage=selectData;
      SelectPage.setSelectcatagory(selectData)
      Navi("/catagory")
    }
  }



  return (
    <ul className='select-item' >
      {DataSelect.map(({name,path},i)=>(<li key={i} onClick={gotoselect} datatype={path}>{name}</li>))}
    </ul>
  )
}

export default Select_Section
