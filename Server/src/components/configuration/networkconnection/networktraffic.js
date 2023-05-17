import React from "react";
import { Grid } from "@mui/material";
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import ReactSpeedometer from "react-d3-speedometer";

function NetworkTraffic() {
    return (
        <React.Fragment>
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
        </React.Fragment>
    )
}
export default NetworkTraffic;