import React from "react";

function DeviceLogs() {
    return (
        <React.Fragment>
            <div className="deviceloglist">
                <ul>
                    <li>level=INFO ts=2023-02-24T05:37:22.976742494Z app=edgex-device-rest source=registry.go:79 msg="Using Registry (consul) from http://edgex-core-consul:8500"</li>
                    <li>level=INFO ts=2023-02-24T05:37:22.976742494Z app=edgex-device-rest source=registry.go:79 msg="Using Registry (consul) from http://edgex-core-consul:8500"</li>
                    <li>level=INFO ts=2023-02-24T05:37:22.976742494Z app=edgex-device-rest source=registry.go:79 msg="Using Registry (consul) from http://edgex-core-consul:8500"</li>
                </ul>
            </div>
        </React.Fragment>
    )
}
export default DeviceLogs;