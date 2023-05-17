import React from "react";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import TablePagination from '@mui/material/TablePagination';
import "../firewall/firewall.css";

function createData(rulename, protocol, portrange, ipsource) {
    return { rulename, protocol, portrange, ipsource };
}

const rows = [
    createData('Custom TCP', 'TCP', 1880, '192.168.222.2.0'),
    createData('Custom TCP', 'TCP', 3000, '192.168.222.2.0'),
    createData('Custom TCP', 'TCP', 8080, '192.168.222.2.0'),
    createData('Custom TCP', 'TCP', 9000, '192.168.222.2.0'),
    createData('Custom TCP', 'TCP', 443, '192.168.222.2.0'),
    createData('Custom TCP', 'TCP', 1880, '192.168.222.2.0'),
    createData('Custom TCP', 'TCP', 1080, '192.168.222.2.0'),
    createData('Custom TCP', 'TCP', 3000, '192.168.222.2.0'),
    createData('Custom TCP', 'TCP', 1880, '192.168.222.2.0'),
    createData('Custom TCP', 'TCP', 1080, '192.168.222.2.0'),
    createData('Custom TCP', 'TCP', 3000, '192.168.222.2.0'),
    createData('Custom TCP', 'TCP', 1080, '192.168.222.2.0'),
    createData('HTTPS', 'TCP', 1080, '192.168.222.2.0'),
    createData('SSH', 'TCP', 1080, '192.168.222.2.0'),
    createData('HTTP', 'TCP', 1080, '192.168.222.2.0'),
    createData('Custom TCP', 'TCP', 1080, '192.168.222.2.0'),
];



function OutboundTable() {

    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(10);

    const handleChangePage = (_event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };

    return (
        <React.Fragment>
            <TableContainer sx={{ maxHeight: 350 }}>
                <h4 align='center' className="tabletitle">Outbound</h4>
                <Table sx={{ minWidth: 650 }} aria-label="simple table" className='edge_table'>
                    <TableHead className="modeltablehead">
                        <TableRow>
                            <TableCell>Rule Name</TableCell>
                            <TableCell>Protocol</TableCell>
                            <TableCell>Port Range</TableCell>
                            <TableCell>IP Destination</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows
                            .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                            .map((row) => (
                                <TableRow key={row.rulename} sx={{ '&:last-child td, &:last-child th': { border: 0 } }} >
                                    <TableCell component='td' size='small'> {row.rulename} </TableCell>
                                    <TableCell component='td' size='small'> {row.protocol}</TableCell>
                                    <TableCell component='td' size='small'>{row.portrange}</TableCell>
                                    <TableCell component='td' size='small'>{row.ipsource}</TableCell>
                                </TableRow>
                            ))}
                    </TableBody>
                </Table>
            </TableContainer>
            <TablePagination rowsPerPageOptions={[10, 25, 100]} component="div" count={rows.length} rowsPerPage={rowsPerPage} page={page} onPageChange={handleChangePage} onRowsPerPageChange={handleChangeRowsPerPage} className="edgetable_pagination" />
        </React.Fragment>
    )
}
export default OutboundTable;