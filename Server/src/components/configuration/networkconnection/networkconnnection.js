import React from "react";
import { Grid, Card } from "@mui/material";
import StatusWidgets from "./statuswidgets";
import NetworkTraffic from "./networktraffic";
import NetworkUsage from "./networkusage";
// import AvailableNetwok from "./availablenetwork";
// import OtherNetworks from "./othernetwork";
import GatewayConfig from "./gatewayconfigguration";

function NetworkConnection() {
    return (
        <React.Fragment>
            <div style={{ paddingBottom: '15px' }}>
                <Grid container spacing={2}>
                    <Grid item lg={6} md={6} sm={12} xs={12}>
                        <StatusWidgets />
                    </Grid>
                    <Grid item lg={6} md={6} sm={12} xs={12}>
                        <Card className='card-configuration'>
                            <h2 class="card_title">Network Traffic</h2>
                            <NetworkTraffic />
                        </Card>
                    </Grid>
                </Grid>
            </div>
            {/* <div style={{ paddingBottom: '15px' }}>
                <Grid container spacing={2}>
                    <Grid item lg={6} md={6} sm={12} xs={12}>
                        <Card className='card-configuration'>
                            <h2 class="card_title">Available Networks</h2>
                            <AvailableNetwok />
                        </Card>
                    </Grid>
                    <Grid item lg={6} md={6} sm={12} xs={12}>
                        <Card className='card-configuration'>
                            <h2 class="card_title">Other Networks</h2>
                            <OtherNetworks />
                        </Card>
                    </Grid>
                </Grid>
            </div> */}
            <div style={{ paddingBottom: '15px' }}>
                <Grid container spacing={2}>
                <Grid item lg={6} md={6} sm={12} xs={12}>
                        <Card className='card-configuration'>
                            <h2 class="card_title">Network Usage</h2>
                            <NetworkUsage />
                        </Card>
                    </Grid>
                    <Grid item lg={6} md={6} sm={12} xs={12}>
                        <Card className='card-configuration' style={{position:'relative'}}>
                            <h2 class="card_title">Gateway Network Configuration</h2>
                            <GatewayConfig/>
                        </Card>
                    </Grid>
                </Grid>
            </div>
        </React.Fragment>
    )
}
export default NetworkConnection;