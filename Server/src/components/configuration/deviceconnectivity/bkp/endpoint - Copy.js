import React from "react";
// import MultiSelectEndpont from "../deviceconnectivity/MultiSelect-endpoint";

// const options = [
//   { name: "Temperature", value: "temperature" },
//   { name: "Humidity", value: "humidity" },
//   { name: "Speed", value: "Speed" },
//   { name: "Pressure", value: "pressure" },
//   { name: "Voltage", value: "voltage" },
//   { name: "Current", value: "current" },
//   { name: "Battery", value: "battery" },
// ];


class EndPoint extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     selectedOptions: []
  //   };
  // }

  // handleMultiChanges = options => {
  //   this.setState(() => {
  //     return {
  //       selectedOptions: options
  //     };
  //   });
  // };

  render() {
    return (
      <React.Fragment>
        {/* <div className='datameasereselect'>
          <form id="create-course-form">
            <MultiSelectEndpont options={options} name="End Points" onChange={this.handleMultiChanges} />
          </form>
        </div> */}
    

        {/* <div className="wrapperdata">
        {this.state.selectedOptions.map((option, index) => (
          <div className="datawraper">
            <p key={option.name}>{(index ? "  " : "") + option.name}</p>
            <h2>140 F</h2>
          </div>
       ))}
        </div> */}
      </React.Fragment>
    );
  }
}

export default EndPoint;
