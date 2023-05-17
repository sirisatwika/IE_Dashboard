import React, { useState,useEffect } from "react";
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


function getStyles(name, personName, theme) {
    return {
        fontWeight:
            personName.indexOf(name) === -1
                ? theme.typography.fontWeightRegular
                : theme.typography.fontWeightMedium,
    };
}


function DeviceSpeedometer() {
let [telemetryData, setTelemetryData] = useState([]);
let [test,setTest] = useState([]);
let [gatewayiotdevices,setGatewayiotdevices] = useState([]);   

const theme = useTheme();
    const [personName, setPersonName] = React.useState([]);
    const [selected,setSelected] = useState(0);
   
    
    const fetchdatatelemetry = (devicename) => {
    
       axios.get(`http://172.30.122.183:5000/iotdevicedata/api/v1/${selectdevice}/telemetrydata/${devicename}`)
		.then(response =>{
		console.log(response.data);
		setTest(cur => [...cur,response.data]);
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
        console.log(test);
    };  
    
    
  
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
  
  
  const [selectdevice, setdevice] = React.useState('');

  const [selectiotdevice, setiotdevice] = React.useState('');  
  //Selct device Dropdown
  
  const gatewayhandleChange = (event) => {
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
   	



    return (
        <React.Fragment>
            <div className="firstwidgets">
            <div className="dropdownselect">
                <div className="selectdropdown">
                    <FormControl sx={{ m: 1, minWidth: 170 }} size="small">
                        <InputLabel id="demo-select-small">Select Gateway</InputLabel>
                        <Select labelId="demo-select-small" id="demo-select-small" value={selectdevice} label="Select Gateway" onChange={gatewayhandleChange}>
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
            
            
            <div className="speedmeter_wrapper">
            { telemetryData.map((telemetry,index) => (	
               <div key={personName} >
			{ telemetry.map((t,innerindex) => (
			 <div key={innerindex}>
			 <h2 className="text-center">{Object.keys(t)}</h2>
			 <div>
			 <span>{Object.values(t)[0]}</span>
			 <span style = {{margin: "0 10px" }}></span>
			 <span>{Object.values(t)[1]}</span>
			 </div>
               		 <div className="dev_speed">
               		<ReactSpeedometer
               		minValue = {-50}
                        maxValue= {10000}
                        value = {parseFloat(Object.values(t)[0])}
                        segments={10}
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
	            	))}
            	</div>
            	  
            </div>

            
        </React.Fragment>
    )
}
export default DeviceSpeedometer;
