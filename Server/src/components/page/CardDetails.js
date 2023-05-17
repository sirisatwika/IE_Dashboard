import React from "react";
import { Card, Grid } from "@mui/material";
import '../page/Card.css'
function CardDetails() {

  return (
    <React.Fragment>
      <div style={{ paddingBottom: '15px' }}>
        <Grid container spacing={2}>
          <Grid item lg={12} md={12} sm={12} xs={12}>
            <Card className="card_wrapper">
              <div className="card_content">
                <h1>Welcome to Intelligent Edge...!</h1>
                {/* <p>Number of Views</p> */}
              </div>
              {/* <div className="card_count">
                <h3>102</h3>
              </div> */}
            </Card>
          </Grid>
          {/* <Grid item lg={6} md={6} sm={12} xs={12}>
          <Card className="card_wrapper">
              <div className="card_content">
                <h1>Device Count</h1>
                <p>Number of devices connected</p>
              </div>
              <div className="card_count">
                <h3>102</h3>
              </div>
            </Card>
          </Grid> */}
        </Grid>
      </div>
    </React.Fragment>
  )
}
export default CardDetails;