import React, { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { UsercontactusWEP } from "../API_WEP/CoreAPI";
import { statusCode } from "../API_WEP/IMain";
// import {
//   gmailLinkForsharing,
//   toEMailAddress,
//   emailSubject,
//   // htmlContent,
//   // employeeName,
// } from "../config/globalConfig";

const ContactUs = () => {
  const [fullName, setFullName] = useState("");
  const [mobile, setMobile] = useState("");
  const [organization, setOrganization] = useState("");
  const [message, setMessage] = useState("");

  const displayError = (message) =>
    toast.error(message, {
      style: {
        borderRadius: "10px",
        background: "white",
        color: "green",
      },
    });

  const saveDetails = (e) => {
    let isFormValid = true;
    // console.log(e);
    e.preventDefault();
    if (!fullName) {
      isFormValid = false;
      displayError("Name is required");
      return;
    }
    if (!mobile) {
      isFormValid = false;
      displayError("Mobile is required");
      return;
    }
    if (!organization) {
      isFormValid = false;
      displayError("Organization is required");
      return;
    }
    // let body = htmlContent;
    // body = body.replace(/{{EmployeeName}}/g, employeeName);
    // body = body.replace(/{{message}}/g, message);
    // body = body.replace(/{{fullName}}/g, fullName);
    // body = body.replace(/{{mobile}}/g, mobile);
    // body = body.replace(/{{organization}}/g, organization);

    // console.log(body);
    const body = `
      Name: ${fullName}
      Mobile: ${mobile}
      Organization: ${organization}
      Message: ${message}
    `;
    // let addressToOpen = gmailLinkForsharing;
    // addressToOpen = addressToOpen.replace(/<<emailBody>>/g, body);
    // addressToOpen = addressToOpen.replace(/<<mailSubject>>/g, emailSubject);
    // addressToOpen = addressToOpen.replace(/<<toEMailAddress>>/g, toEMailAddress);
    if (isFormValid) {
      handleContact(fullName, mobile, organization, message);
      // window.open(addressToOpen);
    } else {
      displayError("Fix all the errors in the form");
    }
  };
  const handleContact = async (fullName, mobile, organization, message) => {
    try {
      let res = await UsercontactusWEP({
        subject: "A Contact Received from Solnce Energy",
        body: `<table role='presentation' style='width:100%;border-collapse:collapse;border:0;border-spacing:0;background:#ffffff;margin:5px;'><tr><td align='center style='padding:0;margin:5px;'><h1>Dear Sir/Mam!</h1></td></tr><tr><td style='padding:0;margin:5px;'>You Got new enquiry on your website</td></tr><tr><td style='padding:0;margin:5px;'>Name:${fullName}</td></tr><tr><td style='padding:0;margin:5px;'>Email:${mobile}</td></tr><tr><td style='padding:0;margin:5px;'>Organization:${organization}</td></tr><tr><td style='padding:0;'>Subject:${message}</td></tr><tr></table>`,
      });
      //body: `Name:${name}<br/>Email:${email}<br/>Subject:${notes}`,
      if (res.status === statusCode.OK) {
        if (res.body && res.body.type === "success") {
          toast.success("Contact Us Successfully");
          setFullName("");
          setMessage("");
          setMobile("");
          setOrganization("");
          //   toast.success(res.body.message);
        } else {
          toast.error(res.body.message);
        }
      } else {
        toast.error("Something wrong happened.");
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className='max-w-screen-2xl mx-auto py-8 flex flex-col gap-8 lg:flex-row justify-start px-[16px] lg:px-[120px] font-[Inter]'>
      <div className='basis-1/2 align-center'>
        <form className='flex flex-col justify-start py-9 w-full  font-[Inter]'>
          <div className=' items-center border-b border-black-500 py-2 my-3 text-[16px] '>
            <input
              className='appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2  focus:outline-none'
              type='text'
              onChange={(e) => setFullName(e.target.value)}
              placeholder='Full Name *'
              aria-label='Full name'
              value={fullName}
            />
          </div>
          <div className=' items-center border-b border-black-500 py-2  '>
            <input
              className='appearance-none bg-transparent border-none w-full text-gray-700 mr-3 mt-[20px] py-1 px-2  focus:outline-none'
              type='text'
              onChange={(e) => setMobile(e.target.value)}
              placeholder='Phone Nmber *'
              aria-label='Email'
              value={mobile}
            />{" "}
          </div>
          <div className=' items-center border-b border-black-500 py-2  '>
            <input
              className='appearance-none bg-transparent border-none w-full text-gray-700 mr-3 mt-[20px] py-1 px-2  focus:outline-none'
              type='text'
              onChange={(e) => setOrganization(e.target.value)}
              placeholder='Company / Organisation Name *'
              aria-label='Full name'
              value={organization}
            />{" "}
          </div>
          <div className=' items-center border-b border-black-500 py-4  '>
            <input
              className='appearance-none bg-transparent border-none w-full text-gray-700 mr-3 mt-[20px] py-4 px-2  focus:outline-none'
              type='text'
              onChange={(e) => setMessage(e.target.value)}
              placeholder='Message'
              aria-label='Full name'
              value={message}
            />{" "}
          </div>
          <div class='mb-6'>
            <button
              type='submit'
              className=' h-10 px-[40px] text-indigo-100 bg-green rounded-lg
            transition-colors
            duration-150
            focus:shadow-outline
            hover:bg-green-800
            mt-9
          '
              onClick={(e) => {
                saveDetails(e);
              }}>
              Submit
            </button>
          </div>
        </form>
      </div>
      <div className='basis-1/2 font-[Inter] py-9'>
        <h1 className='font-bold text-[32px]'>Get In Touch</h1>
        <p className='py-[10px] font-normal text-grey'>
          We can help you lower your carbon footprint. Reach out to us to know more.
        </p>
        <h2 className='font-bold text-[24px] py-3'>Address</h2>
        <p className='text-[16px] font-normal text-grey'>
          404, Rajhans Montessa, Dumas Road, Magdalla, Surat, Gujarat-395007
        </p>
       

        <h2 className='font-bold text-[24px] py-3'>Email</h2>
        <p className='text-[16px] font-normal text-grey py-[10px]'>info@climatedetox.in</p>
      </div>
      <Toaster position='top-right' />
    </div>
  );
};

export default ContactUs;







// <h2 className='font-bold text-[24px] py-3'>Mobile No</h2>

// <p className='text-[16px] font-normal text-grey'>Soon Will Be Updated. </p>
