import React, { useState, useEffect } from "react";
import axios from "axios";
// import Box from '@mui/material/Box';
// import Stack from '@mui/material/Stack';
import Slider from '@mui/material/Slider';
import '../analytics/analytics.css';

import MenuItem from '@mui/material/MenuItem';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { useTheme } from '@mui/material/styles';
import OutlinedInput from '@mui/material/OutlinedInput';
import Checkbox from '@mui/material/Checkbox';



//For Multiple select options configurations

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
    PaperProps: {
        style: {
            maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
            width: 250,
        },
    },
};


function getStyles(name, personName, theme) {
    return {
        fontWeight:
            personName.indexOf(name) === -1
                ? theme.typography.fontWeightRegular
                : theme.typography.fontWeightMedium,
    };
}

function SliderSizes() {
  let [gatewayiotdevices,setGatewayiotdevices] = useState([]);   
  let [telemetryData, setTelemetryData] = useState([]);
  const theme = useTheme();
  const [selected,setSelected] = useState(0);
  const [personName, setPersonName] = React.useState([]);

  const [devices, setDevices] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
    axios.get(`http://172.30.122.183:5000/gatewaydata/api/v1/name/getdevicenames/all`)
		.then(response =>{
		setDevices(response.data); 
		})
  }
  fetchData();
  },[]);
  
  const [selectdevice, setdevice] = React.useState('CarbondioxideSensor');
  
  const fetchdatatelemetry = (devicename) => {
    
       axios.get(`http://172.30.122.183:5000/iotdevicedata/api/v1/data/${selectdevice}/minmax/${devicename}`)
		.then(response =>{
		console.log(response.data);
		setTelemetryData(cur => [...cur,response.data]);
		
	}) 
    }
    
  const handleChange = (event) => {
         const {
            target: { value },
        } = event;
        setPersonName(
            typeof value === 'string' ? value.split(',') : value,
        );
        console.log(value);
        setTelemetryData([]);
        value.forEach( (item,index) => {
        fetchdatatelemetry(item);
        })
        setSelected(value);
        console.log(telemetryData);
    };
  
  
  const [selectiotdevice, setiotdevice] = React.useState('');
    //Selct device Dropdown
  const devicehandleChange = (event) => {
    setdevice(event.target.value);
    const fetchData = async () => {
    setTelemetryData([]);
    axios.get(`http://172.30.122.183:5000/gatewaydata/api/v1/getiotdevices/${event.target.value}`)
    .then((response) => {
    setGatewayiotdevices(response.data);
    });
  }
  fetchData();
  };

    let [dataval, setDataval] = useState([]);
	useEffect(() => {
    const minmaxval = () =>{
    	let ch =[];
	axios.get(`http://172.30.122.183:5000/gatewaydata/api/v1/data/minmax/${selectdevice}`)
		    .then((response) => {
		      console.log(response.data);
		      const resvalues = Object.values(response.data);
		      console.log(resvalues);
		      ch.push({device:selectdevice, min: resvalues[0][0],max: resvalues[0][1]})
		        setDataval(ch);
		        console.log(ch);
		    });
		    console.log(dataval);
    }
    minmaxval();
    },[]);
    

    return (
        <div className="sliderwrapper">
            <div className="dropdownselect">
                <div className="selectdropdown">
                    <FormControl sx={{ m: 1, minWidth: 170 }} size="small">
                        <InputLabel id="demo-select-small">Select Gateway</InputLabel>
                        <Select labelId="demo-select-small" id="demo-select-small" value={selectdevice} label="Select Gateway" onChange={devicehandleChange}>
                         {devices.map(item =>(
              	<MenuItem key={item} value={item}>
              	{item}
              	</MenuItem>
              ))}   
                         </Select>
                    </FormControl>
                </div>
                <div className="selectdropdown">
                        <FormControl sx={{ m: 1, width: 170 }} size="small">
                            <InputLabel id="demo-multiple-name-label">Device/Sensor Name</InputLabel>
                            <Select labelId="demo-multiple-name-label" id="demo-multiple-name" multiple value={personName} onChange={handleChange} input={<OutlinedInput label="Device/Sensor Name" />} renderValue={(selected) => selected.join(', ')} MenuProps={MenuProps}>
                                {gatewayiotdevices.map((name) => (
                                    <MenuItem key={name} value={name} style={getStyles(name, personName, theme)}>
                                        <Checkbox checked={personName.indexOf(name) > -1} />
                                        {name}
                                    </MenuItem>
                                ))}
                            </Select>
                        </FormControl>
                    </div>
            </div>

            <div className="r_slider">
                <div className="r_sliderblock">
                {telemetryData.map((dataval,index) => (
                 
                  <div key={personName} >
                   { dataval.map((d,innerindex) => (
	            <div key={innerindex} >
	            <h3>{Object.keys(d)}</h3>
                    
                    <div className="r_slidervalues">
                        <p>Min value</p>
                        <Slider min = {-100} max = {10000} defaultValue={Object.values(d)[0][0]} aria-label="Default" valueLabelDisplay="on" />
                    </div>
                    
                    <div className="r_slidervalues">
                        <p>Max value</p>
                        <Slider min = {-100} max = {10000} defaultValue={Object.values(d)[0][1]} aria-label="Default" valueLabelDisplay="on" />
                    </div>
                    
                </div> ))}
                </div> ))}
                </div> 
            </div>
        </div>
    );
}
export default SliderSizes;
