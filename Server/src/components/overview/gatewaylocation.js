import React, { useState } from "react";
import { Card, Grid } from "@mui/material";
import ReactTooltip from "react-tooltip";
import WorldMap from "../page/Map";
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import "../page/BarMap.css"

function GatewayLocation() {

    const [content, setContent] = useState("");

    //Selct Network Dropdown
    const [selectnetwork, setNetwork] = React.useState('');
    const handleChange = (event) => {
        setNetwork(event.target.value);
    };

    //select Location Dropdown 
    const [selectlocation, setLocation] = React.useState('');
    const locationChange = (event) => {
        setLocation(event.target.value);
    };


    return (
        <React.Fragment>
            <div style={{ paddingBottom: '15px' }}>
                <Grid container spacing={2}>
                    <Grid item lg={12} md={12} sm={12} xs={12}>
                        <Card className="card-wrapper">
                            <h2 className="card_title">Edge Gateway Location</h2>
                            <div className="mapselect">
                                <div className="selectmap">
                                    <FormControl sx={{ m: 1, minWidth: 135 }} size="small">
                                        <InputLabel id="demo-select-small">Select Network</InputLabel>
                                        <Select labelId="demo-select-small" id="demo-select-small" value={selectnetwork} label="Select Network" onChange={handleChange}>
                                            <MenuItem value="">
                                                <em>None</em>
                                            </MenuItem>
                                            <MenuItem value={10}>Network-01</MenuItem>
                                            <MenuItem value={20}>Network-02</MenuItem>
                                            <MenuItem value={30}>Network-03</MenuItem>
                                            <MenuItem value={40}>Network-04</MenuItem>
                                        </Select>
                                    </FormControl>
                                </div>
                                <div className="selectmap">
                                    <FormControl sx={{ m: 1, minWidth: 135 }} size="small">
                                        <InputLabel id="demo-select-small">Select Location</InputLabel>
                                        <Select labelId="demo-select-small" id="demo-select-small" value={selectlocation} label="Select Location" onChange={locationChange}>
                                            <MenuItem value="">
                                                <em>None</em>
                                            </MenuItem>
                                            <MenuItem value={10}>Location-01</MenuItem>
                                            <MenuItem value={20}>Location-02</MenuItem>
                                            <MenuItem value={30}>Location-03</MenuItem>
                                            <MenuItem value={40}>Location-04</MenuItem>
                                        </Select>
                                    </FormControl>
                                </div>
                            </div>
                            <WorldMap setTooltipContent={setContent} />
                            <ReactTooltip className='tooltip' backgroundColor='#fff'>{content}</ReactTooltip>
                        </Card>
                    </Grid>
                </Grid>
            </div>
        </React.Fragment>
    )
}
export default GatewayLocation;