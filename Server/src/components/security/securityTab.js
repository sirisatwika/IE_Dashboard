import React from "react";
import { Grid } from "@mui/material";
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Dropdownselect from '../page/dropdownselect';
import SecurityCredential from './security-credential/SecurityCredentials';
import General from "./general/general";
import AccessControl from "./access-control/accesscontrol";

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

function SecurityTab() {

    const [value, setValue] = React.useState(0);
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <React.Fragment>
            <Grid container spacing={2}>
                <Grid item lg={12} md={12} sm={12} xs={12}>
                    <div className='config-tab'>
                        <Dropdownselect />
                        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example" className='tabs-configuration'>
                            <Tab label="Security Credentials" {...a11yProps(0)} />
                            <Tab label="General" {...a11yProps(1)} />
                            <Tab label="Access Control" {...a11yProps(2)} />
                        </Tabs>
                        <TabPanel value={value} index={0}>
                            <SecurityCredential />
                        </TabPanel>
                        <TabPanel value={value} index={1}>
                            <General/>
                        </TabPanel>
                        <TabPanel value={value} index={2}>
                            <AccessControl/>
                        </TabPanel>
                    </div>
                </Grid>
            </Grid>
        </React.Fragment>
    )
}
export default SecurityTab;