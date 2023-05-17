import React from "react";
import Button from '@mui/material/Button';
import LinearProgress from '@mui/material/LinearProgress';

function AvailableNetwok() {
    return (
        <React.Fragment>
            <div className='available_network'>
                <form >
                    <div className="radiobtn">
                        <label>
                            <input type="radio" value="option1" />
                            LTTS Admin
                        </label>
                        <div className='progres_bar'>
                            <LinearProgress variant="determinate" value={30} style={{ height: '8px', backgroundColor: '#CCCCCC', borderRadius: '5px' }} />
                        </div>
                    </div>
                    <div className="radiobtn">
                        <label>
                            <input type="radio" value="option2" />
                            Guest
                        </label>
                        <div className='progres_bar'>
                            <LinearProgress variant="determinate" value={50} style={{ height: '8px', backgroundColor: '#CCCCCC', borderRadius: '5px' }} />
                        </div>
                    </div>
                    <div className="radiobtn">
                        <label>
                            <input type="radio" value="option3" />
                            LTTS Guest
                        </label>
                        <div className='progres_bar'>
                            <LinearProgress variant="determinate" value={70} style={{ height: '8px', backgroundColor: '#CCCCCC', borderRadius: '5px' }} />
                        </div>
                    </div>
                    <div className="radiobtn">
                        <label>
                            <input type="radio" value="option3" />
                            Jio Fiber
                        </label>
                        <div className='progres_bar'>
                            <LinearProgress variant="determinate" value={40} style={{ height: '8px', backgroundColor: '#CCCCCC', borderRadius: '5px' }} />
                        </div>
                    </div>
                    <div className="radiobtn">
                        <label>
                            <input type="radio" value="option3" />
                            Reach Us
                        </label>
                        <div className='progres_bar'>
                            <LinearProgress variant="determinate" value={80} style={{ height: '8px', backgroundColor: '#CCCCCC', borderRadius: '5px' }} />
                        </div>
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
export default AvailableNetwok;