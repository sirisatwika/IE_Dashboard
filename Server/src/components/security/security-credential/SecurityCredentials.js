import React from 'react'
import { Card, Grid, Link } from "@mui/material";
import EnhancedTable from "./MFA";
import Certificate from "./Certificate";


function SecurityCredential() {
  return (
    <React.Fragment>
      <Grid container spacing={2}>
        <Grid item lg={12} md={12} sm={12} xs={12}>
          <div style={{ paddingBottom: '15px' }}>
            <Card className='card-configuration' style={{ minHeight: 'auto' }}>
              <h2 style={{ color: '#3F51B5' }}>Password Settings</h2>
              <div className="passwordsetting">
                <p><span>Last Sign In</span> 14-02-2023 20:10</p>
                <p><span>Last Updated</span> 14-02-2023 20:10</p>
              </div>
              <Link><h2 style={{ color: '#3F51B5' }}>UpdatePassword</h2></Link>
            </Card>
          </div>
        </Grid>
        <Grid item lg={12} md={12} sm={12} xs={12}>
          <div style={{ paddingBottom: '15px' }}>
            <h1>Multi Factor Authentication</h1>
            <Card className='card-configuration'>
              <EnhancedTable/>
            </Card>
          </div>
        </Grid>
        <Grid item lg={12} md={12} sm={12} xs={12}>
          <div style={{ paddingBottom: '15px' }}>
            <h1>Certificate</h1>
            <Card className='card-configuration' >
              <Certificate />
            </Card>
          </div>
        </Grid>
      </Grid>
    </React.Fragment>
  )
}
export default SecurityCredential;