import React, { useEffect, useState } from 'react'
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import "./Selectcoins.css"
import get100Coins from '../../Functions/get100Coins';
const Selectcoins = ({crypto1,crypto2,handlecoinchange}) => {
    const[coins,setcoins]=useState([]);
   
   useEffect(()=>{
         getData()
   },[])
   const getData=async()=>{
    const mycoins=await get100Coins();
    if(mycoins){
      setcoins(mycoins);
    }
   }

  
  return (
    <div className='select-coins' >
    <p style={{fontSize:"1rem"}}>Crypto 1</p>
   
    <Select 
        value={crypto1}
        label="Crypto 1"
        onChange={(event)=>{handlecoinchange(event,false)}}
       sx={{height: "2.5rem",
       
        color: "var(--white)",
        "& .MuiOutlinedInput-notchedOutline": {
          borderColor: "var(--white)",
        },
        "& .MuiSvgIcon-root": {
          color: "var(--white)",
        },
        "&:hover": {
          "&& fieldset": {
            borderColor: "#3a80e9",
          },
        }
      }}
     
    >
      {coins.filter((item)=>item.id!=crypto2).map((item, index) => (
               <MenuItem key={index} value={item.id}>
                  {item.name}
               </MenuItem>
            ))}
      
    </Select>
    <p style={{fontSize:"1rem"}}>Crypto 2</p>
   
    <Select 
        value={crypto2}
        label="Crypto 2"
        onChange={(event)=>{handlecoinchange(event,true)}}
       sx={{height: "2.5rem",
       
        color: "var(--white)",
        "& .MuiOutlinedInput-notchedOutline": {
          borderColor: "var(--white)",
        },
        "& .MuiSvgIcon-root": {
          color: "var(--white)",
        },
        "&:hover": {
          "&& fieldset": {
            borderColor: "#3a80e9",
          },
        }
      }}
     
    >
      {coins.filter((item)=>item.id!=crypto1).map((item, index) => (
               <MenuItem key={index} value={item.id}>
                  {item.name}
               </MenuItem>
            ))}
      
    </Select>
 
</div>
  );
}

export default Selectcoins;
