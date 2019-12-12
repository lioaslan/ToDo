import React from "react";
import ToDo from "./ToDo";

export default class ToDoList extends React.Component {
  render() {
    const { todos, status} = this.props;
    const filteredTodos = status === 'all' ? todos : todos.filter(todo => todo.status === status)
    var todoNode = filteredTodos.map(todo => {
      return <ToDo todo={todo.text} key={todo.id} id={todo.id} />;
    });
    return <ul>{todoNode}</ul>;
  }
}
