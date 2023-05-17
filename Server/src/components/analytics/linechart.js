import React, { useState,useEffect } from "react";
import axios from "axios";
import ReactApexChart from "react-apexcharts";
import MenuItem from '@mui/material/MenuItem';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { useTheme } from '@mui/material/styles';
import OutlinedInput from '@mui/material/OutlinedInput';
import Checkbox from '@mui/material/Checkbox';

import DatePicker from "react-datepicker";
import "../datacollection/telementrydata/datepicker.css";

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

function LineChart(props) {
      //console.log(props);
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
  
  const [selectdevice, setdevice] = React.useState('');
  
  const [data, setData] = useState([]);

    
  useEffect(() => {
    const fetchData = async () => {
    axios.get(`http://172.30.122.183:5000/gatewaydata/api/v1/data/linegraph/${selectdevice}`)
		.then(response =>{
		//console.log(response.data);
		setData(response.data); 
		})
  }
  fetchData();
  },[]);
  
  const fetchdatatelemetry = (devicename) => {
    
       axios.get(`http://172.30.122.183:5000/iotdevicedata/api/v1/data/${selectdevice}/linegraph/${devicename}`)
		.then(response =>{
		console.log(response.data);
		setTelemetryData(cur => [...cur,response.data]);
		
	}) 
    }
    
  const [series, setSeries] = useState([]);
  const [ts,setTs] = useState([]);
  //For Line chart series options
 const storeseries = () => {
    setTs([]);
    setSeries([]);
    console.log(telemetryData);
    telemetryData.forEach((item,index) => {
    console.log(item);
    item.forEach((ddata,innerindex) => {
     const vals=Object.values(ddata);
     let devname = vals[0][1]
     let valdata = []
     vals.forEach((val,inneriindex)=>{
       valdata.push(val[0]); 
    });
     setSeries(item => [...item,
    {devicename: devname,
    data : valdata
    }])
     setTs(Object.keys(ddata));
    });
    });
    console.log(ts);
    console.log(series);
  }
    
  const [valdata,setValdata]=useState([]);     
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
        setValdata(Object.values(telemetryData));
        storeseries();
    };
  
  
  //Selct device Dropdown
  const devicehandleChange = (event) => {
    setdevice(event.target.value);
    const fetchData = async () => {
    setTelemetryData([]);
    axios.get(`http://172.30.122.183:5000/gatewaydata/api/v1/getiotdevices/${event.target.value}`)
    .then((response) => {
    console.log(response.data);
    setGatewayiotdevices(response.data);
    });
    
  };
  fetchData();
 }


  //Date Range Picker options
  const [dateRange, setDateRange] = useState([null, null]);
  const [startDate, endDate] = dateRange;
  
  
  
      
//console.log(series);
  const chartOptions = {
    chart: {
      height: 350,
      type: 'line',
      dropShadow: {
        enabled: false,
        color: '#000',
        top: 18,
        left: 7,
        blur: 10,
        opacity: 1
      },
      toolbar: {
        show: false
      }
    },
    colors: ['#D61355', '#F94A29', '#0081C9', '#A31ACB', '#FF78F0', '#379237', '#0E185F', '#00D7FF', '#F55353'],
    dataLabels: {
      enabled: false,
    },
    stroke: {
      curve: 'straight',
      width: 1.3
    },
    grid: {
      borderColor: '#ddd',
      row: {
        colors: ['transparent', 'transparent'],
        opacity: 0.1
      },
    },
    markers: {
      size: 0
    },
    xaxis: {
      categories: ts,
      labels: {
        show: true,
        style: {
          fontSize: '12px',
          fontFamily: 'Raleway, sans-serif',
          fontWeight: 500,
        },
      },
      title: {
        text: 'Time(Hrs)',
        offsetY: 90,
        style: {
          color: '#3f51b5',
          fontSize: '12px',
          fontFamily: 'Raleway, sans-serif',
          fontWeight: 'bold',
        },
      },
    },
    yaxis: {
      labels: {
        show: true,
        align: 'right',
        minWidth: 0,
        maxWidth: 160,
        style: {
          fontSize: '12px',
          fontFamily: 'Raleway, sans-serif',
          fontWeight: 500,
        },
      },
      axisBorder: {
        show: true,
        color: '#ccc',
      },
      title: {
        text: 'Value',
        style: {
          color: '#3f51b5',
          fontSize: '12px',
          fontFamily: 'Raleway, sans-serif',
          fontWeight: 'bold',
        },
      },
      min: -500,
      max: 500
    },
    legend: {
      position: 'right',
      horizontalAlign: 'bottom',
      floating: false,
      offsetY: 20,
      offsetX: -30,
      fontSize: '12px',
      fontFamily: 'Raleway, sans-serif',
      fontWeight: 600,
      height: 200,
      width: 160,
    }
  };

  return (
    <React.Fragment>
      <div className="dropdownselect">
        <div className="selectdropdown">
          <DatePicker
            selectsRange={true}
            startDate={startDate}
            endDate={endDate}
            onChange={(update) => {
             setDateRange(update);
            }}
            isClearable={true}
            showIcon
            placeholderText="Select Start & End Date"
            closeOnScroll={true}
          />
        </div>

        <div className="selectdropdown">
          <FormControl sx={{ m: 1, minWidth: 170 }} size="small">
            <InputLabel id="demo-select-small">Select Gateway</InputLabel>
            <Select labelId="demo-select-small" id="demo-select-small" value={selectdevice} label="Select Device" onChange={devicehandleChange}>
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
      <div id="chart">
        <ReactApexChart options={chartOptions} series={series} type="line" height={320} />
      </div>
    </React.Fragment>
  )
}
export default LineChart;
