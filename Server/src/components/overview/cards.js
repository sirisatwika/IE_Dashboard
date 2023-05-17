import React from 'react';
import {useState, useEffect} from "react";
import axios from "axios";
import { Card, Grid } from "@mui/material";
import { NavLink } from 'react-router-dom';
import LoopIcon from '@mui/icons-material/Loop';
import OnlinePredictionIcon from '@mui/icons-material/OnlinePrediction';
import PortableWifiOffIcon from '@mui/icons-material/PortableWifiOff';
import SyncLockOutlinedIcon from '@mui/icons-material/SyncLockOutlined';
import SyncDisabledOutlinedIcon from '@mui/icons-material/SyncDisabledOutlined';
import WifiOutlinedIcon from '@mui/icons-material/WifiOutlined';
import WifiOffOutlinedIcon from '@mui/icons-material/WifiOffOutlined';
import DevicesOtherIcon from '@mui/icons-material/DevicesOther';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import "./cardBlock.css";


function CardBlock() {
 let [tcnt, setTcnt] = useState([]);
	useEffect(()=>{
	axios.get('http://172.30.122.183:5000/gatewaydata/api/v1/count/total')
	.then(response =>{
	console.log(response);
	setTcnt(response.data);
	})
	.catch(console.error);
	},[]);
	
	let [prov, setProv] = useState([]);
	useEffect(()=>{
	axios.get('http://172.30.122.183:5000/gatewaydata/api/v1/count/provisioned')
	.then(response =>{
	console.log(response);
	setProv(response.data);
	})
	.catch(console.error);
	},[]);
	
	let [unprov, setUnprov] = useState([]);
	useEffect(()=>{
	axios.get('http://172.30.122.183:5000/gatewaydata/api/v1/count/unprovisioned')
	.then(response =>{
	console.log(response);
	setUnprov(response.data);
	})
	.catch(console.error);
	},[]);
	
	let [onlinec, setOnlinec] = useState([]);
	useEffect(()=>{
	axios.get('http://172.30.122.183:5000/gatewaydata/api/v1/count/online')
	.then(response =>{
	console.log(response);
	setOnlinec(response.data);
	})
	.catch(console.error);
	},[]);
	
	let [offlinec, setOfflinec] = useState([]);
	useEffect(()=>{
	axios.get('http://172.30.122.183:5000/gatewaydata/api/v1/count/offline')
	.then(response =>{
	console.log(response);
	setOfflinec(response.data);
	})
	.catch(console.error);
	},[]);
	
	let [activec, setActivec] = useState([]);
	useEffect(()=>{
	axios.get('http://172.30.122.183:5000/gatewaydata/api/v1/count/active')
	.then(response =>{
	console.log(response);
	setActivec(response.data);
	})
	.catch(console.error);
	},[]);
	
	let [inactivec, setInactivec] = useState([]);
	useEffect(()=>{
	axios.get('http://172.30.122.183:5000/gatewaydata/api/v1/count/inactive')
	.then(response =>{
	console.log(response);
	setInactivec(response.data);
	})
	.catch(console.error);
	},[]);
	

    return (
        <React.Fragment>
            <div>
                <Grid container spacing={1}>
                    <Grid item lg={12} md={12} sm={12} xs={12}>
                    <div className='contblock'>
                            <h2>Gateway</h2>
                        </div>
                        <div className='card_block'>
                            <Card className="card_wrappers bgbox1">
                                <div className="cards_title">
                                    <LoopIcon />
                                </div>
                                <div className='card_icons'>
                                    <DevicesOtherIcon />
                                </div>
                                <div className="card_content">
                                    <h2>{JSON.stringify(tcnt)}</h2>
                                    <p>Total Gateway</p>
                                </div>
                                <NavLink to="/gatewaydata">
                                    <div className='linkcard'>View <ArrowForwardIcon /></div>
                                </NavLink> 
                            </Card>
                            <Card className="card_wrappers bgbox2">
                                    <div className="cards_title">
                                        <LoopIcon />
                                    </div>
                                    <div className='card_icons'>
                                        <SyncLockOutlinedIcon />
                                    </div>
                                    <div className="card_content">
                                        <h2>{JSON.stringify(prov)}</h2>
                                        <p>Provisioned</p>
                                    </div>
                                <NavLink to="/gatewaydata">
                                    <div className='linkcard'>View <ArrowForwardIcon /></div>
                                </NavLink>
                            </Card>
                            <Card className="card_wrappers bgbox3">
                                    <div className="cards_title">
                                        <LoopIcon />
                                    </div>
                                    <div className='card_icons'>
                                        <SyncDisabledOutlinedIcon />
                                    </div>
                                    <div className="card_content">
                                        <h2>{JSON.stringify(unprov)}</h2>
                                        <p>UnProvisioned</p>
                                    </div>
                                <NavLink to="/gatewaydata">
                                    <div className='linkcard'>View <ArrowForwardIcon /></div>
                                </NavLink>
                            </Card>
                            <Card className="card_wrappers bgbox4">
                                    <div className="cards_title">
                                        <LoopIcon />
                                    </div>
                                    <div className='card_icons'>
                                        <OnlinePredictionIcon />
                                    </div>
                                    <div className="card_content">
                                        <h2>{JSON.stringify(onlinec)}</h2>
                                        <p>Online</p>
                                    </div>
                                <NavLink to="/gatewaydata">
                                    <div className='linkcard'>View <ArrowForwardIcon /></div>
                                </NavLink>
                            </Card>
                            <Card className="card_wrappers bgbox5">
                                    <div className="cards_title">
                                        <LoopIcon />
                                    </div>
                                    <div className='card_icons'>
                                        <PortableWifiOffIcon />
                                    </div>
                                    <div className="card_content">
                                        <h2>{JSON.stringify(offlinec)}</h2>
                                        <p>Offline</p>
                                    </div>
                                <NavLink to="/gatewaydata">
                                    <div className='linkcard'>View <ArrowForwardIcon /></div>
                                </NavLink>
                            </Card>
                            <Card className="card_wrappers bgbox6">
                                    <div className="cards_title">
                                        <LoopIcon />
                                    </div>
                                    <div className='card_icons'>
                                        <WifiOutlinedIcon />
                                    </div>
                                    <div className="card_content">
                                        <h2>{JSON.stringify(activec)}</h2>
                                        <p>Active</p>
                                    </div>
                                <NavLink to="/gatewaydata">
                                    <div className='linkcard'>View <ArrowForwardIcon /></div>
                                </NavLink>
                            </Card>
                            <Card className="card_wrappers bgbox7">
                                    <div className="cards_title">
                                        <LoopIcon />
                                    </div>
                                    <div className='card_icons'>
                                        <WifiOffOutlinedIcon />
                                    </div>
                                    <div className="card_content">
                                        <h2>{JSON.stringify(inactivec)}</h2>
                                        <p>Inactive</p>
                                    </div>
                                <NavLink to="/gatewaydata">
                                    <div className='linkcard'>View <ArrowForwardIcon /></div>
                                </NavLink>
                            </Card>
                        </div>
                    </Grid>
                </Grid>
            </div>
        </React.Fragment>
    )
}
export default CardBlock;














