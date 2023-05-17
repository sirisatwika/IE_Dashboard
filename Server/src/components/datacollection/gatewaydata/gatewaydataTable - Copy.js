import MUIDataTable from "mui-datatables";
import React, { useState } from "react";
import "../../configuration/devicetable.css";
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import CancelIcon from '@mui/icons-material/Cancel';

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

function GatewayDataTable() {

  //os_status action dropdown
  const [state, setState] = useState({ value: "Select Action" });
  function handleChange(event) {
    setState({ value: event.target.value });
  }

  //functionstatus action dropdown
  const [functionstate, functionsetState] = useState({ value: "Select Action" });
  function functionhandleChange(event) {
    functionsetState({ value: event.target.value });
  }

  //firmwarestatus action dropdown
  const [firmwarestate, firmwaresetState] = useState({ value: "Select Action" });
  function firmwarehandleChange(event) {
    firmwaresetState({ value: event.target.value });
  }
 

  const columns = [
    {
      name: "Gateway ID",
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
      name: "IP address/Port",
      options: {
        filter: false,
      },
    },
    {
      name: "Associated Service/Protocol Version",
      options: {
        filter: false,
      },
    },
    {
      name: "Status",
      options: {
        filter: false,
        customBodyRender: value => {
          return (
            !value ? (<span className="activeicon statusicons">Online <CheckCircleIcon /></span>) : (<span className="inactiveicon statusicons">Offline <CancelIcon /></span>)
          );

        }
      },
    },
    {
      name: "zone",
      options: {
        filter: false,
      },
    },
    {
      name: "Serial Number",
      options: {
        filter: false,
      },
    },
    {
      name: "Manufacturer Model",
      options: {
        filter: false,
      },
    },
    {
      name: "OS Version",
      options: {
        filter: false,
      },
    },
    {
      name: "Active/Inactive",
      options: {
        filter: false,

      },
    },
    {
      name: "Firmware Version",
      options: {
        filter: false,

      },
    },
    {
      name: "Provisioned Date & Time",
      options: {
        filter: false,
      },
    },
    {
      name: "Last Communicated",
      options: {
        filter: false,
      },
    },
    {
      name: "OTA OS Status",
      options: {
        filter: false,
      },
    },
    {
      name: "Action",
      options: {
        filter: false,
        customBodyRender: (value, tableMeta, updateValue) => {
          return (
            <div className="cusslectcolumn">
              <select value={state.value} onChange={handleChange}>
                <option value="">Select Action</option>
                <option value="update">Update</option>
                <option value="delete">Delete</option>
              </select>
            </div>
          );
        }
      },
    },
    {
      name: "OTA Function/Service Status",
      options: {
        filter: false,
        
      },
    },
    {
      name: "Action",
      options: {
        filter: false,
        customBodyRender: (value, tableMeta, updateValue) => {
          return (
            <div className="cusslectcolumn">
              <select value={functionstate.value} onChange={functionhandleChange}>
                <option value="">Select Action</option>
                <option value="update">Update</option>
                <option value="delete">Delete</option>
              </select>
            </div>
          );
        }
      },
    },
    {
      name: "OTA Firmware Status",
      options: {
        filter: false,
      },
    },
    {
      name: "Action",
      options: {
        filter: false,
        customBodyRender: (value, tableMeta, updateValue) => {
          return (
            <div className="cusslectcolumn">
              <select value={firmwarestate.value} onChange={firmwarehandleChange}>
                <option value="">Select Action</option>
                <option value="update">Update</option>
                <option value="delete">Delete</option>
              </select>
            </div>
          );
        }
      },
    },
    {
      name: "Authentication Type",
      options: {
        filter: false,
      },
    },
    {
      name: "Expiry Status",
      options: {
        filter: false,
      },
    },
    {
      name: "Expiry Date",
      options: {
        filter: false,
      },
    },
    {
      name: "MFA Enabled",
      options: {
        filter: false,
      },
    },
    {
      name: "Encryption/Decryption Type - Version",
      options: {
        filter: false,
      },
    },
    {
      name: "Provisioned",
      options: {
        filter: false,
      },
    },
    {
      name: "Renewal",
      options: {
        filter: false,
        customBodyRender: (value) => {
          return (
            <button className="renewbtn">
              Renew
            </button>
          )
        }
      },
    }
  ];

  const data = [
    ['3265768', 'gatewayzone1', '168.67.198.76_1502', 'modbus_tcp_8.0', 'Online', 'Us', '6247575278', 'Dell_lat3420', 'Ubuntu_22.04', 'Active', '2.1.2.13.1,A03', '18-03-2023 20:08:00', '19-03-2023', 'None', 'update', 'None', 'None', 'None', 'None', 'Symmetric', 'Expired', '18-03-2023', 'Yes', 'TLS 1.0 / SSL', 'Yes', 'Renew'],

    ['3235768', 'gatewayzone1', '168.67.198.76_1502', 'modbus_tcp_8.0', 'Online', 'Asia', '6247575278', 'Dell_lat3420', 'Ubuntu_22.04', 'Active', '2.1.2.13.1,A03', '18-03-2023 20:08:00', '19-03-2023', 'None', 'update', 'None', 'None', 'None', 'None', 'Symmetric', 'Expired', '18-03-2023', 'Yes', 'TLS 1.0 / SSL', 'Yes', 'Renew'],

    ['3264768', 'gatewayzone1', '168.67.198.76_1502', 'modbus_tcp_8.0', 'Online', 'Africe', '6247575278', 'Dell_lat3420', 'Ubuntu_22.04', 'Active', '2.1.2.13.1,A03', '18-03-2023 20:08:00', '19-03-2023', 'None', 'update', 'None', 'None', 'None', 'None', 'Symmetric', 'Expired', '18-03-2023', 'Yes', 'TLS 1.0 / SSL', 'No', 'Renew'],


    ['3265768', 'gatewayzone1', '168.67.198.76_1502', 'modbus_tcp_8.0', 'Online', 'Australlia', '6247575278', 'Dell_lat3420', 'Ubuntu_22.04', 'Active', '2.1.2.13.1,A03', '18-03-2023 20:08:00', '19-03-2023', 'None', 'update', 'None', 'None', 'None', 'None', 'Symmetric', 'Expired', '18-03-2023', 'Yes', 'TLS 1.0 / SSL', 'Yes', 'Renew'],


    ['3785768', 'gatewayzone1', '168.67.198.76_1502', 'modbus_tcp_8.0', 'Online', 'Asia', '6247575278', 'Dell_lat3420', 'Ubuntu_22.04', 'Active', '2.1.2.13.1,A03', '18-03-2023 20:08:00', '19-03-2023', 'None', 'update', 'None', 'None', 'None', 'None', 'Symmetric', 'Expired', '18-03-2023', 'Yes', 'TLS 1.0 / SSL', 'No', 'Renew'],


    ['3268868', 'gatewayzone1', '168.67.198.76_1502', 'modbus_tcp_8.0', 'Online', 'Africe', '6247575278', 'Dell_lat3420', 'Ubuntu_22.04', 'Active', '2.1.2.13.1,A03', '18-03-2023 20:08:00', '19-03-2023', 'None', 'update', 'None', 'None', 'None', 'None', 'Symmetric', 'Expired', '18-03-2023', 'Yes', 'TLS 1.0 / SSL', 'Yes', 'Renew'],


    ['3265668', 'gatewayzone1', '168.67.198.76_1502', 'modbus_tcp_8.0', 'Online', 'Australlia', '6247575278', 'Dell_lat3420', 'Ubuntu_22.04', 'Active', '2.1.2.13.1,A03', '18-03-2023 20:08:00', '19-03-2023', 'None', 'update', 'None', 'None', 'None', 'None', 'Symmetric', 'Expired', '18-03-2023', 'Yes', 'TLS 1.0 / SSL', 'No', 'Renew'],


    ['3264768', 'gatewayzone1', '168.67.198.76_1502', 'modbus_tcp_8.0', 'Online', 'Us', '6247575278', 'Dell_lat3420', 'Ubuntu_22.04', 'Active', '2.1.2.13.1,A03', '18-03-2023 20:08:00', '19-03-2023', 'None', 'update', 'None', 'None', 'None', 'None', 'Symmetric', 'Expired', '18-03-2023', 'Yes', 'TLS 1.0 / SSL', 'No', 'Renew'],

    ['3262768', 'gatewayzone1', '168.67.198.76_1502', 'modbus_tcp_8.0', 'Online', 'Australlia', '6247575278', 'Dell_lat3420', 'Ubuntu_22.04', 'Active', '2.1.2.13.1,A03', '18-03-2023 20:08:00', '19-03-2023', 'None', 'update', 'None', 'None', 'None', 'None', 'Symmetric', 'Expired', '18-03-2023', 'Yes', 'TLS 1.0 / SSL', 'Yes', 'Renew'],

    ['3265868', 'gatewayzone1', '168.67.198.76_1502', 'modbus_tcp_8.0', 'Online', 'Us', '6247575278', 'Dell_lat3420', 'Ubuntu_22.04', 'Active', '2.1.2.13.1,A03', '18-03-2023 20:08:00', '19-03-2023', 'None', 'update', 'None', 'None', 'None', 'None', 'Symmetric', 'Expired', '18-03-2023', 'Yes', 'TLS 1.0 / SSL', 'No', 'Renew'],

  ];

  return (
    <div className="devicetable">
      <MUIDataTable data={data} columns={columns} options={options} title="Gateway Details" />
    </div>

  );
}

export default GatewayDataTable;
