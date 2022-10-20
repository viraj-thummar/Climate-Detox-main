import React from 'react';
import Header from "../components/Header";
import Footerbar from "../components/Footerbar";
import BigInfoBlock from "../components/BigInfoBlock";
import Navbar from '../components/Navbar';
import whatisCarbonCredit from "../img/carbonCredit/whatisCarbonCredit.webp"
import whatisCarbonTax from "../img/carbonCredit/whatisCarbonTax.webp"
import globalDemand from "../img/carbonCredit/globalDemand.webp"
import BigInfoBlockReverse from '../components/BigInfoBlockReverse';
// import Tab from '../components/Tab'
import DotSquarepng from '../img/svg/dotsquare.png'
import HalfCircle from "../img/svg/halfcircle.png" 
import Video from "../components/Viedo"
import HowCarbonCreditWorks from "../img/carbonCredit/HowCarbonCreditWorks.webp"
// import whyCarbonCredit from "../img/carbonCredit/whyCarbonCredit.webp"
import HowCarbonCreditGenerated from "../img/carbonCredit/HowCarbonCreditGenerated.webp"
import CarbonCreditRegulations from '../components/AboutCarbonCredit/CarbonCreditRegulations';
import GreenSection from "../components/GreenSection"

const AboutCarbonCrePage = () => {
  return (
    <>
    <Navbar />
    
    <Header title="Carbon Credit" ImageNew="./AboutCarbonCredit.webp"></Header>
    <BigInfoBlockReverse  title="Let’s Understand" heading="What is Carbon Credit? " descriptionOne="A carbon credit is a tradable certificate or permit that signifies the right to emit a predetermined amount of carbon dioxide or other greenhouse gases. Possessing these carbon credits nullifies any chances of you being chargeable for the carbon tax implemented by the government." descriptionTwo="Carbon credits are a way of compensating and holding yourself accountable for the harmful output that you may be inevitably producing."
    imageUrl={whatisCarbonCredit}  imageUrlOne={HalfCircle} imageUrlTwo={DotSquarepng} />
{/* 
<BigInfoBlock  title="Why" heading="Why Climate Detox" descriptionOne="With a customer-centric culture, we communicate clearly
   and effectively with our clients to understand their requirements and expectations from the company." descriptionTwo="We follow an eco-friendly approach to fight climate change from every angle. We promote green living that helps to conserve energy and reduce pollution."
  imageUrl={whyCarbonCredit} isVisible={false} isVisibleTwo={false}/>
*/

}
   

    <Video mainHeading="How does carbon credit work?" description="One carbon credit represents one tonne of carbon emissions. Purchasing one carbon credit provides you the right to emit a metric tonne of carbon dioxide or greenhouse gases like methane. It becomes possible as you are compensating via the carbon credit. This way, you do not have to pay the carbon tax that you would have to atone for otherwise." imageUrl={HowCarbonCreditWorks}/>
    
     <BigInfoBlock  title="Let’s Understand" heading="What is Carbon Tax ?" descriptionOne="Carbon tax means the price tag that is levied upon one tonne of carbon dioxide or any other greenhouse gas emission. A carbon tax places a cost on those emissions to persuade individuals, organisations, and governments to adopt cleaner ways of technologies and processes resulting in lesser pollution." descriptionTwo="This brings about an overall positive change in society while also keeping the business alive. A carbon tax is mostly obligated upon industries with the most carbon emissions and footprint."
    imageUrl={whatisCarbonTax} isVisible={false}/>


<BigInfoBlockReverse  title="Global Demand" heading="Is There Any Global Demand for Carbon Credit?" descriptionOne="Indeed, carbon credits are slowly becoming more popular all over the world. They are an effective way to reduce tonnes of carbon emissions. Everyone has the goal of achieving a net zero." 
  descriptionTwo="The global demand for carbon credits has been forecast at 1.5 gigatons to 2.0 gigatons by 2030 and between 7 gigatons to 13 gigatons by 2050."
    imageUrl={globalDemand} />
    

    <Video mainHeading="How Is Carbon Credit Generated?" description="Carbon credits draw harmful emissions from the atmosphere. There are many ways to produce carbon credits, such as switching to renewable biomass in industries instead of traditional non-renewable sources. This switch helps emit fewer greenhouse gases and slow down increasing deforestation as people would not be using firewood fuels." imageUrl={HowCarbonCreditGenerated}/>
    <CarbonCreditRegulations />
    <GreenSection />
    <Footerbar />
  </>)
   
}

export default AboutCarbonCrePage;

















