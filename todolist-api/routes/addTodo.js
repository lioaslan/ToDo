const dbQuery = require("../models");

module.exports = {
  method: "POST",
  path: "/todo/add",
  handler: async (request, reply) => {
    const {id, task} = request.payload;
    await dbQuery.addTodo(id, task);
    return "Added todo";
  }
};
