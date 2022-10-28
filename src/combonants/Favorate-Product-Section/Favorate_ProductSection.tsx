import React, { useContext } from 'react';

//React Data Grid Section 
import { DataGrid } from '@mui/x-data-grid';


import "./style/style.scss"
import { useDispatch, useSelector } from 'react-redux';
import Side_SectionFavorate from './Side_SectionFavorate';
import { useNavigate } from 'react-router-dom';
import { RemoveAllLikes } from '../../redux/AddLikes';
import { Page_Contextapi } from '../../context-api/Select_catagory';






export default function Favorate_Product() {
  //Get The Data From Redux
  const selectData=useSelector((state:any)=>(state))
  const dispatch=useDispatch();
  const Navi=useNavigate();
  const Select_page_context=useContext(Page_Contextapi)




  const gotoview=(event:any)=>{
    let id=(event.currentTarget.getAttribute("datatype"))
    window.localStorage.selectPageSave=id
    Select_page_context.setselectPage(id)
    Navi("/page")
  }

  const removeLike=(event:any)=>{
    let id=(event.currentTarget.getAttribute("datatype"))
    dispatch(RemoveAllLikes({id:id}))
  }

  
const columns = [
    { field: 'id', headerName: 'id',width:50,
      renderCell:(params:any)=>{
        return(
          <p className='id-item-section'>
            {params.row.id}
          </p>
        )
      }
    },
    { field: 'item', headerName: 'All Product You Select ', width:150,
        renderCell:(params:any)=>{
        return(
            <div className='item-container-section'>
                <img src={params.row.productImage}/>
                <p >{params.row.productName}</p>
            </div>
        )
        }
    },

      { field: 'price', headerName: 'Price',width:140,
        renderCell:(params:any)=>{
          return(
            <p className='price-item-section'>
              {Number(params.row.price)} <span>JOD</span>
            </p>
          )
        }
      },
      { field: 'remove', headerName: 'remove',width:160,
      renderCell:(params:any)=>{
        return(
          <button className='remove-buttom' onClick={removeLike}  datatype={params.row.id}>
            Remove
          </button>
        )
      }
    },
    { field: 'view', headerName: 'view',width:160,
      renderCell:(params:any)=>{
        return(
          <button className='view-buttom' datatype={params.row.id} onClick={gotoview}>
            View
          </button>
        )
      }
    },

];
  



  //To get All Data I Have
  const rows = selectData.allLikesIhave.alllikes;
  
  


  return (
    <div className='Favorate-container'>
        <div className='container-Favorate'>
                <div className='header-Favorate'>
                    <p> Number Product:{selectData.allLikesIhave.value}</p> 
                    <p>tatal price </p>
                </div>
                <DataGrid rows={rows}  columns={columns}  rowHeight={170} />
        </div>
        <Side_SectionFavorate />
    </div>
  );
}
