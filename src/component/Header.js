import React from "react";
import './css/Header.css'
import companyLogo  from './img/3227053.png'
import CreadNewBook from "./ModalCreadNewBook";
// import { QueryClient, QueryClientProvider } from 'react-query';
import {
    BrowserRouter as Router,
  
    Routes,
    Route,

  } from "react-router-dom";



function Header() {


    return(
        <Router>
        <div className= 'all'>
        
            <img src ={companyLogo} className = 'logo' alt = 'not find'/>
            <span className = 'titleHeader'>Books App</span>
          

         
             <div className = 'createNewBook'> <a href ='/CreadNewBook' className = 'createNewBook' > +Add new book</a> </div>
            <Routes>

                <Route exact path='/CreadNewBook' element ={<CreadNewBook />} />
         

            </Routes>


        </div>
           </Router>
    )
 
}

export default Header;

