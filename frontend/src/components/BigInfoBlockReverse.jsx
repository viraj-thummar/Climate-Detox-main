import { isVisible } from "@testing-library/user-event/dist/utils";
import React from "react";



const BigInfoBlockReverse= ({ title, heading, descriptionOne,descriptionTwo,imageUrl, imageUrlOne,imageUrlTwo, isVisible=true }) => {
    return (

        <div className="max-w-screen-2xl mx-auto flex flex-col py-[50px] md:py-[60px] lg:py-[70px] lg:flex-row-reverse font-[Inter] justify-center lg:content-center px-[16px] lg:px-[120px] gap-8">
            <div className="basis-1/2">
                <h1 className=" align-center  pt-[54px] text-[18px] font-bold text-green">{title}</h1>
         <h2 className=" align-center  py-[16px] text-[28px] font-bold  text-black">{heading}</h2>
         <p className=" align-center  text-[16px] font-normal text-grey">{ descriptionOne }</p> 
         <br />
         <br />
         <p className=" align-center  text-[16px] font-normal text-grey">{ descriptionTwo }</p>
            </div>
         
         <div className="basis-1/2 align-center object-center ">
          {
            isVisible &&   <img className="h-[30rem] hidden lg:block absolute left-0 pt-4 top-70 z-[-1]" src={imageUrlOne} alt="" />  
          }
            <img src={imageUrl} className="h-[90%] w-[100%] pt-[50px] max-w-2xl object-fit contain center" alt="" />
            <img src={imageUrlTwo} className="z-[-3] relative hidden top-[-75px] lg:block xl:block  z-[-1] lg:right-0  xl:-right-[368px]" alt="" srcset="" />
          </div> 
          
     
    </div>
    );
}

export default BigInfoBlockReverse;
