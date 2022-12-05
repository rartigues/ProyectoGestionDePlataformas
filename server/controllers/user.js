const User = require('../models').User
module.exports = {
  getAllUsers: async (_req, res) => {
    

    User.findAll({
      attributes: ["id", "correo", "nombre", "apellido", "telefono"],
      // limit: 5,
      order: [["id", "ASC"]],
    })
      .then((users) => {
        return res.status(200).json({
          users,
        });
      })
      .catch((err) => {
        return res.status(400).json({ err });
      });
  },
  async createUser(req, res) {
    try {
      const user = await User.create({
        correo: req.body.correo,
        password: req.body.password,
        nombre: req.body.nombre,
        apellido: req.body.apellido,
        telefono: req.body.telefono,
      });
      res.status(200).send(user);
    } catch (error) {
      console.log(error);
      res.status(500).send(error.message);
    }
  },
};