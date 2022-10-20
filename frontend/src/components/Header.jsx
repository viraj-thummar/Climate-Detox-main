import * as React from "react";

const Header = ({ title = "Nothing", ImageNew = "./logo192.png" }) => {
  React.useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <div className='max-w-screen-2xl bg-cover mx-auto font-[Inter]' style={{ backgroundImage: `url(${ImageNew})` }}>
      <div className='  flex flex-start bg-no-repeat bg-center bg-cover font-[Inter]'>
        <div class='bg-gradient-to-r from-transparent-black-500'>
          <h1 className=' align-center py-[100px] text-[36px] md:text-[38px] lg:text-[40px] font-bold pl-[16px] md:pl-[60px]  lg:pl-[120px] text-white'>{title}</h1>
        </div>
      </div>
    </div>
  );
};

export default Header;
