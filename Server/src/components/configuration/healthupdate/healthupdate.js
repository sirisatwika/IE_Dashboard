import React from "react";
import { Grid, Card } from "@mui/material";
import LinearProgress from '@mui/material/LinearProgress';
import Typography from '@mui/material/Typography';
import LoopIcon from '@mui/icons-material/Loop';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import DangerousIcon from '@mui/icons-material/Dangerous';
import RestoreIcon from '@mui/icons-material/Restore';
import Button from '@mui/material/Button';
import "../healthupdate/healthupdate.css";

function HealthUpdate() {
    return (
        <React.Fragment>
            <Grid container spacing={2}>
                <Grid item lg={12} md={12} sm={12} xs={12}>
                    <div className="healthstatus">
                        <p><span>Device Health Status:</span> Average</p>
                    </div>
                </Grid>
                <Grid item lg={12} md={12} sm={12} xs={12}>
                    <Card className='card-configuration'>
                        <h2 class="card_title">Peding Updates</h2>
                        <div className="allupdateblock">
                            <p className="title">Quality Updates(11)</p>
                            <div className="updatestatus">
                                <div className="updateicons">
                                    <LoopIcon />
                                    <div className="updateprogess">
                                        <LinearProgress variant="determinate" value={72} background-Color='#3F51B5' style={{ height: '10px', borderRadius: '10px', backgroundColor: '#e3e3e3', color: '#3F51B5' }} />
                                        <Typography style={{ position: "absolute", color: "#333", right: "0%", }}>
                                            72% Completed
                                        </Typography>
                                    </div>
                                </div>
                                <div className="updatelist">
                                    <CheckCircleIcon className="success" /> 7 Successful
                                </div>
                                <div className="updatelist">
                                    <DangerousIcon className="failed" /> 1 Failed
                                </div>
                                <div className="updatelist">
                                    <RestoreIcon className="pending" /> 6 Pending
                                </div>
                                <div className="updatebtn">
                                    Update
                                </div>
                            </div>
                        </div>
                        <div className="allupdateblock">
                            <p className="title">Driver Updates(25)</p>
                            <div className="updatestatus">
                                <div className="updateicons">
                                    <LoopIcon />
                                    <div className="updateprogess">
                                        <LinearProgress variant="determinate" value={50} background-Color='#3F51B5' style={{ height: '10px', borderRadius: '10px', backgroundColor: '#e3e3e3', color: '#3F51B5' }} />
                                        <Typography style={{ position: "absolute", color: "#333", right: "0%", }}>
                                            50% Completed
                                        </Typography>
                                    </div>
                                </div>
                                <div className="updatelist">
                                    <CheckCircleIcon className="success" /> 11 Successful
                                </div>
                                <div className="updatelist">
                                    <DangerousIcon className="failed" /> 3 Failed
                                </div>
                                <div className="updatelist">
                                    <RestoreIcon className="pending" /> 10 Pending
                                </div>
                                <div className="updatebtn">
                                    Update
                                </div>
                            </div>
                        </div>
                        <div className="allupdateblock">
                            <p className="title">Other Updates(25)</p>
                            <div className="updatestatus">
                                <div className="updateicons">
                                    <LoopIcon />
                                    <div className="updateprogess">
                                        <LinearProgress variant="determinate" value={50} background-Color='#3F51B5' style={{ height: '10px', borderRadius: '10px', backgroundColor: '#e3e3e3', color: '#3F51B5' }} />
                                        <Typography style={{ position: "absolute", color: "#333", right: "0%", }}>
                                            50% Completed
                                        </Typography>
                                    </div>
                                </div>
                                <div className="updatelist">
                                    <CheckCircleIcon className="success" /> 11 Successful
                                </div>
                                <div className="updatelist">
                                    <DangerousIcon className="failed" /> 3 Failed
                                </div>
                                <div className="updatelist">
                                    <RestoreIcon className="pending" /> 10 Pending
                                </div>
                                <div className="updatebtn">
                                    Update
                                </div>
                            </div>
                        </div>
                        <div className="allupdateblock">
                            <p className="title">Definition Updates(25)</p>
                            <div className="updatestatus">
                                <div className="updateicons">
                                    <LoopIcon />
                                    <div className="updateprogess">
                                        <LinearProgress variant="determinate" value={90} background-Color='#3F51B5' style={{ height: '10px', borderRadius: '10px', backgroundColor: '#e3e3e3', color: '#3F51B5' }} />
                                        <Typography style={{ position: "absolute", color: "#333", right: "0%", }}>
                                            90% Completed
                                        </Typography>
                                    </div>
                                </div>
                                <div className="updatelist">
                                    <CheckCircleIcon className="success" />21 Successful
                                </div>
                                <div className="updatelist">
                                    <DangerousIcon className="failed" /> 0 Failed
                                </div>
                                <div className="updatelist">
                                    <RestoreIcon className="pending" /> 3 Pending
                                </div>
                                <div className="updatebtn">
                                    Update
                                </div>
                            </div>
                        </div>

                        <div className="updateallbtn"><Button variant="contained">Update All</Button></div>
                    </Card>
                </Grid>
            </Grid>
        </React.Fragment>
    )
}
export default HealthUpdate;