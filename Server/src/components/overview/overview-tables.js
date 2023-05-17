import * as React from 'react';
import PropTypes from 'prop-types';
import { alpha } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import TableSortLabel from '@mui/material/TableSortLabel';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Checkbox from '@mui/material/Checkbox';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import DeleteIcon from '@mui/icons-material/Delete';
import FilterListIcon from '@mui/icons-material/FilterList';
import { visuallyHidden } from '@mui/utils';
import '../page/table.css';

function createData(gatewayid, gatewayname, ipaddress, associatedservice, status, macaddress, zone, serialno, manufacturemodel,osversion, activeinactive, firmwareversion, timestamp, provisioneddate, LastCommunicated, OTA_os_status, Actionupdate, OTA_function, Action, OTA_firmware_status, Action2, Authentication, ExpiryStatus, Expirydate, MFAenabled, Encryption, Action3) {
  return {
    gatewayid, gatewayname, ipaddress, associatedservice, status, macaddress, zone, serialno, manufacturemodel,osversion, activeinactive, firmwareversion, timestamp, provisioneddate, LastCommunicated, OTA_os_status, Actionupdate, OTA_function, Action, OTA_firmware_status, Action2, Authentication, ExpiryStatus, Expirydate, MFAenabled, Encryption, Action3
  };
}

const rows = [
  createData('3265768', 'gatewayzone1', '192.168.56.45 _1502', 'Modbus_8.0', 'online', '00:25:96:FF:FE:12:34:56', 'Us', '6247575278', 'Dell_lat3420', 'Ubuntu_22.04', 'Active', '2.1.2.13.1,A03', '45005.6715277778', '18-03-2023  20:08:00', '19-03-2023', 'None', 'None', 'None', 'None', 'None', 'None', 'Symmetric', 'Active', '30-04-2025', 'Yes', 'TLS 1.0 / SSL', 'update to latest Version'),
  createData('3265768', 'gatewayzone1', '192.168.56.45 _1502', 'Modbus_8.0', 'online', '00:25:96:FF:FE:12:34:56', 'Us', '6247575278', 'Dell_lat3420', 'Ubuntu_22.04', 'Active', '2.1.2.13.1,A03', '45005.6715277778', '18-03-2023  20:08:00', '19-03-2023', 'None', 'None', 'None', 'None', 'None', 'None', 'Symmetric', 'Active', '30-04-2025', 'Yes', 'TLS 1.0 / SSL', 'update to latest Version'),
  createData('3265768', 'gatewayzone1', '192.168.56.45 _1502', 'Modbus_8.0', 'online', '00:25:96:FF:FE:12:34:56', 'Us', '6247575278', 'Dell_lat3420', 'Ubuntu_22.04', 'Active', '2.1.2.13.1,A03', '45005.6715277778', '18-03-2023  20:08:00', '19-03-2023', 'None', 'None', 'None', 'None', 'None', 'None', 'Symmetric', 'Active', '30-04-2025', 'Yes', 'TLS 1.0 / SSL', 'update to latest Version'),
  createData('3265768', 'gatewayzone1', '192.168.56.45 _1502', 'Modbus_8.0', 'online', '00:25:96:FF:FE:12:34:56', 'Us', '6247575278', 'Dell_lat3420', 'Ubuntu_22.04', 'Active', '2.1.2.13.1,A03', '45005.6715277778', '18-03-2023  20:08:00', '19-03-2023', 'None', 'None', 'None', 'None', 'None', 'None', 'Symmetric', 'Active', '30-04-2025', 'Yes', 'TLS 1.0 / SSL', 'update to latest Version'),
  createData('3265768', 'gatewayzone1', '192.168.56.45 _1502', 'Modbus_8.0', 'online', '00:25:96:FF:FE:12:34:56', 'Us', '6247575278', 'Dell_lat3420', 'Ubuntu_22.04', 'Active', '2.1.2.13.1,A03', '45005.6715277778', '18-03-2023  20:08:00', '19-03-2023', 'None', 'None', 'None', 'None', 'None', 'None', 'Symmetric', 'Active', '30-04-2025', 'Yes', 'TLS 1.0 / SSL', 'update to latest Version'),
  createData('3265768', 'gatewayzone1', '192.168.56.45 _1502', 'Modbus_8.0', 'online', '00:25:96:FF:FE:12:34:56', 'Us', '6247575278', 'Dell_lat3420', 'Ubuntu_22.04', 'Active', '2.1.2.13.1,A03', '45005.6715277778', '18-03-2023  20:08:00', '19-03-2023', 'None', 'None', 'None', 'None', 'None', 'None', 'Symmetric', 'Active', '30-04-2025', 'Yes', 'TLS 1.0 / SSL', 'update to latest Version'),
  createData('3265768', 'gatewayzone1', '192.168.56.45 _1502', 'Modbus_8.0', 'online', '00:25:96:FF:FE:12:34:56', 'Us', '6247575278', 'Dell_lat3420', 'Ubuntu_22.04', 'Active', '2.1.2.13.1,A03', '45005.6715277778', '18-03-2023  20:08:00', '19-03-2023', 'None', 'None', 'None', 'None', 'None', 'None', 'Symmetric', 'Active', '30-04-2025', 'Yes', 'TLS 1.0 / SSL', 'update to latest Version'),
  createData('3265768', 'gatewayzone1', '192.168.56.45 _1502', 'Modbus_8.0', 'online', '00:25:96:FF:FE:12:34:56', 'Us', '6247575278', 'Dell_lat3420', 'Ubuntu_22.04', 'Active', '2.1.2.13.1,A03', '45005.6715277778', '18-03-2023  20:08:00', '19-03-2023', 'None', 'None', 'None', 'None', 'None', 'None', 'Symmetric', 'Active', '30-04-2025', 'Yes', 'TLS 1.0 / SSL', 'update to latest Version'),
  createData('3265768', 'gatewayzone1', '192.168.56.45 _1502', 'Modbus_8.0', 'online', '00:25:96:FF:FE:12:34:56', 'Us', '6247575278', 'Dell_lat3420', 'Ubuntu_22.04', 'Active', '2.1.2.13.1,A03', '45005.6715277778', '18-03-2023  20:08:00', '19-03-2023', 'None', 'None', 'None', 'None', 'None', 'None', 'Symmetric', 'Active', '30-04-2025', 'Yes', 'TLS 1.0 / SSL', 'update to latest Version'),
  createData('3265768', 'gatewayzone1', '192.168.56.45 _1502', 'Modbus_8.0', 'online', '00:25:96:FF:FE:12:34:56', 'Us', '6247575278', 'Dell_lat3420', 'Ubuntu_22.04', 'Active', '2.1.2.13.1,A03', '45005.6715277778', '18-03-2023  20:08:00', '19-03-2023', 'None', 'None', 'None', 'None', 'None', 'None', 'Symmetric', 'Active', '30-04-2025', 'Yes', 'TLS 1.0 / SSL', 'update to latest Version'),
  
];

