import React from "react";
import ToDo from "./ToDo";
import {connect} from 'react-redux';

class ToDoList extends React.Component {
  render() {
    const { todos, status} = this.props;
    // console.log(todos);
    const filteredTodos = status === 'all' ? todos : todos.filter(todo => todo.status === status);
    // console.log(filteredTodos)
    var todoNode = filteredTodos.map(todo => {
      return <ToDo todo={todo.task} key={todo.id} id={todo.id} />;
    });
    // return <div>daffdasdfasdf</div>
    return <ul>{todoNode}</ul>;
  }
}

const mapStateToProps = state => state

export default connect(mapStateToProps)(ToDoList);
