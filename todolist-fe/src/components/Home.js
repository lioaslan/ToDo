import React, { Component } from "react";
import { connect } from "react-redux";
import Cookies from "universal-cookie";

import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import Tooltip from "@material-ui/core/Tooltip";

import AddToDo from "./AddToDo";
import ToDoList from "./ToDoList";
import VisibleFilter from "./VisibleFilter";

import { initTodos } from "../actions";
import { initTodosRequest, logoutRequest } from "../requests";

const cookies = new Cookies();

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentStatus: "all"
    };
  }

  async componentDidMount() {
    const token = cookies.get("token");
    const res = await initTodosRequest(token);
    if (res === "Not Logged In") {
      alert("You haven't logged in yet");
      this.props.history.push("./");
    } else this.props.initTodos(res);
  }

  handleClick(status) {
    this.setState({
      currentStatus: status
    });
  }

  async handleExit() {
    await logoutRequest();
    this.props.history.push("./");
  }

  render() {
    return (
      <Paper style={{ paddingBottom: "20px" }}>
        <div>
          <h1 style={{ textAlign: "center" }}>
            ToDo List
            <Tooltip title="Log out" style={{ marginLeft: "10px" }}>
              <ExitToAppIcon onClick={() => this.handleExit()} />
            </Tooltip>
          </h1>
        </div>

        <div>
          <AddToDo />
        </div>

        <Grid container spacing={2}>
          <Grid item xs={2}>
            <Paper style={{ margin: "10px" }}>
              <VisibleFilter handleClick={status => this.handleClick(status)} />
            </Paper>
          </Grid>

          <Grid item xs={10}>
            <Paper style={{ margin: "10px", padding: "10px" }}>
              <ToDoList status={this.state.currentStatus} />
            </Paper>
          </Grid>
        </Grid>
      </Paper>
    );
  }
}

const mapStateToProps = state => state;

const mapDispatchToProps = dispatch => {
  return {
    initTodos: todos => dispatch(initTodos(todos))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
