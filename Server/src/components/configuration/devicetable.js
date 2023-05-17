import MUIDataTable from "mui-datatables";
import React from "react";
import "../configuration/devicetable.css";

const options = {
  textLabels: {
    toolbar: {
      search: "Search",
      downloadCsv: "Download CSV",
      print: "Print",
      viewColumns: "View Columns",
      filterTable: "Filter Table",
    },
    filter: {
      all: "All",
      title: "Filters",
      reset: "Reset",
    },
  }
}

function DeviceTable() {

  const columns = [
    {
      name: "Gateway Id",
      options: {
        filter: true,
        filterOptions: { fullWidth: true }
      },
    },
    {
      name: "Gateway Name",
      options: {
        filter: true,
        filterOptions: { fullWidth: true }
      },
    },
    {
      name: "Gateway IP Address",
      options: {
        filter: false,
      },
    },
    {
      name: "Protocol",
      options: {
        filter: false,
      },
    },
    {
      name: "Device Profile",
      options: {
        filter: false,
      },
    },
    {
      name: "Location",
      options: {
        filter: false,
      },
    },
    {
      name: "Timestamp",
      options: {
        filter: false,
      },
    },
    {
      name: "Method",
      options: {
        filter: false,
      },
    },
  ];

  const data = [
    ["4324", "lenovo MT-M:11RH006WIG", "172.34.176.89", "Modbus", "phrate", "hyderabad", "22-01-2023 11:06", "x.509"],
    ["7543", "Dell MT-M:23RH0089SIP", "192.168.29.34", "MQTT", "Temperature", "Mysore", "24-01-2023 11:06", "symmetric"],
    ["4756", "lenovo MT-M:11RH045FGP", "192.168.45.98", "REST", "Voltage", "Mysore", "22-02-2023 11:06", "x.509"],
    ["6354", "Lenovo MT-M:76HG9897RF", "172.33.176.9", "MQTT", "pressure", "hyderabad", "22-03-2022 11:06", "symmetric"],
    ["4324", "lenovo MT-M:11RH006WIG", "172.34.176.89", "Modbus", "phrate", "hyderabad", "22-01-2023 11:06", "x.509"],
    ["7543", "Dell MT-M:23RH0089SIP", "192.168.29.34", "MQTT", "Temperature", "Mysore", "24-01-2023 11:06", "symmetric"],
    ["4756", "lenovo MT-M:11RH045FGP", "192.168.45.98", "REST", "Voltage", "Mysore", "22-02-2023 11:06", "x.509"],
    ["6354", "Lenovo MT-M:76HG9897RF", "172.33.176.9", "MQTT", "pressure", "hyderabad", "22-03-2022 11:06", "symmetric"],
 
  ];

  return (
    <div className="devicetable">
    <MUIDataTable data={data} columns={columns} options={options}/>
    </div>
   
  );
}

export default DeviceTable;
