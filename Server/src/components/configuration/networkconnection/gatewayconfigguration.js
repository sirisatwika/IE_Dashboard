import React from "react";
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Button from '@mui/material/Button';


const NOption = [
    { label: "Gateway-01", value: "Gateway1" },
    { label: "Gateway-03", value: "Gateway2" },
    { label: "Gateway-03", value: "Gateway3" },
]

function GatewayConfig() {

    const [network, setNetwork] = React.useState('');

    const handleChange = (event) => {
        setNetwork(event.target.value);
    };

    return (
        <React.Fragment>
            <div className="selecttabdropdown" style={{position:'absolute',top: 0,
    right: 0}}>
                <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
                    <InputLabel id="demo-select-small">Select Network</InputLabel>
                    <Select labelId="demo-select-small" id="demo-select-small" value={network} label="Select Network" onChange={handleChange}  >
                        <MenuItem value="">
                            <em>None</em>
                        </MenuItem>
                        {NOption.map((item) => (
                            <MenuItem key={item.value} value={item.value}>
                                {item.label}
                            </MenuItem>
                        ))}
                        <MenuItem value="other">Other Network</MenuItem>
                    </Select>
                </FormControl>
            </div>
            {network === 'other' && <div id="showThisDiv">
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
                        <div className='radiobtnsubmit'>
                            <Button variant="outlined" className='cancel'>Cancel</Button>
                            <Button variant="contained" className='apply'>Apply</Button>
                        </div>
                    </form>
                </div>
            </div>}

        </React.Fragment>
    )
}
export default GatewayConfig;