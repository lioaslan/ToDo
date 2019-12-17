const dbQuery = require("../models");

module.exports = {
  method: "PATCH",
  path: "/todo/delete",
  handler: async (request, reply) => {
    await dbQuery.deleteTodo(request.payload.id);
    return "Deleted todo";
  }
};
