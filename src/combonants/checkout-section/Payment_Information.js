import React from 'react';
import { useSelector } from 'react-redux';
import {TbArrowBackUp} from "react-icons/tb"
import { useNavigate } from 'react-router';




function Payment_Information() {
    const select=useSelector((state)=>(state))

    let dataUse=select.addToCartSlice.allProduct;
    const Navi=useNavigate()


    let totalPrice
    if(dataUse.length>0){totalPrice=dataUse.reduce((acc,data)=>(acc+=Number(data.price*data.selectItemQuentuty)),0)}
    
    const goback=()=>{Navi("/")}


    return (
    <div className='payment-information'>
        <div className='header'>
            <span>Payment Page Sweet Project</span>
            <p  onClick={goback} style={{cursor:"pointer"}}>Back Home <span><TbArrowBackUp/></span></p>
        </div>
        {totalPrice!==undefined?<h2 className='price'> ${totalPrice}.000 JOD</h2>:<></>}
        <ul className='payment-container'>
            {dataUse.length>0?dataUse.map(({name,price,selectItemQuentuty,image},i)=>(
                <li key={i}>
                     <div className='text'>
                        <img src={image} alt="" style={{width:"50px" ,height:"50px"}} />
                        <p> <span>{name}</span> <span>Qty {selectItemQuentuty}</span></p>
                        <p><span>${Number(price)*Number(selectItemQuentuty)}</span> <span>${selectItemQuentuty} each</span></p>
                    </div>
                </li>
            
            )):<></>}
        </ul>
    </div>
  )
}

export default Payment_Information