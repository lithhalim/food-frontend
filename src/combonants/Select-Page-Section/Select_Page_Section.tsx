import React,{useContext} from 'react';
import {FcIdea,FcViewDetails} from "react-icons/fc"
import AddCart_Button from '../Card/Icon/AddCart_Button';
import Like_Button from "../Card/Icon/Like_Button"
import Slider_Specific from '../Home_Page/2Slider_Specific/Slider_Specific';
import "./style/style.scss";
import {useQuery} from "@tanstack/react-query";
import axios from 'axios';
import Page_Not_Found from '../page-not-found/Page_Not_Found';
import Loading_Section from '../loading-section/loading';
import { Page_Contextapi } from '../../context-api/Select_catagory';
import Comment_Section from './Comment_Section';





function Select_Page_Section() {

    const Page_Contextapi_Select=useContext(Page_Contextapi)


    function usePosts() {
        return useQuery([`getspecificpage`,Page_Contextapi_Select.selectPage], async () => {
          const { data } = await axios.get(
            `${process.env.REACT_APP_API}getproductpage/${Page_Contextapi_Select.selectPage}`
          );
          return data;
        });
      }  
    
      const { status, data, error, isFetching } = usePosts();
      
      if(isFetching)return<Loading_Section/>
      if(error)return<Page_Not_Found/>


    

  return (
    <div className='select-apage-container'>
        {data!==undefined?
        <>
        <div className='first-section'>
                <div className='image-container'>
                    <img src={data[0].postImages[0].ImageId} alt="" />
                </div>
                <ul className='text-container'>
                    <li><h3>{data[0].productName}</h3></li>
                    <li ><p >new product</p></li>
                    <li><h3>Price : {data[0].Price} JOD</h3></li>

                    <li className='icon-section'>
                        <AddCart_Button datause={data[0]}/>
                        <Like_Button datause={data[0]}/>
                    </li>
                    <li>
                        <div className='delevery'>
                            <h3>Delevery section</h3>
                            <p className='freedelevery'>free delevery</p>
                            <p className='container'><span><FcIdea/></span> <p>If you order from more than one branch, this will cancel the free delivery and increase the waiting time until the food arrives to you, thank you</p></p>
                        </div>
                    </li>
                    <li><span><FcViewDetails/></span> <p className='discription '>{data[0].description} </p></li>

                </ul>
        </div>

        <Slider_Specific datause={data[0].popularity}/>
        <Comment_Section datause={data[0]}/>

       </>:<></>} 
    </div>
  )
}

export default Select_Page_Section
