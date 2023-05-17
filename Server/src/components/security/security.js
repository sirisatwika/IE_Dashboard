import React from "react";
import { Grid } from "@mui/material";
import SecurityTab from "./securityTab";

function Security(){
    return(
        <React.Fragment>
            <Grid container spacing={2}>
                <Grid item lg={12} md={12} sm={12} xs={12}>
             <div className='p_title'>
                <h1>Security</h1>
            </div>
                    <SecurityTab />
                </Grid>
            </Grid>
        </React.Fragment>
    )
}
export default Security;