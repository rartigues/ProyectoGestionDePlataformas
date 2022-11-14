const userController = require("../controllers/user");

module.exports = (app) => {
  app.get("/api", (req, res) => {
    res.status(200).send({
      data: "Welcome Node Sequlize API v1",
    });
  });

  app.get("/api/users/", userController.getAllUsers);
  app.post("/api/users/", userController.createUser);
};  