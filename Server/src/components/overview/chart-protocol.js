import React from 'react'
import ReactApexChart from "react-apexcharts";
import {useState, useEffect} from "react";
import axios from "axios";

function OverviewDeviceprotocol(){
	let [key, setKey] = useState([]);
	let [val, setVal] = useState([]);
	useEffect(()=>{
	axios.get('http://172.30.122.183:5000/gatewaydata/api/v1/count/gatewaywrtservice')
	.then(response =>{
	console.log(response);
	setKey(Object.keys(response.data));
	setVal(Object.values(response.data));
	})
	.catch(console.error);
	},[]);
	
	const series = [{
                name: 'Success',
                data: val
            }];
		
	const chartOptions = {
			colors: [
                    function ({ value }) {
                        if (value < 15) {
                            return '#FF0000'
                        } else {
                            return '#0481a7'
                        }
                    }
                ],
                chart: {
                    height: 350,
                    type: 'bar',
                    stacked: true,
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
                        dataLabels: {
                            enabled: true,
                            total: {
                                enabled: true,
                                style: {
                                    fontSize: '10px',
                                    fontWeight: 600
                                }
                            },

                            position: 'center',
                            style: {
                                fontSize: '10px',
                                fontWeight: 500
                            }
                        },
                    },
                },
                legend: {
                    show: true,
                    position: 'top',
                    fontSize: '11px',
                },
                xaxis: {
                    categories: key,
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
                        text: 'Gateways Protocol',
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
                    max: 100,
                    tickAmount: 2,
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
 	}
 	}
 
	return (
		<div id="chart">
		        <ReactApexChart options={chartOptions} series={series} type="bar" height={210} />
		    </div>
	)
}
export default OverviewDeviceprotocol;
