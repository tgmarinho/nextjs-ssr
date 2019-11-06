const routes = require("next-routes");

module.exports = routes()
  .add("/", "index")
  .add("/users", "users")
  .add("/users/:user", "detail");
