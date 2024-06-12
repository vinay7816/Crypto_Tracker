import React, { useState } from 'react';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import TrendingDownIcon from '@mui/icons-material/TrendingDown';
import { Tooltip } from '@mui/material';
import { convertNumbers } from '../../../Functions/ConvertNumbers';
import StarOutlineIcon from "@mui/icons-material/StarOutline";
import StarIcon from "@mui/icons-material/Star";
import { removefromwatchlist } from '../../../Functions/removefromwatchlist';
import { savetowatchlist } from '../../../Functions/savetowatchlist';
import "./List.css";

const List = ({ item }) => {
  const watchlist = JSON.parse(localStorage.getItem("watchlist"));
  const [isCoinAdded, setIsCoinAdded] = useState(watchlist?.includes(item.id));

  return (
    <tr className='list-row'>
      <Tooltip title="currency" placement="bottom-start">
        <td className='td-img'>
          <img src={item.image} className='coin-logo' alt="coin-logo" />
        </td>
      </Tooltip>
      <Tooltip title="name" placement="bottom-start">
        <td>
          <div className='name-logo'>
            <p className='symbol1 td-symbol1'>{item.symbol}</p>
            <p className='symbol2 td-symbol2'>{item.name}</p>
          </div>
        </td>
      </Tooltip>
      <Tooltip title="Add to Watchlist" placement="bottom-start">
        <td>
          <div
            className={`watchlist-icon ${item.price_change_percentage_24h < 0 && "watchlist-icon-red"}`}
            onClick={(e) => {
              if (isCoinAdded) {
                removefromwatchlist(e, item.id, setIsCoinAdded);
              } else {
                setIsCoinAdded(true);
                savetowatchlist(e, item.id);
              }
            }}
          >
            {isCoinAdded ? <StarIcon /> : <StarOutlineIcon />}
          </div>
        </td>
      </Tooltip>
      <Tooltip title="price change in last 24hrs" placement="bottom-start">
        <td className='pricing td-pricing'>
          <div className={item.price_change_percentage_24h > 0 ? "price-percentage td-price-percentage" : "price-negative td-price-percentage"}>
            {item.price_change_percentage_24h.toFixed(2)}%
          </div>
          <div>{item.price_change_percentage_24h > 0 ? <div className='td-icon up-trend'><TrendingUpIcon /></div> : <div className='td-icon down-trend'><TrendingDownIcon /></div>}</div>
        </td>
      </Tooltip>
      <Tooltip title="Current price " placement="bottom">
        <td className='price-container'>
          <h3 className='coin-price td-center-align' style={{ color: `${item.price_change_percentage_24h > 0 ? "var(--green)" : "var(--red)"}` }}>${item.current_price.toLocaleString()}</h3>
        </td>
      </Tooltip>
      <Tooltip title="Total volume" placement="bottom-end">
        <td>
          <p className="coin-name td-totalvolume td-right-align">
            {item.total_volume.toLocaleString()}
          </p>
        </td>
      </Tooltip>
      <Tooltip title="Market cap" placement="bottom-end">
        <td className='desktop-td-mkt'>
          <p className="coin-name td-right-align">
            ${item.market_cap.toLocaleString()}
          </p>
        </td>
      </Tooltip>
      <Tooltip title="Market cap" placement="bottom-end">
        <td className='mobile-td-mkt'>
          <p className="coin-name td-right-align">
            ${convertNumbers(item.market_cap)}
          </p>
        </td>
      </Tooltip>
    </tr>
  );
}

export default List;
