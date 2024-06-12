import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Loader from '../../components/Common/Loader/Loader';
import axios from 'axios';
import { CoinObject } from '../../Functions/Convertobject';
import List from '../../components/Dashboard/List/List';
import CoinInfo from '../../components/CoinsPage/Coininfo/CoinInfo';
import { getCoinData } from '../../Functions/getCoinData';
import { getCoinPrice } from '../../Functions/getCoinPrice';
import LineChart from '../../components/Linechart/Linechart';
import { ConvertDate } from '../../Functions/ConvertDate';
import { filledInputClasses } from '@mui/material';
import SelectDays from '../../components/Selectdays/SelectDays';
import Settingchartdata from '../../Functions/Settingchartdata';
import PriceType from '../../components/CoinsPage/Coininfo/PriceType/PriceType';
const Coins = () => {
  const[loading,setloading]=useState(true);
  const[coindata,setcoindata]=useState([]);
  const [days,setdays]=useState(30)
  const [chartData, setChartData] = useState({ labels: [], datasets: [{}] });
  const [Pricetype, setPricetype] = useState('prices');
  const {id}=useParams();
  useEffect(()=>{
     if(id){
      getData();
     }
  },[id])
  

  
  
  const getData=async()=>{
    const data=await getCoinData(id);
    if(data){
      CoinObject(setcoindata,data);
      const prices=await getCoinPrice(id,days,Pricetype);
      if(prices.length>0){
        console.log(prices)
        Settingchartdata(setChartData,prices);
        setloading(false);
      }
     
    }
  }
  console.log(coindata);
  const handleDaysChange=async (event)=>{
    setloading(true);
    setdays(event.target.value)
    const prices=await getCoinPrice(id,event.target.value,Pricetype);
    if(prices.length>0){
     Settingchartdata(setChartData,prices);
      setloading(false);
    }
    
  }
  const handlePriceTypeChange = async (event, newType) => {
    setloading(true);
    setPricetype(newType);
    const prices=await getCoinPrice(id,days,newType);
    if(prices.length>0){
     Settingchartdata(setChartData,prices);
      setloading(false);
    }
  };
  return (
    <div>
    {loading?(
      <Loader/>
      ):(
      <>
      <div className='grey-wrapper' style={{padding:"0rem 1rem"}}>
        <List item={coindata}/>
        </div>
        <div className='grey-wrapper'>
          <SelectDays days={days} handleDaysChange={handleDaysChange}/>
          <PriceType Pricetype={Pricetype} handlePriceTypeChange={handlePriceTypeChange}/>
           <LineChart chartData={chartData} Pricetype={Pricetype} multiAxis={false}/>
        </div>
        <CoinInfo desc={coindata.desc} name={coindata.name}/>  </>
      )}
    </div>
  )
}

export default Coins
