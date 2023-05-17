import React, { useState, useEffect } from 'react';
import ApexCharts from 'react-apexcharts';
import axios from 'axios';
import ReactApexChart from "react-apexcharts";

const LineChart = (props) => {
	const [chartData, setChartData] = useState({});

	useEffect(() => {
    const fetchData = async () => {
    axios.get(`http://localhost:5000/api/v1/gateway/data/linegraph/${props.devicename}`)
		.then(response =>{
		//console.log(response.data);
		//setData(response.data); 
	const data = response.data;
	console.log(data);
	const chartData = {
	
	series: [{
	//data: data.map(item => item[1])
	data : Object.values(data)
	
	}],
	options: {
	chart: {
	type: 'line'
	},
	xaxis: {
	categories: Object.keys(data)
	}
	}
	};
	setChartData(chartData);
	})
	};

	fetchData();
	}, []);
	console.log(chartData.series);
	console.log(chartData.options);
	return (
	<ReactApexChart
	series={chartData.series}
	options={chartData.options}
	type="line"
	height={400}
	/>
	);
};

export default LineChart;
