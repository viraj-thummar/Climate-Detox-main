import React, { useEffect, useState } from "react";
import "./mycss.css";
import Navbar from "../Navbar";
import Footerbar from "../Footerbar";
// import InsightData from '../../config/InsightData'
import BlogCard from "../BlogCard";
import Header from "../../components/Header";
import { BE_URL, END_POINT_TO_FETCH_BLOGS, pageSize } from "../../config/globalConfig";
import axios from "axios";
// import Pagination from "react-responsive-pagination";
import InsigntData from "../../config/InsightData";
import ReactPaginate from "react-paginate";
import { blogListWEP } from "../../API_WEP/CoreAPI";
const Insight4 = () => {
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
    const newOffset = event;
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
    <>
      <Navbar />

      <Header title='Latest News, Blogs & Articles' ImageNew='./LatestNewsAndBlog.webp'></Header>
      <div className='max-w-[1200px] mx-auto'>
        <div className="flex mt-10  max-w-[600px] text-[15px] md:text-[17px] font-normal font-['Inter'] justify-center sm:max-w-[750px]  md:max-w-[775px] md:mx-auto  md:justify-start   lg:max-w-[1200px]  lg:mx-auto lg:justify-start  items-center gap-[64px]">
          <span
            className='cursor-pointer hover:text-[#49A078]  text-[#4D4D4D] hover:underline '
            onClick={() => filterItem("")}>
            All
          </span>
          <span
            className='cursor-pointer hover:text-[#49A078]  text-[#4D4D4D] hover:underline '
            onClick={() => filterItem("Blog")}>
            Blogs
          </span>
          <span
            className='cursor-pointer hover:text-[#49A078]  text-[#4D4D4D] hover:underline '
            onClick={() => filterItem("Article")}>
            Articles
          </span>
          <span
            className='cursor-pointer hover:text-[#49A078]  text-[#4D4D4D] hover:underline '
            onClick={() => filterItem("News")}>
            News
          </span>
        </div>
        <hr className='mt-4' />
      </div>
      <div className='mt-8 max-w-[1200px] py-9 mx-auto grid gap-[20px] grid-cols-1 justify-items-center md:grid-cols-2  md:gap-[30px] lg:grid-cols-3 lg:gap-[60px]'>
        {Item.map((data, i) => {
          return <BlogCard key={i} myprops={data} />;
        })}
      </div>
      <br></br>
      <br></br>
      <div>
        <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
          <ReactPaginate
            // className='mypage text-success'
            breakLabel='...'
            nextLabel='Next >'
            onPageChange={(e) => handlePageClick(e)}
            pageRangeDisplayed={5}
            pageCount={pageCount}
            previousLabel='< Prev'
            renderOnZeroPageCount={null}
            breakClassName='page-item'
            breakLinkClassName='page-link'
            marginPagesDisplayed={2}
            containerClassName='pagination justify-content-center'
            pageClassName='page-item'
            pageLinkClassName='page-link'
            previousClassName='page-item'
            previousLinkClassName='page-link'
            nextClassName='page-item'
            nextLinkClassName='page-link'
            activeClassName='active'
          />
          {/*     <Pagination
            pageItemClassName='bg-green-500'
            current={itemOffset}
            extraClassName={""}
            total={Item.length / 2}
            onPageChange={handlePageClick}
          />*/}
        </div>{" "}
      </div>
      <br></br>
      <br></br>
      <Footerbar />
    </>
  );
};

export default Insight4;
