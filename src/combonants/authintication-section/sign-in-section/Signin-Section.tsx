import React, { useContext, useState } from 'react';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import "../style/style.scss";
import {AiOutlineCloseCircle} from "react-icons/ai";
import {AiOutlineMail} from "react-icons/ai";
import {RiLockPasswordLine} from "react-icons/ri";
import axios from 'axios';
import jwt_decode from "jwt-decode";
import { Login_Create_Context } from '../../../context-api/authntication-context';
import {motion} from "framer-motion"



   



function Signin_Section_Have() {

  const [statusEmail,setStatusEmail]=useState<any|null>(false);
  const loginContext=useContext(Login_Create_Context);

  const Get_AllDataHave=(data:any)=>{
    const {email,password} =data;
        //Use To Decoded The Baseic Auth To Be `BASIC 5464d5s45d454s55dsdsadsa` And Send In Header
        const decoded=btoa(`${email}:${password}`)


        axios.post(`${process.env.REACT_APP_API}signin`,{
            headers:{ 'Content-Type': 'application/json' ,'Accept': 'application/json',"authorization":`BASIC ${decoded}` }
          }).then((x)=>{
                //send the accsess Token To User To Useit
                loginContext.setsignin(false);
                const decoded = jwt_decode(x.data.accessToken);
                window.localStorage.SaveAuthnticaiton=JSON.stringify(decoded);
                loginContext.setAllUserData(decoded)
            }).catch((errors)=>{
              console.log(errors)
                //if The Email Or The Password ARE WRONG
                setStatusEmail("Wrong Email Or Password")
            });
    
  }  


  const initialValues={
    email: '',
    password:'',
}


const closeSection=()=>{
  loginContext.setsignin(false)

}
const signupSectioon=()=>{
  loginContext.setsignin(false)
  loginContext.setsignup(true)
}

  return (
    <>
            {loginContext.signin!==false?
                    <motion.div className='signin-container' initial={{x:"-100vw"}} animate={{x:"0"}} transition={{duration:.5}}>
                    <div className='signin-container-section'>
                    <div className='container-header-sign'>
                    <h1 className='signup-header'>Create An Account</h1>
                    <span  className='icon-close'  onClick={closeSection} >< AiOutlineCloseCircle /></span>
                    </div>
            
                            <Formik
                                    initialValues={initialValues}
                                    validationSchema={SignupSchema}
                                    onSubmit={Get_AllDataHave}
                                    >
                                    {({ errors, touched }) => (
                                        <Form>
                                        <div className='container-input'>
                                            <span><AiOutlineMail/></span>
                                            <Field type="text"  name="email"  placeholder="Email"/>
                                            {errors.email && touched.email ? <div className='error-section'>{errors.email}</div> : null}
                                        </div>
                    
                                        <div className='container-input'>
                                            <span><RiLockPasswordLine/></span>
                                                <Field  type="password" placeholder="Password"  name='password' />
                                                {errors.password && touched.password ? <div className='error-section'>{errors.password}</div> : null}
                                        </div>
                    
                                            <button className='submit-botton' type="submit">Sign In</button>
                    
                                            <p className='special-text' style={{color:"red",marginTop:"10px"}}>{statusEmail!==false?<span>{statusEmail}</span>:<></>} </p>
                                            <p className='special-text' style={{cursor:"pointer" ,padding:"10px"}} onClick={signupSectioon}>You Dont Have Account ? Sign Up </p>

                                        </Form>
                                    )}
                            </Formik>            
                    </div>
                
                </motion.div>:<></>
            
            }
    </>
  )
}

export default Signin_Section_Have



//you schema style validation 
const SignupSchema = Yup.object().shape({
  email:Yup
    .string()      
    .required("Mail is required"),
  password: Yup.string()
     .label('Password')
     .required(),
   });

