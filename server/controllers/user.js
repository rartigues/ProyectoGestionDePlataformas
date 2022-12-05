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
  async checkPassword(req, res) {
    try {
      const user = await User.findOne({
        where: {
          correo: req.body.correo,
        },
      });
      if (user) {
        if (user.password === req.body.password) {
          res.status(200).send({
            id: user.id,
            correo: user.correo,
            nombre: user.nombre,
            apellido: user.apellido,
            telefono: user.telefono,
          });
        } else {
          res.status(400).send("Contraseña incorrecta");
        }
      } else {
        res.status(400).send("Usuario no encontrado");
      }
    } catch (error) {
      console.log(error);
      res.status(500).send(error.message);
    }
  },
};