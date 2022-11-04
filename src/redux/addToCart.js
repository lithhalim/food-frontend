import { createSlice } from '@reduxjs/toolkit'
import axios from 'axios';


const initialState = {
  value: 0,
  allProduct:[]
}

if(window.localStorage.AddToCart){
  initialState.value=JSON.parse(window.localStorage.AddToCart).value;
  initialState.allProduct=JSON.parse(window.localStorage.AddToCart).allProduct;
}



export const addToCartSlice = createSlice({
  name: 'addToCart',
  initialState,
  reducers: {
    addtocart: (state, action) => {
        state.value=state.value+=1;
        state.allProduct=[...state.allProduct,action.payload];
        window.localStorage.AddToCart=JSON.stringify(state);

        // axios.post(`${process.env.REACT_APP_API}addBasket`,action.payload)
    },
    removeFromCart: (state, action) => {
        state.value=state.value-=1;
        state.allProduct=state.allProduct.filter((a,i)=>(a.id!=action.payload))
        window.localStorage.AddToCart=JSON.stringify(state);

    },
    modifyquantity:(state,action)=>{
      //Find index of specific object using findIndex method.    
      state.value=state.value+=1;

      const objIndex = state.allProduct.findIndex((obj => obj.id == action.payload.id));
      let newnumber=Number(state.allProduct[objIndex].selectItemQuentuty)
      newnumber+=1
      state.allProduct[objIndex].selectItemQuentuty =newnumber;
      window.localStorage.AddToCart=JSON.stringify(state)
      },
    modifyquantitydecrese:(state,action)=>{
        //Find index of specific object using findIndex method. 
        state.value=state.value-=1;
   
        const objIndex = state.allProduct.findIndex((obj => obj.id == action.payload.id));
        let newnumber=Number(state.allProduct[objIndex].selectItemQuentuty)
        newnumber-=1
        state.allProduct[objIndex].selectItemQuentuty =newnumber
        window.localStorage.AddToCart=JSON.stringify(state)  
      }
  },
})

// Action creators are generated for each case reducer function
export const {  addtocart,removeFromCart,modifyquantity,modifyquantitydecrese } = addToCartSlice.actions

export default addToCartSlice.reducer

