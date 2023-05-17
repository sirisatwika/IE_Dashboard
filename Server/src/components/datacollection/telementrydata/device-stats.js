import React from "react";

function DeviceStats() {
    return (
        <React.Fragment>
            <div className="speedmeter_wrapper">
                <div className="dev_speed s_pading">
                    <h2>Voltage</h2>
                    <p>12.9V</p>
                </div>
                <div className="dev_speed s_pading">
                    <h2>Current</h2>
                    <p>100A</p>
                </div>
                <div className="dev_speed s_pading">
                    <h2>Power</h2>
                    <p>0.4W</p>
                </div>
                <div className="dev_speed s_pading">
                    <h2>Energy</h2>
                    <p>40KWh</p>
                </div>
                <div className="dev_speed s_pading">
                    <h2>Total Weight</h2>
                    <p>26</p>
                </div>
            </div>
        </React.Fragment>
    )
}
export default DeviceStats;
