import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "./authContext";
import Button from '@mui/material/Button';
import { Typography } from "@mui/material";


const BaseAuthHeader = (props) => {
  const context = useContext(AuthContext);
  const navigate = useNavigate();

  return context.isAuthenticated ? (
    <Typography variant="h4" component="h4" color="white"> 
      Welcome {context.userName}! <Button variant="contained" color="warning" onClick={() => context.signout()}>Sign out</Button>
    </Typography>
  ) : (
    <Typography variant="h4" component="h4" color="white">
      Join us!{" "}
      <Button variant="contained" color="warning" onClick={() => navigate('/login')}>Login</Button>
    </Typography>
  );
};

export default BaseAuthHeader;