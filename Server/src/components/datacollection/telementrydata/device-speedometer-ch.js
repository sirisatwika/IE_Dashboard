import React, { useState, useEffect } from "react";
import axios from "axios";
import ReactSpeedometer from "react-d3-speedometer";
import MenuItem from '@mui/material/MenuItem';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { useTheme } from '@mui/material/styles';
import OutlinedInput from '@mui/material/OutlinedInput';
import Checkbox from '@mui/material/Checkbox';

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

function DeviceSpeedometer() {

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
    
    //selecting device names
        let [telemetryData, setTelemetryData] = useState([]);
	let [devicesn, setDevicesn] = useState([]);
	
    useEffect(() => {
    const fetchtelemetryData = async()=>{
    	
    console.log("checkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkk")
            try{
	        for (let i = 0; i < devicesn.length; i++) {
                    let resourceName = ""; 
                    let value = "";
                   let data= [];
                    axios.get(`http://localhost:5000/api/v1/gateway/telemetrydata/${devicesn[i]}`)
                    .then((response) => {
                    console.log(response);
                    resourceName = Object.keys(response.data);
                    value = Object.values(response.data);
                    data.push({ device: devicesn[i], resourcename: resourceName, devvalue : value });
                   setTelemetryData(data);
                    });
                    
                }
                console.log(telemetryData);  
            } catch (error) {
                console.error(error);
            }
            };
            fetchtelemetryData();
        }, []); // selecting device names finishes

    return (
        <React.Fragment>
        
            <div className="firstwidgets">
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
                        <Select labelId="demo-multiple-name-label" id="demo-multiple-name"  multiple value={personName} onChange={handleChange} input={<OutlinedInput label="Device/Sensor Name" />} renderValue={(selected) => selected.join(', ')} MenuProps={MenuProps}>
                            {names.map((name) => (
                                <MenuItem key={name} value={name} style={getStyles(name, personName,  theme)}>
                                    <Checkbox checked={personName.indexOf(name) > -1} />
                                    {name}   
                                </MenuItem>
                            ))}
                        </Select>
                    </FormControl>
                </div>
            </div>
            <div className="speedmeter_wrapper">
               { telemetryData.map((telemetryData) => (
				<div key={telemetryData.device} >
				    <h2 className="text-center">{telemetryData.device}</h2>
				    <h3>{telemetryData.devvalue}</h3>
               			 <div className="dev_speed">
               			     <ReactSpeedometer
                    
                        maxValue={100}
                        value = {68}
                        segments={3}
                        segmentColors={["#FF7D7D", "#FAEA48","#14C38E"]}
                        currentValueText={55 + "F"}
                        needleColor="black"
                        width={280}
                        height={150}
                        ringWidth={40}
                        needleHeightRatio={0.40}
                        valueTextFontSize={'12px'}
                        needleTransitionDuration={10000}
                        needleTransition="easeElastic"
                        labelFontSize={'11px'}
                        fluidWidth="true"
	                    />
			    </div> 
			</div>
	               ))}	
            	</div>
            </div>
            
        </React.Fragment>
    )
}
export default DeviceSpeedometer;
