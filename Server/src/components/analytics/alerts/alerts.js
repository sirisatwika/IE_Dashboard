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

function createData(id, message, initiator, receiver, status, time, priority) {
    return {
        id, message, initiator, receiver, status, time, priority
    };
}

const rows = [
    createData('1A2230296', 'Temperature alert-above threshold', 'edgex-kuiper', 'admin', 'Inprogress', '22-01-2023 11:06', 'High'),

    createData('1A2230276', 'Device update:example device POST', 'edgex-core-metadata', 'admin', 'Completed', '2023-02-20 12:08:38', 'Normal'),

    createData('1A2230286', 'Device update:testdevice-DELETE', 'edgex-core-metadata', 'admin', 'Inprogress', '2023-02-20 12:08:38', 'Normal'),

    createData('1A2230136', 'Temperature alert-above threshold', 'edgex-kuiper', 'admin', 'Inprogress', '22-01-2023 11:06', 'High'),

    createData('1A2240296', 'Device update:example device POST', 'edgex-core-metadata', 'admin', 'Completed', '2023-02-20 12:08:38', 'Normal'),

    createData('1A2530296', 'Device update:testdevice-DELETE', 'edgex-core-metadata', 'admin', 'Inprogress', '2023-02-20 12:08:38', 'Normal'),

    createData('1A2270296', 'Temperature alert-above threshold', 'edgex-kuiper', 'admin', 'Inprogress', '22-01-2023 11:06', 'High'),

    createData('1A2280256', 'Device update:example device POST', 'edgex-core-metadata', 'admin', 'Completed', '2023-02-20 12:08:38', 'Normal'),

    createData('1A2235296', 'Device update:testdevice-DELETE', 'edgex-core-metadata', 'admin', 'Inprogress', '2023-02-20 12:08:38', 'Normal'),

    createData('1A2290296', 'Temperature alert-above threshold', 'edgex-kuiper', 'admin', 'Inprogress', '22-01-2023 11:06', 'High'),

    createData('1A2230676', 'Device update:example device POST', 'edgex-core-metadata', 'admin', 'Completed', '2023-02-20 12:08:38', 'Normal'),

    createData('1A2330286', 'Device update:testdevice-DELETE', 'edgex-core-metadata', 'admin', 'Inprogress', '2023-02-20 12:08:38', 'Normal'),
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
        id: 'id',
        numeric: true,
        disablePadding: false,
        label: 'ID',
    },
    {
        id: 'message',
        numeric: false,
        disablePadding: false,
        label: 'Message',
    },
    {
        id: 'initiator',
        numeric: false,
        disablePadding: false,
        label: 'Initiator',
    },
    {
        id: 'receiver',
        numeric: false,
        disablePadding: false,
        label: 'Receiver',
    },
    {
        id: 'status',
        numeric: false,
        disablePadding: false,
        label: 'Status',
    },
    {
        id: 'time',
        numeric: true,
        disablePadding: false,
        label: 'Time',
    },
    {
        id: 'priority',
        numeric: false,
        disablePadding: false,
        label: 'Priority',
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

function AlertList() {
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
            const newSelected = rows.map((n) => n.id);
            setSelected(newSelected);
            return;
        }
        setSelected([]);
    };

    const handleClick = (event, id) => {

        event.stopPropagation();

        const selectedIndex = selected.indexOf(id);
        let newSelected = [];
        if (selectedIndex === -1) {
            newSelected = newSelected.concat(selected, id);
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

    const isSelected = (id) => selected.indexOf(id) !== -1;

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
                                const isItemSelected = isSelected(row.id);
                                const labelId = `enhanced-table-checkbox-${index}`;
                                return (
                                    <TableRow hover onClick={(event) => handleRowClick(event, row.id)} role="checkbox" aria-checked={isItemSelected} tabIndex={-1} key={row.id} selected={isItemSelected}>
                                        <TableCell component='td' padding="checkbox" >
                                            <Checkbox color="primary" onClick={(event) => handleClick(event, row.id)} checked={isItemSelected} inputProps={{ 'aria-labelledby': labelId }} />
                                        </TableCell>
                                        <TableCell component='td' size='small'> {row.id}</TableCell>
                                        <TableCell component='td' size='small'>{row.message}</TableCell>
                                        <TableCell component='td' size='small'>{row.initiator}</TableCell>
                                        <TableCell component='td' size='small'>{row.receiver}</TableCell>
                                        <TableCell component='td' size='small'>{row.status}</TableCell>
                                        <TableCell component='td' size='small'>{row.time}</TableCell>
                                        <TableCell component='td' size='small'>{row.priority}</TableCell>
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
export default AlertList;