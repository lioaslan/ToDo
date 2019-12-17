const dbQuery = require("../models");

module.exports = {
  method: "POST",
  path: "/todo/add",
  handler: async (request, reply) => {
    await dbQuery.addTodo(request.payload.todo);
    return "Added todo";
  }
};
