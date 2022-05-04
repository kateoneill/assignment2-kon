import React, { useContext, useState } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from '../authContext';
import { Paper, Card, Grid, Input, TextField, Button } from "@mui/material";


const SignUpPage = props => {
  const context = useContext(AuthContext)
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [passwordAgain, setPasswordAgain] = useState("");
  const [registered, setRegistered] = useState(false);

  const register = () => {
    let passwordRegEx = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{5,}$/;
    const validPassword = passwordRegEx.test(password);

    if (validPassword && password === passwordAgain) {
      context.register(userName, password);
      setRegistered(true);
    }
  }

  if (registered === true) {
    return <Navigate to="/login" />;
  }

  return (
    <>
    <Grid alignItems="center" justifyContent="center">
      <Card sx={{marginLeft: '10%', marginRight:'10%', padding: '10px 30px 10px 30px', backgroundColor: '#666c75', '& .MuiTextField-root': { m: 1, width: '25ch' }}}>
      <h2>SignUp page</h2>
      <p>You must register a username and password to log in </p>
      <TextField color="warning" value={userName} placeholder="user name" onChange={e => {
        setUserName(e.target.value);
      }}></TextField><br />
      <TextField value={password} type="password" color="warning" placeholder="password" onChange={e => {
        setPassword(e.target.value);
      }}></TextField><br />
      <TextField value={passwordAgain} type="password" color="warning" placeholder="password again" onChange={e => {
        setPasswordAgain(e.target.value);
      }}></TextField><br />
      {/* Login web form  */}
      <Button onClick={register} variant="outlined" color="warning">Register</Button>
      </Card>
    </Grid>
    </>
  );
};

export default SignUpPage;