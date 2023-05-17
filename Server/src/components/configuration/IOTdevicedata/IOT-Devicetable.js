import React, { useState, useEffect } from "react";
import axios from "axios";
import MUIDataTable from "mui-datatables";
import "../devicetable.css";
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import CancelIcon from '@mui/icons-material/Cancel';
import PopupForm from "../popupform";
import PopupFormSecuregateway from "../popup-securegateway";
import dayjs from 'dayjs';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { MobileDateTimePicker } from '@mui/x-date-pickers/MobileDateTimePicker';
import Button from '@mui/material/Button';


import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";



//Date time picker validation 
const todayAtNoon = dayjs().set('hour', 12).startOf('hour');
const todayAt3PM = dayjs().set('hour', 15).startOf('hour');

function ConfigIOTTable() {
	
	let [val, setVal] = useState([]);
	useEffect(()=>{
	axios.get('http://172.30.122.183:5000/gatewaydata/api/v1/name/getgatewayconfigdetailsoverview/all')
	.then(response =>{
	console.log(response);
	setVal(response.data);
	})
	.catch(console.error);
	},[]);
	
	let [valiotd, setValiotd] = useState([]);
	useEffect(()=>{
	axios.get('http://172.30.122.183:5000/iotdevicedata/api/v1/name/getdeviceconfigdetails/all')
	.then(response2 =>{
	console.log(response2);
	setValiotd(response2.data);
	})
	.catch(console.error);
	},[]);
	

    //Renew action dropdown
    const [state, setState] = useState({ value: "Select Action" });
    function handleChange(event) {
        setState({ value: event.target.value });
    }

    //Default gateway Popup
    const [open, setOpen] = React.useState(false);
    //secure gateway popup
    const [Secureopen, securesetOpen] = React.useState(false);

    //Default gateway Popup
    const handleClickOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };

    //secure gateway Popup
    const secureClickOpen = () => {
        securesetOpen(true);
    };
    const secureClose = () => {
        securesetOpen(false)
    };

    const columns = [

        {
            name: "Gateway ID",
        },
        {
            name: "Gateway Name",
        },
         {
            name: "Gateway IP"
        },
        {
            name: "Unsecure Provisioning",
            options: {
                filter: false,
                customBodyRender: (value) => {
                    return (
                        <button onClick={handleClickOpen} className="addbtn">
                            Add
                        </button>
                    )
                }
            },
        },
        {
            name: "Secure Provisioning",
            options: {
                filter: false,
                customBodyRender: (value) => {
                    return (
                        <button onClick={secureClickOpen} className="addbtn">
                            Add
                        </button>
                    )
                }
            },
        },
        {
            name: "Renewal",
            options: {
                filter: false,
                customBodyRender: (value) => {
                    return (
                        <div className="cusslectcolumn">
                            <select value={state.value} onChange={handleChange}>
                                <option value="">Select Action</option>
                                <option value="Renew">Renew</option>
                                <option value="Schedule">Schedule</option>
                            </select>
                            {state.value === 'Renew' &&
                                <div id="showThisDiv" >
                                    <Button size="small" variant="text" className="updatebtn">Renew Now</Button>
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
                    )
                }
            },
        },
    ];

    const data = val;

   function createData(IotDeviceID, IOTDeviceName, IPAddress, PortNumber, location, AssociatedServiceProtocol, AssociatedGatewayProfile, description, Status, ProvisionedStatus, ProvisionedMethod, ProvisionedDateTime, ActiveInactive, LastCommunicatedTime, UnprovisionongIoTDevice) {
        return { IotDeviceID, IOTDeviceName, IPAddress, PortNumber, location, AssociatedServiceProtocol, AssociatedGatewayProfile, description, Status, ProvisionedStatus, ProvisionedMethod, ProvisionedDateTime, ActiveInactive, LastCommunicatedTime, UnprovisionongIoTDevice };
    }

    //const rows = val.map(function(fn){ return fn();});
    const rows = valiotd;
    /*[
        createData('276397', 'temp', '192.168.45.34', '1502', 'Hyderabad', 'Pressure Profile', 'modbus', 'demo', 'Online', 'Yes', 'Symmetric', '06 / 04 / 2023 12: 34: 23: 45', 'Active', '06 / 04 / 2023 12: 36: 34: 45', 'unprovisioning IoT device'),
        createData('637827832', 'temp', '192.168.45.34', '1502', 'Mysuru', 'Pressure Profile', 'modbus', 'demo', 'Online', 'Yes', 'x.509', '06/04/2023 12:34:23:45', 'Active', '06/04/2023 12:36:34:45', 'unprovisioning IoT device'),
        createData('276397', 'temp', '192.168.45.34', '1502', 'Pune', 'Pressure Profile', 'modbus', 'demo', 'Online', 'Yes', 'Symmetric', '06/04/2023 12:34:23:45', 'Active', '06/04/2023 12:36:34:45', 'unprovisioning IoT device'),
        createData('276397', 'temp', '192.168.45.34', '1502', 'Chennai', 'Pressure Profile', 'modbus', 'demo', 'Online', 'Yes', 'x.509', '06/04/2023 12:34:23:45', 'Active', '06/04/2023 12:36:34:45', 'unprovisioning IoT device'),
        createData('276397', 'temp', '192.168.45.34', '1502', 'Bangalore', 'Pressure Profile', 'modbus', 'demo', 'Online', 'Yes', 'Symmetric', '06/04/2023 12:34:23:45', 'Active', '06/04/2023 12:36:34:45', 'unprovisioning IoT device')
    ];*/

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
        },
        filter: true,
        onFilterChange: (changedColumn, filterList) => {
            console.log(changedColumn, filterList);
        },
        selectableRows: "single",
        filterType: "dropdown",
        // responsive: "scrollMaxHeight",
        rowsPerPage: 10,
        expandableRows: true,
        renderExpandableRow: (rowData, rowMeta) => {
            console.log(rowData, rowMeta);
            return (
                <React.Fragment>
                    <tr>
                        <td colSpan={6}>
                            <TableContainer component={Paper}>
                                <Table style={{ minWidth: "750" }} aria-label="simple table" className="innertable">
                                    <TableHead>
                                        <TableRow>
                                            <TableCell>Iot Device ID</TableCell>
                                            <TableCell>IOT Device Name</TableCell>
                                            <TableCell>IP Address</TableCell>
                                            <TableCell>Port Number</TableCell>
                                            <TableCell>Location</TableCell>
                                            <TableCell>Associated Service/Protocol</TableCell>
                                            <TableCell>Associated Gateway Profile</TableCell>
                                            <TableCell>Description</TableCell>
                                            <TableCell>Status</TableCell>
                                            <TableCell>Provisioned Status</TableCell>
                                            <TableCell>Provisioned Method</TableCell>
                                            <TableCell>Provisioned Date & Time</TableCell>
                                            <TableCell>Active/Inactive</TableCell>
                                            <TableCell>Last Communicated Time</TableCell>
                                            <TableCell>Unprovisionong IoT Device</TableCell>
                                        </TableRow>
                                    </TableHead>
                                    <TableBody>
                                        {rows.map(row => (
                                            <TableRow>
                                                <TableCell>{row.IotDeviceID}</TableCell>
                                                <TableCell>{row.IOTDeviceName}</TableCell>
                                                <TableCell>{row.IPAddress}</TableCell>
                                                <TableCell>{row.PortNumber}</TableCell>
                                                <TableCell align="right">{row.location}</TableCell>
                                                <TableCell align="right">{row.AssociatedServiceProtocol}</TableCell>
                                                <TableCell align="right">{row.AssociatedGatewayProfile}</TableCell>
                                                <TableCell align="right">{row.description}</TableCell>
                                                <TableCell>{row.Status}</TableCell>
                                                <TableCell>{row.ProvisionedStatus}</TableCell>
                                                <TableCell>{row.ProvisionedMethod}</TableCell>
                                                <TableCell>{row.ProvisionedDateTime}</TableCell>
                                                <TableCell>{row.ActiveInactive}</TableCell>
                                                <TableCell>{row.LastCommunicatedTime}</TableCell>
                                                <TableCell><button className="addbtn">
                                                    Unprovision
                                                </button></TableCell>
                                            </TableRow>
                                        ))}
                                    </TableBody>
                                </Table>
                            </TableContainer>
                        </td>
                    </tr>
                </React.Fragment>
            );
        },
        page: 1
    }

    return (
        <div className="devicetable configtable">
            <MUIDataTable data={data} columns={columns} options={options} title={<div><h2>IoT Device Configiuration Data</h2></div>} />

            {/* unSecure Provisioning column pop-up */}

            <Dialog open={open} onClose={handleClose} aria-labelledby="alert-dialog-title" aria-describedby="alert-dialog-description" className="custom_dialog">
                <div className="closebtn" onClick={handleClose}><CancelIcon /></div>
                <DialogTitle id="alert-dialog-title" className="form_title">
                    Default - Gateway Configuration
                </DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                        <PopupForm />
                    </DialogContentText>
                </DialogContent>
            </Dialog>

            {/* Secure Provisioning column pop-up */}

            <Dialog open={Secureopen} onClose={secureClose} aria-labelledby="alert-dialog-title" aria-describedby="alert-dialog-description" className="custom_dialog">
                <div className="closebtn" onClick={secureClose}><CancelIcon /></div>
                <DialogTitle id="alert-dialog-title" className="form_title">
                    Secure - Gateway Configuration
                </DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                        <PopupFormSecuregateway />
                    </DialogContentText>
                </DialogContent>
            </Dialog>
        </div>
    );
}

export default ConfigIOTTable;
