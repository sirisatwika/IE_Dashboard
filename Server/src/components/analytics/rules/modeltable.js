import React from "react";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';

function createData(inputs, format, source, minput, mformat, msource) {
    return { inputs, format, source, minput, mformat, msource };
}

const columns = [
    {
        id: 'inputs',
        label: 'Input',
    },
    {
        id: 'format',
        label: 'Format',
    },
    {
        id: 'source',
        label: 'Source',
    },
    {
        id: 'minput',
        label: 'Input',
    },
    {
        id: 'mformat',
        label: 'Format',
    },
    {
        id: 'msource',
        label: 'Source',
    },
];

const rows = [
    createData('Image', 'Jpeg,PNG', 'ABC', 'Coordinate', '(X,Y,Z)', 'DEF'),
    createData('Image', 'Jpeg,PNG', 'ABC', 'Coordinate', '(X,Y,Z)', 'DEF'),
    createData('Image', 'Jpeg,PNG', 'ABC', 'Coordinate', '(X,Y,Z)', 'DEF'),
    createData('Image', 'Jpeg,PNG', 'ABC', 'Coordinate', '(X,Y,Z)', 'DEF'),
    createData('Image', 'Jpeg,PNG', 'ABC', 'Coordinate', '(X,Y,Z)', 'DEF'),
    createData('Image', 'Jpeg,PNG', 'ABC', 'Coordinate', '(X,Y,Z)', 'DEF'),
    createData('Image', 'Jpeg,PNG', 'ABC', 'Coordinate', '(X,Y,Z)', 'DEF'),
    createData('Image', 'Jpeg,PNG', 'ABC', 'Coordinate', '(X,Y,Z)', 'DEF'),
    createData('Image', 'Jpeg,PNG', 'ABC', 'Coordinate', '(X,Y,Z)', 'DEF'),
    createData('Image', 'Jpeg,PNG', 'ABC', 'Coordinate', '(X,Y,Z)', 'DEF'),
    createData('Image', 'Jpeg,PNG', 'ABC', 'Coordinate', '(X,Y,Z)', 'DEF'),
    createData('Image', 'Jpeg,PNG', 'ABC', 'Coordinate', '(X,Y,Z)', 'DEF'),
    createData('Image', 'Jpeg,PNG', 'ABC', 'Coordinate', '(X,Y,Z)', 'DEF'),
];

function ModelTable() {

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

            <TableContainer sx={{ maxHeight: 400 }}>
                <Table stickyHeader aria-label="sticky table" className='edge_table'>
                    <TableHead className="modeltablehead">
                        <TableRow>
                            <TableCell align="center" colSpan={3}>
                                Model Input
                            </TableCell>
                            <TableCell align="center" colSpan={3}>
                                Model Output
                            </TableCell>
                        </TableRow>
                        <TableRow>
                            {columns.map((column) => (
                                <TableCell key={column.id} >
                                    {column.label}
                                </TableCell>
                            ))}
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows
                            .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                            .map((row) => {
                                return (
                                    <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                                        {columns.map((column) => {
                                            const value = row[column.id];
                                            return (
                                                <TableCell key={column.id} component='td'>
                                                    {value}
                                                </TableCell>
                                            );
                                        })}
                                    </TableRow>
                                );
                            })}
                    </TableBody>
                </Table>
            </TableContainer>
            <TablePagination rowsPerPageOptions={[10, 25, 100]} component="div" count={rows.length} rowsPerPage={rowsPerPage} page={page} onPageChange={handleChangePage} onRowsPerPageChange={handleChangeRowsPerPage} className="edgetable_pagination"/>
        </React.Fragment>
    )
}
export default ModelTable;