import React, { useState,useContext } from 'react';

//React Data Grid Section 
import { DataGrid } from '@mui/x-data-grid';

import "./style/style.scss"
//React Icons Section part
import {BsFillPatchMinusFill} from "react-icons/bs";
import {BsFillPatchPlusFill} from "react-icons/bs"

import "./style/style.scss"
import { useDispatch, useSelector } from 'react-redux';
import { modifyquantity, modifyquantitydecrese, removeFromCart } from '../../redux/addToCart';
import Side_SectionAddCart from './Side_SectionAddCart';
import { Alert_Create_Context } from '../../context-api/Alert-Context';



import DataAlert from '../../DataUse/Alert_Data';









export default function Add_To_Card() {
  //Get The Data From Redux
  const selectData=useSelector((state:any)=>(state))
  const dispatch=useDispatch();
  const Alert_Create_Context_Section=useContext(Alert_Create_Context);
  
  console.log(selectData)







  //Get The Total Price Of The Product
  let totalPrice
  if(selectData.addToCartSlice.allProduct.length>0){
    totalPrice=selectData.addToCartSlice.allProduct.reduce((acc:any,data:any)=>
    (acc+=Number(data.price*data.selectItemQuentuty)),0)
  }



  //Increse and Decrease Button
  const increseQuntity=(event:any)=>{
    let [id,image,name,price]=event.currentTarget.getAttribute("datatype").split("###");


    let ItemSelect=selectData.addToCartSlice.allProduct.filter((data:any)=>(data?.id==id))
    //check Number Of Item Ihave In system 
    if((Number(ItemSelect[0].quantity)-Number(ItemSelect[0].selectItemQuentuty))===0){
      Alert_Create_Context_Section.setRunAlert(DataAlert[0])
    }else{
      dispatch(modifyquantity({id:id,image:image,name:name,price:price}))
    }
  
  }

  const decreseQuntity=(event:any)=>{
    let [id,image,name,price,selectItemQuentuty]=event.currentTarget.getAttribute("datatype").split("###");
    if(selectItemQuentuty>1){
      dispatch(modifyquantitydecrese({id:id,image:image,name:name,price:price}))
    }else{
      dispatch(removeFromCart(id))
    }

  }


  
const columns = [
    { field: 'item', headerName: 'All Product You Select ', width:150,
        renderCell:(params:any)=>{
        return(
            <div className='item-container-section'>
                <img src={params.row.image}/>
                <p >{params.row.name}</p>
            </div>
        )
        }
    },
    { field: 'quantity',headerName: 'Quantity ', type: 'number',width:140,
        renderCell:(params:any)=>{
          return(
            <ul className='quintity-button-section'>
              <li onClick={decreseQuntity}   datatype={`${params.row.id}###${params.row.image}###${params.row.name}###${params.row.price}###${params.row.selectItemQuentuty}`} ><span><BsFillPatchMinusFill/></span></li>
              <li className='number'>{params.row.selectItemQuentuty}</li>
              <li onClick={increseQuntity} datatype={`${params.row.id}###${params.row.image}###${params.row.name}###${params.row.price}###${params.row.selectItemQuentuty}`}><span><BsFillPatchPlusFill/></span></li>
            </ul>
          )
        }
      },
      { field: 'price', headerName: 'Price',width:140,
        renderCell:(params:any)=>{
          return(
            <p className='price-item-section'>
              {Number(params.row.price)} <span>JOD</span>
            </p>
          )
        }
      },
      { field: 'Totalprice', headerName: 'Total Price',width:140,
      renderCell:(params:any)=>{
        return(
          <p className='price-item-section'>
            {Number(params.row.selectItemQuentuty)*Number(params.row.price)} <span>JOD</span>
          </p>
        )
      }
      },


];
  



  //To get All Data I Have
  const rows = selectData.addToCartSlice.allProduct
  

  return (
    <div className='checkout-container'>
        <div className='container-add-cart'>
                <div className='header-addtocard'>
                    <p> Number Product:{selectData.addToCartSlice.value}</p> 
                    <p>tatal price:{totalPrice!==undefined?totalPrice:<></>}</p>
                </div>
                <DataGrid rows={rows}  columns={columns}  rowHeight={170} />
        </div>
        <Side_SectionAddCart totalPrice={totalPrice}/>
    </div>
  );
}
