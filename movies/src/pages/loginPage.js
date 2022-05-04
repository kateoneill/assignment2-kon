import React, { useContext, useState } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from '../authContext';
import { Link } from "react-router-dom";
import { Paper, Card, Grid, Input, TextField, Button } from "@mui/material";

const LoginPage = props => {
  const context = useContext(AuthContext);

  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const login = () => {
    context.authenticate(userName, password);
  };

  let location = useLocation();

  // Set 'from' to path where browser is redirected after a successful login - either / or the protected path user requested
  const { from } = location.state ? { from: location.state.from.pathname } : { from: "/" };

  if (context.isAuthenticated === true) {
    return <Navigate to={from} />;
  }

  return (
    <>
    <Grid alignItems="center" justifyContent="center">
      <Card sx={{marginLeft: '10%', marginRight:'10%', padding: '10px 30px 10px 30px', backgroundColor: '#666c75', '& .MuiTextField-root': { m: 1, width: '25ch' }}}>
        <h2 style={{color: 'white'}}>Login page</h2>
        <p style={{color: 'white'}}>You must log in to view the protected pages </p>
        <TextField id="username" label="Username" color="warning" onChange={e => {
          setUserName(e.target.value);
        }}></TextField><br />
        <TextField id="password" type="password" label="Password" color="warning" onChange={e => {
          setPassword(e.target.value);
        }}></TextField><br />
        {/* Login web form  */}
        <Button variant="outlined" color="warning" onClick={login}>Log in</Button>
        <p>Not Registered?
        <Link to="/signup">Sign Up!</Link></p>
      </Card>
    </Grid>
    </>
  );
};

export default LoginPage;