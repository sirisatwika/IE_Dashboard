import React from "react";
import { Grid, Card } from "@mui/material";
import CardBlock from './cards';
import GatewayCountgraph from "./chart-gatewaycount";
import MapApp from "./map";
// import OverviewRadial from "./chart-Radialchart";
// import GatewayCount from "./gatewaycount";
// import DowntimCauses from "../datacollection/devices/downtimecauses";
// import GatewayLocation from "./gatewaylocation";
// import Subnets from "./chart-subnet";
import "../page/BarMap.css"
import OverviewDeviceprotocol from "./chart-protocol";

function OverviewData() {
    return (
        <React.Fragment>
            <Grid container spacing={2}>
                <Grid item lg={12} md={12} sm={12} xs={12}>
                    <CardBlock />
                </Grid>
                <Grid item lg={8} md={8} sm={12} xs={12}>
                    {/* <GatewayLocation /> */}
                    <Card className="card-wrapper">
                        <h2 className="card_title">Edge Gateway Location</h2>
                        <MapApp />
                    </Card>
                </Grid>
                <Grid item lg={4} md={4} sm={12} xs={12}>
                    {/* <GatewayCount /> */}
                    <Card className="card-wrapper">
                        <h2 className="card_title">Edge Gateway Count</h2>
                        <GatewayCountgraph />
                    </Card>
                </Grid>
                <Grid item lg={4} md={4} sm={12} xs={12}>
                    <Card className="card-wrapper">
                        <h2 className="card_title">Gateway Protocol</h2>
                        <OverviewDeviceprotocol />
                    </Card>
                </Grid>
            </Grid>
        </React.Fragment>
    )
}
export default OverviewData;