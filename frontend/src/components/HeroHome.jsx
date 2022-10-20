import React from 'react'
import treeim from "../img/treeimg.webp";
import {
  heroHome,
} from '../config/Typography';

const HeroHome = () => {
  return (

<>
<div class="max-w-screen-2xl mx-auto font-[Inter]">
  <div>
   <h1 className="text-center px-[16px] lg:px-[256px] md:px-[56px] text-[35px] md:text-[50px] lg:text-[55px] font-bold py-[100px] ">{heroHome.mainHeader}</h1>
  </div>
  <div >
     <div className='bg-green mx-[16px] lg:mx-[120px]  '>
          <div className="flex flex-col lg:flex-row text-white gap-9 justify-evenly p-9">
              <div className='basis-1/2 text-[28px] lg:text-[40px] font-bold'>{heroHome.stats.leftHeader}</div>
              <div className='basis-1/2 font-normal'>{heroHome.stats.rightContent}</div>
          </div>
          <div className="grid p-9 text-white lg:grid-cols-3">
                  <div className="border border-2 span-row-1 sm:span-col-1 h-44  text-center "><h1 className="text-[55px] font-bold pt-5">{heroHome.stats.co2reduction.count}+</h1> <p>{heroHome.stats.co2reduction.label}</p></div>
                  <div className="border border-2 span-row-1 sm:span-col-1 h-44  text-center"><h1 className="text-[55px] font-bold pt-5">{heroHome.stats.projects.count}+</h1> <p>{heroHome.stats.projects.label}</p> </div>
                  <div className="border border-2 span-row-1 sm:span-col-1  h-44 text-center "><h1 className="text-[55px] font-bold pt-5">{heroHome.stats.customers.count}+</h1> <p>{heroHome.stats.customers.label}</p></div>
          </div>
     </div>
     <div>
     <img src={treeim} className="h-[600px] bg-no-repeat w-[100%] mt-[-300px] lg:mt-[-300px] relative  z-[-3] object-cover cover center" alt="" />
     </div>
  </div>
</div>

</>

  )
}

export default HeroHome;
