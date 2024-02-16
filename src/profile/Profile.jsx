import React, { useState } from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useSelector } from "react-redux";
import AddNewPerson from "../home/view/AddNewPerson";

const Profile = () => {
  const [open, setOpen] = useState(false);
  const state = useSelector((state) => {
    return {
      user: state.userReducer.selectedUser,
    };
  });
  const { user } = state;
  const { name, age, profession } = user !== undefined && user;

  /*
  click handler
  */

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <>
      <div style={{ marginTop: "100px", marginLeft: "400px" }}>
        <Card sx={{ maxWidth: 500 }}>
          <CardMedia
            sx={{ height: 180 }}
            image="/assets/profile.png"
            title={name}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Name: {name}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Age: {age}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Profession: {profession}
            </Typography>
          </CardContent>
          <CardActions style={{ justifyContent: "end" }}>
            <Button size="small" variant="outlined" onClick={handleClick}>
              Edit
            </Button>
          </CardActions>
        </Card>
      </div>
      <AddNewPerson
        open={open}
        handleClose={handleClose}
        user={user}
        edit={true}
      />
    </>
  );
};

export default Profile;
