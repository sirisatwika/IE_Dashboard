import React, { useState, useEffect } from "react";
import axios from "axios";
import MUIDataTable from "mui-datatables";
import Button from '@mui/material/Button';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import CancelIcon from '@mui/icons-material/Cancel';
import dayjs from 'dayjs';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import {ToastContainer,toast} from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";

import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { MobileDateTimePicker } from '@mui/x-date-pickers/MobileDateTimePicker';
import "../devicetable.css";


const options = {
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

//Date time picker validation 

const todayAtNoon = dayjs().set('hour', 12).startOf('hour');
const todayAt3PM = dayjs().set('hour', 15).startOf('hour');

function ConfigurationTable() {
	
	let [val, setVal] = useState([]);
	useEffect(()=>{
	axios.get('http://172.30.122.183:5000/gatewaydata/api/v1/name/getgatewayconfigdetails/all')
	.then(response =>{
	console.log(response);
	setVal(response.data);
	})
	.catch(console.error);
	},[]);

	const [renew,setRenew] = useState(null);
    const [deprov,setDeprov] = useState(null);
    const [devicename,setDevicename] = useState('');
    const fetchDataRenew = async() =>{
       try{
         const response = await axios.get(`http://172.30.122.183:5000/provision/api/v1/gateway/renew/${devicename}`);
         return response.data;
       }catch(error){
         console.error(error);
         throw new Error("Failed!");
       }
    }
    const handleClickRenew = async() => {
     try {
       const result = await fetchDataRenew();
       setRenew(result);
       toast.success(result);
       }catch(error){
       toast.error(error.message);
      }
      }
      
      const fetchDataDeprov = async() =>{
       try{
         const response = await axios.delete(`http://172.30.122.183:5000/provision/api/v1/gateway/deprovision/${devicename}`);
         return response.data;
       }catch(error){
         console.error(error);
         throw new Error("Failed!");
       }
    }
    const handleClickDeprov = async() => {
     try {
       const result = await fetchDataDeprov();
       setDeprov(result);
       toast.success(result);
       }catch(error){
       toast.error(error.message);
      }
      }




    //os_Action action dropdown
    const [state, setState] = useState({ value: "Select Action" });
    function handleChange(event) {
        setState({ value: event.target.value });
    }

    //encrypt/decrypt Action dropdown
    const [encryptdecrypt, encryptdecryptsetState] = useState({ value: "Select Action" });
    function encryptdecrypthandleChange(event) {
        encryptdecryptsetState({ value: event.target.value });
    }

    //Firmware Action dropdown
    const [firmware, firmwaresetState] = useState({ value: "Select Action" });
    function firmwarehandleChange(event) {
        firmwaresetState({ value: event.target.value });
    }

    const columns = [
        {
            name: "Gateway ID",
            options: {
                filter: true,
                sort: true,
                filterOptions: { fullWidth: true }
            },
        },
        {
            name: "Gateway Name",
            options: {
                filter: true,
                filterOptions: { fullWidth: true }
            },
        },
        {
            name: "IP Address",
            options: {
                filter: false,
            },
        },
        {
            name: "Port Number",
            options: {
                filter: false,
            },
        },
        {
            name: "Location",
            options: {
                filter: false,
            },
        },
        {
            name: "Associated Service/Protocol",
            options: {
                filter: false,
            },
        },
        {
            name: "Associated  Gateway Profile",
            options: {
                filter: false,
            },
        },
        {
            name: "Description",
            options: {
                filter: false,
            },
        },
        {
            name: "Status",
            options: {
                filter: false,
                customBodyRender: value => {
                    return (
                        !value ? (<span className="activeicon statusicons">Online <CheckCircleIcon /></span>) : (<span className="inactiveicon statusicons">Offline <CancelIcon /></span>)
                    );

                }
            },
        },
        {
            name: "Provisioned Status",
            options: {
                filter: false,
            },
        },
        {
            name: "Provisioned Method",
            options: {
                filter: false,
            },
        },
        {
            name: "Provisioned Date & Time",
            options: {
                filter: false,
            },
        },
        {
            name: "Active/Inactive",
            options: {
                filter: false,
            },
        },
        {
            name: "Last Communicated Time",
            options: {
                filter: false,
            },
        },
        {
            name: "Certificate Status",
            options: {
                filter: false,
            },
        },
        {
            name: "Certificate Renewal",
            options: {
                filter: false,
                customBodyRender: (value) => {
                    return (
                       <div>
                        <button className="addbtn" onClick={handleClickRenew}>
                            Renew
                        </button>
                        <ToastContainer />
                        </div>
                    )
                }
            },
        },
        {
            name: "Deprovisioning",
            options: {
                filter: false,
                customBodyRender: (value) => {
                    return (
                        <div>
                        <button className="addbtn" onClick={handleClickDeprov}>
                            Deprovision
                        </button>
                        <ToastContainer />
                        </div>
                    )
                }
            },
        },
        {
            name: "OS Version",
            options: {
                filter: false,
            },
        },
        {
            name: "OS Action",
            options: {
                filter: false,
                customBodyRender: (value, tableMeta, updateValue) => {
                    return (
                        <div className="cusslectcolumn">
                            <select value={state.value} onChange={handleChange}>
                                <option value="">Select Action</option>
                                <option value="update">Update</option>
                                <option value="Schedule">Schedule</option>
                            </select>
                            {state.value === 'update' &&
                                <div id="showThisDiv" >
                                    <Button size="small" variant="text" className="updatebtn">update</Button>
                                </div>}
                            {state.value === 'Schedule' &&
                                <div id="showThisDiv" className="customdatepicker">
                                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                                        <DemoContainer components={['MobileDateTimePicker']} >
                                            <MobileDateTimePicker defaultValue={todayAtNoon} minDateTime={todayAt3PM} />
                                        </DemoContainer>
                                    </LocalizationProvider>
                                </div>}
                        </div>
                    );
                }
            },
        },
        {
            name: "Encryption/Decryption Version",
            options: {
                filter: false,
            },
        },
        {
            name: "Encrypt/Decrypt Action",
            options: {
                filter: false,
                customBodyRender: (value, tableMeta, updateValue) => {
                    return (
                        <div className="cusslectcolumn">
                            <select value={encryptdecrypt.value} onChange={encryptdecrypthandleChange}>
                                <option value="">Select Action</option>
                                <option value="update">Update</option>
                                <option value="Schedule">Schedule</option>
                            </select>
                            {encryptdecrypt.value === 'update' &&
                                <div id="showThisDiv" >
                                    <Button size="small" variant="text" className="updatebtn">update</Button>
                                </div>}
                            {encryptdecrypt.value === 'Schedule' &&
                                <div id="showThisDiv" className="customdatepicker">
                                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                                        <DemoContainer components={['MobileDateTimePicker']} >
                                            <MobileDateTimePicker defaultValue={todayAtNoon} minDateTime={todayAt3PM} />
                                        </DemoContainer>
                                    </LocalizationProvider>
                                </div>}
                        </div>
                    );
                }
            },
        },
        {
            name: "Firmware Version",
            options: {
                filter: false,
            },
        },
        {
            name: "Firmware Action",
            options: {
                filter: false,
                customBodyRender: (value, tableMeta, updateValue) => {
                    return (
                        <div className="cusslectcolumn">
                            <select value={firmware.value} onChange={firmwarehandleChange}>
                                <option value="">Select Action</option>
                                <option value="update">Update</option>
                                <option value="Schedule">Schedule</option>
                            </select>
                            {firmware.value === 'update' &&
                                <div id="showThisDiv">
                                    <Button size="small" variant="text" className="updatebtn">update</Button>
                                </div>}
                            {firmware.value === 'Schedule' &&
                                <div id="showThisDiv" className="customdatepicker">
                                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                                        <DemoContainer components={['MobileDateTimePicker']} >
                                            <MobileDateTimePicker defaultValue={todayAtNoon} minDateTime={todayAt3PM} />
                                        </DemoContainer>
                                    </LocalizationProvider>
                                </div>}
                        </div>
                    );
                }
            },
        },

    ];

    const data = val;
    
       /*[ ['255726763609', 'Levono Gateway', '128.12.26.01', '3305', 'Hyderabd', 'Mqtt/ TCP-IP', 'temperature profile', 'Demo', 'Online', 'yes', 'Symmetric', '23-06-2023 23:45:34', 'Active', '23-06-2023 23:45:34', 'Expired', 'renew', 'Deprovision', 'Ubuntu', 'update', 'TLS 1.0/1.4/SSL', 'update', '23.45.67', 'Update'],

        ['255452676386', 'Dell Gateway', '128.12.26.99', '8080', 'Mysuru', 'AMQP', 'Pressure profile', 'Demo', 'Offline', 'No', 'x.509', '23-06-2023 23:45:34', 'InActive', '23-06-2023 23:45:34', 'Active', 'renew', 'Deprovision', 'Ubuntu', 'update', 'TLS 1.0/1.4/SSL', 'update', '23.45.45', 'Update'],

        ['455572676836', 'HP Gateway', '128.12.26.98', '8000', 'Pune', 'UDP', 'Pressure profile', 'Demo', 'Online', 'yes', 'Symmetric', '23-06-2023 23:45:34', 'Active', '23-06-2023 23:45:34', 'Expired', 'renew', 'Deprovision', 'windows 12.3.45', 'update', 'TLS 1.0/1.4/SSL', 'update', '23.12.67', 'Update'],

        ['565572676366', 'Asus Gateway', '198.12.26.01', '3205', 'Chennai', 'TCP', 'temperature profile', 'Demo', 'Offline', 'No', 'Symmetric', '23-06-2023 23:45:34', 'InActive', '23-06-2023 23:45:34', 'Active', 'renew', 'Deprovision', 'Ubuntu', 'update', 'TLS 1.0/1.4/SSL', 'update', '23.45.88', 'Update'],

        ['254626766436', 'Levono Gateway', '198.12.26.01', '3405', 'Delhi', 'Mqtt', 'Pressure profile', 'Demo', 'Online', 'yes', 'default', '23-06-2023 23:45:34', 'Active', '23-06-2023 23:45:34', 'Expired', 'renew', 'Deprovision', 'windows 12.3.45', 'update', 'TLS 1.0/1.4/SSL', 'update', '23.45.77', 'Update'],

        ['465572674636', 'Dell Gateway', '198.12.26.98', '3315', 'Bangalore', 'TCP-IP', 'temperature profile', 'Demo', 'Offline', 'No', ' x.509', '23-06-2023 23:45:34', 'InActive', '23-06-2023 23:45:34', 'Active', 'renew', 'Deprovision', 'windows 12.3.45', 'update', 'TLS 1.0/1.4/SSL', 'update', '23.66.67', 'Update'],

        ['466557267636', 'HP Gateway', '128.12.26.94', '3306', 'Mumbai', 'Mqtt/ TCP-IP', 'Pressure profile', 'Demo', 'Online', 'yes', 'default', '23-06-2023 23:45:34', 'Active', '23-06-2023 23:45:34', 'Active', 'renew', 'Deprovision', 'Ubuntu', 'update', 'TLS 1.0/1.4/SSL', 'update', '45.45.67', 'Update'],

        ['246457544316', 'Levono Gateway', '198.12.26.01', '8081', 'Hyderabd', 'Mqtt/ TCP-IP', 'Pressure profile', 'Demo', 'Offline', 'No', 'x.509', '23-06-2023 23:45:34', 'InActive', '23-06-2023 23:45:34', 'Expired', 'renew', 'Deprovision', 'windows 12.3.45', 'update', 'TLS 1.0/1.4/SSL', 'update', '11.45.67', 'Update'],

    ];*/

    return (
        <div className="devicetable configtable">
            <MUIDataTable data={data} columns={columns} options={options} title={<div><h2>Gateway Configuration Data</h2> </div>} />
        </div>
    );
}

export default ConfigurationTable;
