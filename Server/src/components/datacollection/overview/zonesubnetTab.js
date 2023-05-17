import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import RadialZone from './chart-Radialchart-zone';
import RadialSubnets from './chart-Radialchart-subnets';
import PublicOutlinedIcon from '@mui/icons-material/PublicOutlined';
import CloudSyncOutlinedIcon from '@mui/icons-material/CloudSyncOutlined';
import "../../datacollection/datacollection.css";

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

function ZoneSubnetTab() {

    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <React.Fragment>
            <div className='datatabs'>
                <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
                    <Tab icon={<PublicOutlinedIcon />} iconPosition="start" label="Zone" />
                    <Tab icon={<CloudSyncOutlinedIcon />} iconPosition="start" label="Subnet" />
                </Tabs>
                <TabPanel value={value} index={0}>
                    <RadialZone />
                </TabPanel>
                <TabPanel value={value} index={1}>
                    <RadialSubnets />
                </TabPanel>
            </div>

        </React.Fragment>
    );
}
export default ZoneSubnetTab;