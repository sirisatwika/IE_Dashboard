import React from "react";
import { Switch } from "@mui/material";
import Button from '@mui/material/Button';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';

function OtherNetworks() {

    const [alignment, setAlignment] = React.useState('left');

    const handleAlignment = (event, newAlignment) => {
      setAlignment(newAlignment);
    };

    return (
        <React.Fragment>
            <div className='othernetwork_toglebtn'>
                <ToggleButtonGroup value={alignment} exclusive onChange={handleAlignment} aria-label="text alignment">
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
        </React.Fragment>
    )
}
export default OtherNetworks;