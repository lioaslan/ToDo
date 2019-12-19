const dbQuery = require("../models");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const storage = require("node-persist");

module.exports = {
  method: "POST",
  path: "/users/login",
  handler: async (request, reply) => {
    const userDB = (await dbQuery.getUser()).rows[0];
    const user = request.payload;

    let result = {
      loggedIn: false,
      token: ":)"
    };

    if (userDB.username === user.username) {
      const match = await bcrypt.compare(user.password, userDB.password);
      if (match) {
        await storage.init({ ttl: false });
        const salt =
          Math.random()
            .toString(10)
            .substring(2, 5) +
          Math.random()
            .toString(10)
            .substring(2, 5);
        await storage.setItem('salt', salt);

        const token = jwt.sign(
          { username: user.username },
          salt
        );
        result = {
          loggedIn: match,
          token
        };
      }
    }
    return result;
  }
};
