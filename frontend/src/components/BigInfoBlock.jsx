import React from "react";
import DotSquarepng from '../img/svg/dotsquare.png'
import HalfCircle from "../img/svg/halfcircle.png" 



const BigInfoBlock= ({ title, heading, descriptionOne,descriptionTwo,imageUrl ,isVisible=true ,isVisibleTwo=true}) => {
    return (

        <div className="max-w-[1440px] mx-auto flex flex-col py-[50px] md:py-[60px] lg:py-[70px] lg:flex-row font-[Inter] justify-center lg:content-center px-[16px] lg:px-[120px] gap-8">
            <div className="basis-1/2">
                <h1 className=" align-center  pt-[54px] text-[18px] font-bold text-green">{title}</h1>
         <h2 className=" align-center  py-[16px] text-[28px] font-bold  text-black">{heading}</h2>
         <p className=" align-center  text-[16px] font-normal text-grey">{ descriptionOne }</p> 
         <br />
         <br />
         <p className=" align-center  text-[16px] font-normal text-grey">{ descriptionTwo }</p>
            </div>
         
         <div className="basis-1/2  object-center ">
            {
                 isVisible &&   <img className="h-[30rem] hidden lg:block absolute rotate-180 right-0 pt-4 top-70 z-[-1]" src={HalfCircle} alt="" />  
            }
       
            <img src={imageUrl} className="h-[460px] w-[100%] pt-[70px] max-w-2xl object-cover contain center" alt="" />
            {
                isVisibleTwo &&   <img src={DotSquarepng} className="z-[-3] relative hidden top-[-80px] lg:block xl:block  z-[-1] lg:right-0  xl:-left-[35px]" alt="" srcset="" />
       
            }
            
          </div> 
          
    </div>
    );
}

export default BigInfoBlock;
