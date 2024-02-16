import React, { useEffect, useState } from "react";
import useStyles from "./styles";
import Grid from "@mui/system/Unstable_Grid";
import Paper from "@mui/material/Paper";
import {
  Button,
  IconButton,
  InputAdornment,
  TextField,
  Typography,
} from "@mui/material";
import { useNavigate, useParams } from "react-router";
import { useFormik } from "formik";
import * as yup from "yup";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";

const Login = () => {
  const classes = useStyles();
  const [showPassword, setShowPassword] = useState(false);
  const { username, password } = useParams();
  const navigate = useNavigate();

  const username_ = localStorage.getItem("username");
  const password_ = localStorage.getItem("password");
  const loggedIn = localStorage.getItem("loggedin");

  /*
          ****************Yup validation schema***************

*/
  const validator = yup.object({
    username: yup.string().required("Required"),
    password: yup.string().required("Required"),
  });

  /*
    Formik setup for intial values ,onsubmit and validation

*/
  const formik = useFormik({
    initialValues: {
      username: "",
      password: "",
    },
    validationSchema: validator,
    onSubmit: (values) => {
      const { username, password } = values;
      if (username === username_ && password === password_) {
        navigate("/home");
        localStorage.setItem("loggedin", 1);
      } else {
        window.alert("invalid credentials");
      }
    },
  });

  /*
    password visiblity handler
  */
  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  /*
   ***navigateToLogin
   */
  const navigateToLogin = () => {
    navigate("/");
  };

  /*
   Lifecycle of login component
  */

  useEffect(() => {
    if (username !== undefined && password !== undefined) {
      localStorage.setItem("username", username);
      localStorage.setItem("password", password);
      navigateToLogin();
    }
  }, [username, password]);

  useEffect(() => {
    if (loggedIn) {
      navigate("/home");
    }
  }, [loggedIn]);

  return (
    <>
      <Grid container spacing={0} component="main" className={classes.root}>
        <Grid
          item
          xs={12}
          sm={12}
          md={12}
          className={classes.flexProp}
          component={Paper}
          elevation={12}
          square
        >
          <Paper style={{ padding: "40px" }} className={classes.paper}>
            <Typography component="h1" variant="h5">
              <span style={{ margin: 0, fontSize: 18, fontWeight: "bold" }}>
                Login
              </span>
            </Typography>
            <form className={classes.form} onSubmit={formik.handleSubmit}>
              <TextField
                variant="outlined"
                margin="normal"
                fullWidth
                id="username"
                label="Username"
                name="username"
                value={formik.values.username}
                onChange={formik.handleChange}
                error={
                  formik.touched.username && Boolean(formik.errors.username)
                }
                helperText={formik.touched.username && formik.errors.username}
              />
              <TextField
                variant="outlined"
                margin="normal"
                fullWidth
                name="password"
                label="Password"
                type={showPassword ? "text" : "password"}
                id="password"
                onPaste={(e) => {
                  e.preventDefault();
                  return false;
                }}
                // autoComplete="new-password"
                value={formik.values.password}
                onChange={formik.handleChange}
                error={
                  formik.touched.password && Boolean(formik.errors.password)
                }
                helperText={formik.touched.password && formik.errors.password}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton
                        onClick={handleClickShowPassword}
                        // onMouseDown={handleMouseDownPassword}
                      >
                        {showPassword ? (
                          <VisibilityIcon />
                        ) : (
                          <VisibilityOffIcon />
                        )}
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
              />
              <br />

              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                className={classes.submit}
              >
                Login
              </Button>
            </form>
          </Paper>
        </Grid>
      </Grid>
    </>
  );
};

export default Login;
