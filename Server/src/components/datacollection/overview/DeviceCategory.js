import React from 'react'
import { Card, Grid } from "@mui/material";
import Deviceprotocol from '../../datacollection/overview/chart-protocol';
import CardBlock from '../../datacollection/overview/cards';
import Subnets from '../../datacollection/overview/chart-subnet';
import ZoneSubnetTab from '../../datacollection/overview/zonesubnetTab';

function DeviceCategory() {
  return (
    <React.Fragment>
      <div style={{ paddingBottom: '15px' }}>
        <Grid container spacing={1}>
          <Grid item lg={12} md={12} sm={12} xs={12}>
            <CardBlock />
          </Grid>
        </Grid>
      </div>

      <div style={{ paddingBottom: '15px' }}>
        <Grid container spacing={2}>
          <Grid item lg={4} md={4} sm={12} xs={12}>
            <Card className='card-configuration'>
              <h2 class="card_title">IOT Device Zone/Subnet</h2>
              <ZoneSubnetTab />
            </Card>
          </Grid>
          <Grid item lg={4} md={4} sm={12} xs={12}>
            <Card className='card-configuration'>
              <h2 class="card_title">IOT Device Protocol</h2>
              <Deviceprotocol />
            </Card>
          </Grid>
          <Grid item lg={4} md={4} sm={12} xs={12}>
            <Card className='card-configuration'>
              <h2 class="card_title">IOT Device/Sensors</h2>
              <Subnets />
            </Card>
          </Grid>
        </Grid>
      </div>
    </React.Fragment>
  )
}
export default DeviceCategory;