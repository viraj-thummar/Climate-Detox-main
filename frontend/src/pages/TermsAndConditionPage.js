import React from 'react';
import Navbar from './../components/Navbar';
import Header from './../components/Header';
import Footerbar from '../components/Footerbar';



const TermsAndConditionPage = () => {
    
    return (<>
    <Navbar />
    <Header title="Terms And Conditions" ImageNew="./TermsAndCondition.webp"></Header>
    <div className='px-[16px] md:px-[60px] lg:px-[120px]'>
    <div className="max-w-screen-2xl mx-auto pt-[50px] font-[Inter] ">
    <h2 className='font-bold py-5 text-[20px] lg:text-[24px]'>User Agreement</h2>
    <p>This User Agreement (“Agreement”) comprises a set of rules and regulations and privacy policy that is declared in compliance with the statutory requirement under the Information Technology Act, 2000 and Rule 3 (1) of the Information Technology (Intermediaries Guidelines) Rules, 2011 as relevant and amended from time to time. This Agreement does not necessitate physical or digital signature approval. You have consented to the terms and conditions of this Agreement by using this website www.climatedetox.in ("Website") (whether or not using the services/purchasing the items). If you do not agree with the terms of this Agreement, you may choose not to access the Website.</p>
    </div>
    <div className="max-w-screen-2xl mx-auto pt-[50px] font-[Inter] ">
    <h2 className='font-bold py-5 text-[20px] lg:text-[24px]'>Use of Personal Information</h2>
    <p>This Website is owned and operated by Climate Detox., and we at Climate Detox ("Climate Detox"/"we"/"us"/"our") value your privacy and constantly strive to maintain the confidentiality of personal information given by you on our Website. This Agreement, which includes the Privacy Policy, describes in detail how we collect and use your data on the Website. As a customer/visitor to the Website ("you"/"your"), you should carefully read this Agreement. By using the Website's services, you consent to the collection and use of your data by us in the way specified in this Agreement.
    </p>
    </div>
    <div className="max-w-screen-2xl mx-auto pt-[50px] font-[Inter] ">
    <h2 className='font-bold py-5 text-[20px] lg:text-[24px]'>Website Access</h2>
    <p>We grant you limited access and personal use of this Website, and you agree not to download (either for page caching) or change it, or any portion of it, unless we expressly grant you express written permission to do so. This permission does not allow for the resale or commercial use of this Website or its contents; the collection and use of any product listings, descriptions, or prices; any derivative use of this Website or its contents; the downloading or copying of account information for the benefit of another merchant; or the use of data mining, robots, or similar data gathering and extraction tools. You expressly agree not to reproduce, duplicate, copy, sell, resell, visit, or otherwise use for any commercial purpose without our express written approval. Without Climate Detox’s express written approval, you may not frame or use framing methods to enclose any trademark, logo, or other proprietary material (including images, text, page layout, or form) of the Website or its affiliates. Without our prior written authorization, you may not utilize any meta tags or other "hidden text" utilizing www.ClimateDetox.com or Climate Detox’s name or trademarks. Any unauthorized usage results in the termination of the authorization or license given by us.
    </p>
    </div>
    <div className="max-w-screen-2xl mx-auto pt-[50px] font-[Inter] ">
    <h2 className='font-bold py-5 text-[20px] lg:text-[24px]'>Obligations</h2>
    <p>To get access to our services or contact us via the Website, all users must register and submit us with personal information. The customer agrees to receive promotional communications and newsletters upon registration by consenting to the terms and conditions. The consumer can opt out by unsubscribing upon receipt of the first letter or by contacting customer care. Further, you also agree:</p>
    <ol class="list-decimal list-inside flex pl-2 flex-col">
    <li>That all calls to/from our office may be recorded for quality assurance and training purposes.</li>
    <li>The consumer agrees to receive updates, order confirmation, and promotional messages / SMS / Email / Call from Climate Detox for current and future offers.</li>
   
  </ol>
    
    </div>
    <div className="max-w-screen-2xl mx-auto py-[50px] font-[Inter] ">
    <h2 className='font-bold py-5 text-[20px] lg:text-[24px]'>Modification in Terms & Conditions</h2>
    <p>We possess the right to change the Terms & Conditions of Use/ User Agreement at any time without prior notice to you. You can always find the most recent version of these Terms & Conditions on the Website. You should examine the Website's Terms and Conditions on a frequent basis. If the updated Terms & Conditions are not acceptable to you, you should stop using this Website. However, if you continue to use the Website, you will be deemed to have agreed to accept and abide by the modified User Agreement Terms.

    </p>
    </div>
    </div>
   
   
    <Footerbar  />

    </>)}

export default TermsAndConditionPage;