function descendingComparator(a, b, orderBy) {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
}

function getComparator(order, orderBy) {
  return order === 'desc'
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy);
}

function stableSort(array, comparator) {
  const stabilizedThis = array.map((el, index) => [el, index]);
  stabilizedThis.sort((a, b) => {
    const order = comparator(a[0], b[0]);
    if (order !== 0) {
      return order;
    }
    return a[1] - b[1];
  });
  return stabilizedThis.map((el) => el[0]);
}

const headCells = [
  {
    id: 'gatewayid',
    numeric: false,
    disablePadding: false,
    label: 'Gateway ID',
  },
  {
    id: 'gatewayname',
    numeric: true,
    disablePadding: false,
    label: 'Gateway Name',
  },
  {
    id: 'ipaddress',
    numeric: false,
    disablePadding: false,
    label: 'IP address / Port',
  },
  {
    id: 'associatedservice',
    numeric: true,
    disablePadding: false,
    label: 'Associated service/Protocol_version',
  },
  {
    id: 'status',
    numeric: true,
    disablePadding: false,
    label: 'Status',
  },
  {
    id: 'macaddress',
    numeric: true,
    disablePadding: false,
    label: 'MAC address',
  },
  {
    id: 'zone',
    numeric: true,
    disablePadding: false,
    label: 'Zone',
  },
  {
    id: 'serialno',
    numeric: true,
    disablePadding: false,
    label: 'Serial Number',
  },
  {
    id: 'manufacturemodel',
    numeric: true,
    disablePadding: false,
    label: 'Manufacturer_Model',
  },
  {
    id: 'osversion',
    numeric: true,
    disablePadding: false,
    label: 'OS_version',
  },
  {
    id: 'activeinactive',
    numeric: true,
    disablePadding: false,
    label: 'Active / Inactive',
  },
  {
    id: 'firmwareversion',
    numeric: true,
    disablePadding: false,
    label: 'Firmware_version',
  },  
  {
    id: 'timestamp',
    numeric: true,
    disablePadding: false,
    label: 'Timestamp',
  },
  {
    id: 'provisioneddate',
    numeric: true,
    disablePadding: false,
    label: 'Provisioned Date & Time	',
  },
  {
    id: 'LastCommunicated',
    numeric: true,
    disablePadding: false,
    label: 'Last Communicated',
  },
  {
    id: 'OTA_os_status',
    numeric: true,
    disablePadding: false,
    label: 'OTA_OS_status	',
  },
  {
    id: 'Actionupdate',
    numeric: true,
    disablePadding: false,
    label: 'Action Update',
  },
  {
    id: 'OTA_function',
    numeric: true,
    disablePadding: false,
    label: 'OTA_function/service_status',
  },  {
    id: 'Action',
    numeric: true,
    disablePadding: false,
    label: 'Action',
  },
  {
    id: 'OTA_firmware_status',
    numeric: true,
    disablePadding: false,
    label: 'OTA_firmware_status',
  },
  {
    id: 'Action2',
    numeric: true,
    disablePadding: false,
    label: 'Action2',
  },
  {
    id: 'Authentication',
    numeric: true,
    disablePadding: false,
    label: 'Authentication/ Authorization Type',
  },
  {
    id: 'ExpiryStatus',
    numeric: true,
    disablePadding: false,
    label: 'Expiry Status',
  },
  {
    id: 'Expirydate',
    numeric: true,
    disablePadding: false,
    label: 'Expiry Date',
  },  
  {
    id: 'MFAenabled',
    numeric: true,
    disablePadding: false,
    label: 'MFA Enabled',
  },
  {
    id: 'Encryption',
    numeric: true,
    disablePadding: false,
    label: 'Encryption/Decryption type_version',
  },
  {
    id: 'Action3',
    numeric: true,
    disablePadding: false,
    label: 'Action3',
  },
];

