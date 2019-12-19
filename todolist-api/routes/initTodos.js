const dbQuery = require("../models");
const jwt = require('jsonwebtoken');
const storage = require("node-persist");

module.exports = {
  method: "GET",
  path: "/todo/init",
  handler: async (request, reply) => {
    const token = request.state.token;
    await storage.init();
    const salt = await storage.getItem('salt')
    if (token === '%3A)' || !jwt.verify(token, salt)) return 'Not Logged In';
    const result = await dbQuery.getTodos();
    return result.rows;
  }
};
