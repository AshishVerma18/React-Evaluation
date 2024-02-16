import React, { useState } from "react";
import { DataGrid } from "@mui/x-data-grid";
import useStyles from "./styles";
import { useDispatch, useSelector } from "react-redux";
import { Button } from "@mui/material";
import AddNewPerson from "./AddNewPerson";
import { useNavigate } from "react-router";
import { setSelctedUser } from "../actions";

const Home = () => {
  const classes = useStyles();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [pageSize, setPageSize] = useState(20);
  const [selectedUser, setSelectedUser] = useState([]);

  const [open, setOpen] = useState(false);

  const state = useSelector((state) => {
    return {
      userData: state.userReducer.userData,
    };
  });

  const { userData } = state;

  /*
   button click handler (open add new person popup)
  */

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  /*
    logout handler
  */

  const handleLogout = () => {
    localStorage.clear();
    navigate('/')
  };
  /*
   ***********************Columns for grid***********************
   */
  const columns = [
    {
      field: "id",
      headerName: "id",
      width: 40,
      disableExport: true,
      sortable: false,
      // headerAlign: "center",
    },
    {
      field: "name",
      headerName: "Name",
      flex: 1,
      // width: 180,
      headerAlign: "left",
    },
    {
      field: "age",
      headerName: "Age",
      // width: 180,
      flex: 1,
      headerAlign: "left",
    },
    {
      field: "profession",
      headerName: "Profession",
      // width: 180,
      flex: 1,
      headerAlign: "left",
    },
  ];

  /*
   ***********************Rows for the data grid***********************

   */

  const rows =
    userData &&
    userData !== undefined &&
    userData.length > 0 &&
    userData.map((data, index) => {
      return {
        id: index + 1,
        name: data.name,
        age: data.age,
        profession: data.profession,
      };
    });
  return (
    <>
      <div>
        <Button
          variant="contained"
          style={{ flex: "right", margin: "10px" }}
          onClick={handleClick}
        >
          Add New Person
        </Button>
      </div>
      <div style={{float:"right", marginTop:"-47px"}}>
        <Button variant="contained" onClick={handleLogout}>
          Logout
        </Button>
      </div>
      <div style={{ height: 1000, width: "100%", margin: "20px" }}>
        <>
          <DataGrid
            className={classes.GridDataTable}
            rows={rows && rows.length > 0 ? rows : []}
            columns={
              columns && columns.length > 0
                ? columns.map((column) => ({
                    ...column,
                  }))
                : []
            }
            sortingOrder={["asc", "desc", null]}
            autoHeight={false}
            pageSize={pageSize}
            onPageSizeChange={(newPageSize) => setPageSize(newPageSize)}
            rowsPerPageOptions={[20, 40, 60]}
            disableSelectionOnClick={true}
            disableColumnMenu={true}
            pagination
            {...rows}
            onCellClick={(params) => {
              setSelectedUser(params.row);
              navigate("/home/profile");
              dispatch(setSelctedUser(params.row));
            }}
          />
        </>
      </div>
      <AddNewPerson open={open} handleClose={handleClose} />
    </>
  );
};

export default Home;
