import React from 'react'
import Faq from "react-faq-component";

import {
    data , config
  } from '../config/Typography';
  

const Accordion = () => {
  return (
    <>
     	<div className="max-w-[1440px] mx-auto p-[16px] lg:p-[120px] font-[Inter]" >
      <section className="font-[Inter]">
      <Faq
                data={data}
                config={config}
            />
      </section>
    </div>
  
    </>
  );
}

export default Accordion;