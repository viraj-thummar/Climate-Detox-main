import React from 'react';



const Video= ({mainHeading , description , imageUrl})=>{
    return (
        <>
        <div className="max-w-screen-2xl mx-auto pt-[80px] md:pt-[120px] lg:pt-[160px] font-[Inter]">
            <div className="relative">
            <div className="bg-green p-[16px] flex flex-col items-center mx-[16px] lg:mx-[80px] absolute mt-[-80px] lg:mt-[-60px]">
                <h1 className="text-[28px] lg:text-[40px] font-bold text-center text-white py-3">{mainHeading}</h1>
                <p className="text-[14px] lg:text-[16px] lg:px-[74px] pb-9 text-white text-center">{description} </p>
            </div>
            <div >
                <img className="h-[500px] w-full object-cover" src={imageUrl} alt="" srcset="" />
            </div>
            </div> 
            
        </div>
       </>
    )
}

export default Video;