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
import '../../page/table.css';

function createData(deviceId, rule, creationTime, updationTime) {
  return {
    deviceId, rule, creationTime, updationTime
  };
}

const rows = [
  createData('1A230296', 'Get device location', '20-01-2023 12:56', '22-01-2023 11:06'),
  createData('1A230292', 'Get vehicle driver details', '21-01-2023 12:56', '23-01-2023 11:06'),
  createData('1A230396', 'Get device location', '22-01-2023 12:56', '23-01-2023 11:06'),
  createData('1A230246', 'Get vehicle driver details', '19-01-2023 12:56', '20-01-2023 11:06'),
  createData('1A230196', 'Get device location', '20-02-2023 12:56', '22-02-2023 11:06'),
  createData('1A230396', 'Get vehicle driver details', '24-01-2023 12:56', '25-01-2023 11:06'),
  createData('1D230296', 'Get device location', '26-02-2023 12:56', '27-02-2023 11:06'),
  createData('1A235296', 'Get vehicle driver details', '14-01-2023 12:56', '16-01-2023 11:06'),
  createData('1A230796', 'Get device location', '17-02-2023 12:56', '22-02-2023 11:06'),
  createData('1A230286', 'Get vehicle driver details', '24-03-2023 12:56', '25-03-2023 11:06'),
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
    id: 'deviceId',
    numeric: true,
    disablePadding: false,
    label: 'Device ID',
  },
  {
    id: 'rule',
    numeric: false,
    disablePadding: false,
    label: 'Rule',
  },
  {
    id: 'creationTime',
    numeric: false,
    disablePadding: false,
    label: 'Creation Time',
  },
  {
    id: 'updationTime',
    numeric: false,
    disablePadding: false,
    label: 'Updation Time',
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

function RulesTable() {
  const [order, setOrder] = React.useState('asc');
  const [orderBy, setOrderBy] = React.useState('serialNo');
  const [selected, setSelected] = React.useState([]);
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleRequestSort = (event, property) => {
    const isAsc = orderBy === property && order === 'asc';
    setOrder(isAsc ? 'desc' : 'asc');
    setOrderBy(property);
  };

  const handleSelectAllClick = (event) => {
    if (event.target.checked) {
      const newSelected = rows.map((n) => n.deviceId);
      setSelected(newSelected);
      return;
    }
    setSelected([]);
  };

  const handleClick = (event, deviceId) => {

    event.stopPropagation();

    const selectedIndex = selected.indexOf(deviceId);
    let newSelected = [];
    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, deviceId);
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

  const isSelected = (deviceId) => selected.indexOf(deviceId) !== -1;

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
                const isItemSelected = isSelected(row.deviceId);
                const labelId = `enhanced-table-checkbox-${index}`;
                return (
                  <TableRow hover onClick={(event) => handleRowClick(event, row.deviceId)} role="checkbox" aria-checked={isItemSelected} tabIndex={-1} key={row.deviceId} selected={isItemSelected}>
                    <TableCell component='td' padding="checkbox" >
                      <Checkbox color="primary" onClick={(event) => handleClick(event, row.deviceId)} checked={isItemSelected} inputProps={{ 'aria-labelledby': labelId }} />
                    </TableCell>
                    <TableCell component='td' size='small'> {row.deviceId}</TableCell>
                    <TableCell component='td' size='small'>{row.rule}</TableCell>
                    <TableCell component='td' size='small'>{row.creationTime}</TableCell>
                    <TableCell component='td' size='small'>{row.updationTime}</TableCell>
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
export default RulesTable;