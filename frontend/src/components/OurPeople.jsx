import React from "react";
import Rajesh from "../img/aboutUs/Rajesh.webp"
import Gaurav from "../img/aboutUs/Gaurav.webp"
import Manish from "../img/aboutUs/Manish.webp"
import Samarth from "../img/aboutUs/Samarth.webp"
import Vishal from "../img/aboutUs/Vishal.webp"
import { FaLinkedinIn } from 'react-icons/fa';
//import { FaTwitter } from 'react-icons/fa';
import {
  founders,
} from '../config/Typography';

const OurPeople= () => {
  return (
    <div className="max-w-[1440px] mx-auto flex flex-col justify-between font-[Inter] px-[16px] lg:px-[120px] py-9">
      <div >
        <h1 className=" align-center  pt-[54px] text-[16px] font-bold text-green">The Brains</h1>
        <h2 className=" align-center  pb-[56px] text-[28px] font-bold  text-black">Founders behind Climate Detox</h2>    
        <div className="carousel carousel-auto gap-5 space-x-1  ">

          
          {/* person 1 */}
   
          <div>
            <div className="group relative h-[150px] w-[150px]   sm:h-[245px] sm:w-[247px]">
            <img src={Rajesh} className="height-[100%]  absolute "alt="" srcset="" />
             <div className="h-[100%] w-[100%]  py-[60px] px-[4px]   sm:py-[90px] sm:px-[10px] border-8 absolute z-9999 opacity-70 border-black bg-black hidden  group-hover:block">
              <div style={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-evenly'
              }}>
                <span className="cursor-pointer" onClick={() => {
                  window.open(founders[1].linkedIn);
                }}><FaLinkedinIn className="text-white"/></span>
               
                 </div>
            </div>
            </div>
             <div className="text-[16px] md:text-[24px] font-semibold py-1 ">Rajesh Gupta</div>
             <div className="flex flex-col ">
             <p className="text-[12px] md:text-[16px] font-semibold text-green italic">Director</p>
             <p className="text-[12px] md:text-[16px] text-green italic">JB Group of Industries</p>
             </div>     
              </div>




          


          {/* person 2 */}
       

          <div>
          <div className="group relative h-[150px] w-[150px]   sm:h-[245px] sm:w-[247px]">
          <img src={Gaurav} className="height-[100%]  absolute "alt="" srcset="" />
           <div className="h-[100%] w-[100%]  py-[60px] px-[4px]   sm:py-[90px] sm:px-[10px] border-8 absolute z-9999 opacity-70 border-black bg-black hidden  group-hover:block">
            <div style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-evenly'
            }}>
              <span className="cursor-pointer" onClick={() => {
                window.open(founders[0].linkedIn);
              }}><FaLinkedinIn className="text-white"/></span>
             
            </div>
          </div>
          </div>
           <div className="text-[16px] md:text-[24px] font-semibold py-1 ">Gaurav VK Singhvi</div>
           <div className="flex flex-col ">
           <p className="text-[12px] md:text-[16px] font-semibold text-green italic">Co-Founder</p>
           <p className="text-[12px] md:text-[16px] text-green italic">We Founder Circle</p>
           </div>     
            </div>

          {/* person 3*/}
          
          <div>
            <div className="group relative h-[150px] w-[150px]   sm:h-[245px] sm:w-[247px]">
            <img src={Manish} className="height-[100%]  absolute "alt="" srcset="" />
             <div className="h-[100%] w-[100%]  py-[60px] px-[4px]   sm:py-[90px] sm:px-[10px] border-8 absolute z-9999 opacity-70 border-black bg-black hidden  group-hover:block">
              <div style={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-evenly'
              }}>
                <span className="cursor-pointer" onClick={() => {
                  window.open(founders[2].linkedIn);
                }}><FaLinkedinIn className="text-white"/></span>
               
             </div>
            </div>
            </div>
             <div className="text-[16px] md:text-[24px] font-semibold py-1 ">Manish Saboo</div>
             <div className="flex flex-col">
             <p className="text-[12px] md:text-[16px] font-semibold text-green italic">Director</p>
             <p className="text-[12px] md:text-[16px] text-green italic">Mohit Industries Ltd.</p>
             </div>     
              </div>


          {/* person 4*/}

          <div>
            <div className="group relative h-[150px] w-[150px]   sm:h-[245px] sm:w-[247px]">
            <img src={Vishal} className="height-[100%]  absolute "alt="" srcset="" />
             <div className="h-[100%] w-[100%]  py-[60px] px-[4px]   sm:py-[90px] sm:px-[10px] border-8 absolute z-9999 opacity-70 border-black bg-black hidden  group-hover:block">
              <div style={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-evenly'
              }}>
                <span className="cursor-pointer" onClick={() => {
                  window.open(founders[3].linkedIn);
                }}><FaLinkedinIn className="text-white"/></span>
              
             </div>
            </div>
            </div>
             <div className="text-[16px] md:text-[24px] font-semibold py-1 ">Vishal S Kejriwal</div>
             <div className="flex flex-col">
             <p className="text-[12px] md:text-[16px] font-semibold text-green italic">Director</p>
             <p className="text-[12px] md:text-[16px] text-green italic">Oriilon India Pvt. Ltd</p>
             </div>     
              </div>

          {/* person 5*/}

          <div>
            <div className="group relative h-[150px] w-[150px]   sm:h-[245px] sm:w-[247px]">
            <img src={Samarth} className="height-[100%]  absolute "alt="" srcset="" />
             <div className="h-[100%] w-[100%]  py-[60px] px-[4px]   sm:py-[90px] sm:px-[10px] border-8 absolute z-9999 opacity-70 border-black bg-black hidden  group-hover:block">
              <div style={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-evenly'
              }}>
                <span className="cursor-pointer" onClick={() => {
                  window.open(founders[4].linkedIn);
                }}><FaLinkedinIn className="text-white"/></span>
               
              </div>
            </div>
            </div>
             <div className="text-[16px] md:text-[24px] font-semibold py-1 ">Samarth Arya</div>
             <div className="flex flex-col ">
             <p className="text-[12px] md:text-[16px] font-semibold text-green italic">Director</p>
             <p className="text-[12px] md:text-[16px] text-green italic">JbrPET Industries Pvt. Ltd.</p>
             </div>     
              </div>

          

