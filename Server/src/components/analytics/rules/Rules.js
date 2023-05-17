import React from "react";
import { Grid, Card } from "@mui/material";
import RulesTable from "./RulesTable";
import ReactSpeedometer from "react-d3-speedometer";
import ModelTable from "./modeltable";
import ModelSelect from "./modelselect";
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import '../rules/rules.css';

function Rules(){

  const [alignment, setAlignment] = React.useState('left');

  const handleAlignment = (event, newAlignment) => {
    setAlignment(newAlignment);
  };

    return(
        <React.Fragment>
            <Grid container spacing={2}>
                <Grid item lg={7} md={7} sm={12} xs={12}>
                    <Card className='card-configuration'>
                        <RulesTable/>
                    </Card>
                </Grid>
                <Grid item lg={5} md={5} sm={12} xs={12}>
                    <Card className='card-configuration' style={{height:'auto', marginBottom:'15px'}}>
                      <div className="rules_dropdownblock">
                       <ModelSelect/>
                        <ToggleButtonGroup value={alignment}  exclusive onChange={handleAlignment} aria-label="text alignment">
                          <ToggleButton value="left" aria-label="left aligned">
                            Start
                          </ToggleButton>
                          <ToggleButton value="center" aria-label="centered">
                            Stop
                          </ToggleButton>
                        </ToggleButtonGroup>
                      </div>
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
                            width={200}                           
                            height={130}
                            ringWidth={10}
                            segmentColors={["#3F51B5"]}
                            needleHeightRatio={0.50}
                            valueTextFontSize="12px"
                            needleTransitionDuration={9000}
                            needleTransition="easeElastic"
                          />
                          <p className='speed-text upspeed'>
                            Performance
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
                            width={200}
                            height={130}
                            ringWidth={10}
                            segmentColors={["#3F51B5"]}
                            needleHeightRatio={0.50}
                            valueTextFontSize="12px"
                            needleTransitionDuration={9000}
                            needleTransition="easeElastic"
                          />
                          <p className='speed-text upspeed'>
                            Efficiency
                          </p>
                        </Grid>
                      </Grid>
                    </Card>
                    <Card className='card-configuration' style={{height:'auto'}}>
                        <ModelTable/>
                    </Card>
                </Grid>
            </Grid>
        </React.Fragment>
    )
}
export default Rules;