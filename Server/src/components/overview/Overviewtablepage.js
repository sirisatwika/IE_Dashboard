import React from "react";
import { Grid, Card } from "@mui/material";
import GatewayData from "../datacollection/gatewaydata/gatewaydata";

function OverviewTablepage() {
    return (
        <React.Fragment>
            <Grid container spacing={2}>
                <Grid item lg={12} md={12} sm={12} xs={12}>
                    <Card className="card-wrapper" style={{display:'grid'}}>
                        <GatewayData/>
                    </Card>
                </Grid>
            </Grid>
        </React.Fragment>
    )
}
export default OverviewTablepage;