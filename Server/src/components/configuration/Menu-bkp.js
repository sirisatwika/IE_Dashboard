import React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import PropTypes from 'prop-types';
import LinearProgress from '@mui/material/LinearProgress';
import { Card, Grid, Switch } from "@mui/material";
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';
import ReactSpeedometer from "react-d3-speedometer";
import Button from '@mui/material/Button';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import '../../components/configuration/Menu.css';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const labels = ['8/10', '28/10', '2/11', '8/11', '18/11', '20/11', '1/12'];

export const data = {
  labels,
  datasets: [
    {
      label: ' ',
      data: [10, 40, 10, 50, 60, 75, 35],
      borderColor: '#2f0378',
      backgroundColor: '#fff',
      pointRadius: 0,
    },
  ],
};

export const options = {
  responsive: true,
  
  plugins: {
    legend: {
      display: false,
      position: "bottom",
      rtl: false,
      labels: {
        usePointStyle: false,
        boxWidth: 20,
        boxHeight: 8,
        pointStyle: "circle",
        pointStyleWidth: 13,
        padding: 10,
        font: {
          size: 12
        }
      }
    },

    title: {
      display: true,
    },
    tooltip: {
      enabled: true,
    },

  },
  elements: {
    line: {
      tension: 0.5
    },
  },
  scales: {
    x: {
      grid: {
        display: false,
      },
      title:{
        display: true,
        text:'Time',
    },
    },
    y: {
      grid: {
        display: false,
      },
      title:{
        display: true,
        text:'Usage(%)',
    },
      min:0,
      max:100,
    },
  },

};

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}



