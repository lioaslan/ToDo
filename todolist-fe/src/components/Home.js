import React, { Component } from "react";
import { connect } from "react-redux";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import AddToDo from "./AddToDo";
import ToDoList from "./ToDoList";
import VisibleFilter from "./VisibleFilter";
import { initTodos } from "../actions";
import { initTodosRequest } from "../requests";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentStatus: "all"
    };
  }

  async componentDidMount(){
    const todos = await initTodosRequest();
    this.props.initTodos(todos);
  }

  handleClick(status) {
    this.setState({
      currentStatus: status
    });
  }

  render() {
    return (
      <Paper style={{ paddingBottom: "20px" }}>
        <div>
          <h1 style={{ textAlign: "center" }}>ToDo List</h1>
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
