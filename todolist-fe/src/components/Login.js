import React, { Component } from "react";
import Paper from "@material-ui/core/Paper";
import TextField from "@material-ui/core/TextField";
import PersonIcon from "@material-ui/icons/Person";
import InputAdornment from "@material-ui/core/InputAdornment";
import LockIcon from "@material-ui/icons/Lock";
import Button from "@material-ui/core/Button";

const style = {
  margin: "160px 500px",
  width: "300px",
  height: "250px"
};

class Login extends Component {
  render() {
    return (
        <Paper style={style}>
          <div style={{ textAlign: "center" }}>LOGIN</div>
          <div style={{ margin: "30px" }}>
            <form>
              <TextField
                label="Username"
                style={{ display: "block" }}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <PersonIcon />
                    </InputAdornment>
                  )
                }}
              />
              <TextField
                label="Password"
                style={{ display: "block", margin: "10px 0px" }}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <LockIcon />
                    </InputAdornment>
                  )
                }}
              />
              <Button style={{ width: "100%", margin: "20px 0px" }}>
                LOGIN
              </Button>
            </form>
          </div>
        </Paper>
    );
  }
}

export default Login;
