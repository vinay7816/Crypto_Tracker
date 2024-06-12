import React from 'react'
import { useState } from 'react';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Grid from '../Grid/Grid';
import "./Tabs.css"
import List from '../List/List';
import { Link } from 'react-router-dom';
export default function Tabs({data}) {
  const [value, setValue] = useState('Grid');
    const style={
        color:"var(--white)",
        width:"50vw",
        fontSize:"1.2rem",
        fontweight:"600",
    }
    const theme = createTheme({
        palette: {
          primary:{
            main:"#8576FF",
        } 
          
        },
      });
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div >
         <ThemeProvider theme={theme}>
      <TabContext value={value}>
        <div>
          <TabList onChange={handleChange}  variant="fullWidth">
            <Tab label="Grid" value="Grid" sx={style} />
            <Tab label="List" value="List" sx={style}/>
        
          </TabList>
        </div>
        <TabPanel value="Grid">
            <div className='grid-flex'>
                {data.map((item,index)=>{
                    return(
                      <Link to={`/coin/${item.id}`}>
                        <Grid item={item} key={index}/>
                        </Link>
                    )
                    
                })}
            </div></TabPanel>
        <TabPanel value="List"> <table className='list-flex'>
                {data.map((item,index)=>{
                    return(
                      <Link to={`/coin/${item.id}`}>
                        <List item={item} key={index}/>
                       </Link>
                    )
                    
                })}
            </table></TabPanel>
       
      </TabContext>
      </ThemeProvider>
    </div>
  );
}

