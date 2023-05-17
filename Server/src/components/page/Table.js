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

function createData(Gatewayid, iotdeviceId, iotdeviceName, iotprotocol, type, latitude, longitude, zone, gatewaysubnet, gatewayupdown, gatewayprovunprov, iotupdown, iotprovunprov, ipAddress, iotdevicedatacollected) {
  return {
    Gatewayid, iotdeviceId, iotdeviceName, iotprotocol, type, latitude, longitude, zone, gatewaysubnet, gatewayupdown, gatewayprovunprov, iotupdown, iotprovunprov, ipAddress, iotdevicedatacollected
  };
}

const rows = [
  createData('Gateway-01', 'Device-01', 'Device Name-01', 'MQTT', 'Value-01', '82634876', '82634876', 'Zone-01', '255.255 255.0', 'UP', 'Provisioned', 'UP', 'Provisioned', '2401:4900:607b', 'Temperature',),

  createData('Gateway-02', 'Device-02', 'Device Name-01', 'MQTT', 'Value-02', '82634876', '82634876', 'Zone-02', '255.255 255.0', 'UP', 'UnProvisioned', 'UP', 'UnProvisioned', '2401:4900:607b', 'Temperature',),

  createData('Gateway-03', 'Device-03', 'Device Name-01', 'MQTT', 'Value-03', '82634876', '82634876', 'Zone-03', '255.255 255.0', 'UP', 'Provisioned', 'UP', 'Provisioned', '2401:4900:607b', 'Temperature',),

  createData('Gateway-04', 'Device-04', 'Device Name-01', 'MQTT', 'Value-04', '82634876', '82634876', 'Zone-04', '255.255 255.0', 'UP', 'Provisioned', 'UP', 'UnProvisioned', '2401:4900:607b', 'Temperature',),

  createData('Gateway-05', 'Device-05', 'Device Name-01', 'MQTT', 'Value-05', '82634876', '82634876', 'Zone-05', '255.255 255.0', 'UP', 'Provisioned', 'UP', 'Provisioned', '2401:4900:607b', 'Temperature',),

  createData('Gateway-06', 'Device-06', 'Device Name-01', 'MQTT', 'Value-06', '82634876', '82634876', 'Zone-06', '255.255 255.0', 'UP', 'UnProvisioned', 'UP', 'UnProvisioned', '2401:4900:607b', 'Temperature',),

  createData('Gateway-07', 'Device-07', 'Device Name-01', 'MQTT', 'Value-07', '82634876', '82634876', 'Zone-07', '255.255 255.0', 'UP', 'Provisioned', 'UP', 'Provisioned', '2401:4900:607b', 'Temperature',),

  createData('Gateway-08', 'Device-08', 'Device Name-01', 'MQTT', 'Value-08', '82634876', '82634876', 'Zone-08', '255.255 255.0', 'UP', 'UnProvisioned', 'UP', 'UnProvisioned', '2401:4900:607b', 'Temperature',),
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
    id: 'Gatewayid',
    numeric: true,
    disablePadding: false,
    label: 'Gateway Id/Name	',
  },
  {
    id: 'iotdeviceId',
    numeric: false,
    disablePadding: false,
    label: 'IOT Device ID',
  },
  {
    id: 'iotdeviceName',
    numeric: false,
    disablePadding: false,
    label: 'IOT Device Name',
  },
  {
    id: 'iotprotocol',
    numeric: false,
    disablePadding: false,
    label: 'IOT Device Protocol',
  },
  {
    id: 'type',
    numeric: true,
    disablePadding: false,
    label: 'Type',
  },
  {
    id: 'latitude',
    numeric: true,
    disablePadding: false,
    label: 'Latitude',
  },
  {
    id: 'longitude',
    numeric: true,
    disablePadding: false,
    label: 'Longitude',
  },
  {
    id: 'zone',
    numeric: true,
    disablePadding: false,
    label: 'Zone',
  },
  {
    id: 'gatewaysubnet',
    numeric: true,
    disablePadding: false,
    label: 'Gateway Subnets',
  },
  {
    id: 'gatewayupdown',
    numeric: false,
    disablePadding: false,
    label: 'Gateway UP/Down',
  },
  {
    id: 'gatewayprovunprov',
    numeric: false,
    disablePadding: false,
    label: 'Gateway Provisioned/Unprovisioned',
  },
  {
    id: 'iotupdown',
    numeric: false,
    disablePadding: false,
    label: 'IOT Device UP/Down',
  },
  {
    id: 'iotprovunprov',
    numeric: false,
    disablePadding: false,
    label: 'IOT Device Provisioned/Unprovisioned',
  },
  {
    id: 'ipAddress',
    numeric: true,
    disablePadding: false,
    label: 'IP Address',
  },
  {
    id: 'iotdevicedatacollected',
    numeric: false,
    disablePadding: false,
    label: 'Data Collected',
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
          Total Device Connected: 890
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
          {/* <div className='t_label'>Add Label</div>
          <div className='t_refresh'>
            Last Data Refereshed <span>a min ago</span>
          </div> */}
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

function EnhancedTable() {
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
      const newSelected = rows.map((n) => n.Gatewayid);
      setSelected(newSelected);
      return;
    }
    setSelected([]);
  };

  const handleClick = (event, Gatewayid) => {

    event.stopPropagation();

    const selectedIndex = selected.indexOf(Gatewayid);
    let newSelected = [];
    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, Gatewayid);
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

  const isSelected = (Gatewayid) => selected.indexOf(Gatewayid) !== -1;

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
                const isItemSelected = isSelected(row.Gatewayid);
                const labelId = `enhanced-table-checkbox-${index}`;
                return (
                  <TableRow hover onClick={(event) => handleRowClick(event, row.Gatewayid)} role="checkbox" aria-checked={isItemSelected} tabIndex={-1} key={row.Gatewayid} selected={isItemSelected}>
                    <TableCell component='td' padding="checkbox" >
                      <Checkbox color="primary" onClick={(event) => handleClick(event, row.Gatewayid)} checked={isItemSelected} inputProps={{ 'aria-labelledby': labelId }} />
                    </TableCell>

                    <TableCell component='td' size='small'> {row.Gatewayid}</TableCell>
                    <TableCell component='td' size='small'> {row.iotdeviceId}</TableCell>
                    <TableCell component='td' size='small'>{row.iotdeviceName}</TableCell>
                    <TableCell component='td' size='small'>{row.iotprotocol}</TableCell>
                    <TableCell component='td' size='small'>{row.type}</TableCell>
                    <TableCell component='td' size='small'>{row.latitude}</TableCell>
                    <TableCell component='td' size='small'>{row.longitude}</TableCell>
                    <TableCell component='td' size='small'>{row.zone}</TableCell>
                    <TableCell component='td' size='small'>{row.gatewaysubnet}</TableCell>
                    <TableCell component='td' size='small'>{row.gatewayupdown}</TableCell>
                    <TableCell component='td' size='small'>{row.gatewayprovunprov}</TableCell>
                    <TableCell component='td' size='small'>{row.iotupdown}</TableCell>
                    <TableCell component='td' size='small'>{row.iotprovunprov}</TableCell>
                    <TableCell component='td' size='small'>{row.ipAddress}</TableCell>
                    <TableCell component='td' size='small'>{row.iotdevicedatacollected}</TableCell>
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination rowsPerPageOptions={[5, 10, 25]} component="div" count={rows.length} rowsPerPage={rowsPerPage} page={page} onPageChange={handleChangePage} onRowsPerPageChange={handleChangeRowsPerPage} className="edgetable_pagination" />
    </React.Fragment>
  );
}
export default EnhancedTable;