const userController = require("../controllers/user");
const productoController = require("../controllers/producto");
const compraController = require("../controllers/compra");

module.exports = (app) => {
  app.get("/api", (req, res) => {
    res.status(200).send({
      data: "Welcome Node Sequlize API v1",
    });
  });

  app.get("/api/users/", userController.getAllUsers);
  app.post("/api/users/", userController.createUser);

  app.get("/api/products/", productoController.getAllProducts);

  app.post("/api/compras/", compraController.create);
};  