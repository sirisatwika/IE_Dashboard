import React from 'react';
import BarMap from './BarMap';
import CardDetails from './CardDetails';
// import DeviceBreakDown from './DeviceBreakDown';
// import EnhancedTable from './Table';


function Overview() {
    return (
        <React.Fragment>
            <div>
                <div className='p_title'>
                <h1>Discovery</h1>
                </div>
                <CardDetails/> 
                <BarMap/>  
               {/* <DeviceBreakDown/>  */}
               {/* <EnhancedTable/> */}
            </div>
        </React.Fragment>
    )
}
export default Overview;