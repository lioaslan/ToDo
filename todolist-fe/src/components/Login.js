import React, { Component } from "react";
import Paper from "@material-ui/core/Paper";
import TextField from "@material-ui/core/TextField";
import PersonIcon from "@material-ui/icons/Person";
import InputAdornment from "@material-ui/core/InputAdornment";
import LockIcon from "@material-ui/icons/Lock";
import Button from "@material-ui/core/Button";
import { loginRequest } from "../requests";
import Cookies from 'universal-cookie';

const cookies = new Cookies();

const style = {
  margin: "160px 500px",
  width: "300px",
  height: "250px"
};

class Login extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  async handleSubmit(e, inputUsername, inputPassword) {
    e.preventDefault();
    const user = {
      username: inputUsername.value,
      password: inputPassword.value
    };

    const res = await loginRequest(user);
    const { loggedIn, token } = res;
    cookies.set('token', token, {path: '/'});
    if (loggedIn) 
      this.props.history.push("./home");
    else alert("Username/Password is incorrect");
  }
  render() {
    let inputUsername, inputPassword;
    return (
      <Paper style={style}>
        <div style={{ textAlign: "center" }}>LOGIN</div>
        <div style={{ margin: "30px" }}>
          <form
            onSubmit={e => this.handleSubmit(e, inputUsername, inputPassword)}
          >
            <TextField
              label="Username"
              style={{ display: "block" }}
              inputRef={node => (inputUsername = node)}
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
              inputRef={node => (inputPassword = node)}
              type="password"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <LockIcon />
                  </InputAdornment>
                )
              }}
            />
            <Button type="submit" style={{ width: "100%", margin: "20px 0px" }}>
              LOGIN
            </Button>
          </form>
        </div>
      </Paper>
    );
  }
}

export default Login;