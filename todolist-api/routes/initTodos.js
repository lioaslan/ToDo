const dbQuery = require("../models");

module.exports = {
  method: "GET",
  path: "/todo/init",
  handler: async (request, reply) => {
    const result = await dbQuery.getTodos();
    return result.rows;
  }
};
