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
import Signin_Section_Have from './combonants/authintication-section/sign-in-section/2-Signin-Section';
import { Login_Provider } from './context-api/authntication-context';
import Signup_Section from './combonants/authintication-section/sign-up-section/2-Signup_Section';
import Add_To_Card from './combonants/Add-Cart-Section/Add_Cart_Section';
import Favorate_Product from './combonants/Favorate-Product-Section/Favorate_ProductSection';
import Select_Page_Section from './combonants/Select-Page-Section/Select_Page_Section';
import Footer_Section from './combonants/footer/Footer_Section';
import Select_Catagory_section from './combonants/Select-Catagory-section/Select_Catagory_section';
import Main_Dashboard from './combonants/dashboard/Main-Dashboard';
import Create_Item_Section from './combonants/dashboard/2-Pages-Dashboard/2-Pages_Section/create-item-section/Create_Section_Main';
import { Trade_Information_Provider } from './context-api/Select-Trade';


import {QueryClient,QueryClientProvider} from "@tanstack/react-query";
import Checkou_Page from './combonants/checkout-section/Checkou_Page';
import Alert_Section from './combonants/Alert_Section/Alert_Item';
import { Alert_Provider } from './context-api/Alert-Context';
import Admin_Page from './combonants/Admin-Form/Admin_Page';

const queryClient = new QueryClient();





function App() {
  return (
    <QueryClientProvider client={queryClient}>
            <Provider store={store}>
              <Alert_Provider>
                    <Trade_Information_Provider>
                              <Login_Provider>
                                  <PageContext_Provider>
                                      <BrowserRouter>
                                        <Routes>
                                          <Route path='/' element={<> <Header_Main/><Slider_Homepage/><Arabic_Food datause="first"/> <Slider_Specific datause="Populer"/><Arabic_Food datause="last"/> <Slider_Specific datause="Most Order"/> <Signin_Section_Have/><Signup_Section/>  <Footer_Section/><Alert_Section/> </>}/>
                                            <Route path='/addCart' element={<><Header_Main/> <Add_To_Card/> <Signin_Section_Have/><Signup_Section/> <Footer_Section/><Alert_Section/> </>}/>
                                              <Route path='/favorate' element={<><Header_Main/> <Favorate_Product/> <Signin_Section_Have/><Signup_Section/><Footer_Section/> <Alert_Section/></>}/>
                                                <Route path='/creat' element={<><Create_Item_Section/><Alert_Section/></>}/>
                                                  <Route  path='/admin' element={<><Admin_Page/></>}/>
                                                  <Route path='/checkout' element={<><Checkou_Page/><Alert_Section/></>}/>
                                                <Route path='/dashboard' element={<> <Main_Dashboard/> <Alert_Section/></>}/>
                                              <Route path='/page' element={<> <Header_Main/><Select_Page_Section/>  <Signin_Section_Have/><Signup_Section/> <Footer_Section/><Alert_Section/></>}/>
                                            <Route path='/catagory' element={<>  <Header_Main/><Select_Catagory_section/>  <Signin_Section_Have/><Signup_Section/> <Footer_Section/><Alert_Section/> </>}/>
                                          <Route path='*' element={<><Page_Not_Found/></>}/>
                                        </Routes>
                                      </BrowserRouter>
                                  </PageContext_Provider>
                            </Login_Provider>
                      </Trade_Information_Provider>
                    </Alert_Provider>
            </Provider>
        </QueryClientProvider>
  );
}

export default App;
