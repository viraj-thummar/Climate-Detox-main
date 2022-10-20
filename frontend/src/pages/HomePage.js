import React from 'react'
import AboutCarbonCreditHome from '../components/AboutCarbonCreditHome'
import BlogCardHome from '../components/BlogCardHome'
import ClimateDetoxImgHome from '../components/ClimateDetoxImgHome'
import Footerbar from '../components/Footerbar'
import HeroHome from '../components/HeroHome'
import Navbar from '../components/Navbar'
import WhyClimateDetoxHome from "../components/WhyClimateDetoxHome"

const HomePage = () => {
    return (
    <>
      <Navbar />
      <HeroHome />
       <ClimateDetoxImgHome />
       <AboutCarbonCreditHome />       
       
       <WhyClimateDetoxHome/>
       <BlogCardHome/>      
       <Footerbar /> 
    </>
  )   
}

export default HomePage;
