import React from 'react';
import {BrowserRouter,Route,Routes} from "react-router-dom"
import Header_Main from './combonants/header/Header_Main';
import Slider_Homepage from './combonants/Home_Page/1Slider_Homepage/Slider_Homepage';
import Slider_Specific from './combonants/Home_Page/2Slider_Specific/Slider_Specific';
import Arabic_Food from './combonants/Home_Page/3ArabicFood/Arabic_Food';
import Page_Not_Found from './combonants/page-not-found/Page_Not_Found';
import { PageContext_Provider } from './context-api/Select_catagory';

import { store } from './redux/store/store'
import { Provider } from 'react-redux'
import Signin_Section_Have from './combonants/authintication-section/sign-in-section/Signin-Section';
import { Login_Provider } from './context-api/authntication-context';
import Signup_Section from './combonants/authintication-section/sign-up-section/Signup_Section';
import Add_To_Card from './combonants/Add-Cart-Section/Add_Cart_Section';
import Favorate_Product from './combonants/Favorate-Product-Section/Favorate_ProductSection';
import Select_Page_Section from './combonants/Select-Page-Section/Select_Page_Section';
import Footer_Section from './combonants/footer/Footer_Section';
import Select_Catagory_section from './combonants/Select-Catagory-section/Select_Catagory_section';




function App() {
  return (
        <Provider store={store}>
              <Login_Provider>
                  <PageContext_Provider>
                      <BrowserRouter>
                        <Routes>
                          <Route path='/' element={<><Header_Main/><Slider_Homepage/><Arabic_Food/> <Slider_Specific/> <Slider_Specific/> <Signin_Section_Have/><Signup_Section/>  <Footer_Section/></>}/>
                            <Route path='/addCart' element={<><Header_Main/> <Add_To_Card/> <Signin_Section_Have/><Signup_Section/> <Footer_Section/></>}/>
                              <Route path='/favorate' element={<><Header_Main/> <Favorate_Product/> <Signin_Section_Have/><Signup_Section/><Footer_Section/> </>}/>
                              <Route path='/page' element={<> <Header_Main/><Select_Page_Section/>  <Signin_Section_Have/><Signup_Section/> <Footer_Section/></>}/>
                            <Route path='/catagory' element={<> <Header_Main/><Select_Catagory_section/>  <Signin_Section_Have/><Signup_Section/> <Footer_Section/></>}/>
                          <Route path='*' element={<><Page_Not_Found/></>}/>
                        </Routes>
                      </BrowserRouter>
                  </PageContext_Provider>
            </Login_Provider>
        </Provider>
  );
}

export default App;
