const login = require('./login');
const initTodos = require('./initTodos');
const addTodo = require('./addTodo.js');
const changeStatus = require('./changeStatus');
const deleteTodo = require('./deleteTodo');
const logout = require('./logout');

module.exports = [].concat(login, logout, initTodos, addTodo, changeStatus, deleteTodo);
