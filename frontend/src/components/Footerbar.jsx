import React from "react";
import toast from "react-hot-toast";
// import { FaLinkedinIn } from "react-icons/fa";
// import { FaTwitter } from "react-icons/fa";
import { Link } from "react-router-dom";
import { SubscriptionWEP } from "../API_WEP/CoreAPI";

const Footerbar = () => {
  const [subsEmail, setSubsEmail] = React.useState(null);
  const [subsMsg, setSubsMsg] = React.useState(null);

 
  const handleSubs = async () => {
    try {
      if (subsEmail) {
        let res = await SubscriptionWEP({ email: subsEmail });
        console.log(res);
        setSubsMsg(res?.body?.message);
        // toast.success(res?.body?.message);
      } else {
        //setSubsMsg(res?.body?.message);
        toast.error("Enter Email");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className='bg-black h-[440px]  align-center font-[Inter]'>
      <div className='max-w-[1200px]    pt-10 mx-auto'>
        <div className='h-auto bg-black p-4 text-[#D9D9D9] flex flex-col md:flex md:flex-row gap-[30px] '>
          <div className='flex flex-col gap-14 md:w-1/2'>
            <div>
              <h1 className='text-[30px] text-[#fff]'>Subscribe to Our Newsletter</h1>
              <p className='text-[20px]'>For the latest updates, be connected with us</p>
            </div>
            <form className='w-full max-w-md '>
              <div className=' flex items-center rounded-lg border border-green p-1 py-1'>
                <input
                  className='mr-9 w-full appearance-none rounded-lg border-none bg-transparent py-1 px-4  leading-tight text-gray-700 focus:text-white focus:outline-none'
                  type='email'
                  placeholder='Enter your email'
                  aria-label='Email'
                  onBlur={(e) => setSubsEmail(e.target.value)}
                />
                <button
                  className='flex-shrink-0 rounded-lg rounded border-4 border-[#49A078] bg-[#49A078] py-2 px-6 md:px-8 text-sm font-semibold text-white hover:border-teal-700 hover:bg-teal-700'
                  type='button'
                  onClick={() => handleSubs()}>
                  Subscribe
                </button>
              </div>
              <div className='text-[16px] text-white pt-[7px] '>{subsMsg && subsMsg}</div>
            </form>
            {/* <div className="flex gap-2 text-[16px]">
                 <input type="text" placeholder="Enter your email" className="w-80 h-6 border-b-2  bg-black border-white text-wite outline-0" />
                 <img src={arrowIcon} className="cursor-pointer" alt="" />
            </div> */}

            {/* <div className="flex relative">
              <input type="text" placeholder="Enter your email "  className=" h-10 relative w-96 border-b-2 border-white bg-black  text-wite outline-0" />
              <img className="cursor-pointer absolute right-44 mb-3" src={ArrowIcon} alt="" />
            </div> */}
            <div className="flex flex-col md:flex-row gap-2 md:gap-10 ">
            <Link to='/privacypolicy'> <h3>Privacy  Policy </h3></Link>
            <Link to='/termsandcondition'> <h3> Terms & Conditions</h3> </Link>
           
                
         </div>
     </div> 
               
      <div className="flex flex-col md:flex-row md:w-1/2 gap-[50px] gap-2 md:gap-10 ">
         <div className="md:w-2/5">
            <ul class="flex flex-col mt-3  items-start gap-3 text-[16px]">
            <li>
               <Link to='/aboutus'>About Us</Link>
             </li>
             <li>
               <Link to='/faqs'>FAQs</Link>
             </li>
             <li>
               <Link to='/aboutcarboncredit'>About Carbon Credits</Link>
             </li>
             <li>
               <Link to='/insights'>Insights</Link>
             </li> 
             
             <li>
               <Link to='/getintouch'>Contact Us</Link>
             </li>
           </ul>
         </div>  
          <div className="md:w-3/5 text-[16px] mt-3 items-start flex flex-col gap-4 ">
             <div className="flex flex-col gap-4">
               <p>404, Rajhans Montessa, Dumas Road, Magdalla, Surat, Gujarat-395007</p>
               <p>info@climatedetox.in</p>
             </div>
           <div className="flex gap-5">
                {/* <FaLinkedinIn />
               <FaTwitter/>*/} 
           </div>
         </div>  
        </div>
       </div>                  
      </div>
  </div>  
);
};

export default Footerbar;
