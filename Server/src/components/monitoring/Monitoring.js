import React from 'react'
import { Grid } from "@mui/material";
import Monitoringdata from './Monitoringdata';

function Monitoring() {
  return (
    <React.Fragment>
         <Grid container spacing={2}>
                <Grid item lg={12} md={12} sm={12} xs={12}>
                    <div className='p_title'>
                        <h1>Monitoring</h1>
                    </div>
                    <Monitoringdata/>
                </Grid>
            </Grid>
    </React.Fragment>
  )
}
export default Monitoring;