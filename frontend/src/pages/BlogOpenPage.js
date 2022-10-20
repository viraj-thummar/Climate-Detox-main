import * as React from "react";
import Navbar from "../components/Navbar";

import solarman from "../img/solarman.webp";
import blogerone from "../img/bloger1.webp";
import Footerbar from "../components/Footerbar";
import * as qs from "query-string";
import { blogListWEP } from "../API_WEP/CoreAPI";
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import { Editor } from "primereact/editor";
const BlogOpenPage = () => {
  const [datab, setDatab] = React.useState({});
  const [Item, setItem] = React.useState([]);
  const [text, setText] = React.useState();
  React.useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });

    let bt = qs.parse(window?.location?.search);
    console.log(bt?.bgm);
    // console.log(window.atob(bt.bgm));

    // setDatab(window?.atob(bt.bgm));
    // setDatab(bt?.bgm);

    setDatab(window.localStorage.getItem("data"));
  }, [datab]);
  React.useEffect(() => {
    handleGetAllBlogList();
  }, []);
  // console.log("my", datab ? JSON?.parse(datab)?.tag : {});
  let vdata = {};
  try {
    vdata = datab ? JSON?.parse(datab) : {};
  } catch (error) {
    console.log(error);
  }
  const formatDate = (data) => {
    let s = "ty";
    s = data;
    // s = restTime;
    let t = "my";
    // t = s.substr(0, 10) + " " + s.substr(11, 16);
    console.log(typeof s === "string" && s.substring(0, 10));

    t = typeof s === "string" ? s.substring(8, 10) : "";
    let m = typeof s === "string" ? s.substring(4, 8) : "";
    let y = typeof s === "string" ? s.substring(0, 4) : "";
    let d = typeof s === "string" ? s.substring(11, 16) : "";
    // return s.substring(0, 10) + " " + s.substring(11, 16);
    return t + m + y +" "+ d;
  };
  const handleGetAllBlogList = async () => {
    let token = "abc";
    try {
      let res = await blogListWEP({ pageOffset: 1, pageSize: 5000, filter: "" }, token);
      console.log(`🚀 Comment By Rahul ~ handleGetAllBlogList ~ res`, res);
      const fetchedData = res.body.data.fetchedBlogs;

      setItem(fetchedData.reverse());
      // setItem([...new Set(fetchedData)]);
    } catch (error) {
      setItem([]);
      console.log(error);
    }
  };
  console.log("utm", Item);
  console.log(text);
  const handleLink = (myprops) => {
    window.localStorage.setItem("data", JSON.stringify(myprops));
  };
  return (
    <div>
      <Navbar />

      {/**/}
      <div className='max-w-[1200px] mx-auto '>
        <div className='pl-3'>
          <p className='text-[16px] mt-[75px] font-bold text-[#49A078]'>{vdata && vdata?.tag}</p>
          <h2 className="text-[35px] md:text-[40px] lg:text-[54px] font-bold leading-{76.8}">{vdata?.name}</h2>
          <div className='flex mt-[52px] flex-row items-start font-semibold text-[14px] text-[#4D4D4D] justify-start gap-[16px] text-sm'>
            <div className='relative  tracking-[0.03em] leading-[150%] inline-block'><span className="text-grey">Written By</span> <strong>{vdata?.author}</strong> </div>
            <div className='relative bg-[#4D4D4D]  w-[1px] h-[22px] shrink-0' />
            <div className='relative tracking-[0.03em] leading-[150%] inline-block'>{formatDate(vdata?.createdAt)}</div>
          
            </div>
          <div className='relative bg-[#D9D9D9] mt-[44px] h-[1px] shrink-0' />
        </div>
      </div>

      <div className='max-w-[1200px] mt-[80px] mx-auto  pb-10 sm:pb-10'>
        <div className='grid  justify-items-center  md:grid  md:justify-items-center md:gap-[20px] xl:gap-[40px] md:grid-cols-3  '>
          <div className='flex flex-col w-[355px]  gap-[40px] md:w-[500px] lg:w-[700px]   xl:w-[770px] md:col-span-2'>
            <div className='object-fit object-left min-w-[340px]  h-[50%]'>
              <img src={vdata?.image} className='w-[100%] h-[100%] ' alt={vdata?.name} />
            </div>
            <p
              dangerouslySetInnerHTML={{ __html: vdata?.description }}
              className='font-normal w-[347px] sm:w-auto leading-6 text-[16px] text-[#4D4D4D]'></p>
          </div>

          {/* grid two */}
          <div className='mt-[80px] pl-3 sm:mt-0'>
            <div className='flex flex-col items-center justify-center   md:items-start md:justify-start gap-[40px] text-lg '>
              {/*    <div className='flex flex-col items-start justify-start gap-[24px]'>
                   <div className='flex flex-row items-center justify-start gap-[24px]'>
                  <img className='relative w-[80px] h-[80px] shrink-0 object-cover' alt='' src={blogerone} />
                  <div className='flex flex-col items-start justify-start gap-[16px]'>
                    <div className='relative leading-[120%] text-[24px] font-semibold inline-block  '>
                      Marry Harrington
                    </div>
                    <div className='relative text-base tracking-[0.03em] leading-[150%] inline-block'>Designation</div>
                  </div>
                </div>

                <div className='w-[359px] relative text-base  leading-[150%]  inline-block md:w-[246px] lg:w-[347px] xl:w-[382px] font-normal  text-[16px] text-[#4D4D4D]'>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                  dolore magna aliqua.
                </div>
              </div>
              <div className='relative bg-[#D9D9D9]   w-[347px]  md:w-[246px] lg:w-[347px]  xl:w-full h-[1px] shrink-0' />
              */}
              <div className='flex flex-col items-start justify-start gap-[48px]'>
                <div className='relative text-[#121212] text-[22px] md:text-[32px] font-bold inline-block'>Discover More</div>

                {Item.map(
                  (data, index) =>
                    index <= 5 && (
                      <>
                        <div key={index} className='flex flex-col items-start justify-start gap-[4px] text-base'>
                          <div className='flex flex-col items-start justify-start gap-[16px]'>
                            <a
                              className='cursor-pointer items-center font-bold text-[#49A078]'
                              href={`/blog?bgm=${data}`}
                              onClick={handleLink(data)}>
                              <h4 className='relative tracking-[0.03em] leading-[120%] inline-block md:w-[246px] w-[347px] lg:w-[347px] xl:w-[382px] text-[#121212] font-bold '>
                                {data?.name}
                              </h4>
                            </a>
                            <div className='flex flex-row items-center font-semibold text-[14px] text-[#4D4D4D] justify-center gap-[16px] text-sm'>
                              <div className='relative  tracking-[0.03em] leading-[150%] inline-block'>
                                {data?.author}
                              </div>
                              <div className='relative bg-[#4D4D4D]  w-[1px] h-[22px] shrink-0' />
                              <div className='relative tracking-[0.03em] leading-[150%] inline-block'>
                                {formatDate(data?.createdAt)}
                              </div>
                            </div>
                            {/*<Link to={`/blog?bgm=${btoa(JSON.stringify(data))}`}>
                              <span className='flex gap-[2px] cursor-pointer items-center font-bold text-[#49A078]'>
                                <p>Read more</p>
                                <span>
                                  <FaArrowRight />
                                </span>
                              </span>
                            </Link>*/}
                          </div>
                        </div>
                      </>
                    )
                )}
              </div>
            </div>
          </div>
          {/* grid two end */}



        </div>
      </div>

      <Footerbar />
    </div>
  );
};

export default BlogOpenPage;
