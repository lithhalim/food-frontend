import React,{useContext,useRef, useState} from 'react';
import { Login_Create_Context } from '../../context-api/authntication-context';
import axios from 'axios';


function Comment_Section({datause}:any) {
    const Login_Create_Context_comment=useContext(Login_Create_Context);
    const textInput=useRef<any>()
    const [dataPrint,setDataprint]=useState(datause.commentOnPostes)


    const postComment=()=>{
        const {fullName,image}=Login_Create_Context_comment.AllUserDaata
        let dataHave={commenterName:fullName,commenterImage:image,text:textInput.current.value,commentOnPostId:datause.postId}
        axios.post(`${process.env.REACT_APP_API}createComment`,dataHave)
        setDataprint((olddata:any)=>([...olddata,dataHave]))
        textInput.current.value=""
    }


  return (
    <div className='comment-container'>
        {Login_Create_Context_comment.AllUserDaata!==false?
        
        <div className='input-section'>

            <div className='first'>
                <img src={Login_Create_Context_comment.AllUserDaata.image} alt="" />
                <div className='text-section'>
                    <h4>{Login_Create_Context_comment.AllUserDaata.fullName}</h4>
                    <textarea name="" ref={textInput}></textarea>
                </div>
            </div>
            <div className='secand'>
                <p>cancel </p>
                <button onClick={postComment}>comment</button>
            </div>

        </div>:<></>}
        {dataPrint.map(({commenterImage,commenterName,text}:any,i:number)=>(<div className='container-item'>
            <img src={commenterImage} alt="" key={i}/>
            <div className='text-area'>
                <p>{commenterName}</p>
                <p>{text}</p>
            </div>
        </div>))}
        
    </div>
  )
}

export default Comment_Section
