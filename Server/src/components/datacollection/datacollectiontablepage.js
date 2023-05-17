import React from "react";
import { Grid, Card } from "@mui/material";
import IOTdeviceTable from "./IOTdevicedata/IOTdeviceTable";

function DatacollectionTablepage() {
    return (
        <React.Fragment>
            <Grid container spacing={2}>
                <Grid item lg={12} md={12} sm={12} xs={12}>
                    <Card className="card-wrapper" style={{display:'grid'}}>
                      <IOTdeviceTable/>
                    </Card>
                </Grid>
            </Grid>
        </React.Fragment>
    )
}
export default DatacollectionTablepage;