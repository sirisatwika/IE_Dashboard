import React from 'react'
import ReactApexChart from "react-apexcharts";

class RadialSubnets extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            series: [15, 55, 35],
            options: {
                chart: {
                    height: 390,
                    type: 'radialBar',
                },
                plotOptions: {
                    radialBar: {
                        offsetY: 0,
                        startAngle: 0,
                        endAngle: 270,
                        hollow: {
                            margin: 10,
                            size: '40%',
                            background: '#FFFDE4',
                            position: 'front',
                        },
                        dataLabels: {
                            name: {
                                show: true,
                            },
                            value: {
                                show: true,
                                offsetY: 0,
                                fontSize: '12px',
                                fontFamily: 'Raleway, sans-serif',
                                fontWeight: 'bold',
                            },
                            total: {
                                show: true,
                                label: 'Total',
                                color: '#373d3f',
                                fontSize: '14px',
                                fontFamily: 'Raleway, sans-serif',
                                fontWeight: 600,
                              }
                        },
                 
                    }
                },
                colors: ['#4286f4', '#0575E6', '#43C6AC'],
                labels: ['10.1.23.0/21', '10.1.34.0/45', '192.23.45.123'],
                legend: {
                    show: true,
                    floating: true,
                    fontSize: '12px',
                    fontFamily: 'Raleway, sans-serif',
                    fontWeight: 600,
                    position: 'left',
                    offsetX: 20,
                    offsetY: -20,
                    labels: {
                        useSeriesColors: true,
                    },
                    markers: {
                        size: 0
                    },
                    formatter: function (seriesName, opts) {
                        return seriesName + ":  " + opts.w.globals.series[opts.seriesIndex]
                    },
                    itemMargin: {
                        vertical: 1
                    }
                },
                responsive: [{
                    breakpoint: 480,
                    options: {
                        legend: {
                            show: false
                        }
                    }
                }]
            },
        };
    }
    render() {
        return (
            <div id="chart">
                <ReactApexChart options={this.state.options} series={this.state.series} type="radialBar" height={235} />
            </div>
        );
    }
}
export default RadialSubnets;