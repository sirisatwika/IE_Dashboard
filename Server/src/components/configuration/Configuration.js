import React from 'react';
import { Grid } from "@mui/material";
// import Menu from '../configuration/Menu';
// import ConfigurationTab from './configurationTab';
// import ConfigurationTab from './configurationTab';
// import Dropdownselect from '../page/dropdownselect';
import ConfigurationData from './configurationdata';
import '../configuration/Menu.css';

function Configuration() {
  return (
    <React.Fragment>
      <Grid container spacing={2}>
        <Grid item lg={12} md={12} sm={12} xs={12}>
            <div className='p_title'>
              <h1>Configuration & Management</h1>
            </div>
          <ConfigurationData />
          {/* <ConfigurationTab/> */}
          {/* <Dropdownselect /> */}
        </Grid>
      </Grid>
    </React.Fragment>
  )
}
export default Configuration;