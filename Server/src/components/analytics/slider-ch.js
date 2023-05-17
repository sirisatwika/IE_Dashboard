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

const names = [
    'Sensor-01',
    'Sensor-02',
    'Sensor-03',
    'Sensor-04',
    'Sensor-05',
];

function getStyles(name, personName, theme) {
    return {
        fontWeight:
            personName.indexOf(name) === -1
                ? theme.typography.fontWeightRegular
                : theme.typography.fontWeightMedium,
    };
}

function SliderSizes() {

    //Selct Gateway Dropdown
    const [selectgateway, setgateway] = React.useState('');
    const gatewayhandleChange = (event) => {
        setgateway(event.target.value);
    };

    //Selct Device/Sensor Dropdown    
    const theme = useTheme();
    const [personName, setPersonName] = React.useState([]);

    const handleChange = (event) => {
        const {
            target: { value },
        } = event;
        setPersonName(
            typeof value === 'string' ? value.split(',') : value,
        );
    };

    let [dataval, setDataval] = useState([]);
	useEffect(() => {
    const minmaxval = () =>{
    	let ch =[];
	axios.get(`http://localhost:5000/api/v1/gateway/data/minmax/CarbondioxideSensor`)
		    .then((response) => {
		      console.log(response.data);
		      const resvalues = response.data.CarbondioxideSensor;
		      ch.push({device:'CarbondioxideSensor', min: resvalues[0],max: resvalues[1]})
		        setDataval(ch);
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
                        <Select labelId="demo-select-small" id="demo-select-small" value={selectgateway} label="Select Gateway" onChange={gatewayhandleChange}>
                            <MenuItem value="">
                                <em>None</em>
                            </MenuItem>
                            <MenuItem value={10}>Gateway-01</MenuItem>
                            <MenuItem value={20}>Gateway-02</MenuItem>
                            <MenuItem value={30}>Gateway-03</MenuItem>
                            <MenuItem value={40}>Gateway-04</MenuItem>
                        </Select>
                    </FormControl>
                </div>
                <div className="selectdropdown">
                    <FormControl sx={{ m: 1, width: 170 }} size="small">
                        <InputLabel id="demo-multiple-name-label">Device/Sensor Name</InputLabel>
                        <Select labelId="demo-multiple-name-label" id="demo-multiple-name" multiple value={personName} onChange={handleChange} input={<OutlinedInput label="Device/Sensor Name" />} renderValue={(selected) => selected.join(', ')} MenuProps={MenuProps}>
                            {names.map((name) => (
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
                
                { dataval.map((dataval) => (
	            <div key={dataval.device} >
	            <h3>{dataval.device}</h3>
                    
                    <div className="r_slidervalues">
                        <p>Min value</p>
                        <Slider defaultValue={dataval.min} aria-label="Default" valueLabelDisplay="on" />
                    </div>
                    
                    <div className="r_slidervalues">
                        <p>Max value</p>
                        <Slider defaultValue={dataval.max} aria-label="Default" valueLabelDisplay="on" />
                    </div>
                    
                </div> ))}
                
                </div> 
            </div>
        </div>
    );
}
export default SliderSizes;
