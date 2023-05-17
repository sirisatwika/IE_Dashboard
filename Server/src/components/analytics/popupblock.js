import React from "react";
import CreateTask from "./analyticsdata/createtask";
import CreateDatarule from "./analyticsdata/createdatarule";
import UpdateDatarule from "./analyticsdata/updatedatarule";
import CreateAlertrule from "./analyticsdata/createalertrule";
import UpdateAlertrule from "./analyticsdata/updatealertrule";

function Popupblock(){
    return(
        <React.Fragment>
            <div className="popupwrapper">
                <CreateTask/>
                <CreateDatarule/>
                <UpdateDatarule/>
                <CreateAlertrule/>
                <UpdateAlertrule/>
            </div>
        </React.Fragment>
    )
}
export default Popupblock;