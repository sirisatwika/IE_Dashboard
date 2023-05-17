import React from 'react';
import { Grid, Card } from "@mui/material";
// import ConfigTable from './configtable';
import PopupBlock from './popupblock';
import "./deviceconfig.css";
import DeviceTable from '../configuration/devicetable';


function DeviceConfigdata() {
    return (
        <React.Fragment>
            <Grid container spacing={2}>
                <Grid item lg={12} md={12} sm={12} xs={12}>
                    <Card className='card-configuration' style={{position:'relative'}}>
                        <h2 class="card_title">Gateways</h2>
                        <div className='popupdiv'>
                            <PopupBlock/>
                        </div>
                     {/* <ConfigTable/> */}
                     <DeviceTable/>
                    </Card>
                </Grid>
            </Grid>
        </React.Fragment>
    )
}
export default DeviceConfigdata;