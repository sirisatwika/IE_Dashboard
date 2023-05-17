import React from "react";
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
  );
  
  const labels = ['8/10', '28/10', '2/11', '8/11', '18/11', '20/11', '1/12'];
  
  export const data = {
    labels,
    datasets: [
      {
        label: ' ',
        data: [10, 40, 10, 50, 60, 75, 35],
        borderColor: '#2f0378',
        backgroundColor: '#fff',
        pointRadius: 0,
      },
    ],
  };
  
  export const options = {
    responsive: true,
    
    plugins: {
      legend: {
        display: false,
        position: "bottom",
        rtl: false,
        labels: {
          usePointStyle: false,
          boxWidth: 20,
          boxHeight: 8,
          pointStyle: "circle",
          pointStyleWidth: 13,
          padding: 10,
          font: {
            size: 12
          }
        }
      },
  
      title: {
        display: true,
      },
      tooltip: {
        enabled: true,
      },
  
    },
    elements: {
      line: {
        tension: 0.5
      },
    },
    scales: {
      x: {
        grid: {
          display: false,
        },
        title:{
          display: true,
          text:'Time',
      },
      },
      y: {
        grid: {
          display: false,
        },
        title:{
          display: true,
          text:'Usage(%)',
      },
        min:0,
        max:100,
      },
    },
  
  };

function NetworkUsage(){
    return(
        <React.Fragment>
            <Line options={options} data={data} className='line-chart'/>
        </React.Fragment>
    )
}
export default NetworkUsage;