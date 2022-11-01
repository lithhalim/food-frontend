import React, { useContext } from 'react';
import {GiSelfLove} from "react-icons/gi";
import { useDispatch, useSelector } from 'react-redux';
import { Login_Create_Context } from '../../../context-api/authntication-context';
import { addLikes, RemoveAllLikes } from '../../../redux/AddLikes';



function Like_Button({datause}:any) {
  const selectData=useSelector((state:any)=>(state));
  const dispatch=useDispatch();
  const loginContext=useContext(Login_Create_Context);
  const{description,id,postImages,productName,Price,quantity,categories,postId}=datause;
  let image=postImages[0].ImageId




  //-------------------------------------like item ------------------------------------------------------//
  const likeProduct=(event:any)=>{
    // get the id of the post 
    let [id,image,name,price]=event.currentTarget.getAttribute("datatype").split("###");

    //check if the user reguster or not
    if(loginContext.AllUserDaata==false){
      loginContext.setsignin(true)
    }else{
        //get the all information aboat user have reguster
        const {image:imageperson,regusterid,fullName} =loginContext.AllUserDaata
        let DataLike={person_do_like_id:regusterid, person_do_like_name:fullName, person_do_like_image:imageperson,id:id,productName:name,productImage:image,price:price}  

        let datacheck=selectData.allLikesIhave.alllikes.findIndex((data:any)=>(data.id==id))
        datacheck==-1?dispatch(addLikes(DataLike)):dispatch(RemoveAllLikes(DataLike))
    }
}

  return (
      <div className='specific-item' onClick={likeProduct} datatype={`${id}###${image}###${productName}###${Price}`}>
        <span><GiSelfLove/></span> <p>Favorate</p>
      </div>
    )
}

export default Like_Button
