const dbQuery = require("../models");

module.exports = [
  {
    method: "POST",
    path: "/users/login",
    handler: async (request, reply) => {
      const userDB = (await dbQuery.getUser()).rows[0];
      const user = request.payload;
      console.log(userDB)
      console.log(user)
      return (JSON.userDB === JSON.user) ? {loggedIn: true} : {loggedIn: false};
    }
  },
  {
    method: "GET",
    path: "/todo/init",
    handler: async (request, reply) => {
      const result = await dbQuery.getTodos();
      return result.rows;
    }
  },
  {
    method: "POST",
    path: "/todo/add",
    handler: async (request, reply) => {
      await dbQuery.addTodo(request.payload.todo);
      return "Added todo";
    }
  },
  {
    method: "PATCH",
    path: "/todo/change-status",
    handler: async (request, reply) => {
      const { id, status } = request.payload;
      await dbQuery.changeStatus(id, status);
      return "Changed status";
    }
  },
  {
    method: "PATCH",
    path: "/todo/delete",
    handler: async (request, reply) => {
      await dbQuery.deleteTodo(request.payload.id)
      return "Deleted todo";
    }
  }
];
