import MUIDataTable from "mui-datatables";
import React, { useState } from "react";
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


// import TableCell from '@mui/material/TableCell';
// import TableHead from '@mui/material/TableHead';
// import TableRow from '@mui/material/TableRow';

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

//Date time picker validation 
const todayAtNoon = dayjs().set('hour', 12).startOf('hour');
const todayAt3PM = dayjs().set('hour', 15).startOf('hour');

function ConfigIOTTable() {


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
            options: {
                colspan: true,
                filter: true,
                sort: true,
                filterOptions: { fullWidth: true },
            }
        },
        {
            name: "Gateway Name",
            options: {
                filter: false,
            },
        },
        {
            name: "Iot Device ID",
            options: {
                filter: false,
            },
        },
        {
            name: "IOT Device Name",
            options: {
                filter: false,
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
            name: "Associated Gateway Profile",
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
            name: "Active/Inactive ",
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
            name: "Unprovisionong IoT Device",
            options: {
                filter: false,
                customBodyRender: (value) => {
                    return (
                        <button className="addbtn">
                            Unprovision
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

    const data = [
        ['2557267636', 'Lenovo Gateway', '276397', 'temp', '192.168.45.34', '1502', 'Hyderabad', 'Pressure Profile', 'modbus', 'demo', 'Online', 'Yes', 'Symmetric', '06/04/2023 12:34:23:45', 'Active', '06/04/2023 12:36:34:45', 'unsecure Provisioning', 'secure Provisioning', 'unprovisioning IoT device', 'Renew'],

        ['2557267636', 'windows', '637827832', 'temp', '192.168.45.34', '1502', 'Mysuru', 'Pressure Profile', 'modbus', 'demo', 'Online', 'Yes', 'x.509', '06/04/2023 12:34:23:45', 'Active', '06/04/2023 12:36:34:45', 'unsecure Provisioning', 'secure Provisioning', 'unprovisioning IoT device', 'Renew'],

        ['2557267636', 'Lenovo Gateway', '276397', 'temp', '192.168.45.34', '1502', 'Pune', 'Pressure Profile', 'modbus', 'demo', 'Online', 'Yes', 'Symmetric', '06/04/2023 12:34:23:45', 'Active', '06/04/2023 12:36:34:45', 'unsecure Provisioning', 'secure Provisioning', 'unprovisioning IoT device', 'Renew'],

        ['2557267636', 'windows', '276397', 'temp', '192.168.45.34', '1502', 'Chennai', 'Pressure Profile', 'modbus', 'demo', 'Online', 'Yes', 'x.509', '06/04/2023 12:34:23:45', 'Active', '06/04/2023 12:36:34:45', 'unsecure Provisioning', 'secure Provisioning', 'unprovisioning IoT device', 'Renew'],

        ['2557267636', 'Lenovo Gateway', '276397', 'temp', '192.168.45.34', '1502', 'Bangalore', 'Pressure Profile', 'modbus','demo', 'Online', 'Yes', 'Symmetric', '06/04/2023 12:34:23:45', 'Active', '06/04/2023 12:36:34:45', 'unsecure Provisioning', 'secure Provisioning', 'unprovisioning IoT device', 'Renew'],

        ['2557267636', 'windows', '276397', 'temp', '192.168.45.34', '1502', 'Hyderabad', 'Pressure Profile', 'modbus','demo', 'Online', 'Yes', 'x.509', '06/04/2023 12:34:23:45', 'Active', '06/04/2023 12:36:34:45', 'unsecure Provisioning', 'secure Provisioning', 'unprovisioning IoT device', 'Renew'],

    ];

    return (
        <div className="devicetable configtable">
            <MUIDataTable data={data} columns={columns} options={options} title={<div><h2>IoT Device Configiuration Data</h2></div>}  /> 
            
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