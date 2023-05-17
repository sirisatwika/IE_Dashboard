import React from 'react'
import ReactApexChart from "react-apexcharts";
import {useState, useEffect} from "react";
import axios from "axios";


function GatewayCountgraph() {
    let [key, setKey] = useState([]);
	let [val, setVal] = useState([]);
	useEffect(()=>{
	axios.get('http://172.30.122.183:5000/gatewaydata/api/v1/count/gatewaywrtmanu')
	.then(response =>{
	console.log(response);
	setKey(Object.keys(response.data));
	setVal(Object.values(response.data));
	})
	.catch(console.error);
	},[]);
	
  const series = [
    {
      data: val
    }
  ];

  const chartOptions = {
    colors: ['#0481a7', '#0481a7', '#0481a7', '#0481a7'],
    chart: {
      height: 350,
      type: 'bar',
      toolbar: {
        show: false
      },
    },
    grid: {
      show: true,
      xaxis: {
        lines: {
          show: false
        }
      },
      yaxis: {
        lines: {
          show: false
        }
      },
    },
    dataLabels: {
      enabled: true,
      position: 'center',
      style: {
        fontSize: '10px',
        fontWeight: 600
      }
    },
    plotOptions: {
      bar: {
        columnWidth: '50%',
        distributed: false,
      },
    },
    legend: {
      show: false,
      position: 'top',
      fontSize: '11px',
    },
    xaxis: {
      categories:key,
      labels: {
        show: true,
        hideOverlappingLabels: true,
        trim: true,
        style: {
          fontSize: '10px',
          fontFamily: 'Raleway, sans-serif',
          fontWeight: 500,
        },
      },
      title: {
        text: 'Gateways',
        offsetY: 75,
        style: {
          color: '#004a87',
          fontSize: '10px',
          fontFamily: 'Raleway, sans-serif',
          fontWeight: '600',
        },
      },
    },
    yaxis: {
      min: 0,
      max: 20,
      tickAmount: 2,
      show: true,
      labels: {
        show: true,
        align: 'right',
        minWidth: 0,
        style: {
          fontSize: '10px',
          fontFamily: 'Raleway, sans-serif',
          fontWeight: 500,
        },
      },
      axisBorder: {
        show: true,
        color: '#ccc',
      },
      title: {
        text: 'Values',
        style: {
          color: '#004a87',
          fontSize: '10px',
          fontFamily: 'Raleway, sans-serif',
          fontWeight: '600',
        },
      },

    },
  };

  return (
    <div id="chart">
      <ReactApexChart options={chartOptions} series={series} type="bar" height={210} />
    </div>
  )
}
export default GatewayCountgraph;
