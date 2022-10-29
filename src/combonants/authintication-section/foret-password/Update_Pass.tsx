import React,{useContext, useState} from 'react';
import {Login_Create_Context} from "../../../context-api/authntication-context"

import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';


function Update_Pass() {
    const [stateUpdata,setstateUpdata]=useState<any>(false);
    const UpdateContext=useContext(Login_Create_Context)

    const initialValues={
        code: '',
        newPassword:'',
    }
    const getData=(event:any)=>{
        let data={regusterid:event.code,password:event.newPassword}
        axios.post(`${process.env.REACT_APP_API}updatePass`,data).then((data)=>{
            if(data.status==200){
                setstateUpdata({result:"The Password Updated"})
                UpdateContext.setforgetPassword(false)
            }else{
                setstateUpdata({result:"Worng Verification Code"})

            }
        })

    }
    
  return (
    <div className='update-Pass'>
        <h3 style={{textAlign:"center"}}>Update Pass Now</h3>
                <Formik
                            initialValues={initialValues}
                            validationSchema={SignupSchema}
                            onSubmit={getData}
                                    >
                                    {({ errors, touched }) => (
                                        <Form>
                                            <Field type="text"  name="code"  placeholder="VerificationCode"/>
                                            {errors.code && touched.code ? <div className='error-section'>{errors.code}</div> : null}
                    
                                            <Field  type="password" placeholder="Password"  name='newPassword' />
                                            {errors.newPassword && touched.newPassword ? <div className='error-section'>{errors.newPassword}</div> : null}

                                            <button className='submit-botton' type="submit">change Password</button>
                                            {stateUpdata!==false?<p style={{padding:"10px",textAlign:"center",color:"red"}}>{stateUpdata.result}</p>:<></>}
                    
                                        </Form>
                                    )}
                </Formik>            
    </div>
  )
}

export default Update_Pass


//you schema style validation 
const SignupSchema = Yup.object().shape({
    code:Yup
      .string()      
      .required("verification Code is required"),
      newPassword: Yup.string()
       .label('Password')
       .required(),
     });
  
  