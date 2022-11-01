import React from 'react';

//React Data Grid Section 
import { DataGrid } from '@mui/x-data-grid';


import "./style/style.scss"
import {useQuery} from "@tanstack/react-query";
import axios from 'axios';
import Loading_Section from '../../../../loading-section/loading';
import Page_Not_Found from '../../../../page-not-found/Page_Not_Found';

import {AiFillDelete} from "react-icons/ai"






export default function All_Item_Dashboard() {

  function usePosts() {
    return useQuery([`getAllPostes`], async () => {
      const { data } = await axios.get(
        `${process.env.REACT_APP_API}getAllItem`
      );
      return data;
    });
  }  

  const { status, data, error, isFetching,refetch } = usePosts();

  
  if(isFetching)return<Loading_Section/>
  if(error)return<Page_Not_Found/>



  const DeleteItem=(event:any)=>{
    event.preventDefault()
    axios.post(`${process.env.REACT_APP_API}DeleteItem`,{id:event.currentTarget.getAttribute("datatype")})
    refetch()
  }


  
const columns = [
    { field: 'item', headerName: 'product ', width:150,
        renderCell:(params:any)=>{
        return(
            <div className='item-container-product'>
                <img src={params.row.postImages[0].ImageId}/>
            </div>
        )
        }
    },
      { field: 'productName', headerName: 'Product Name',width:140,},
      { field: 'Price', headerName: 'Price',width:140,},
      { field: 'categories', headerName: 'Categories',width:140,},
      { field: 'popularity', headerName: 'Popularity',width:140,},
      { field: 'calories', headerName: 'Calories',width:140,},
    { field: 'Delete', headerName: 'Delete ', width:150,
      renderCell:(params:any)=>{
      return(
          <div className='DeleteButton' >
            <button onClick={DeleteItem} className="button-delete-from-dashbord"  datatype={params.row.id} ><span>Delete</span> <span><AiFillDelete/></span></button>
          </div>
      )
      }
  },

];
  



  //To get All Data I Have
  const rows = data!==undefined?data:<></>;
  


  return (
    <div className='all-item-dashboard-container'>
        <div className='container-allItem'>
                <DataGrid rows={rows}  columns={columns}  rowHeight={100} />
        </div>
    </div>
  );
}
