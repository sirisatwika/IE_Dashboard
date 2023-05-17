import React from 'react'
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

const labels = ['Sep', 'Oct', 'Nov', 'Dec', 'Jan', 'Feb', 'Mar', 'Apr', 'May', 'June'];

export const data = {
  labels,
  datasets: [
    {
      label: 'Memory Usage',
      data: [10, 20, 25, 54, 33, 64, 43, 22, 33, 20, 30, 15],
      borderColor: '#3F51B5',
      backgroundColor: '#fff',
      borderWidth: 1.5,
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
      tension: 0.6
    },
  },
  scales: {
    x: {
      grid: {
        display: false,
      },
      title: {
        display: true,
        text: 'Time(month)',
        color: '#3f51b5',
        font: {
          size: 12,  
        },
      },
    },
    y: {
      grid: {
        display: false,
      },
      title: {
        display: true,
        text: 'Performance',
        color: '#3f51b5',
        font: {
          size: 12,  
        },
      },
        min: 10,
        max: 100   
    },
  },
};

function OverallPerformance() {
  return (
    <div>
      <Line options={options} data={data} className='line-chart' />
    </div>
  )
}
export default OverallPerformance;