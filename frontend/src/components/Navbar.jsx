import Climate_detox_logo from "../img/Climate_detox_logo.svg";
import { navbarTypography } from '../config/Typography';
import { Link } from "react-router-dom";
import Close from "../img/svg/close.png";
import Menu from "../img/svg/menu.png"





import { useState } from "react";
export default function Navbar() {
    const [navbar, setNavbar] = useState(false);

    return (
        <nav className="w-[100%] sticky z-50 top-0 bg-white shadow font-['Inter']">
            <div className="justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8  shadow-green-500/10">
                <div>
                    <div className="flex items-center justify-between py-1 md:py-2 md:block">
                        <Link to="/">< img src={Climate_detox_logo} className="h-[46px]" alt={navbarTypography.logo.alt} />
                        </Link>
                        <div className="md:hidden">
                            <button
                                className=""
                                onClick={() => setNavbar(!navbar)}>
                               {navbar ? (<img className=" w-[20px] " src={Close} alt="" />)
                                : ( <img className=" w-[20px] "src={Menu} alt="" />)}
                            </button>
                        </div>
                    </div>
                </div>

                <div>
                    <div
                        className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
                            navbar ? "block" : "hidden"
                        }`}>
                        <ul className="items-start md:items-center font-normal flex-col md:flex-row justify-start  md:justify-center pb-4 md:pb-auto space-y-0 md:flex md:gap-[20px] md:space-x-6  md:mt-3  md:space-y-0">
                              <Link to="/">
                                <li className="my-[4px] md:m-auto">
                                      {navbarTypography.headerLabels[0].label}
                                </li>
                              </Link>
                              <Link to="/aboutus">
                                <li className="my-[4px] md:m-auto">
                                      {navbarTypography.headerLabels[1].label}
                                </li>
                              </Link>
                              <Link to="/aboutcarboncredit">
                                <li className="my-[4px] md:m-auto">
                                      {navbarTypography.headerLabels[2].label}
                                </li>
                              </Link>
                             
                            
                            {navbarTypography.headerLabels[3].isVisible ? <Link to="/insights">
                                <li className="my-[4px] md:m-auto">
                                    {navbarTypography.headerLabels[3].label}
                                </li>
                            </Link>: null }
                            

                            {navbarTypography.headerLabels[4].isVisible ?
                             <Link to="/getintouch">
                                 <button className=" rounded-lg bg-[#49A078] py-3 px-5 md:px-auto md:pt-[10px] mt-7  text-[14px] drop-shadow-2xl text-center text-[#ffff]  md:w-[200px] md:h-[40px]  md:mt-0 ">{navbarTypography.headerLabels[4].label}</button>
                             </Link> : null}
                             
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    );
}