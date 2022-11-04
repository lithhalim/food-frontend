import axios from 'axios';
import React, { useState } from 'react';
import uuid from 'react-uuid';

// Formik Import Section
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';

//Import Data Use
import Data_Details from './Data_Use';
import Submit_UploadPhoto from './2-Submit&&UploadPhoto';



const initialValues={
  productName : '',
  description:'',
  price:"0",
  quantity:1
}




function Car_Details2({DataSaveFirst}) {
  const [saveImage,setSaveImage]=useState([]);
  const [ImageStatus,setImageStatus]=useState(false)


      const getAllData = (DataFromForm) =>{
              if(saveImage.length>0){
                let DataUse={...DataFromForm,...DataSaveFirst};
                DataUse.postId=uuid();

                console.log(DataUse)

                axios.post(`${process.env.REACT_APP_API}createpost`,DataUse)
                saveImage.forEach((data)=>(axios.post(`${process.env.REACT_APP_API}createImage`,{ImageId:data,ImageOnPostId:DataUse.postId})))
                window.location.href="/dashboard"

              }else{
                setImageStatus(true)
              }
      }    


    return (
            <Formik
            initialValues={initialValues}
            validationSchema={SignupSchema}
            onSubmit={getAllData}
            >
            {({ errors, touched }) => (

                    <Form className='container-inputs'>

                      {Data_Details.map(({name,placeholder},i)=>(
                      <div key={i}>
                            <Field type="text" className='input-section'  placeholder={placeholder} name={name}/>
                            {errors[name] && touched[name] ? <div className='error-section'>{errors[name]}</div> : null}
                      </div>))}

                        {ImageStatus?<p>Input Image Is Must</p>:<></>}
                        <Submit_UploadPhoto GetPhoto={(data)=>{setSaveImage(data)}}/>
                        
                      
                    </Form>)}
            </Formik>   
    
  )
}

export default Car_Details2




//you schema style validation 
const SignupSchema = Yup.object().shape({
    productName:Yup.string()
    .label('product Name Required')
    .required(),
    description: Yup.string()
    .label('description')
    .required(),
    price:Yup.number()
    .label("Insert Price")
    .required(),
    quantity:Yup.number()
    .label("Insert quantity")
    .required()
    })
  
  
  