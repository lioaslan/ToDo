const dbQuery = require("../models");

module.exports = {
  method: "PATCH",
  path: "/todo/change-status",
  handler: async (request, reply) => {
    const { id, status } = request.payload;
    await dbQuery.changeStatus(id, status);
    return "Changed status";
  }
};
