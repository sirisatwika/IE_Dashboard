import React from 'react'
import { Card, Grid } from "@mui/material";
import MemoryUsage from './MemoryUsage';
import DataIO from './DataIO';
import Issues from './Issues';
import OverallPerformance from './OverallPerformance';

function Monitoringdata() {
  return (
    <React.Fragment>
         <div style={{ paddingBottom: '15px' }}>
            <Grid container spacing={2}>
                <Grid item lg={6} md={6} sm={12} xs={12}>
                    <Card className='card-configuration'>
                        <h2 class="card_title">Memory Usage</h2>
                        <MemoryUsage/>
                    </Card>
                </Grid>
                <Grid item lg={6} md={6} sm={12} xs={12}>
                    <Card className='card-configuration'>
                        <h2 class="card_title">Data Input and Output</h2>
                        <DataIO/>
                    </Card>
                </Grid>
            </Grid>
         </div>
         <div style={{ paddingBottom: '15px' }}>
            <Grid container spacing={2}>
                <Grid item lg={6} md={6} sm={12} xs={12}>
                    <Card className='card-configuration'>
                        <h2 class="card_title">Overall Performance</h2>
                        <OverallPerformance/>
                    </Card>
                </Grid>
                <Grid item lg={6} md={6} sm={12} xs={12}>
                    <Card className='card-configuration'>
                        <h2 class="card_title">Issues</h2>
                        <Issues/>
                    </Card>
                </Grid>
            </Grid>
         </div>
    </React.Fragment>
  )
}
export default Monitoringdata;