import React from "react";

import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import ListItemText from '@mui/material/ListItemText';
import Select from '@mui/material/Select';
import Checkbox from '@mui/material/Checkbox';

import "../deviceconnectivity/deviceconnectivity.css";



const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 200,
    },
  },
};


const names = [
  'Temperature',
  'Humidity',
  'Speed',
  'Pressure',
  'Voltage',
  'Current',
  'Battery',
];


function DataMeasured() {

  const [personName, setPersonName] = React.useState([]);

  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    setPersonName(
      // On autofill we get a stringified value.
      typeof value === 'string' ? value.split(',') : value,
    );
  };





  return (
    <React.Fragment>
      <div className='datameasereselect'>
        <FormControl sx={{ m: 1, width: 130 }} size="small">
          <InputLabel id="demo-multiple-checkbox-label">Device Data</InputLabel>
          <Select
            labelId="demo-multiple-checkbox-label"
            id="demo-multiple-checkbox"
            multiple
            value={personName}
            onChange={handleChange}
            input={<OutlinedInput label="Device Data" />}
            renderValue={(selected) => selected.join(', ')}
            MenuProps={MenuProps}
          >
            {names.map((name) => (
              <MenuItem key={name} value={name}>
                <Checkbox checked={personName.indexOf(name) > -1} />
                <ListItemText primary={name} />
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </div>
      <div className="wrapperdata">
        <div className="datawraper">
          <p>Temperature</p>
          <h2>140 F</h2>
        </div>
        <div className="datawraper">
          <p>Temperature</p>
          <h2>140 F</h2>
        </div>
        <div className="datawraper">
          <p>Temperature</p>
          <h2>140 F</h2>
        </div>
        <div className="datawraper">
          <p>Temperature</p>
          <h2>140 F</h2>
        </div>
        <div className="datawraper">
          <p>Temperature</p>
          <h2>140 F</h2>
        </div>
        <div className="datawraper">
          <p>Temperature</p>
          <h2>140 F</h2>
        </div>
        <div className="datawraper">
          <p>Temperature</p>
          <h2>140 F</h2>
        </div>
      </div>
    </React.Fragment>
  )
}
export default DataMeasured;