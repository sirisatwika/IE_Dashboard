import React from "react";
import { Card } from "@mui/material";
import '../page/Card.css'
import ChartZone from "./chart-zone";
import ChartSubnet from './chart-subnet';

function DeviceBreakDown() {
  return (
    <React.Fragment>
            <Card className="card-wrapper" style={{height:'100%'}}>
              <h2 className="card_title">Edge Gateway Categorization</h2>
              <div className="zonediv">
                <div className="firstdiv">
                  <p className="zonetitle">Zones</p>
                  <ChartZone />
                </div>
                <div className="firstdiv">
                  <p className="zonetitle">Subnets</p>
                  <ChartSubnet />
                </div>
              </div>
            </Card>
    </React.Fragment>
  )
}
export default DeviceBreakDown;