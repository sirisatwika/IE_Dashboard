import React from "react";
import MUIDataTable from "mui-datatables";
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import CancelIcon from '@mui/icons-material/Cancel';
import "../../configuration/devicetable.css";
import {useState, useEffect} from "react";
import axios from "axios";

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

	let [val, setVal] = useState([]);
	useEffect(()=>{
	axios.get('http://172.30.122.183:5000/gatewaydata/api/v1/name/getgatewaydetails/all')
	.then(response =>{
	console.log(response);
	setVal(response.data);
	})
	.catch(console.error);
	},[]);
	
	
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
      name: "IP address",
      options: {
        filter: false,
      },
    },
    {
      name: "Port Number",
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
      name: "MAC Address",
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
      name: "Associated Gateway Profile",
      options: {
        filter: false,
      },
    },
    {
      name: "Associated Service/Protocol",
      options: {
        filter: false,
      },
    },
    {
      name: "Description",
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
      name: "Provisioned Status",
      options: {
        filter: false,
      },
    },
    {
      name: "Provisoned Method",
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
      name: "Active/Inactive",
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
      name: "Cert Status",
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
      name: "OS Version Status",
      options: {
        filter: false,
      },
    },
    {
      name: "Encryption/Decryption-Version Status",
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
      name: "Firmware Version Status",
      options: {
        filter: false,
      },
    },
  ];

	

  const data = val;
    /*['2557267636', 'Levono Gateway', '128.12.26.01', '3305', 'Hyderabd', '00:0a:95:9d:67:16', '6247575278', 'Levono_lat3420', 'Pressure Profile', 'AMQP', 'Demo Project', 'Online ', 'Yes', 'x509', '23-06-2023 23:45:34', 'Inactive', '23-06-2023 23:45:34', 'Up-to Date', 'Ubuntu', 'TLS 1.4/ SSL- 1.0', 'Expired', '23.45.67', 'Expired'],

    ['2555567636', 'Dell Gateway', '128.12.26.99', '8080', 'Mysuru', '00:0a:95:9d:23:16', '6247572378', 'Dell_lat3420', 'Pressure Profile', 'TCP', 'Demo Project', 'Online ', 'No', 'Symmetric', '23-06-2023 23:45:34', 'Active', '23-06-2023 23:45:34', 'Up-to Date', 'Ubuntu', 'TLS 1.4/ SSL- 1.0', 'Active', '23.45.67', 'Expired'],

    ['2553467636', 'HP Gateway', '128.12.26.98', '8000', 'Pune', '00:0a:24:9d:67:16', '6247575223', 'HP_lat3420', 'Pressure Profile', 'UDP', 'Demo Project', 'Online ', 'No', 'x509', '23-06-2023 23:45:34', 'Active', '23-06-2023 23:45:34', 'Up-to Date', 'windows 12.3.45', 'TLS 1.4/ SSL- 1.0', 'Active', '23.45.67', 'Active'],

    ['1557267636', 'Asus Gateway', '198.12.26.01', '3205', 'Chennai', '00:0a:95:5d:67:16', '6247575448', 'Asus_lat3220', 'Pressure Profile', 'AMQP', 'Demo Project', 'Online ', 'No', 'Default', '23-06-2023 23:45:34', 'Active', '23-06-2023 23:45:34', 'Up-to Date', 'windows 12.3.45', 'TLS 1.4/ SSL- 1.0', 'Active', '23.45.67', 'Active'],

    ['2657267636', 'Levono Gateway', '198.12.26.98', '3405', 'Delhi', '00:0a:95:9d:55:16', '5247575278', 'Levono_lat3420', 'Pressure Profile', 'TCP', 'Demo Project', 'Online ', 'Yes', 'Symmetric', '23-06-2023 23:45:34', 'Inactive', '23-06-2023 23:45:34', 'Up-to Date', 'Ubuntu', 'TLS 1.4/ SSL- 1.0', 'Expired', '23.45.67', 'Expired'],

    ['2667267636', 'Dell Gateway', '128.12.26.94', '3315', 'Bangalore', '00:0a:95:9d:24:16', '2247575278', 'Dell_lat3420', 'Pressure Profile', 'UDP', 'Demo Project', 'Online ', 'No', 'Default', '23-06-2023 23:45:34', 'Active', '23-06-2023 23:45:34', 'Up-to Date', 'windows 12.3.45', 'TLS 1.4/ SSL- 1.0', 'Active', '23.45.67', 'Active'],

    ['2554467636', 'HP Gateway', '198.12.26.01', '3306', 'Mumbai', '00:0a:95:9d:67:12', '4247575278', 'HP_lat3450', 'Pressure Profile', 'AMQP', 'Demo Project', 'Online ', 'Yes', 'x509', '23-06-2023 23:45:34', 'Inactive', '23-06-2023 23:45:34', 'Up-to Date', 'Ubuntu', 'TLS 1.4/ SSL- 1.0', 'Expired', '23.45.67', 'Expired'],

    ['2577267636', 'Asus Gateway', '128.12.26.88', '8081', 'Hyderabd', '00:0a:11:9d:67:34', '9247575278', 'Asus_lat3230', 'Pressure Profile', 'TCP', 'Demo Project', 'Online ', 'No', 'Default', '23-06-2023 23:45:34', 'Active', '23-06-2023 23:45:34', 'Up-to Date', 'windows 12.3.45', 'TLS 1.4/ SSL- 1.0', 'Active', '23.45.67', 'Active'],
  ];*/
  

  return (
    <div className="devicetable">
      <MUIDataTable data={data} columns={columns} options={options} title="Gateway Details" />
    </div>

  );
}

export default GatewayDataTable;
