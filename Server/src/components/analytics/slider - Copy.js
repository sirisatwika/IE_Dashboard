import React from "react";
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import Stack from '@mui/material/Stack';
import '../analytics/analytics.css';

function SliderSizes(){
    return (
    <Box>
        <Stack spacing={2} direction="row" sx={{ mb: 1 }} alignItems="center">
            <div className="r_slider">
                <p>Temperature</p>
                <Slider defaultValue={20} aria-label="Default" valueLabelDisplay="on"  />
            </div>
            
        </Stack>
        <Stack spacing={2} direction="row" sx={{ mb: 1 }} alignItems="center">
            <div className="r_slider">
                <p>Humidity</p>
                <Slider defaultValue={35} aria-label="Default" valueLabelDisplay="on" />
            </div>
        </Stack>
        <Stack spacing={2} direction="row" sx={{ mb: 1 }} alignItems="center">
            <div className="r_slider">
                <p>Pressure</p>
                <Slider defaultValue={40} aria-label="Default" valueLabelDisplay="on" />
            </div>
        </Stack>
        <Stack spacing={2} direction="row" sx={{ mb: 1 }} alignItems="center">
            <div className="r_slider">
                <p>Speed</p>
                <Slider defaultValue={95} aria-label="Default" valueLabelDisplay="on" />
            </div>
        </Stack>
        <Stack spacing={2} direction="row" sx={{ mb: 1 }} alignItems="center">
            <div className="r_slider">
                <p>Frequency</p>
                <Slider defaultValue={20} aria-label="Default" valueLabelDisplay="on" />
            </div>
        </Stack>
    </Box>
    );
  }
  export default SliderSizes;