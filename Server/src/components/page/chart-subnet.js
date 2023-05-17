import React from 'react'
import ReactApexChart from "react-apexcharts";

class ChartSubnet extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      series: [15, 55, 30,],
      options: {
        chart: {
          width: 380,
          type: 'pie',
        },
        // fill:{
        //   colors:["#F44336","#E91E63","#9C27B0"]
        // },
        labels: ['10.1.23.0/21', '10.1.34.0/45', '192.23.45.123',],
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
        <ReactApexChart options={this.state.options} series={this.state.series} type="pie" width={370}/>
      </div>
    )
  }
}
export default ChartSubnet;