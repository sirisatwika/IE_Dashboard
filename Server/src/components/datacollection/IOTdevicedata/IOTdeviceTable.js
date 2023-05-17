import React, { useState, useEffect } from "react";
import axios from "axios";
import MUIDataTable from "mui-datatables";
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import CancelIcon from '@mui/icons-material/Cancel';
import "../../configuration/devicetable.css"

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

function IOTdeviceTable() {
	
	let [val, setVal] = useState([]);
	useEffect(()=>{
	axios.get('http://172.30.122.183:5000/iotdevicedata/api/v1/name/getiotdevicedetails/all')
	.then(response =>{
	console.log(response);
	setVal(response.data);
	})
	.catch(console.error);
	},[]);
	
  const columns = [
    {
      name: "IOT Device ID",
      options: {
        filter: true,
        filterOptions: { fullWidth: true }
      },
    },
    {
      name: "IOT Device Name",
      options: {
        filter: true,
        filterOptions: { fullWidth: true }
      },
    },
    {
      name: "Description",
      options: {
        filter: false,
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
      name: "Associated Gateway",
      options: {
        filter: false,
      },
    },
    {
      name: "Associated Gateway ID",
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
      name: "Associated Device Profile",
      options: {
        filter: false,
      },
    },
    {
      name: "Status",
      options: {
        filter: false,
        customBodyRender: value => {
          return(
            !value ? (<span className="activeicon statusicons">Online <CheckCircleIcon/></span>)  : (<span className="inactiveicon statusicons">Offline <CancelIcon/></span>) 
          );
           
        }
      },
    },
    {
      name: "Manufacturer Model",
      options: {
        filter: false,
      },
    },
    {
      name: "Provisioned Status",
      options: {
        filter: false,
      },
    },
    {
      name:  "Provisioned Date & Time",
      options: {
        filter: false,
      },
    },
    {
      name:"Active/Inactive",
      options: {
        filter: false,
      },
    },
    {
      name: "Last Communicated",
      options: {
        filter: false,
      },
    }
  ];

  const data = val;
  /*[
    ['276397', 'temp', 'demo', '192.168.45.34', 'Hyderabd', '1502', 'Lenovo gateway', '2557267636', 'modbus', 'temp', 'Online', 'Levono_lat3420', 'Yes', 'Active', '23-06-2023 23:45:34','23-06-2023'],

    ['99836296', 'proximity', 'Demo project', '197.45.34.02', 'Mysuru', '3456', 'Lenovo gateway', '2557267636fd883', 'mqtt', 'pressure', 'Offline', 'Dell_lat3420', 'No', 'InActive', '14-06-2023 23:45:34', '12-06-2021'],
    
    ['2336397', 'moisture', 'demo', '192.44.45.34', 'Pune', '2141', 'Lenovo gateway', '3563563236', 'AMQT', 'temp', 'Online', 'HP_lat3420', 'Yes', 'InActive', '19-06-2023 23:45:34', '23-06-2021'],

    ['476397', 'irradiance', 'Test', '123.168.45.34', 'Chennai', '34564', 'Lenovo gateway', '2557267636fd883', 'tcp/ip', 'pressure', 'Offline', 'Asus_lat3220', 'No', 'Active', '13-06-2023 23:45:34', '23-06-2023'],

    ['676397', 'proximity', 'demo', '198.168.45.23', 'Delhi', '5622', 'windows ', '2557267636', 'udp', 'temp', 'Online', 'Levono_lat3420', 'Yes', 'InActive', '18-06-2023 23:45:34', '14-06-2023'],
    
    ['277397', 'moisture', 'Demo project', '192.168.44.34', 'Bangalore', '8000', 'Lenovo gateway', '4767676432', 'tcp/ip', 'pressure', 'Offline', 'Dell_lat3420', 'Yes', 'Active', '17-06-2023 23:45:34', '16-06-2023'],

    ['2276397', 'irradiance', 'demo', '192.168.56.34', 'Mumbai', '8080', 'windows ', '67684768', 'AMQT', 'temp', 'Online', 'HP_lat3450', 'No', 'InActive', '15-06-2023 23:45:34', '18-06-2023'],
    
    ['4376397', 'temp', 'Demo project', '192.168.45.11', 'Hyderabd', '12434', 'Lenovo gateway', '668798042', 'tcp/ip', 'pressure', 'Offline', 'Levono_lat3420', 'No', 'Active', '24-06-2023 23:45:34', '19-06-2023'],
  ];*/

  return (
    <div className="devicetable">
      <MUIDataTable data={data} columns={columns} options={options} title="IOT Device Details"/>
    </div>
   
  );
}

export default IOTdeviceTable;