function Menu() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const [alignment, setAlignment] = React.useState('left');

  const handleAlignment = (event, newAlignment) => {
    setAlignment(newAlignment);
  };

  return (
    <React.Fragment>
      <Grid container spacing={2}>
        <Grid item lg={12} md={12} sm={12} xs={12}>
          <div className='config-tab'>
            <Tabs value={value} onChange={handleChange} aria-label="basic tabs example" className='tabs-configuration'>
              <Tab label="Network Connection Settings" {...a11yProps(0)} />
              <Tab label="Firewall/Security" {...a11yProps(1)} />
              <Tab label="Device Connectivity" {...a11yProps(2)} />
              <Tab label="IOT Device Data" {...a11yProps(3)} />
              <Tab label="Health & Updates" {...a11yProps(4)} />
            </Tabs>

            <TabPanel value={value} index={0}>
              <div style={{ paddingBottom: '15px' }}>
                <Grid container spacing={2}>
                  <Grid item lg={4} md={4} sm={12} xs={12}>
                    <Card className='card-configuration'>
                      <div className='network-configuration'>
                        <div className='networkconfig-aligned'>
                          <span className='networkcongig-span'>Currently Connected</span>
                          <span>LTTS</span>
                        </div>
                        <div className='networkconfig-aligned'>
                          <span className='networkcongig-span'>Network Speed</span>
                          <span>100Mbps</span>
                        </div>
                        <div className='networkconfig-aligned'>
                          <span className='networkcongig-span'>Current IP Address</span>
                          <span>255.255.11.135</span>
                        </div>
                        <div className='networkconfig-aligned'>
                          <span className='networkcongig-span'>Last updated</span>
                          <span>Just now</span>
                        </div>
                        <div className='networkconfig-aligned'>
                          <span className='networkcongig-span'>Data used</span>
                          <span>50% of 10GB</span>
                        </div>
                      </div>
                      <LinearProgress variant="determinate" value={50} background-Color='#3F51B5' style={{ height: '10px', borderRadius: '5px', backgroundColor: '#CCCCCC', color: '#3F51B5' }} />
                    </Card>
                  </Grid>
                  <Grid item lg={4} md={4} sm={12} xs={12}>
                    <Card className='card-configuration' >
                      <h2 class="card_title">Network Traffic</h2>
                      <Grid container>
                        <Grid item lg={6} md={6} sm={12} xs={12} style={{ textAlign: 'center' }}>
                          <ReactSpeedometer
                            maxValue={100}
                            value={50}
                            currentValueText={50 + "mbps"}
                            needleColor="black"
                            startColor="lightblue"
                            segments={3}
                            endColor="tomato"
                            width={155}
                            ringWidth={8}
                            height={120}
                            segmentColors={["#3F51B5"]}
                            // customSegmentStops={[0, 50, 100, 150]}
                            // segmentColors={[// "#FAFAFA",// "#FAFAFA",// "#007fff",// "#FAFAFA",// "#FAFAFA",// "#FAFAFA"// ]}
                            needleHeightRatio={0.50}
                            valueTextFontSize="12px"
                            needleTransitionDuration={9000}
                            needleTransition="easeElastic"
                          />
                          <p className='speed-text upspeed'>
                            <ArrowUpwardIcon /> Upload Speed
                          </p>

                        </Grid>
                        <Grid item lg={6} md={6} sm={12} xs={12} style={{ textAlign: 'center' }}>
                          <ReactSpeedometer
                            maxValue={100}
                            value={30}
                            currentValueText={30 + "mbps"}
                            needleColor="black"
                            startColor="lightblue"
                            segments={3}
                            endColor="tomato"
                            width={155}
                            height={120}
                            ringWidth={8}
                            // , "#F59F09", "#49F904"
                            segmentColors={["#3F51B5"]}
                            // customSegmentStops={[0, 50, 100, 150]}
                            // segmentColors={[// "#FAFAFA",// "#FAFAFA",// "#007fff",// "#FAFAFA",// "#FAFAFA",// "#FAFAFA"// ]}
                            needleHeightRatio={0.50}
                            valueTextFontSize="12px"
                            needleTransitionDuration={9000}
                            needleTransition="easeElastic"
                          />
                          <p className='speed-text downspeed'>
                            <ArrowDownwardIcon /> Download Speed
                          </p>

                        </Grid>
                      </Grid>
                    </Card>
                  </Grid>
                  <Grid item lg={4} md={4} sm={12} xs={12}>
                    <Card className='card-configuration'>
                      <h2 class="card_title">Network Usage</h2>
                      <Line options={options} data={data} className='line-chart'/>
                    </Card>
                  </Grid>
                </Grid>
              </div>
              <div style={{ paddingBottom: '15px' }}>
                <Grid container spacing={2}>
                  <Grid item lg={6} md={6} sm={12} xs={12}>
                    <Card className='card-configuration'>
                      <h2 class="card_title">Available Networks</h2>
                      <div className='available_network'>
                        <form >
                        <div className="radiobtn">
                          <label>
                            <input type="radio" value="option1"/>
                            LTTS Admin
                          </label>
                          <div className='progres_bar'>
                            <LinearProgress variant="determinate" value={30} style={{ height: '8px', backgroundColor: '#CCCCCC', borderRadius: '5px'}} />
                          </div>
                        </div>
                        <div className="radiobtn">
                          <label>
                            <input type="radio" value="option2" />
                            Guest
                          </label>
                          <div className='progres_bar'>
                            <LinearProgress variant="determinate" value={50} style={{ height: '8px', backgroundColor: '#CCCCCC', borderRadius: '5px'}} />
                          </div>
                        </div>
                        <div className="radiobtn">
                          <label>
                            <input type="radio" value="option3" />
                            LTTS Guest
                          </label>
                          <div className='progres_bar'>
                            <LinearProgress variant="determinate" value={70} style={{ height: '8px', backgroundColor: '#CCCCCC', borderRadius: '5px'}} />
                          </div>
                        </div>
                        <div className="radiobtn">
                          <label>
                            <input type="radio" value="option3" />
                            Jio Fiber
                          </label>
                          <div className='progres_bar'>
                            <LinearProgress variant="determinate" value={40} style={{ height: '8px', backgroundColor: '#CCCCCC', borderRadius: '5px'}} />
                          </div>
                        </div>
                        <div className="radiobtn">
                          <label>
                            <input type="radio" value="option3" />
                            Reach Us  
                          </label>
                          <div className='progres_bar'>
                            <LinearProgress variant="determinate" value={80} style={{ height: '8px', backgroundColor: '#CCCCCC', borderRadius: '5px'}} />
                          </div>
                        </div>
                        <div className='radiobtnsubmit'>
                          <Button variant="outlined" className='cancel'>Cancel</Button>
                          <Button variant="contained" className='apply'>Apply</Button>
                        </div>
                        </form>
                      </div>
                    </Card>
                  </Grid>
                  <Grid item lg={6} md={6} sm={12} xs={12}>
                    <Card className='card-configuration'>
                      <h2 class="card_title">Other Networks</h2>
                      <div className='othernetwork_toglebtn'>
                        <ToggleButtonGroup value={alignment}  exclusive onChange={handleAlignment} aria-label="text alignment">
                          <ToggleButton value="left" aria-label="left aligned">
                            Static
                          </ToggleButton>
                          <ToggleButton value="center" aria-label="centered">
                            Dynamic
                          </ToggleButton>
                        </ToggleButtonGroup>
                      </div>
                      <div className='othernetwork_tab'>
                        <form>
                          <div className='othernetwork_field'>
                            <label>IP Address</label>
                            <input type="email" name="usermail" placeholder="IP Address" />
                          </div>
                          <div className='othernetwork_field'>
                            <label>Subnet Address</label>
                            <input type="text" name="password" placeholder="Subnet Address" />
                          </div>
                          <div className='othernetwork_field'>
                            <label>DNS Name</label>
                            <input type="text" name="password" placeholder="DNS Name" />
                          </div>
                          <div className='othernetwork_field'>
                            Auto Bandwidth
                            <Switch defaultChecked />
                          </div>
                          <div className='radiobtnsubmit'>
                            <Button variant="outlined" className='cancel'>Cancel</Button>
                            <Button variant="contained" className='apply'>Apply</Button>
                          </div>
                        </form>
                      </div>
                    </Card>
                  </Grid>
                </Grid>
              </div>
            </TabPanel>
            <TabPanel value={value} index={1}>
              Item Two
            </TabPanel>
            <TabPanel value={value} index={2}>
              Item Three
            </TabPanel>
          </div>
        </Grid>
      </Grid>
    </React.Fragment>
  )
}
export default Menu;