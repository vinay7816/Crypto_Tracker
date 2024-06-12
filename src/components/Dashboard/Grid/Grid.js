import React from 'react'
import "./Grid.css"
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import TrendingDownIcon from '@mui/icons-material/TrendingDown';
import { removefromwatchlist } from '../../../Functions/removefromwatchlist';
import { savetowatchlist } from '../../../Functions/savetowatchlist';
import StarOutlineIcon from "@mui/icons-material/StarOutline";
import { Tooltip } from '@mui/material';
import StarIcon from "@mui/icons-material/Star";
import { useState } from 'react';
const Grid = ({item,delay}) => {
  const watchlist = JSON.parse(localStorage.getItem("watchlist"));
  const [isCoinAdded, setIsCoinAdded] = useState(watchlist?.includes(item.id));

  return (
    <div className={item.price_change_percentage_24h>0?'grid-container':"grid-negative-container"}>
        <div>
            <div className='info-flex'>
              <img src={item.image} className='coin-logo'/>
              <div className='name-logo'>
                <p className='symbol1'>{item.symbol}</p>
                <p className='symbol2'>{item.name}</p>
              </div>
              <Tooltip title="Add to Watchlist" placement="bottom-start">
              <div
              className={`watchlist-icon ${
              item.price_change_percentage_24h < 0 && "watchlist-icon-red"
              }`}
              onClick={(e) => {
                if (isCoinAdded) {
                  // remove coin

                  removefromwatchlist(e, item.id, setIsCoinAdded);
                } else {
                  setIsCoinAdded(true);
                  savetowatchlist(e, item.id);
                }
              }}
            >
              {isCoinAdded ? <StarIcon /> : <StarOutlineIcon />}
            </div>
            </Tooltip>
            </div>
            
        </div>
        <div className='pricing'>
            <div className={item.price_change_percentage_24h>0?"price-percentage":"price-negative"}>{item.price_change_percentage_24h
            .toFixed(2)}%</div>
            <div>{item.price_change_percentage_24h>0?<div className='up-trend'><TrendingUpIcon/></div>:<div className='down-trend'><TrendingDownIcon/></div>}</div>
        </div>
        
        <div className='price-container'>
        <h3 className='coin-price' style={{color:`${item.price_change_percentage_24h>0?"var(--green)":"var(--red)"}`}}>${item.current_price.toLocaleString()}</h3>
        <p className="coin-name">
          Total Volume : {item.total_volume.toLocaleString()}
        </p>
        <p className="coin-name">
          Market Capital : ${item.market_cap.toLocaleString()}
        </p>
        </div>
        <div></div>
      
    </div>
  )
}

export default Grid
