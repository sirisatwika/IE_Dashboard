import React, { useState } from 'react';
import MaterialTable from 'material-table';
import Paper from '@mui/material/Paper';
import "../firewall/firewall.css";

const empList = [
  {
    rulename: "Custom TCP",
    protocol: 'TCP',
    portrange: 1880,
    ipsource: "192.168.222.2.0"
  },
  {
    rulename: "Custom TCP",
    protocol: 'TCP',
    portrange: 3000,
    ipsource: "192.168.222.2.0"
  },
  {
    rulename: "Custom TCP",
    protocol: 'TCP',
    portrange: 8080,
    ipsource: "192.168.222.2.0"
  },
  {
    rulename: "Custom TCP",
    protocol: 'TCP',
    portrange: 9000,
    ipsource: "192.168.222.2.0"
  },
  {
    rulename: "HTTPS",
    protocol: 'TCP',
    portrange: 443,
    ipsource: "192.168.222.2.0"
  },
  {
    rulename: "HTTPS",
    protocol: 'TCP',
    portrange: 443,
    ipsource: "192.168.222.2.0"
  },
  {
    rulename: "HTTPS",
    protocol: 'TCP',
    portrange: 443,
    ipsource: "192.168.222.2.0"
  },
  {
    rulename: "HTTPS",
    protocol: 'TCP',
    portrange: 443,
    ipsource: "192.168.222.2.0"
  },
  {
    rulename: "HTTPS",
    protocol: 'TCP',
    portrange: 443,
    ipsource: "192.168.222.2.0"
  },
  {
    rulename: "HTTPS",
    protocol: 'TCP',
    portrange: 443,
    ipsource: "192.168.222.2.0"
  },
]

function Mattab() {

  const [data, setData] = useState(empList)

  const columns = [
    // { title: "ID", field: "id", editable: false },
    { title: "Rule Name", field: "rulename" },
    { title: "Protocol", field: "protocol" },
    { title: "Port Range", field: 'portrange', },
    { title: "IP Source", field: "ipsource", }
  ]


  return (
    <div className="inouttablepp">

      <MaterialTable
        components={{
          Container: props => <Paper {...props} elevation={0} />
        }}
        title="Inbound"
        data={data}
        columns={columns}
        editable={{
          onRowAdd: (newRow) => new Promise((resolve, reject) => {
            const updatedRows = [...data, { rulename: Math.floor(Math.random() * 100), ...newRow }]
            setTimeout(() => {
              setData(updatedRows)
              resolve()
            }, 2000)
          }),
          // onRowDelete: selectedRow => new Promise((resolve, reject) => {
          //   const index = selectedRow.tableData.rulename;
          //   const updatedRows = [...data]
          //   updatedRows.splice(index, 1)
          //   setTimeout(() => {
          //     setData(updatedRows)
          //     resolve()
          //   }, 2000)
          // }),
          // onRowUpdate: (updatedRow, oldRow) => new Promise((resolve, reject) => {
          //   const index = oldRow.tableData.rulename;
          //   const updatedRows = [...data]
          //   updatedRows[index] = updatedRow
          //   setTimeout(() => {
          //     setData(updatedRows)
          //     resolve()
          //   }, 2000)
          // })
        }}
        options={{
          actionsColumnIndex: -1, addRowPosition: "first", search: false, filtering: false, maxBodyHeight: 350, paging: false,
        }}
      />
    </div>
  );
}

export default Mattab;
