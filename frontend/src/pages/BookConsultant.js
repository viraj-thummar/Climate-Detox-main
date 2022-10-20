import React from 'react';
import ContactUs from '../components/ContactUs';
import Header from "../components/Header";
import Navbar from '../components/Navbar';
import Map from '../components/Map';
import Footerbar from '../components/Footerbar';


const Bookconsultant=()=>{
    return(
        <>
         <Navbar />
         <Header title="Let’s Collaborate" ImageNew="./ContactUs.webp"></Header>
         <ContactUs/>
         <Map/>
         <Footerbar  />
        

         
        </>
    )
}

export default Bookconsultant;