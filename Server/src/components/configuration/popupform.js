import React from "react";
import TextField from '@mui/material/TextField';
import { FormControl } from "@mui/material";
import Button from '@mui/material/Button';

function PopupForm() {
    return (
        <React.Fragment>
            <form id="Gateway-details" className="Gatewayforms">
                <FormControl fullWidth variant="outlined">
                    <TextField id="standard-basic" label="URL Name" variant="standard" />
                </FormControl>
                <FormControl fullWidth variant="outlined">
                    <TextField id="standard-basic" label="IP Address" variant="standard" />
                </FormControl>
                <FormControl fullWidth variant="outlined">
                    <TextField id="standard-basic" label="URL" variant="standard" />
                </FormControl>
                <div className="formbtnblock">
                <Button variant="contained" color="primary" type="Submit" className="cusbutnrest">
                     Reset
                </Button>
                <Button variant="contained" color="primary" type="Submit" className="cusbtnsubmit">
                      Add
                </Button>
                </div>
            </form>
        </React.Fragment>
    )
}
export default PopupForm;