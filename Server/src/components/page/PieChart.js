import React from 'react'
import  ReactApexChart from "react-apexcharts";
import '../page/PieChart.css'
class PieChart extends React.Component {
    constructor(props) {
      super(props);

      this.state = {
      
        series: [45, 35, 20, ],
        options: {
          chart: {
            width: 380,
            type: 'pie',
          },
          // fill:{
          //   colors:["#F44336","#E91E63","#9C27B0"]
          // },
          labels: ['MQTT', 'ModBus', 'REST', ],
          legend: {
            position: 'right',
            
          },
          tooltip:{
            enabled:true
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

export default PieChart