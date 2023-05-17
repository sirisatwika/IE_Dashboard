import React, { useState } from "react";
import { Grid, Card } from "@mui/material";
import ReactTooltip from "react-tooltip";
import WorldMap from "./deviceMap";
import DowntimCauses from "./downtimecauses";
import DeviceLogs from "./devicelogs";
import "../devices/device.css";
import DeviceSpeedometer from "./device-speedometer";
import DeviceStats from "./device-stats";

function Device() {
    const [content, setContent] = useState("");
    return (
        <React.Fragment>
            <div style={{ paddingBottom: '15px' }}>
                <Grid container spacing={2}>
                    <Grid item lg={12} md={12} sm={12} xs={12}>
                        <div className="devicestatus">
                            <h2><span>Device Status: </span> Active</h2>
                            <p>Last Updated: 20-01-2023 19:56</p>
                        </div>
                    </Grid>
                </Grid>
            </div>
            <div style={{ paddingBottom: '15px' }}>
                <Grid container spacing={2}>
                    <Grid item lg={4} md={4} sm={12} xs={12}>
                        <Card className='card-configuration' >
                            <WorldMap setTooltipContent={setContent} />
                            <ReactTooltip className='tooltip' backgroundColor='#fff'>{content}</ReactTooltip>
                        </Card>
                    </Grid>
                    <Grid item lg={4} md={4} sm={12} xs={12}>
                        <Card className='card-configuration'>
                            <h2 class="card_title">Downtime Causes</h2>
                            <DowntimCauses />
                        </Card>
                    </Grid>
                    <Grid item lg={4} md={4} sm={12} xs={12}>
                        <Card className='card-configuration' >
                            <h2 class="card_title">Device Logs</h2>
                            <DeviceLogs />
                        </Card>
                    </Grid>
                </Grid>
            </div>
            <div style={{ paddingBottom: '15px' }}>
                <Grid container spacing={2}>
                    <Grid item lg={12} md={12} sm={12} xs={12}>
                        <Card className='card-configuration' >
                            <div>
                                <DeviceSpeedometer />
                            </div>
                            <div>
                                <DeviceStats />
                            </div>
                        </Card>
                    </Grid>
                </Grid>
            </div>
        </React.Fragment>
    )
}
export default Device;