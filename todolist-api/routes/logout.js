const storage = require("node-persist");

module.exports = {
  method: "POST",
  path: "/users/logout",
  handler: async (request, reply) => {
    await storage.init();
    await storage.removeItem('salt');
    return "Logged out";
  }
};
