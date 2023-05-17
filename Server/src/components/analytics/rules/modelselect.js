import React from "react";
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';

function ModelSelect() {

    //select Model Dropdown 
    const [selectmodel, setmodel] = React.useState('');
    const handleChange = (event) => {
        setmodel(event.target.value);
    };

    return (
        <React.Fragment>
            <div className="modeldropselect">
                <div className="selecttabdropdown">
                    <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
                        <InputLabel id="demo-select-small">Select Model</InputLabel>
                        <Select labelId="demo-select-small" id="demo-select-small" value={selectmodel} label="Select Device" onChange={handleChange}>
                            <MenuItem value="">
                                <em>None</em>
                            </MenuItem>
                            <MenuItem value={10}>Model-01</MenuItem>
                            <MenuItem value={20}>Model-02</MenuItem>
                            <MenuItem value={30}>Model-03</MenuItem>
                            <MenuItem value={40}>Model-04</MenuItem>
                        </Select>
                    </FormControl>
                </div>
            </div>
        </React.Fragment>
    )
}
export default ModelSelect;