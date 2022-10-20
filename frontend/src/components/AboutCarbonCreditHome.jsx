import React from 'react';
import { Link } from 'react-router-dom';
import imgRevalute from '../img/imgRevalut.webp'
import DotSquarepng from '../img/svg/dotsquare.png'

const AboutCarbonCreditHome = () => {
    return (
        <div className="flex h-auto max-w-[640px] my-10 p-7 lg:px-0  mx-auto md:flex items-center  md:max-w-[1200px]  relative md:h-[50vh]: md:mx-auto lg:mt-44 font-[Inter]">
            <div className="grid  grid-cols-1  grid-rows-8 gap-y-6 lg:grid lg:grid-cols-8 lg:gap-[20px]  lg:content-center md:justify-center ">
              <div className=" grid col-span-1 row-span-2  md:col-span-2">
                    <h2 class="text-[#49A078] text-[17px] font-bold ">About Carbon Credit </h2>
                </div>
                <div className="grid col-span-1 gap-y-3 row-span-3 md:col-span-3 md:grid md:gap-[30px]">
                    <div>
                        <h1 className="text-[#121212] text-[28px]  font-bold md:text-[40px] leading-tight">
                        Compensate Your Emissions with Carbon Credits
                        </h1>
                    </div>
                    <div>
                        <p className="leading-relaxed font-['Inter'] text-[#4D4D4D]">
                        In today's fast-paced technological era, carbon emissions are inevitable. Be it industrial processes, factory leaks, chemical reactions, or general burning of fuels in various vehicles, greenhouse gases or carbon emissions are bound to be released into our atmosphere by individuals as well as organisations.
                        </p>
                    </div>
                </div>
                 <div className="grid col-span-1 gap-y-5 row-span-3  lg:grid lg:col-span-3 lg:justify-end lg:gap-10  ">
                    <div className="max-w-[844px] max-h-[400px]">
                        <img className="object-cover h-full w-full" src={imgRevalute} alt="" />
                    </div>
                    <div>
                       <Link to="/aboutcarboncredit"> <button className="w-[150px] drop-shadow-2xl text-[#ffff] h-[40px] rounded bg-[#49A078]">Know More</button></Link>
                    </div>
                </div>
            </div>
            <div className="hidden  lg:block xl:block absolute bottom-9 z-[-1] lg:right-0  xl:-right-14">
                    <img src={DotSquarepng} alt="" />
               </div>
         </div>
    );
}

export default AboutCarbonCreditHome;