import React from 'react'
import ReactApexChart from "react-apexcharts";

class PerformanceChart extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            series: [
                {
                    name: "",
                    data: [9, 40, 60, 90, 50, 30, 45]
                },
            ],
            options: {
                chart: {
                    height: 350,
                    type: 'line',
                    dropShadow: {
                        enabled: false,
                        color: '#000',
                        top: 18,
                        left: 7,
                        blur: 10,
                        opacity: 1
                    },
                    toolbar: {
                        show: false
                    }
                },
                colors: ['#0E185F'],
                dataLabels: {
                    enabled: false,
                },
                stroke: {
                    curve: 'smooth',
                    width: 1.5
                },
                grid: {
                    borderColor: '#ddd',
                    row: {
                        colors: ['transparent', 'transparent'],
                        opacity: 0.1
                    },
                },
                markers: {
                    size: 0
                },
                xaxis: {
                    categories: ['12:00', "13:00", "14:00", "15:00", "16:00", "17:00", "18:00"],
                    labels: {
                        show: true,
                        style: {
                            fontSize: '12px',
                            fontFamily: 'Raleway, sans-serif',
                            fontWeight: 500,
                        },
                    },
                    title: {
                        text: 'Time(Hrs)',
                        offsetY: 90,
                        style: {
                            color: '#3f51b5',
                            fontSize: '12px',
                            fontFamily: 'Raleway, sans-serif',
                            fontWeight: 'bold',
                          },
                    },
                },
                yaxis: {
                    labels: {
                        show: true,
                        align: 'right',
                        minWidth: 0,
                        maxWidth: 160,
                        style: {
                            fontSize: '12px',
                            fontFamily: 'Raleway, sans-serif',
                            fontWeight: 500,
                          },
                    },
                    axisBorder: {
                        show: true,
                        color: '#ccc',
                    },
                    title: {
                        text: 'Performance',
                        style: {
                          color: '#3f51b5',
                          fontSize: '12px',
                          fontFamily: 'Raleway, sans-serif',
                          fontWeight: 'bold',
                        },
                      },
                    min: 0,
                    max: 100
                },
                legend: {
                    position: 'right',
                    horizontalAlign: 'top',
                    floating: false,
                    offsetY: 0,
                    offsetX: 0,
                    fontSize: '12px',
                    fontFamily: 'Raleway, sans-serif',
                    fontWeight: 600,
                    height: 300
                }
            },
        };
    }
    render() {
        return (
            <div id="chart">
                <ReactApexChart options={this.state.options} series={this.state.series} type="line" height={280} />
            </div>
        )
    }
}
export default PerformanceChart;