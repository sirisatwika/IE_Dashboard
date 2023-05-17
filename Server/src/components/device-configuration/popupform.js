import React from "react";
import TextField from '@mui/material/TextField';
import { FormControl } from "@mui/material";
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import Button from '@mui/material/Button';

const deviceoption = [
    { label: "Device Service-01", value: "device_service1" },
    { label: "Device Service-02", value: "device_service2" },
    { label: "Device Service-03", value: "device_service3" },
    { label: "Device Service-04", value: "device_service4" },
]

function PopupForm() {

    //for select device dropdown
    const [deviceservice, setDevice] = React.useState('');
    const handleChange = (event) => {
        setDevice(event.target.value);
    };

    //for select menthod dropdown
    const [method, setMethod] = React.useState('');
    const handlemethodChange = (event) => {
        setMethod(event.target.value);
    };

    return (
        <React.Fragment>
            <form id="Gateway-details" className="Gatewayforms">
                <FormControl fullWidth variant="outlined">
                    <TextField id="standard-basic" label="Gateway Id" variant="standard" />
                </FormControl>
                <FormControl fullWidth variant="outlined">
                    <TextField id="standard-basic" label="Gateway Name" variant="standard" />
                </FormControl>
                <FormControl fullWidth variant="outlined">
                    <TextField id="standard-basic" label="IP/Mac Address" variant="standard" />
                </FormControl>
                <FormControl fullWidth variant="outlined">
                    <TextField id="standard-basic" label="Gateway Id" variant="standard" />
                </FormControl>
                <FormControl fullWidth variant="standard">
                    <InputLabel id="demo-simple-select-standard-label">Device Service/Protocol</InputLabel>
                    <Select labelId="demo-simple-select-standard-label" id="demo-simple-select-standard"
                        value={deviceservice} onChange={handleChange} label="Device Service/Protocol">
                        <MenuItem value="">
                            <em>None</em>
                        </MenuItem>
                        {deviceoption.map((item) => (
                            <MenuItem key={item.value} value={item.value}>
                                {item.label}
                            </MenuItem>
                        ))}
                    </Select>
                </FormControl>

                <FormControl fullWidth variant="standard">
                    <label>Device Profile</label>
                    <input type="file" />
                </FormControl>

                <FormControl fullWidth variant="standard">
                    <InputLabel id="demo-simple-select-standard-label">Method</InputLabel>
                    <Select labelId="demo-simple-select-standard-label" id="demo-simple-select-standard"
                        value={method} onChange={handlemethodChange} label="Method">
                        <MenuItem value="">
                            <em>None</em>
                        </MenuItem>
                        {deviceoption.map((item) => (
                            <MenuItem key={item.value} value={item.value}>
                                {item.label}
                            </MenuItem>
                        ))}
                    </Select>
                </FormControl>
                <FormControl fullWidth variant="outlined">
                    <TextField id="standard-basic" label="Location" variant="standard" />
                </FormControl>
                <div className="formbtnblock">
                <Button variant="contained" color="primary" type="Submit" className="cusbutnrest">
                     Reset
                </Button>
                <Button variant="contained" color="primary" type="Submit" className="cusbtnsubmit">
                      Create Device
                </Button>
                </div>

            </form>

        </React.Fragment>
    )
}
export default PopupForm;