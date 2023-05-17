import React, { Component } from "react";
// import MultiSelect from "../deviceconnectivity/MultiSelectCheckboxes";
import MultiSelectDatameasured from "./MultiSelect-datameasured";

const options = [
  { name: "Temperature", value: "temperature" },
  { name: "Humidity", value: "humidity" },
  { name: "Speed", value: "Speed" },
  { name: "Pressure", value: "pressure" },
  { name: "Voltage", value: "voltage" },
  { name: "Current", value: "current" },
  { name: "Battery", value: "battery" },
];


class DataMeasured extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedOptions: []
    };
  }

  handleMultiChange = options => {
    this.setState(() => {
      return {
        selectedOptions: options
      };
    });
  };

  render() {
    return (
      <React.Fragment>
        <div className='datameasereselect'>
          <form id="create-course-form">
            <MultiSelectDatameasured options={options} name="Device Data" onChange={this.handleMultiChange} />
          </form>
        </div>
    

        <div className="wrapperdata">
        {this.state.selectedOptions.map((option, index) => (
          <div className="datawraper">
            <p key={option.name}>{(index ? "  " : "") + option.name}</p>
            <h2>140 F</h2>
          </div>
       ))}
        </div>
      </React.Fragment>
    );
  }
}

export default DataMeasured;
