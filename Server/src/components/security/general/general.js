import React from "react";
import { Card, Grid } from "@mui/material";
import LoopIcon from '@mui/icons-material/Loop';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import ReportIcon from '@mui/icons-material/Report';
// import '../security/Security.css';
import '../Security.css'


function General() {
    return (
        <React.Fragment>
            <React.Fragment>
                <div style={{ paddingBottom: '15px' }}>
                    <Grid container spacing={2}>
                        <Grid item lg={12} md={12} sm={12} xs={12}>
                            <Card className='card-configuration' style={{ position: 'relative' }}>
                                <h2 class="card_title">Security Recommendations <span className="cusribbon">4</span></h2>
                                <div className="loopiocns">
                                    <LoopIcon />
                                </div>
                                <div className="recomndlist">
                                    <ul>
                                        <li>
                                            <div className="sugicons">
                                                <CheckCircleIcon className="success" />
                                            </div>
                                            <div className="sugesttext">
                                                <h3>Root user has MFA.</h3>
                                                <p>Having Multi-Factor Authentication (MFA) for the root user improves security for this account.</p>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="sugicons">
                                                <CheckCircleIcon className="success" />
                                            </div>
                                            <div className="sugesttext">
                                                <h3>You have MFA.</h3>
                                                <p>Having Multi-Factor Authentication (MFA) for the root user improves security for this account.</p>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="sugicons">
                                                <ReportIcon className="alerts" />
                                            </div>
                                            <div className="sugesttext">
                                                <h3>Your user, geeta@abc.com, does not have any active access keys that have been unused for more than a year.</h3>
                                                <p>Deactivating or deleting unused access keys improves security.</p>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="sugicons">
                                                <ReportIcon className="danger" />
                                            </div>
                                            <div className="sugesttext">
                                                <h3>Update your access permission.</h3>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </Card>
                        </Grid>
                    </Grid>
                </div>
                <div style={{ paddingBottom: '15px' }}>
                    <Grid container spacing={2}>
                        <Grid item lg={12} md={12} sm={12} xs={12}>
                            <Card className='card-configuration'>
                                <h2 class="card_title">Resources</h2>
                                <div className="resourceblocks">
                                    <div className="r_blocks">
                                        <h3>Groups</h3>
                                        <p>01</p>
                                    </div>
                                    <div className="r_blocks">
                                        <h3>Users</h3>
                                        <p>03</p>
                                    </div>
                                    <div className="r_blocks">
                                        <h3>Policies</h3>
                                        <p>03</p>
                                    </div>
                                </div>
                            </Card>
                        </Grid>
                    </Grid>
                </div>
            </React.Fragment>
        </React.Fragment>
    )
}
export default General;