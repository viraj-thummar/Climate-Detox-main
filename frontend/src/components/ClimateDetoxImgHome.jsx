import React from 'react'
import { FaArrowRight } from "react-icons/fa";
import imgForestSmoke from "../img/imgForestSmoke.webp"
import imgWindWill from "../img/imgWindWill.webp"
import imgRivertree from "../img/imgRivertree.webp"
import HalfCircle from "../img/svg/halfcircle.png" 
import { Link } from 'react-router-dom';


const ClimateDetoxImgHome = () => {
    return (
        <div>           
            <div className="max-w-[1200px]  mx-auto h-auto flex justify-center items-center lg:my-10 font-[Inter]">
            <div className="flex flex-col justify-center gap-10 mt-10  sm:mt-20 ">
               
              <div className="flex justify-center text-center ">
                  <h2 className=" text-[25px] md:text-[40px] font-bold font-['Inter'] ">We are <span className="text-[#49A078]">Climate</span> Detox</h2>
                </div>

             <div className="max-w-[1200px]  h-auto">
             <div className="grid grid-cols-2 relative gap-1 p-3  md:p-3 sm:gap-[11px]  md:grid md:grid-cols-2  lg:grid lg:grid-cols-7  lg:gap-[38px]  ">
                <div className=" hidden lg:block absolute -left-28 -top-28 z-[-1]">
                        <img className="h-[40.7rem]" src={HalfCircle} alt="" />  
                    </div>
                   <div className=" row-span-1 col-span-1 md:row-span-1 md:col-span-1  lg:col-span-2 ">
                        <img src={imgRivertree} className="object-cover w-full h-full" alt="" />
                    </div>
                            
                    <div className="row-span-1 col-span-1 md:row-span-1 md:col-span-1  lg:col-span-2 ">
                                <div className=" flex flex-col gap-3 sm:flex sm:flex-col sm:gap-[22px] md:gap-[22px]">
                                <div className="max-w-[450px]">
                                   <img  className="object-cover w-full h-full" src={imgWindWill} alt="" />
                                </div>
                                <div className="max-w-[450px]">
                                <img className="object-cover w-full h-full" src={imgForestSmoke} alt="" />
                                </div>
                           </div>
                    </div>
                   
                    <div className="col-span-2  md:col-span-2 lg:col-span-3 h-auto row-span-1 w-full text-white bg-[#49A078]">
                        <div className="pt-16 px-8 sm:px-10  flex flex-col gap-14">
                            <div>
                              <p className="leading-7 ">We launched Climate Detox to help the deteriorating state of our planet while also aiding companies and people to reach their neutral goal of reducing carbon emissions and footprints.
                              <br /> 
                              <br /> 
                              The government's implementation tax on carbon emissions is a step in the right direction.
                              </p>
                            </div>
                            <div>
                              <Link to="/aboutus" aboutus className=" cursor-pointer flex gap-5 pb-5 items-center"> <h4 className="cursur-pointer font-bold text-white ">Know More About Us </h4><span> <FaArrowRight/> </span></Link>
                            </div>
                        </div> 
                    </div>
                 </div>
             </div>               
          </div>  
            </div>   
       </div>        
    );
}



export default ClimateDetoxImgHome;