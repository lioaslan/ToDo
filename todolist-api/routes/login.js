const dbQuery = require("../models");

module.exports = {
  method: "POST",
  path: "/users/login",
  handler: async (request, reply) => {
    const userDB = (await dbQuery.getUser()).rows[0];
    const user = request.payload;
    return JSON.userDB === JSON.user ? { loggedIn: true } : { loggedIn: false };
  }
};
