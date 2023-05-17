import React from "react";
import { Grid, Card } from "@mui/material";
import LineChart from "./linechart";
// import PerformanceChart from "./overallperformance";
import SliderSizes from "./slider";
// import Popupblock from "./popupblock";
// import AnalyticsTable from "./Table";
import '../analytics/analytics.css';

function Datavisuals() {
    return (
        <React.Fragment>
            <div style={{ paddingBottom: '15px' }}>
                <Grid container spacing={1}>
                    <Grid item lg={12} md={12} sm={12} xs={12}>
                        <Card className='card-configuration' >
                            <SliderSizes />
                        </Card>
                    </Grid>
                </Grid>
            </div>

            <div style={{ paddingBottom: '15px' }}>
                <Grid container spacing={1}>
                    <Grid item lg={12} md={12} sm={12} xs={12}>
                        <Card className='card-configuration'>
                            <LineChart/>
                        </Card>
                    </Grid>
                </Grid>
            </div>

            {/* <div style={{ paddingBottom: '15px' }}>
                <Grid container spacing={2}>
                    <Grid item lg={4} md={4} sm={12} xs={12}>
                        <Card className='card-configuration'>
                            <SliderSizes />
                        </Card>
                    </Grid>
                    <Grid item lg={4} md={4} sm={12} xs={12}>
                        <Card className='card-configuration'>
                            <Popupblock />
                        </Card>
                    </Grid>
                    <Grid item lg={4} md={4} sm={12} xs={12}>
                        <Card className='card-configuration'>
                            <AnalyticsTable />
                        </Card>
                    </Grid>
                </Grid>
            </div> */}
        </React.Fragment>
    )
}
export default Datavisuals;
