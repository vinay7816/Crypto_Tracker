import { CoinObject } from "../../Functions/Convertobject";
import Settingchartdata from "../../Functions/Settingchartdata";
import { getCoinData } from "../../Functions/getCoinData";
import { getCoinPrice } from "../../Functions/getCoinPrice";
import CoinInfo from "../../components/CoinsPage/Coininfo/CoinInfo";
import PriceType from "../../components/CoinsPage/Coininfo/PriceType/PriceType";
import Loader from "../../components/Common/Loader/Loader";
import List from "../../components/Dashboard/List/List";
import LineChart from "../../components/Linechart/Linechart";
import SelectDays from "../../components/Selectdays/SelectDays";
import Selectcoins from "../../components/selectcoins/Selectcoins"
import "./Comparepage.css"
import { useEffect, useState } from "react";
const Comparepage = () => {
  const[crypto1,setcrypto1]=useState("bitcoin");
    const[crypto2,setcrypto2]=useState("ethereum");
    const[days,setdays]=useState(30);
    const[crypto1data,setcrypto1data]=useState([]);
    const[crypto2data,setcrypto2data]=useState([]);
    const [Pricetype, setPricetype] = useState('prices');
    const[loading,setloading]=useState(true);
    const [chartData, setChartData] = useState({ labels: [], datasets: [] });
    const handleDaysChange=async (event)=>{
      setloading(true);
      setdays(event.target.value);
      const prices1=await getCoinPrice(crypto1,event.target.value,Pricetype);
      const prices2=await getCoinPrice(crypto2,event.target.value,Pricetype);
     Settingchartdata(setChartData, prices1, prices2);
     setloading(false);
    }
    
useEffect(()=>{
  getData();
},[])
const getData=async()=>{
  setloading(true);
  const data1=await getCoinData(crypto1);
  if(data1){
    const data2=await getCoinData(crypto2);
    CoinObject(setcrypto1data,data1);
    if(data2){
      CoinObject(setcrypto2data,data2);
      const prices1=await getCoinPrice(crypto1,days,Pricetype);
      const prices2=await getCoinPrice(crypto2,days,Pricetype);
     
     console.log("both prices fetched",prices1,prices2);
     Settingchartdata(setChartData, prices1, prices2);
     setloading(false);
    }
   
   
  }
 
}
const handlecoinchange=async (event,iscoin2)=>{
      setloading(true);
      if(iscoin2){
        setcrypto2(event.target.value);
        console.log(event.target.value);
        const data=await getCoinData(event.target.value);
        CoinObject(setcrypto2data,data);
        const prices1=await getCoinPrice(crypto1,days,Pricetype);
        const prices2=await getCoinPrice(crypto2,days,Pricetype);
        if(prices1.length>0 && prices2.length>0){
          console.log("fetched toggle prices",prices1,prices2)
          //Settingchartdata(setChartData, prices1, prices2);
          
  }
       }
      else{
         setcrypto1(event.target.value);
         const data=await getCoinData(event.target.value);
         console.log(event.target.value);
         CoinObject(setcrypto1data,data)
         //Settingchartdata(setChartData, prices1, prices2);
             }
             setloading(false);
                }
                const handlePriceTypeChange = async (event, newType) => {
                  setloading(true);
                  setPricetype(newType);
                  const prices1=await getCoinPrice(crypto1,days,newType);
                   const prices2=await getCoinPrice(crypto2,days,newType);
                   Settingchartdata(setChartData, prices1, prices2);
                   setloading(false);
                };
   
      
        
  return (
  <div>
    {loading?(<Loader/>):(
      <>
      <div className="compare-header">
 <Selectcoins crypto1={crypto1}  crypto2={crypto2} handlecoinchange={handlecoinchange} />
 <SelectDays days={days} handleDaysChange={handleDaysChange} notag={true}/>
 </div>
 <div className='grey-wrapper' style={{padding:"0rem 1rem"}}>
 <List item={crypto1data}/>
 </div>
 <div className='grey-wrapper' style={{padding:"0rem 1rem"}}>
 <List item={crypto2data}/>
 </div>
 <div className='grey-wrapper'>
 <PriceType Pricetype={Pricetype} handlePriceTypeChange={handlePriceTypeChange}/>
           <LineChart chartData={chartData} Pricetype={PriceType} multiaxis={true}/>
          
        </div>
 <CoinInfo desc={crypto1data.desc} name={crypto1data.name}/>
 <CoinInfo desc={crypto2data.desc} name={crypto2data.name}/>
 </>

    )}
     </div>
    
 
  )
}

export default Comparepage
