import React from 'react'
import ReactApexChart from "react-apexcharts";

class DowntimCauses extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            series: [60, 20, 20,],
            options: {
                
                chart: {
                    width: 380,
                    type: 'pie',
                },
                colors: ['#4BCE7B', '#E92C2C', '#c7c73e'],
                fill: {
                    colors: ["#4BCE7B", "#E92C2C", "#c7c73e"]
                },
                labels: ['Maintainence', 'Device Failure', 'Charging',],
                legend: {
                    position: 'right',
                },
                tooltip: {
                    enabled: true
                },
                responsive: [{
                    breakpoint: 480,
                    options: {
                        chart: {
                            width: 200
                        },
                    }
                }]
            },
        };
    }
    render() {
        return (
            <div id="chart">
                <ReactApexChart options={this.state.options} series={this.state.series} type="pie" width={380} />
            </div>
        )
    }
}
export default DowntimCauses;