import React from "react";
import { Grid, Card } from "@mui/material";
import DeviceSpeedometer from "./device-speedometer";
import TelementaryTabledata from "./telementaryTabledata";

function TelementryData() {
    return (
        <React.Fragment>
            <Grid container spacing={1}>
                <Grid item lg={12} md={12} sm={12} xs={12}>
                    <Card className="card-wrapper">
                        <DeviceSpeedometer />
                    </Card>
                </Grid>
                <Grid item lg={12} md={12} sm={12} xs={12}>
                    <Card className="card-wrapper">
                        <TelementaryTabledata />
                    </Card>
                </Grid>
            </Grid>
        </React.Fragment>
    )
}
export default TelementryData;