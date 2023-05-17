import React from "react";
import { Grid, Card } from "@mui/material";
import RadioButtonCheckedIcon from '@mui/icons-material/RadioButtonChecked';
import DataMeasured from "./datameasured";
import EndPoint from "./endpoint";
import "../deviceconnectivity/deviceconnectivity.css";

function DeviceConnectivity(){
    return(
        <React.Fragment>
           <div style={{ paddingBottom: '10px' }}>
                <Grid container spacing={2}>
                    <Grid item lg={12} md={12} sm={12} xs={12}>
                        <div className="provisionedstatus">
                            <h3> <span>Provisioned Status:</span> <RadioButtonCheckedIcon/> Connected</h3>
                        </div>
                    </Grid>
                </Grid>
            </div>
            <div style={{ paddingBottom: '15px' }}>
                <Grid container spacing={2}>
                    <Grid item lg={12} md={12} sm={12} xs={12}>
                        <Card className='card-configuration' style={{position:'relative'}}>
                            <h2 class="card_title">End Point</h2>
                            <EndPoint/>
                        </Card>
                    </Grid>
                </Grid>
            </div>
            <div style={{ paddingBottom: '15px' }}>
                <Grid container spacing={2}>
                    <Grid item lg={12} md={12} sm={12} xs={12}>
                        <Card className='card-configuration' style={{position:'relative'}}>
                        <h2 class="card_title">Data Measured</h2>
                        <DataMeasured/>
                        </Card>
                    </Grid>
                </Grid>
            </div>
            
        </React.Fragment>
    )
}
export default DeviceConnectivity;