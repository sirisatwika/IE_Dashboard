import React from "react";
import { Card } from "@mui/material";
import LinearProgress from '@mui/material/LinearProgress';

function StatusWidgets() {
    return (
        <React.Fragment>
            <Card className='card-configuration'>
                <div className='network-configuration'>
                    <div className='networkconfig-aligned'>
                        <span className='networkcongig-span'> Connected SSID</span>
                        <span>LTTS</span>
                    </div>
                    <div className='networkconfig-aligned'>
                        <span className='networkcongig-span'>Network Speed</span>
                        <span>100Mbps</span>
                    </div>
                    <div className='networkconfig-aligned'>
                        <span className='networkcongig-span'>Current SSID</span>
                        <span>255.255.11.135</span>
                    </div>
                    <div className='networkconfig-aligned'>
                        <span className='networkcongig-span'>Last updated</span>
                        <span>Just now</span>
                    </div>
                    <div className='networkconfig-aligned'>
                        <span className='networkcongig-span'>Data used</span>
                        <span>50% of 10GB</span>
                    </div>
                </div>
                <LinearProgress variant="determinate" value={50} background-Color='#3F51B5' style={{ height: '10px', borderRadius: '5px', backgroundColor: '#CCCCCC', color: '#3F51B5' }} />
            </Card>
        </React.Fragment>
    )
}
export default StatusWidgets;