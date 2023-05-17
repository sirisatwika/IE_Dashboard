import React from 'react';
import { Grid } from "@mui/material";
import OverviewData from './overviewdata';

function Overview() {
    return (
        <React.Fragment>
            <Grid container spacing={2}>
                <Grid item lg={12} md={12} sm={12} xs={12}>
            <div className='p_title'>
                <h1>Dashboard</h1>
            </div>
                    <OverviewData />
                </Grid>
            </Grid>
        </React.Fragment>
    )
}
export default Overview;