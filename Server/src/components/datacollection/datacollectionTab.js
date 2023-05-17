import React from "react";
import { Grid, Card } from "@mui/material";
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import DeviceCategory from "../datacollection/overview/DeviceCategory";
import "./telementrydata/device.css";
import DeviceLogs from "./devicelogs/devicelogs";
// import DeviceSpeedometer from "./telementrydata/device-speedometer";
// import DeviceStats from "./telementrydata/device-stats";
import GatewayData from "../datacollection/gatewaydata/gatewaydata";
import IOTDeviceData from "./IOTdevicedata/IOTdevicedata";
import TelementryData from "./telementrydata/telementarydata";


function TabPanel(props) {
    const { children, value, index, ...other } = props;
    return (
        <div role="tabpanel" hidden={value !== index} id={`simple-tabpanel-${index}`} aria-labelledby={`simple-tab-${index}`} {...other} >
            {value === index && (
                <Box sx={{ p: 3 }}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
};

function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

function DatacollectionTab() {




    //First Tab configuration
    const [value, setValue] = React.useState(0);
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <React.Fragment>
            <Grid container spacing={2}>
                <Grid item lg={12} md={12} sm={12} xs={12}>
                    <div className='config-tab'>
                        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example" className='tabs-configuration'>
                            <Tab label="Overview" {...a11yProps(0)} />
                            <Tab label="Gateway Data" {...a11yProps(1)} id="SDDD" />
                            <Tab label="IOT Device Data" {...a11yProps(2)} />
                            <Tab label="Telementry Data" {...a11yProps(3)} />
                            <Tab label="Device Logs" {...a11yProps(4)} />
                        </Tabs>
                        <TabPanel value={value} index={0}>
                            <DeviceCategory />
                        </TabPanel>
                        <TabPanel value={value} index={1} >
                            <GatewayData />
                        </TabPanel>
                        <TabPanel value={value} index={2}>
                            <IOTDeviceData/>
                        </TabPanel>
                        <TabPanel value={value} index={3}>
                            <TelementryData/>
                        </TabPanel>
                        <TabPanel value={value} index={4}>
                            <Card className='card-configuration' >
                                <h2 class="card_title">Device Logs</h2>
                                <DeviceLogs />
                            </Card>
                        </TabPanel>
                    </div>
                </Grid>
            </Grid>
        </React.Fragment>
    )
}
export default DatacollectionTab;
