import React from 'react'
import Accordion from "../components/Accordion"
import Header from "../components/Header";
import Footerbar from "../components/Footerbar";
import Navbar from '../components/Navbar';

const FAQpage = () => {
  return (
    <>
     <Navbar />
    <Header title="FAQs" ImageNew="./Faq.webp"></Header>
    <Accordion/>
    <Footerbar />
    </>
   
    
  )
}

export default FAQpage;