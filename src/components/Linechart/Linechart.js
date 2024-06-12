import React from "react";
import { Line } from "react-chartjs-2";
import { Chart as ChartJS, scales } from "chart.js/auto"; 
import { callback } from "chart.js/helpers";
import { convertNumbers } from "../../Functions/ConvertNumbers";
import { type } from "@testing-library/user-event/dist/type";

function LineChart({ chartData, multiAxis ,Pricetype}) {

  const options = {
    plugins: {
      legend: {
        display: multiAxis ? true : false,
        position: 'top',
      },
    },
    responsive: true,
    interaction: {
      mode: "index",
      intersect: false,
    },
    scales:{
      'crypto1':{
  
        type: 'linear',
        display: true,
        position: 'left',
        ticks:{
          callback: function (value,index,ticks){
            if(Pricetype=="prices") return "$" + value.toLocaleString();
            else{
              return "$"+convertNumbers(value)
            }
          }
        }
        
      },
      'crypto2' : multiAxis &&{
        type: 'linear',
        display: true,
        position: 'right',
        ticks:{
          callback: function (value,index,ticks){
            if(Pricetype=="prices") return "$" + value.toLocaleString();
            else{
              return "$"+convertNumbers(value)
            }
          }
        }
      }
    }
  };

  return <Line data={chartData} options={options} />;
 
}

export default LineChart;
