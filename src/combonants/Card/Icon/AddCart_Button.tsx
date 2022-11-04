import React,{useState,useContext} from 'react';
import {HiShoppingCart} from "react-icons/hi";

import { useDispatch, useSelector } from 'react-redux';
import { Alert_Create_Context } from '../../../context-api/Alert-Context';
import DataAlert from '../../../DataUse/Alert_Data';
import { addtocart, modifyquantity } from '../../../redux/addToCart';






function AddCart_Button({datause}:any) {
  const{description,id,postImages,productName,Price,quantity}=datause;
  let image=postImages[0].ImageId;
  const Alert_Create_Context_Section=useContext(Alert_Create_Context);




  const dispatch=useDispatch();
  const selectData=useSelector((state:any)=>(state))

  //---------------------------------------Add To cart -------------------------------------------------//
      const addToCart=(event:any)=>{
        let [discription,id,image,name,price,quantity]=event.currentTarget.getAttribute("datatype").split("###");
        let  checkData= selectData.addToCartSlice.allProduct.findIndex((data:any)=>(data.id==id));

        if(checkData==-1){
            dispatch(addtocart({id:id,image:image,name:name,price:price,quantity:quantity,selectItemQuentuty:1,discription:discription}))
        }else{
          let ItemSelect=selectData.addToCartSlice.allProduct.filter((data:any)=>(data?.id==id))

          //check Number Of Item Ihave In system 
          if((Number(ItemSelect[0].quantity)-Number(ItemSelect[0].selectItemQuentuty))===0){
            Alert_Create_Context_Section.setRunAlert(DataAlert[0])

          }else{
            dispatch(modifyquantity({id:id,image:image,name:name,price:price}))
          }
        }
    }

  return (
    <div className='specific-item' onClick={addToCart} datatype={`${description}###${id}###${image}###${productName}###${Price}###${quantity}`}><span><HiShoppingCart/></span> <p>AddCart</p> 
     </div>
    )
}

export default AddCart_Button