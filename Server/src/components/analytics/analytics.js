import React from "react";
import { Grid } from "@mui/material";
import AnalyticsTab from "./analyticsTab";

function Analytics() {
    return (
        <React.Fragment>
            <Grid container spacing={2}>
                <Grid item lg={12} md={12} sm={12} xs={12}>
                    <div className='p_title'>
                        <h1>Analytics</h1>
                    </div>
                    <AnalyticsTab/>
                </Grid>
            </Grid>
        </React.Fragment>
    )
}
export default Analytics;