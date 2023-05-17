import React  from "react";
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import '../page/dropdownselect.css';

function Dropdownselect(){
    
     //select Location Dropdown 
     const [selectlocation, setLocation] = React.useState('');
     const locationChange = (event) => {
      setLocation(event.target.value);
     };
     
    //Selct Device Dropdown
    const [selectdevice, setdevice] = React.useState('');
    const handleChange = (event) => {
        setdevice(event.target.value);
    };

    return(
        <React.Fragment>
            <div className="tabdropselect">
                <div className="selecttabdropdown">
                  <FormControl sx={{ m: 1, minWidth: 125 }} size="small">
                    <InputLabel id="demo-select-small">Select Device</InputLabel>
                    <Select  labelId="demo-select-small" id="demo-select-small" value={selectdevice} label="Select Device" onChange={handleChange}>
                      <MenuItem value="">
                        <em>None</em>
                      </MenuItem>
                      <MenuItem value={10}>Device-01</MenuItem>
                      <MenuItem value={20}>Device-02</MenuItem>
                      <MenuItem value={30}>Device-03</MenuItem>
                      <MenuItem value={40}>Device-04</MenuItem>
                    </Select>
                  </FormControl>
                </div>
                <div className="selectmap">
                  <FormControl sx={{ m: 1, minWidth: 130 }} size="small">
                    <InputLabel id="demo-select-small">Select Location</InputLabel>
                    <Select  labelId="demo-select-small" id="demo-select-small" value={selectlocation} label="Select Location" onChange={locationChange}>
                      <MenuItem value="">
                        <em>None</em>
                      </MenuItem>
                      <MenuItem value={10}>Location-01</MenuItem>
                      <MenuItem value={20}>Location-02</MenuItem>
                      <MenuItem value={30}>Location-03</MenuItem>
                      <MenuItem value={40}>Location-04</MenuItem>
                    </Select>
                  </FormControl>
                </div>
              </div>
        </React.Fragment>

    )
}
export default Dropdownselect;