import React from "react";
import { Card, Grid } from "@mui/material";
import Barchart from "../page/BarChart";

function GatewayCount() {
    return (
        <React.Fragment>
            <div style={{ paddingBottom: '15px' }}>
                <Grid container spacing={2}>
                    <Grid item lg={12} md={12} sm={12} xs={12}>
                        <Card className="card-wrapper">
                            <h2 className="card_title">Edge Gateway Count</h2>
                            <Barchart />
                        </Card>
                    </Grid>
                </Grid>
            </div>
        </React.Fragment>
    )
}
export default GatewayCount;