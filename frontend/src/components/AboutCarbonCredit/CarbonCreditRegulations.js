import * as React from 'react';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import {
    aboutCarbonCredit,
} from '../../config/Typography';

const CarbonCreditRegulations = () => {
  const [value, setValue] = React.useState('1');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>
        <div className="max-w-[1440px]  mx-auto pt-[180px] font-[Inter]">
            <div className="relative">
                <div className="p-[16px] flex flex-col items-center mx-[16px] lg:mx-[80px] absolute mt-[-80px] lg:mt-[-60px]">
                    <h1 className="text-[28px] lg:text-[40px] font-bold text-black py-3">{aboutCarbonCredit.regulations.mainHeader}</h1>
                </div>
            <br></br>
            <br></br>
            <div className='items-center pt-9 mx-2 md:mx-0 flex flex-col lg:mx-[95px]'>
                <Box sx={{ width: '100%', typography: 'body1' }}>
                    <TabContext value={value}>
                        <Box sx={{ borderBottom: 1 }}>
                        <TabList onChange={handleChange} aria-label="lab API tabs example">
                            <Tab style = {{ color: 'black', zIndex: 9999, borderBottom: (value === "1" ? '2px solid black' : null) }} label={aboutCarbonCredit.regulations.tabs[0].label} value="1" />
                            <Tab style = {{ color: 'black', zIndex: 9999, borderBottom: (value === "2" ? '2px solid black' : null) }} label={aboutCarbonCredit.regulations.tabs[1].label} value="2" />
                        </TabList>
                        </Box>
                        <TabPanel value="1">{aboutCarbonCredit.regulations.tabs[0].content}</TabPanel>
                        <TabPanel value="2">{aboutCarbonCredit.regulations.tabs[1].content}</TabPanel>
                    </TabContext>
                </Box>
                <br></br>
                <br></br>
                <br></br>
            </div>
            </div>
        </div>
       </>
  );
}

export default CarbonCreditRegulations;