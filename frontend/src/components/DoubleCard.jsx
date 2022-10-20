import React from 'react';
import DoubleCardBack from "../img/aboutUs/DoubleCardBack.webp"


const DoubleCard= ()=>{
    return (
        <>
        <div className="max-w-screen-2xl mx-auto pt-[100px] font-[Inter] ">
            <div className="relative flex flex-col md:flex-row justify-around mb-[-200px] lg:mb-[-70px] gap-9 text-white px-[16px] lg:px-[60px]">
               <div className='bg-green p-[16px] lg:p-[49px] flex flex-col basis-1/2'>
                <p className='font-bold text-[14px] lg:text-[20px] py-2'>Mission</p>
                <p className='text-[12px] lg:text-[16px] '>At Climate Detox, our mission is to introduce and adopt greener and cleaner ways to transform and protect our world. We aim to accelerate the transition of climate-change-focused societies.</p>
                
                </div>
               <div className='bg-green p-[16px] lg:p-[49px] flex flex-col basis-1/2'>
                <p className='font-bold text-[14px] lg:text-[20px] py-2'>Vision</p>
                <p className='text-[12px] lg:text-[16px] '>Progress without compromising our planet. We believe we can all do little things every day to contribute to the world's fight against climate change.</p>
            </div>
            </div>
            
            <div >
                <img className="h-[320px] lg:h-[370px] object-cover w-full" src={DoubleCardBack} alt="" srcset="" />
            </div>

        </div> 
            
       </>
    )
}

export default DoubleCard;