function EnhancedTableHead(props) {
  const { onSelectAllClick, order, orderBy, numSelected, rowCount, onRequestSort } =
    props;
  const createSortHandler = (property) => (event) => {
    onRequestSort(event, property);
  };
  return (
    <TableHead>
      <TableRow>
        <TableCell padding="checkbox">
          <Checkbox color="primary" indeterminate={numSelected > 0 && numSelected < rowCount} checked={rowCount > 0 && numSelected === rowCount} onChange={onSelectAllClick} inputProps={{ 'aria-label': 'select all desserts' }} />
        </TableCell>
        {headCells.map((headCell) => (
          <TableCell key={headCell.id} sortDirection={orderBy === headCell.id ? order : false}>
            <TableSortLabel active={orderBy === headCell.id} direction={orderBy === headCell.id ? order : 'asc'} onClick={createSortHandler(headCell.id)}>
              {headCell.label}
              {orderBy === headCell.id ? (
                <Box component="span" sx={visuallyHidden}>
                  {order === 'desc' ? 'sorted descending' : 'sorted ascending'}
                </Box>
              ) : null}
            </TableSortLabel>
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
}

EnhancedTableHead.propTypes = {
  numSelected: PropTypes.number.isRequired,
  onRequestSort: PropTypes.func.isRequired,
  onSelectAllClick: PropTypes.func.isRequired,
  order: PropTypes.oneOf(['asc', 'desc']).isRequired,
  orderBy: PropTypes.string.isRequired,
  rowCount: PropTypes.number.isRequired,
};

function EnhancedTableToolbar(props) {
  const { numSelected } = props;
  return (
    <Toolbar className='e_toolbar'
      sx={{
        pl: { sm: 2 },
        pr: { xs: 1, sm: 1 },
        ...(numSelected > 0 && {
          bgcolor: (theme) =>
            alpha(theme.palette.primary.main, theme.palette.action.activatedOpacity),
        }),
      }}
    >
      {numSelected > 0 ? (
        <Typography className='e-rowselect' sx={{ flex: '1 1 100%' }} color="inherit" variant="subtitle1" component="div" > {numSelected} selected
        </Typography>
      ) : (
        <Typography className='e_title' sx={{ flex: '1 1 100%' }} variant="h6" id="tableTitle" component="div">
         
        </Typography>
      )}

      {numSelected > 0 ? (
        <Tooltip title="Delete">
          <IconButton>
            <DeleteIcon fontSize="small" />
          </IconButton>
        </Tooltip>
      ) : (
        <div className='table_top'>
          <Tooltip title="Filter list">
            <IconButton>
              <FilterListIcon fontSize="small" />
            </IconButton>
          </Tooltip>
        </div>
      )}
    </Toolbar>
  );
}

EnhancedTableToolbar.propTypes = {
  numSelected: PropTypes.number.isRequired,
};

function OverviewDetailsTable() {
  const [order, setOrder] = React.useState('asc');
  const [orderBy, setOrderBy] = React.useState('serialNo');
  const [selected, setSelected] = React.useState([]);
  const [page, setPage] = React.useState(0);
  // const [dense, setDense] = React.useState(false);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleRequestSort = (event, property) => {
    const isAsc = orderBy === property && order === 'asc';
    setOrder(isAsc ? 'desc' : 'asc');
    setOrderBy(property);
  };

  const handleSelectAllClick = (event) => {
    if (event.target.checked) {
      const newSelected = rows.map((n) => n.edgegatewayid);
      setSelected(newSelected);
      return;
    }
    setSelected([]);
  };

  const handleClick = (event, edgegatewayid) => {

    event.stopPropagation();

    const selectedIndex = selected.indexOf(edgegatewayid);
    let newSelected = [];
    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, edgegatewayid);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1));
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(
        selected.slice(0, selectedIndex),
        selected.slice(selectedIndex + 1),
      );
    }
    setSelected(newSelected);
  };

  const handleRowClick = (event, id) => {
    console.log("row link");
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const isSelected = (edgegatewayid) => selected.indexOf(edgegatewayid) !== -1;

  return (

    <React.Fragment>
      <EnhancedTableToolbar numSelected={selected.length} />
      <TableContainer>
        <Table className='edge_table' aria-labelledby="tableTitle" >
          <EnhancedTableHead numSelected={selected.length} order={order} orderBy={orderBy} onSelectAllClick={handleSelectAllClick} onRequestSort={handleRequestSort} rowCount={rows.length} />
          <TableBody>
            {stableSort(rows, getComparator(order, orderBy))
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row, index) => {
                const isItemSelected = isSelected(row.edgegatewayid);
                const labelId = `enhanced-table-checkbox-${index}`;
                return (
                  <TableRow hover onClick={(event) => handleRowClick(event, row.edgegatewayid)} role="checkbox" aria-checked={isItemSelected} tabIndex={-1} key={row.edgegatewayid} selected={isItemSelected}>
                    <TableCell component='td' padding="checkbox" >
                      <Checkbox color="primary" onClick={(event) => handleClick(event, row.edgegatewayid)} checked={isItemSelected} inputProps={{ 'aria-labelledby': labelId }} />
                    </TableCell>
                    <TableCell component='td' size='small'> {row.gatewayid}</TableCell>
                    <TableCell component='td' size='small'>{row.gatewayname}</TableCell>
                    <TableCell component='td' size='small'>{row.ipaddress}</TableCell>
                    <TableCell component='td' size='small'>{row.associatedservice}</TableCell>
                    <TableCell component='td' size='small'>{row.status}</TableCell>
                    <TableCell component='td' size='small'>{row.macaddress}</TableCell>
                    <TableCell component='td' size='small'>{row.zone}</TableCell>
                    <TableCell component='td' size='small'>{row.serialno}</TableCell>
                    <TableCell component='td' size='small'>{row.manufacturemodel}</TableCell>
                    <TableCell component='td' size='small'>{row.osversion}</TableCell>
                    <TableCell component='td' size='small'>{row.activeinactive}</TableCell>
                    <TableCell component='td' size='small'>{row.firmwareversion}</TableCell>
                    <TableCell component='td' size='small'>{row.timestamp}</TableCell>
                    <TableCell component='td' size='small'>{row.provisioneddate}</TableCell>
                    <TableCell component='td' size='small'>{row.LastCommunicated}</TableCell>
                    <TableCell component='td' size='small'>{row.OTA_os_status}</TableCell>
                    <TableCell component='td' size='small'>{row.Actionupdate}</TableCell>
                    <TableCell component='td' size='small'>{row.OTA_function}</TableCell>
                    <TableCell component='td' size='small'>{row.Action}</TableCell>
                    <TableCell component='td' size='small'>{row.OTA_firmware_status}</TableCell>
                    <TableCell component='td' size='small'>{row.Action2}</TableCell>
                    <TableCell component='td' size='small'>{row.Authentication}</TableCell>
                    <TableCell component='td' size='small'>{row.ExpiryStatus}</TableCell>
                    <TableCell component='td' size='small'>{row.Expirydate}</TableCell>
                    <TableCell component='td' size='small'>{row.MFAenabled}</TableCell>
                    <TableCell component='td' size='small'>{row.Encryption}</TableCell>
                    <TableCell component='td' size='small'>{row.Action3}</TableCell>
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination rowsPerPageOptions={[5, 10, 25]} component="div" count={rows.length} rowsPerPage={rowsPerPage} page={page} onPageChange={handleChangePage} onRowsPerPageChange={handleChangeRowsPerPage} className="edgetable_pagination"/>
    </React.Fragment>
  );
}
export default OverviewDetailsTable;