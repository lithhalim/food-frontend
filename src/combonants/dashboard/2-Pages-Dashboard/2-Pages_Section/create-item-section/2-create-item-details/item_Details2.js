import axios from 'axios';
import React, { useState } from 'react';
import { Formik, Form, Field } from 'formik';
import {MdOutlineAddAPhoto} from "react-icons/md"
import * as Yup from 'yup';
import Button from '@mui/material/Button';
import uuid from 'react-uuid';







function Car_Details2({DataSaveFirst}) {

  const [imageSaver,setImageSaver]=useState([])

    const initialValues={
        productName : '',
        description:'',
        imagesection:'',
        price:"0",
        quantity:1
      }
      


    const getImage_file=async(e)=>{
                //get the file i will uolodad
                let file=e.target.files[0]

                //create new Form data to can upload on cloudaniry
                const formData = new FormData();

                formData.append("file",file);
                //setting ---> upload--->unsignd upload ---->Upload presets {"lobdevu9"} from cloudinary for unsiged name 
                formData.append('upload_preset', 'ugtx75zu');
                //upload the data on cloudnary https://api.cloudinary.com/v1_1/{cloud name}/upload
            const uploadOnClodinary=await axios.post("https://api.cloudinary.com/v1_1/lithhalim/upload",formData).then((alldata)=>{
                setImageSaver((oldStatus)=>([...oldStatus,alldata.data.secure_url]))
            })
        }



          const getAllData = (e) =>{}  

            const getDataHave=()=>{
              let Name=document.querySelector(".container-inputs")?.productName.value
              let description=document.querySelector(".container-inputs")?.description.value
              let Price=document.querySelector(".container-inputs")?.price.value;
              let quantity=document.querySelector(".container-inputs")?.quantity.value;


              if(Name!==""&&description!==""&&Price!==""&&quantity!==""){
                const {categories,calories,type,popularity}=DataSaveFirst
                  let AllDataHave={
                    productName:Name,description:description,imagesHave:imageSaver,Price:Price,postId:uuid(),
                    categories:categories,calories:calories,type:type,popularity:popularity,quantity:quantity
                  }

                  axios.post(`${process.env.REACT_APP_API}createpost`,AllDataHave)
                  imageSaver.forEach((data)=>(axios.post(`${process.env.REACT_APP_API}createImage`,{ImageId:data,ImageOnPostId:AllDataHave.postId})))
                  setImageSaver([])
                  window.location.href="/dashboard"

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
                            <Field type="text" className='input-section'  placeholder='Product Name' name='productName'/>
                            {errors.productName && touched.productName ? <div className='error-section'>{errors.productName}</div> : null}


                            <Field type="text"  className='input-section'  placeholder='Product Description' name='description'/>
                            {errors.description && touched.description ? <div className='error-section'>{errors.description}</div> : null}


                            <Field type="text" className='input-section'  placeholder='Price' name='price'/>
                            {errors.price && touched.price ? <div className='error-section'>{errors.price}</div> : null}

                            <Field type="text" className='input-section'  placeholder='Quantity' name='quantity'/>
                            {errors.quantity && touched.quantity ? <div className='error-section'>{errors.quantity}</div> : null}

                            <Button variant="contained" component="label" className='stylebutton'>
                                Upload Image <span><MdOutlineAddAPhoto/></span>
                                <Field hidden accept="image/*" multiple type="file" name="imagesection" onChange={getImage_file} />
                            </Button>
                            <div className='container-image-upload'>
                                {imageSaver.length>0?imageSaver.map((a,i)=>(<img src={a} key={i} alt="" className='style-image-section'/>)):<></>}
                            </div>

                            <input type="submit" value="Submit Dat" className="submit-button-section"  onClick={getDataHave} />


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
    imagesection: Yup.string()
    .label('Image Section')
    .required(),
    price:Yup.number()
    .label("Insert Price")
    .required(),
    quantity:Yup.number()
    .label("Insert quantity")
    .required()

     })
  
  
  