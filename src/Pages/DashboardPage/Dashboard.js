import React, { useEffect, useState } from 'react';
import Tabs from '../../components/Dashboard/Tabs/Tabs';
import axios from 'axios';
import Search from '../../components/Dashboard/Search/Search';
import Paginationcomponent from '../../components/Dashboard/Pagination/Pagination';
import Loader from '../../components/Common/Loader/Loader';
import TopButton from '../../components/Common/Bcktotop/TopButton';
import get100Coins from '../../Functions/get100Coins';
const Dashboard = () => {
  const [data, setData] = useState([]);
  const [input, setInput] = useState('');
  const [paginatedCoins, setPaginatedCoins] = useState([]);
  const [page, setPage] = useState(1);
  const[loading,setloading]=useState(true);

  const handlesearchChange = (e) => {
    setInput(e.target.value);
    console.log(e.target.value);
  };

  const handlePageChange = (event, value) => {
    setPage(value);
    var initialCount = (value - 1) * 10;
    setPaginatedCoins(data.slice(initialCount, initialCount + 10));
  };

  const filteredCoins = data.filter(
    (item) =>
      item.name.toLowerCase().includes(input.trim().toLowerCase()) ||
      item.symbol.toLowerCase().includes(input.trim().toLowerCase())
  );

  useEffect(() => {
   getData();

  }, []);

  const getData=async()=>{
      const mycoins= await get100Coins();
      if(mycoins){
        setData(mycoins);
    setPaginatedCoins(mycoins.slice(0, 10));
     setloading(false);
      }
       
  }

  return (
    <>
    {loading?(<Loader/>):(<div>
      <Search input={input} handlesearchChange={handlesearchChange} />
      <Tabs data={input ? filteredCoins : paginatedCoins} />
      <Paginationcomponent page={page} handlePageChange={handlePageChange} />
    </div>)}
    <TopButton/>
    </>
  );
};

export default Dashboard;
