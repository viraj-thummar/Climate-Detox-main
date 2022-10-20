import React from 'react';
import Navbar from './../components/Navbar';
import Header from './../components/Header';
import Footerbar from '../components/Footerbar';



const PrivacyPolicyPage = () => {
    
    return (<>
    <Navbar />
    <Header title="Privacy Policy" ImageNew="./PrivacyPolicy.webp"></Header>
    <div className='px-[16px] md:px-[60px] lg:px-[120px]'>
    <div className="max-w-screen-2xl mx-auto pt-[50px] font-[Inter] ">
    <h2 className='font-bold py-5 text-[20px] lg:text-[24px]'>Privacy Policy</h2>
    <p>
    Climate Detox (hereinafter referred to as “We”, “Us”, “Company” or “Our”) is mindful of the privacy of all those who use its website (hereinafter referred to as “You”, “Your” or “User”) located at https://www.climatedetox.in/. The purpose of this privacy policy statement or simply “Privacy Policy” is to inform you of how ‘We’ collect, use and disclose information about You collected on the Site.
    </p>
    <p className='pt-2'>Climate Detox values your privacy and wants you to understand how we collect, handle, and share information via this Privacy Policy. This covers our practices regarding information collected by us or our service providers via the website or application (hence the "Service") from which you are accessing this Privacy Policy.  By providing personal information to us or by using the Service, you acknowledge that you have read and understood this Privacy Policy.</p>
    </div>
    <div className="max-w-screen-2xl mx-auto pt-[50px] font-[Inter] ">
    <h2 className='font-bold py-5 text-[20px] lg:text-[24px]'>User Information</h2>
    <p>This is a set of information, which includes your basic information like name, phone number, email ID, postal address, etc. that is required to uniquely identify or contact you to provide some of the services offered by us.
    </p>


    <p className='pt-2'>
    We may seek, gather, and securely store personal information about you as part of the process of creating your account on our Site. You are only compelled to share information if you choose to do so voluntarily. Certain actions, such as placing a purchase order, require you to register on Our Site.
    </p>

    <p className='pt-2'>We may utilize the personal information you have opted to provide us with to provide you with personalized services and to allow you to access our website. We may, for example, recommend things that you might be interested in. This personalized information may be delivered to you via email, text messages/SMS, or phone calls.</p>

    </div>
    <div className="max-w-screen-2xl mx-auto pt-[50px] font-[Inter] ">
    <h2 className='font-bold py-5 text-[20px] lg:text-[24px]'>Notifications</h2>
    <p>If you have decided to share us with your contact information, we may send you service-related announcements about the website by any means, including email, or contact you regarding your customer service requests or queries. For example, all registered users will receive a welcome email to confirm their registration. These types of contracts are required in order to serve you, respond to your issues, and deliver a high level of customer care.
    </p>
    </div>
    <div className="max-w-screen-2xl mx-auto pt-[50px] font-[Inter] ">
    <h2 className='font-bold py-5 text-[20px] lg:text-[24px]'>Security</h2>
    <p>Our systems are configured with best-in-class secure server software to safeguard you against any and all unauthorized activity, including access or alteration or disclosure or destruction of information we have on file for you. Following this, we:</p>



    <p className='pt-2'>Use secure server software to encrypt our services, securing all of your activity on our site, including transactions.</p>


    <p className='pt-2'>
    Keep illegal access to systems at bay by conducting regular audits of our information collecting, storage, and processing methods.
    </p>


    <p className='pt-2'>Your Personal Information is protected, and We do not rent, sell, or share it with third parties or unaffiliated firms for any reason other than to provide the services you have requested. </p>

    <p className='pt-2'>We make every effort to employ reasonable organizational, technical, and administrative guidelines to protect personal information under our control. Unfortunately, no data transfer or data storage technology can be guaranteed to be completely safe. If you have reason to suspect that your interaction with us is no longer safe (for example, if the security of any account you have with us has been compromised), please notify us immediately by contacting us.</p>

    
    </div>
    <div className="max-w-screen-2xl mx-auto py-[50px] font-[Inter] ">
    <h2 className='font-bold py-5 text-[20px] lg:text-[24px]'>Disclaimer</h2>
    <p>Company shall not be liable for any loss or damage incurred as a result of any disclosure (inadvertent or otherwise) of any information concerning the user's account and/or their verification process and particulars, nor for any error, omission, or inaccuracy concerning any information so disclosed and used, whether or not in accordance with a legal process or otherwise. The company has the right to amend the terms of this agreement at any time. The company is free to offer its services to any client/prospective client.

    </p>
    
    <p className='pt-2'>All orders placed on the Site must adhere to the terms and limitations mentioned on the Site ("User Agreement").</p>
    
    <p className='pt-5'>By registering or using this Site, you expressly consent to the collection, use, and transfer of the Personal Information you supply in the way indicated in this Privacy Policy, without restriction or qualification.</p>
    
    <p className='pt-5'>
    Please read this Privacy Policy carefully because it impacts your legal rights and liabilities. Please do not use the Site if you do not accept the Privacy Policy described therein or if you disagree with how we gather and process personal information collected on it.
    </p>
    </div>
    </div>
    <Footerbar  />

    </>)}

export default PrivacyPolicyPage;
