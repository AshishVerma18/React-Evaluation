import React, { useState } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import { useDispatch } from "react-redux";
import { addUserData, editUserData } from "../actions";
import * as yup from "yup";
import { useFormik } from "formik";
import { useNavigate } from "react-router";

const AddNewPerson = ({ open, handleClose, user, edit }) => {
  const dispatch = useDispatch();
const navigate=useNavigate()
  const { name, age, profession } = user !== undefined && user;
  /*
          ****************Yup validation schema***************

*/
  const validator = yup.object({
    name: yup.string().required("Required"),
    age: yup.number().required("Required"),
    profession: yup.string().required("Required"),
  });

  /*
    Formik setup for intial values ,onsubmit and validation

*/
  const formik = useFormik({
    initialValues: {
      name: name ? name : "",
      age: age ? age : "",
      profession: profession ? profession : "",
    },
    validationSchema: validator,
    enableReinitialize: true,
    onSubmit: (values) => {
      if (edit) {
        dispatch(editUserData(values));
        navigate('/home')
        
      } else {
        dispatch(addUserData(values));
      }
      handleClose();
    },
  });
  return (
    <>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>{edit ? "Edit User" : "Add User"}</DialogTitle>
        <DialogContent>
          <TextField
            required
            margin="dense"
            id="name"
            name="name"
            label="Name"
            type="text"
            fullWidth
            variant="outlined"
            onChange={formik.handleChange}
            value={formik.values.name}
          />
          <TextField
            required
            margin="dense"
            id="age"
            name="age"
            label="Age"
            type="number"
            fullWidth
            variant="outlined"
            onChange={formik.handleChange}
            value={formik.values.age}
          />
          <TextField
            required
            margin="dense"
            id="profession"
            name="profession"
            label="Profession"
            type="text"
            fullWidth
            variant="outlined"
            onChange={formik.handleChange}
            value={formik.values.profession}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button type="submit" onClick={formik.handleSubmit}>
            Save
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default AddNewPerson;
