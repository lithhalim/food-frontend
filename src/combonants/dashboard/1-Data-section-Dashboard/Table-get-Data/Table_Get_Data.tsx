import React,{useContext} from 'react';

import {useQuery} from "@tanstack/react-query"
import axios from 'axios';
import Loading_Section from '../../../loading-section/loading';
import Page_Not_Found from '../../../page-not-found/Page_Not_Found';
import { DataGrid } from '@mui/x-data-grid';
import "./style/style.scss"
import { Login_Create_Context } from '../../../../context-api/authntication-context';

function Table_Get_Data({datause}:any) {
  const Login_Create_ContextAuth=useContext(Login_Create_Context)



    function usePosts() {
        return useQuery([`getDataHave${datause}`], async () => {
          const { data } = await axios.get(
            `${process.env.REACT_APP_API}getDataReguster/${datause}`,{
              headers:{ 
                'Content-Type': 'application/json' ,
                'Accept': 'application/json',
                "authorization":`Bearer ${Login_Create_ContextAuth.accsisToken }` }
            }
          );
          return data;
        });
      }  
    
      const { status, data, error, isFetching } = usePosts();

      
      if(error)return<Page_Not_Found/>


  
      const columns = [
        { field: 'user', headerName: 'User ', width:150,
            renderCell:(params:any)=>{
            return(
                <div className='item-container-product'>
                    <img src={params.row.image}/>
                </div>
            )
            }
        },
          { field: 'fullName', headerName: 'Full Name',width:140,},
          { field: 'role', headerName: 'Role ',width:140,},
          { field: 'email', headerName: 'Email',width:190,},
        { field: 'Delete', headerName: 'Delete ', width:150,
            renderCell:(params:any)=>{
            return(
                <div className='item-container-product'>
                    <button datatype={params.row.regusterid} className="button-delete-from-dashbord">Delete</button>
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
    

export default Table_Get_Data
