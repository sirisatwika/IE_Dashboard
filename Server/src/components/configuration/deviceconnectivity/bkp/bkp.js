import React, { Component } from 'react';
import Select from 'react-select';
import "../deviceconnectivity/deviceconnectivity.css";

const options = [
  { value: 'Temperature', label: 'Temperature' },
  { value: 'Humidity', label: 'Humidity' },
  { value: 'Speed', label: 'Speed' },
  { value: 'Pressure', label: 'Pressure' },
  { value: 'Voltage', label: 'Voltage' },
  { value: 'Current', label: 'Current' },

];

class Chckbox extends Component {
  state = {
    selectedOptions: [],
  }

  handleChange = (selectedOptions) => {
    this.setState({ selectedOptions });
  }


  render() {
    const { selectedOption } = this.state;

    return (
      <React.Fragment>
        <div className='datameasereselect'>
          <Select
            isMulti
            value={selectedOption}
            onChange={this.handleChange}
            options={options}
          />
        </div>
        
        <div>
          {this.state.selectedOptions.map(
            o => <h1>{o.value}</h1>)}
        </div>



      </React.Fragment>
    );
  }

}

export default Chckbox;