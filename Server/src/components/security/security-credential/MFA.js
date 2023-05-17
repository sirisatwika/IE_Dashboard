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
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Button from '@mui/material/Button';
import '../../page/table.css';
import '../../security/Security.css';

function createData(device, identifier, createdDate, lastUpdatedDate, action,) {
  return {
    device, identifier, createdDate, lastUpdatedDate, action
  };
}

const rows = [
  createData('Device-01', 'edge:ie:5634869872/gita@abc.com', '22-01-2023 11:06', '22-01-2023 11:06', 'Update MFA', ),
  createData('Device-02', 'edge:ie:5634869872/gita@abc.com', '22-01-2023 11:06', '22-01-2023 11:06', 'Update MFA', ),
  createData('Device-03', 'edge:ie:5634869872/gita@abc.com', '22-01-2023 11:06', '22-01-2023 11:06', 'Update MFA',),
  createData('Device-04', 'edge:ie:5634869872/gita@abc.com', '22-01-2023 11:06', '22-01-2023 11:06', 'Update MFA', ),
  createData('Device-05', 'edge:ie:5634869872/gita@abc.com', '22-01-2023 11:06', '22-01-2023 11:06', 'Update MFA',),
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
    id: 'device',
    numeric: false,
    disablePadding: false,
    label: 'Device',
  },
  {
    id: 'identifier',
    numeric: true,
    disablePadding: false,
    label: 'Identifier',
  },
  {
    id: 'createdDate',
    numeric: false,
    disablePadding: false,
    label: 'Created Date',
  },
  {
    id: 'lastUpdatedDate',
    numeric: true,
    disablePadding: false,
    label: 'last Updated Date',
  },
  {
    id: 'action',
    numeric: true,
    disablePadding: false,
    label: 'Action',
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
      const newSelected = rows.map((n) => n.device);
      setSelected(newSelected);
      return;
    }
    setSelected([]);
  };

  const handleClick = (event, device) => {

    event.stopPropagation();

    const selectedIndex = selected.indexOf(device);
    let newSelected = [];
    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, device);
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

  const isSelected = (device) => selected.indexOf(device) !== -1;

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClickMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleCloseMenu = () => {
    setAnchorEl(null);
  };

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
                const isItemSelected = isSelected(row.device);
                const labelId = `enhanced-table-checkbox-${index}`;
                return (
                  <TableRow hover onClick={(event) => handleRowClick(event, row.device)} role="checkbox" aria-checked={isItemSelected} tabIndex={-1} key={row.device} selected={isItemSelected}>
                    <TableCell component='td' padding="checkbox" >
                      <Checkbox color="primary" onClick={(event) => handleClick(event, row.device)} checked={isItemSelected} inputProps={{ 'aria-labelledby': labelId }} />
                    </TableCell>
                    <TableCell component='td' size='small'> {row.device}</TableCell>
                    <TableCell component='td' size='small'>{row.identifier}</TableCell>
                    <TableCell component='td' size='small'>{row.createdDate}</TableCell>
                    <TableCell component='td' size='small'>{row.lastUpdatedDate}</TableCell>
                    <TableCell component='td' size='small'>{row.action}
                    <ArrowDropDownIcon 
                    id="basic-button"
                    aria-controls={open ? 'basic-menu' : undefined}
                    aria-haspopup="true"
                    aria-expanded={open ? 'true' : undefined}
                    onClick={handleClickMenu}/>
                    
                </TableCell>
                
                  </TableRow>
                  
                );
              })}
          </TableBody>
          
        </Table>
      </TableContainer>
      <Menu
                      id="basic-menu"
                      anchorEl={anchorEl}
                      open={open}
                      onClose={handleCloseMenu}
                      MenuListProps={{
                        'aria-labelledby': 'basic-button',
                      }}
                    >
                      <MenuItem onClick={handleCloseMenu}>Assign MFA</MenuItem>
                      <MenuItem onClick={handleCloseMenu}>Delete MFA</MenuItem>
                      <MenuItem onClick={handleCloseMenu}>Update MFA</MenuItem>
                    </Menu>
      <TablePagination rowsPerPageOptions={[5, 10, 25]} component="div" count={rows.length} rowsPerPage={rowsPerPage} page={page} onPageChange={handleChangePage} onRowsPerPageChange={handleChangeRowsPerPage} className="edgetable_pagination"/>
      <Button variant="contained" className='updateall'>Update All</Button>
    </React.Fragment>
  );
}
export default EnhancedTable;