import React, { useContext, useState } from 'react';
import axios from 'axios';
import {motion} from "framer-motion"
import { Login_Create_Context } from '../../../context-api/authntication-context';


//Formik Import Section Data
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';

//Import data looping
import Data_Signup_Use from './Data_Signup';

//Style Import Section
import "../style/style.scss";
import Signup_header from './1-Signup_header';
import Signup_Notification from './3-Signup-Notification&&Submit';
import uuid from 'react-uuid';



// The Initial Value For The Input Ihave
const initialValues={
  fullName: '',
  email: '',
  password:'',
  country:"",
}


function Signup_Section() {
  const loginContext=useContext(Login_Create_Context);
  const [statusEmail,setstatusEmail]=useState(false);



  //Get All Data From The Form Reguster
      const Get_AllData=(data)=>{
        
        //Add Reguster Id Number
        data.regusterid=uuid();
        
        axios.post(`${process.env.REACT_APP_API}signup`,data).
        then((x)=>{
          if(x.data.status=="Email Is ok"){
            setstatusEmail("Email Ok Now Log In")
          }else if(x.data.status=="Email Is Taken"){
            setstatusEmail("Wmail Is Taken")
          }
      })

  }  



  return (
    <>
          { loginContext.signup!==false?
                    <motion.div className='signin-container' initial={{x:"200vw"}} animate={{x:"0"}} transition={{duration:.5}}>
                              <div className='signin-container-section'>

                                <Signup_header/>

                                    <Formik
                                            initialValues={initialValues}
                                            validationSchema={SignupSchema}
                                            onSubmit={Get_AllData}
                                            >
                                            {({ errors, touched }) => (
                                                <Form>

                                                  {Data_Signup_Use.map(
                                                    ({name,icon,placeholder,type},i)=>(
                                                        <div className='container-input' key={i}>
                                                            <span>{icon}</span>
                                                            <Field type={type} name={name}  placeholder={placeholder} />
                                                            {errors[name] && touched[name] ? (<div className='error-section'>{errors[name]}</div>) : null}
                                                        </div>  
                                                    ))}

                                                    <Signup_Notification statusEmail={statusEmail}/>

                                                </Form>
                                            )}
                                      </Formik>

                              </div>
                      
                    </motion.div>
                :<></>
            }
    </>
  )
}

export default Signup_Section



//you schema style validation 
const SignupSchema = Yup.object().shape({
  fullName: Yup.string()
     .label('Full Name')
     .max(16)
     .required(),
  email:Yup
    .string()      
    .required("Mail is required"),
  country:Yup
    .string(),      
  password: Yup.string()
     .label('Password')
     .required(),
   });

