import React from "react";
import { Card, Grid } from "@mui/material";
import GroupTable from "./group-table";
// import UserTable from "./user-table";
// import PoliciesTable from "./policies-table";


import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

import '../Security.css'

function AccessControl() {

    const [age, setAge] = React.useState('');

    const handleChange = (event) => {
        setAge(event.target.value);
    };
    return (
        <React.Fragment>
            <div style={{ paddingBottom: '15px' }}>
                <Grid container spacing={2}>
                    <Grid item lg={12} md={12} sm={12} xs={12}>
                        <Card className='card-configuration' style={{ position: 'relative' }}>
                            {/* <h2 class="card_title">Access Control</h2> */}
                            <div className="accessdiv">
                                <FormControl fullWidth  size="small">
                                    <InputLabel id="demo-simple-select-label">Access Control</InputLabel>
                                    <Select labelId="demo-simple-select-label" id="demo-simple-select" value={age} label="Access Control" onChange={handleChange} >
                                        <MenuItem value={10}>Groups</MenuItem>
                                        <MenuItem value={20}>Users</MenuItem>
                                        <MenuItem value={30}>Policies</MenuItem>
                                    </Select>
                                </FormControl>
                                <GroupTable />
                            </div>
                            {/* <UserTable/>
                            <PoliciesTable/> */}
                        </Card>
                    </Grid>
                </Grid>
            </div>
        </React.Fragment>
    )
}
export default AccessControl;