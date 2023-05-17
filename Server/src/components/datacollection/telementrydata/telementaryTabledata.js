import React, { useState, useEffect } from "react";
import axios from "axios";
import MenuItem from '@mui/material/MenuItem';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { useTheme } from '@mui/material/styles';
import OutlinedInput from '@mui/material/OutlinedInput';
import Checkbox from '@mui/material/Checkbox';
import MUIDataTable from "mui-datatables";

import DatePicker from "react-datepicker";
import "./datepicker.css";
import "../../configuration/devicetable.css";

//For Select Dropdown options
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


//For table options 

const options = {
    responsive: "standard",
    textLabels: {
        toolbar: {
            search: "Search",
            downloadCsv: "Download CSV",
            print: "Print",
            viewColumns: "View Columns",
            filterTable: "Filter Table",
        },
        filter: {
            all: "All",
            title: "Filters",
            reset: "Reset",
        },
    }
}

const columns = [
    {
        name: "Device name",
        options: {
            colspan: true,
            filter: true,
            sort: true,
            filterOptions: { fullWidth: true }
        }
    },
    {
        name: "Resource name",
        options: {
            filter: false,
        },
    },
    {
        name: "Value",
        options: {
            filter: false,
        },
    },
    {
        name: "Units",
        options: {
            filter: false,
        },
    },
];

/*const data = [
    ['2557267636', 'Lenovo Gateway', '276397', 'temp', '192.168.45.34'],
    ['2557267636', 'windows', '637827832', 'temp', '192.168.45.34'],
    ['2557267636', 'Lenovo Gateway', '276397', 'temp', '192.168.45.34'],
    ['2557267636', 'windows', '276397', 'temp', '192.168.45.34'],
    ['2557267636', 'Lenovo Gateway', '276397', 'temp', '192.168.45.34'],
];*/



function TelementaryTabledata() {

	let [val, setVal] = useState([]);
	let [tableval, setTableVal] = useState([]);
	useEffect(()=>{
	axios.get('http://172.30.122.183:5000/gatewaydata/api/v1/name/getdevicenames/all')
	.then(response =>{
	console.log(response.data);
	setVal(response.data);
	})
	.catch(console.error);
	},[]);

    const fetchtabledata = (gateway) => {
           axios.get(`http://172.30.122.183:5000/gatewaydata/api/v1/telemetrydata/${gateway}/all`)
	.then(response =>{
	console.log(response.data);
	setTableVal(response.data);
	})
    }
    //Selct Gateway Dropdown
    const [selectgateway, setgateway] = React.useState('');
    const gatewayhandleChange = (event) => {
        setgateway(event.target.value);
        fetchtabledata(event.target.value);
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

    //Date Range Picker options
    const [dateRange, setDateRange] = useState([null, null]);
    const [startDate, endDate] = dateRange;

    return (
        <React.Fragment>
            <div className="secondwrapper">
                <div className="dropdownselect">
                    
                    
                    <div className="selectdropdown">
                        <FormControl sx={{ m: 1, minWidth: 170 }} size="small">
                            <InputLabel id="demo-select-small">Select Gateway</InputLabel>
                            <Select labelId="demo-select-small" id="demo-select-small" value={selectgateway} label="Select Gateway" onChange={gatewayhandleChange}>
                                {val.map(item =>(
              	<MenuItem key={item} value={item}>
              	{item}
              	</MenuItem>
              ))}
                            </Select>
                        </FormControl>
                    </div>
                   
                </div>
                <div className="table_wrapper devicetable">
                    <MUIDataTable data={tableval} columns={columns} options={options} />
                </div>
            </div>
        </React.Fragment>
    )
}
export default TelementaryTabledata;




/*
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
*/
