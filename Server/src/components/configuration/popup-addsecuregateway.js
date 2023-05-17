import React from "react";
import TextField from '@mui/material/TextField';
import { FormControl, Select, MenuItem, InputLabel } from "@mui/material";
import Button from '@mui/material/Button';
import { useState, useEffect } from "react";
import axios from 'axios';
import {ToastContainer,toast} from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
// import InputLabel from '@mui/material/InputLabel';
// import MenuItem from '@mui/material/MenuItem';
// import Select from '@mui/material/Select';

function PopupAddSecuregateway() {

     const [services, setServices] = useState([]);
     const [formData,setFormData] = useState({
                "apiVersion": 'v2',
                "device": {
                    "name": '',
                    "description": '',
                    "adminState": 'UNLOCKED',
                    "operatingState": 'UP',
                    "labels": [],
                    "location": '',
                    "serviceName": '',
                    "profileName": '',
                    "autoEvents": [],
                    "protocols": {
                    },
                    "notify": true,
                    "authMethod":'',
                    "path":''
                }
            });
     const [isTextBoxEnabled, setIsTextBoxEnabled] = useState(false);
     
     const [devname, setDevname] = useState('');
     const [devdesc, setDevdesc] = useState('');
     const [devlabel, setDevlabel] = useState('');
     const [devloc, setDevloc] = useState('');
     const [devservice, setDevservice] = useState('');
     const [devprofile, setDevprofile] = useState('');
     const [devprotocol, setDevprotocol] = useState('');
     const [devhost, setDevhost] = useState('');
     const [devport, setDevport] = useState('');
     const [devauth, setDevauth] = useState('');
     const [devpath, setDevpath] = useState('');
     

  useEffect(() => {
    axios.get('http://localhost:5000/provision/api/v1/service/list').then((response) => {
      console.log(response.data)
      setServices(response.data);
    });
  }, []);
  
  const [ips, setIps] = useState([]);
  useEffect(() => {
    axios.get('http://localhost:5000/network/api/v1/ips/35c192ce9b6faf61').then((response) => {
      console.log(response.data)
      setIps(response.data['ips']);
    });
  }, []);
  
    //Device Service Name Dropdown
    const [servicename, setdeviceservice] = React.useState('');
    const deviceservicehandleChange = (event) => {
        setdeviceservice(event.target.value);
    };
//
    //Protocol Dropdown
    const [protocol, setprotocol] = React.useState('');
    const protocolhandleChange = (event) => {
        console.log(event.target.value);
        setprotocol(event.target.value);
        console.log(protocol);
        setIsTextBoxEnabled(event.target.value === 60);
    };

    //Authentication Method Dropdown
    const [authmethod, setauthmethod] = React.useState('');
    const authmethodhandleChange = (event) => {
        setauthmethod(event.target.value);
    };


    //IP Address Dropdown
    const [ipaddress, setipaddress] = React.useState('');
    const ipaddresshandleChange = (event) => {
        setipaddress(event.target.value);
    };
    
    const [data,setData] = useState(null);
    const fetchData = async() =>{
       try{
         setFormData();
         const response = await axios.post('http://localhost:5000/provision/api/v1/gateway/provision',formData);
         return response.data;
       }catch(error){
         console.error(error);
         throw new Error("Failed!");
       }
    }
    const handleClick = async() => {
     try {
       const result = await fetchData();
       setData(result);
       toast.success(result);
       }catch(error){
       toast.error(error.message);
      }
      }
      
    const devnameChange = (event) => {
       setDevname(event.target.value);
       console.log(devname);
       console.log(event.target.value);
    }
    
    const devdescChange = (event) => {
       setDevdesc(event.target.value);
       console.log(devdesc);
       console.log(event.target.value);
    }
    
    const devlabelChange = (event) => {
       setDevlabel(event.target.value);
       console.log(devlabel);
       console.log(event.target.value);
    }
    
    const devlocChange = (event) => {
       setDevloc(event.target.value);
       console.log(devloc);
       console.log(event.target.value);
    }
    
    const devprofileChange = (event) => {
       setDevprofile(event.target.value);
       console.log(devprofile);
       console.log(event.target.value);
    }
          
    return (
        <React.Fragment>
            <form id="Gateway-details" className="Gatewayforms">

                <FormControl fullWidth variant="outlined">
                    <TextField onChange={devnameChange} id="standard-basic" label="Gateway Name" variant="standard" required />
                </FormControl>

                <FormControl fullWidth variant="outlined">
                    <TextField onChange={devdescChange} id="standard-basic" label="Gateway Description" variant="standard" />
                </FormControl>

                <FormControl fullWidth variant="outlined">
                    <TextField onChange={devlabelChange} id="standard-basic" label="Labels" variant="standard" />
                </FormControl>

                <FormControl fullWidth variant="outlined">
                    <TextField onChange={devlocChange} id="standard-basic" label="Location" variant="standard" />
                </FormControl>

                <FormControl fullWidth variant="outlined" required>
                    <InputLabel id="demo-simple-select-label">Device Service Name</InputLabel>
                    <Select variant="standard" labelId="demo-simple-select-label" value={servicename} label="Device Service Name" onChange={deviceservicehandleChange} required >
                         {
                           services.map(service => (
                               <MenuItem key={service} value={service}>
                                 {service}
                               </MenuItem>
                            )
                           )
                         }
                    </Select>
                </FormControl>

                <FormControl fullWidth variant="outlined">
                    <TextField id="standard-basic" label="Gateway Profile Name" variant="standard" required />
                </FormControl>

                <FormControl fullWidth variant="outlined" required>
                    <InputLabel id="demo-simple-select-label">Protocol</InputLabel>
                    <Select variant="standard" labelId="demo-simple-select-label" value={protocol} label="Protocol" onChange={protocolhandleChange} required >
                        <MenuItem value={60}>Custom</MenuItem>
                        <MenuItem value={10}>device-mqtt</MenuItem>
                        <MenuItem value={20}>device-rest</MenuItem>
                        <MenuItem value={30}>device-virtual</MenuItem>
                        <MenuItem value={40}>device-modbus-tcp</MenuItem>
                        <MenuItem value={50}>device-modbus-rtu</MenuItem>
                    </Select>
                    <br/>
                    <input type = "text" disabled = {!isTextBoxEnabled}/>
                </FormControl>

                <FormControl fullWidth variant="outlined" required>
                    <InputLabel id="demo-simple-select-label">IP Addres</InputLabel>
                    <Select variant="standard" labelId="demo-simple-select-label" value={ipaddress} label="IP Address" onChange={ipaddresshandleChange} required >
                       {
                           ips.map(ip => (
                               <MenuItem key={ip} value={ip}>
                                 {ip}
                               </MenuItem>
                            )
                           )
                         }
                         </Select>
                </FormControl>

                <FormControl fullWidth variant="outlined">
                    <TextField id="standard-basic" label="Port No" variant="standard" required />
                </FormControl>

                <FormControl fullWidth variant="outlined">
                    <TextField id="standard-basic" label="Certificate Path/Key Path" variant="standard" required />
                </FormControl>

                <FormControl fullWidth variant="outlined" required>
                    <InputLabel id="demo-simple-select-label">Authentication Method</InputLabel>
                    <Select variant="standard" labelId="demo-simple-select-label" value={authmethod} label="Authentication Method" onChange={authmethodhandleChange} required >
                        <MenuItem value=""> <em>None</em> </MenuItem>
                        <MenuItem value='509'>X:509</MenuItem>
                        <MenuItem value='Symmetric'>Symmetric</MenuItem>
                    </Select>
                    {authmethod === '509' &&
                        <div id="showThisDiv" style={{ marginTop: '10px' }}>
                            <Button onClick={handleClick} variant="contained" className="authbtn">Generate Certificate</Button>
                            <ToastContainer />
                        </div>}

                    {authmethod === 'Symmetric' &&
                        <div id="showThisDiv" style={{ marginTop: '10px' }}>
                            <Button onClick={handleClick} variant="contained" className="authbtn">Generate Key</Button>
                            <ToastContainer />
                        </div>}
                </FormControl>

                <div className="formbtnblock">
                    <Button variant="contained" color="primary" type="Submit" className="cusbutnrest">
                        Reset
                    </Button>
                    <Button variant="contained" color="primary" type="Submit" className="cusbtnsubmit">
                        Configure
                    </Button>
                </div>
            </form>
        </React.Fragment>
    )
}
export default PopupAddSecuregateway;

