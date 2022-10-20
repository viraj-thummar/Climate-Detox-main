import React from "react";
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";

const BlogCard = ({ myprops }) => {
  const { id, tag: Tag, image: Image, createdAt: date, short_description, author, name } = myprops;

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
    return t + m + y + " " + d;
  };

  const handleLink = () => {
    window.localStorage.setItem("data", JSON.stringify(myprops));
  };

  return (
    <div key={id} className=" w-[340px] sm:w-[360px]  h-auto font-['Inter]">
      <div className='flex flex-col gap-5'>
        <div>
          <img src={Image} className='object-fit w-full' alt='' />
        </div>
        <div className=''>
          <div
            className={`px-3 font-blod w-fit rounded-md text-[12px] text-center text-white ${
              Tag === "Article" ? "bg-black" : "bg-[#49A078]"
            }`}>
            {Tag}
          </div>
        </div>
        <div className=''>
          <h1 className='text-[17px] font-bold text-[#121212]'>{name}</h1>
          <p className='mt-2 font-semibold text-[#4D4D4D]'>
            By <span className='text-[#7b7575]'>{author}</span>  On{" "}
            <span className='text-[#7b7575]'>{formatDate(date)}</span>
           
          </p>
        </div>
        <div className='text-[#4D4D4D]' dangerouslySetInnerHTML={{ __html: short_description }}></div>
        {/*<Link to={`/blog?bgm=${btoa(JSON.stringify(myprops))}`}>*/}
        <Link to={`/blog?bgm=${myprops}`} onClick={handleLink}>
          <span className='flex gap-[20px] cursor-pointer items-center font-bold text-[#49A078]'>
            <p>Read more</p>
            <span>
              <FaArrowRight />
            </span>
          </span>
        </Link>
      </div>
    </div>
  );
};

export default BlogCard;
