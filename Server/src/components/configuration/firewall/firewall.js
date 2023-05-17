import React from "react";
import { Grid, Card } from "@mui/material";
import "../firewall/firewall.css";
// import InboundTable from "./inboundtable";
import OutboundTable from "./outboundtable";
import Mattab from "./mattable";

function Firewall() {
    return (
        <React.Fragment>
            <div style={{ paddingBottom: '10px' }}>
                <Grid container spacing={2}>
                    <Grid item lg={6} md={6} sm={12} xs={12}>
                        <div className="text">
                            <h3>Security Id: 1A1210E</h3>
                        </div>
                    </Grid>
                    <Grid item lg={6} md={6} sm={12} xs={12}>
                        <div className="text">
                            <p>Last Updated: 20-01-2023 19:56 </p>
                        </div>
                    </Grid>
                </Grid>
            </div>
            <div style={{ paddingBottom: '15px' }}>
                <Grid container spacing={2}>
                    <Grid item lg={6} md={6} sm={12} xs={12}>
                        <Card className='card-configuration'>
                            {/* <InboundTable /> */}
                            <Mattab/>
                        </Card>
                    </Grid>
                    <Grid item lg={6} md={6} sm={12} xs={12}>
                        <Card className='card-configuration'>
                            <OutboundTable />
                        </Card>
                    </Grid>
                </Grid>
            </div>
        </React.Fragment>
    )
}
export default Firewall;