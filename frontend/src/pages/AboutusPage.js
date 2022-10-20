import React from 'react';
import Header from "../components/Header";
import aboutUsBigInfoImage from '../img/aboutUs/aboutUsBigInfoImage.webp';
import Footerbar from "../components/Footerbar";
import OurPeople from "../components/OurPeople";
import BigInfoBlock from "../components/BigInfoBlock";
import Navbar from '../components/Navbar';
import DoubleCard from '../components/DoubleCard'


const AboutUs = () => {
  return (
    <>
    <Navbar />
    <Header title="About Us" ImageNew="./AboutUs.webp"></Header>
    <BigInfoBlock  title="Climate Detox" heading="We help develop a clean world" descriptionOne="As our name suggests, we help enterprises detox the climate. We aim to assist the developing world while also pleasing the planet. As a company, you may not be able to reduce the carbon dioxide emissions from your processes entirely, and that is where we step in."
    descriptionTwo="We are focused on lowering carbon emissions by raising awareness and introducing people to carbon credits. We are optimistic that by working together we can reach our goal of a healthier, greener nation yet attain technological advancement. At Climate Detox, we are committed to helping you understand everything about carbon credits to ensure that we all grow sustainably."
    imageUrl={aboutUsBigInfoImage} />
    <DoubleCard/>
    <OurPeople/>
    <Footerbar />
    </>
    
    
  )
}

export default AboutUs;