{/* 
          <div className="group">
            <img src={Harshal} className="height-[100%]" alt="" srcset="" />
            <div className="text-[24px] font-bold py-1 ">Harshal Mehta</div>
            <p className="text-[16px] text-green">Co- Founder</p>
            <div className="height-[245px] width-[247px] justify-evenly border-8 absolute z-9999 opacity-70 border-black bg-black hidden -mt-[315px] group-hover:block"
              style={{
                height: '245px',
                width: '247px',
                padding: '90px 10px',
              }}
            >
              <div style={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-evenly'
              }}>
                <span className="cursor-pointer" onClick={() => {
                  window.open(founders[3].linkedIn);
                }}><FaLinkedinIn className="text-white"/></span>
                <span className="cursor-pointer" onClick={() => {
                  window.opener(founders[3].twitter)
                }}><FaTwitter className="text-white"/></span>
              </div>
            </div>
          </div>
          <div className="group">
            <img src={Aditi} className="height-[100%]" alt="" srcset="" />
            <div className="text-[24px] font-bold py-1 ">Aditi Sharma</div>
            <p className="text-[16px] text-green">Co- Founder</p>
            <div className="height-[245px] width-[247px] justify-evenly border-8 absolute z-9999 opacity-70 border-black bg-black -mt-[315px] hidden group-hover:block"
              style={{
                height: '245px',
                width: '247px',
                padding: '90px 10px',
              }}
            >
              <div style={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-evenly'
              }}>
                <span className="cursor-pointer" onClick={() => {
                  window.open(founders[3].linkedIn);
                }}><FaLinkedinIn className="text-white"/></span>
                <span className="cursor-pointer" onClick={() => {
                  window.opener(founders[3].twitter)
                }}><FaTwitter className="text-white"/></span>
              </div>
              </div>
          </div>
          <div className="group">
            <img src={AJ} className="height-[100%]" alt="" srcset="" />
            <div className="text-[24px] font-bold py-1 ">AJ Pandey</div>
              <p className="text-[16px] text-green">Co- Founder</p>
            <div className="height-[245px] width-[247px] justify-evenly border-8 absolute z-9999 opacity-70 border-black bg-black -mt-[315px] hidden group-hover:block"
              style={{
                height: '245px',
                width: '247px',
                padding: '90px 10px',
              }}
            >
          <div style={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-evenly'
              }}>
                <span className="cursor-pointer" onClick={() => {
                  window.open(founders[3].linkedIn);
                }}><FaLinkedinIn className="text-white"/></span>
                <span className="cursor-pointer" onClick={() => {
                  window.opener(founders[3].twitter)
                }}><FaTwitter className="text-white"/></span>
              </div>
            </div>
          </div> */}


        </div>
      
      </div>
    </div>
  );}

export default OurPeople;


