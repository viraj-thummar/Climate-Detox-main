import React from "react";
import LeftCircle from "../img/carbonCredit/LeftCircle.webp"
import RightCircle from "../img/carbonCredit/RightCircle.webp"
import { HiOutlineArrowRight } from "react-icons/hi";
import { Link } from "react-router-dom";


const GreenSection =()=>{
  return(

    <>
     <div className="max-w-screen-2xl mx-auto bg-green text-white hidden lg:block font-[Inter] lg:gap-9 py-9">
        <div className="flex justify items-center"> 
          
              <img src={LeftCircle} alt="" srcset="" />
              <div className="flex justify-between px-6">
              <div>
              <h1 className="text-[24px] font-bold basis-2/5">Climate Detox - Helping Neutralise Your Carbon Emissions</h1>
              
              <div className="hover:underline underline-offset-4 cursor-pointer">
              <Link to="/getintouch">
              <p className="text-[16px] font-bold  pt-3 basis-2/5 flex items-center  group">Let's Talk <i className="ml-2 lg:w-auto lg:group-hover:translate-x-1 duration:300 transition text-white"><HiOutlineArrowRight/></i></p>
              </Link>
              </div>
              
             </div>
              <p className="text-[16px] basis-3/5 pt-1">Climate Detox can help you make an environmental transformation for the better, starting with a carbon footprint assessment to know how much carbon emissions your company produces. Connect with us to learn how we can help you reduce your carbon footprint!
              </p>
              </div>
              
              <img src={RightCircle} alt="" srcset="" />
         
        </div>
        
     </div>
    </>
  )


}

export default GreenSection;