import React, { useEffect, useState } from "react";
import BlogCard from './BlogCard';
import { FaArrowRight } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { BE_URL, END_POINT_TO_FETCH_BLOGS, pageSize } from "../config/globalConfig";
import axios from "axios";

import { blogListWEP } from "../API_WEP/CoreAPI";


const BlogCardHome = () => {
  const [Item, setItem] = useState([]);
  const [itemOffset, setItemOffset] = useState(1);
  const [pageCount, setPageCount] = useState(0);
  const [filter, setFilter] = useState("");

  useEffect(() => {
    handleGetAllBlogList();
    // setItem(InsigntData);
    // setPageCount(Math.ceil(InsigntData.length / 10));
  }, []);

  // const filterItem = (param) => {
  //   let res;
  //   res = InsigntData.filter((x) => x.Tag === param);
  //   console.log(res);
  //   if (param === "") {
  //     res = InsigntData;
  //     setPageCount(Math.ceil(InsigntData.length / 10));
  //   }
  //   setFilter(param);
  //   setItemOffset(1);
  //   setItem(res);
  //   setPageCount(Math.ceil(res.length / 10));
  // };
  console.log(Item);

  //09oct

  const handleGetAllBlogList = async () => {
    let token = "abc";
    try {
      let res = await blogListWEP({ pageOffset: itemOffset, pageSize, filter }, token);
      console.log(`🚀 Comment By Rahul ~ handleGetAllBlogList ~ res`, res);
      const fetchedData = res.body.data.fetchedBlogs;
      const count = res.body.data.count;
      setPageCount(Math.ceil(count / pageSize));
      setItem([...new Set(fetchedData)]);
    } catch (error) {
      setPageCount(0);
      setItem([]);
      console.log(error);
    }
  };

  const filterItem = async (param) => {
    let token = "abc";
    setFilter(param);
    setItemOffset(1);
    try {
      let res = await blogListWEP({ pageOffset: 1, pageSize, filter: param }, token);
      console.log(`🚀 Comment By Rahul ~ handleGetFilterList ~ res`, res);
      const fetchedData = res.body.data.fetchedBlogs;
      const count = res.body.data.count;
      setPageCount(Math.ceil(count / pageSize));
      setItem([...new Set(fetchedData)]);
    } catch (error) {
      setPageCount(0);
      setItem([]);
      console.log(error);
    }
  };

  const handlePageClick = async (event) => {
    let token = "abc";
    const newOffset = event?.selected + 1;
    console.log(`🚀 Comment By Rahul ~ handlePageClick ~ event`, event?.selected, newOffset);
    setItemOffset(newOffset);

    try {
      let res = await blogListWEP({ pageOffset: newOffset, pageSize, filter }, token);
      console.log(`🚀 Comment By Rahul ~ handleGetAllBlogList ~ res`, res);
      const fetchedData = res.body.data.fetchedBlogs;
      const count = res.body.data.count;
      setPageCount(Math.ceil(count / pageSize));
      setItem([...new Set(fetchedData)]);
    } catch (error) {
      setPageCount(0);
      setItem([]);
      console.log(error);
    }
  };

    return (
        <div className="h-auto pt-0 pb-[50px] lg:mt-28 font-[Inter]">
          <div className="max-w-[1200px] mx-auto ">
            <div className="flex justify-between h-28 sm:h-44 items-center mx-6">
             <div className="text-[25px]  sm:text-[30px] font-bold"><h1>News & Articles</h1></div>
             <div><p className="font-bold flex items-center cursor-pointer gap-3 text-[#49A078]"> <Link to="/insights">View more</Link><FaArrowRight/> </p></div>
            </div>
          </div>
            
            {/* 
          <div className="flex flex-col md:flex-row max-w-[1200px] mx-auto items-center gap-[64px] justify-center">
            { HomeBlog.map((HomeCard, index) => <BlogCard key={index} myprops={HomeCard} />)}
             </div>  */}
        
         
             



             <div className='mt-8 max-w-[1200px] py-9 mx-auto grid gap-[20px] grid-cols-1 justify-items-center md:grid-cols-2  md:gap-[30px] lg:grid-cols-3 lg:gap-[60px]'>
             {Item.filter((x) => x.onHomepage === true).map((y, yindex) => (
              <> {yindex < 3 && <BlogCard key={yindex} myprops={y} />}</>
            ))}
           </div>
            
        </div>
       )}

export default BlogCardHome;



{/*
const BlogCardHome = () => {
  const HomeBlog = InsightData.filter((myitem, i) => {

 return myitem.OnHomepage === true;
})


*/}

