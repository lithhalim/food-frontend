import React,{useContext,useState}  from 'react';
import "./style/style.scss";
import {AiOutlineCloseCircle} from "react-icons/ai"
import { Login_Create_Context } from '../../../context-api/authntication-context';
import {motion} from "framer-motion"
import axios from 'axios';
import Update_Pass from './Update_Pass';


function Forget_Password() {
    const loginContext=useContext(Login_Create_Context);
    const [GetInput,setGetInput]=useState(false);
    const [emailCheck,setEmailCheck]=useState(false)
    const [updatePass,setupdatePass]=useState(false)

    const closeItem=()=>{loginContext.setforgetPassword(false);}

    const submitData=()=>{
       let  filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;

        if (filter.test(GetInput)) {
            axios.post(`${process.env.REACT_APP_API}forgetPassword`,{email:GetInput}).then((data)=>{
                if(data.data[0].email){
                    axios.post(`${process.env.REACT_APP_API}sindgrid`,{regusterid:data.data[0].regusterid,email:data.data[0].email}).then((data)=>{
                        if(data.status==200){
                            setEmailCheck("verification code send to email ...")
                            setupdatePass(true)
                        }
                    })

                }else {
                    setEmailCheck("Wrong Email .....")
                }
            }).catch((err)=>(setEmailCheck("Wrong Email .....")))
        }
        else{
            setEmailCheck("Wrong Email Input Change ..")
        }
    }


  return (
        <motion.div className='forget-password-container' initial={{x:"-100vw"}} animate={{x:"0px"}} transition={{duration:.5}}>
            <div className='forget-password'>
                <div className='header'>
                    <h3>Find your account</h3>
                    <span onClick={closeItem}><AiOutlineCloseCircle/></span>
                </div>
                {updatePass==false?<>
                    <p className='discription'>Please enter your email or phone number to search for your account.</p>
                    <input type="text" placeholder='Insert Email Here To Check  .......' onChange={(event)=>(setGetInput(event.currentTarget.value))} />
                </>:<></>}
                {emailCheck!==false?<motion.p className='check' initial={{scale:1}} animate={{scale:1.05}} transition={{repeat:Infinity,repeatType:"reverse",duration:2}}>{emailCheck}</motion.p >:<></>}
                {updatePass==false?<button onClick={submitData}>Serch On the Email</button>:<Update_Pass/>}
            </div>
        </motion.div>
  )
}

export default Forget_Password
