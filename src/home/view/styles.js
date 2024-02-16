import { makeStyles } from '@mui/styles';

export default makeStyles((theme => ({
    root: {
        height: '100vh',
    },
    GridDataTable: {
        border: '0 !important',
        '& .MuiDataGrid-main': {
            '& .MuiDataGrid-cell': {
                textAlign: 'left !important',
            },
            cursor: 'pointer',
            '& .MuiDataGrid-columnHeaders': {
                border: '0 !important',
            },
            '& .MuiDataGrid-virtualScroller': {
                '& .MuiDataGrid-row': {
                    borderRadius: 25,
                    '& .MuiDataGrid-cell': {
                        border: '0 !important',
                    },
                    '&:nth-of-type(odd)': {
                        backgroundColor: '#F5F5F9',
                    },
                    "&:hover": {
                        backgroundColor: '#6650F2 !important',
                        color: '#fff',
                        '& .MuiDataGrid-cell': {
                            '& .MuiCheckbox-root': {
                                color: '#fff !important',
                            },
                        },
                    },
                },
                '& .Mui-selected': {
                    backgroundColor: '#5138EE',
                    color: '#fff',
                    '&:nth-of-type(odd)': {
                        color: '#000',
                        '& .MuiDataGrid-cell': {
                            '& .MuiCheckbox-root': {
                                color: '#000 !important',
                            },
                        },
                    },
                    '& .MuiDataGrid-cell': {
                        '& .MuiCheckbox-root': {
                            color: '#fff !important',
                        },
                    },
                    "&:hover": {
                        backgroundColor: '#6650F2 !important',
                        color: '#fff',
                    },
                },
            },
        },
        '& .MuiDataGrid-footerContainer': {
            '& .MuiTablePagination-root': {
                top: 0,
                position: 'absolute',
                right: 0,
            }
        },
    },
})
))