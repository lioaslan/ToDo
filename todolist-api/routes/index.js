const login = require('./login');
const initTodos = require('./initTodos');
const addTodo = require('./addTodo.js');
const changeStatus = require('./changeStatus');
const deleteTodo = require('./deleteTodo');

module.exports = [].concat(login, initTodos, addTodo, changeStatus, deleteTodo);
