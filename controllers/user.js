const User = require('../models').User
module.exports = {
  getAllUsers: async (_req, res) => {
    

    // User.findAll().then(users => {
    //   res.status(200).send(users);
    // })
    // .catch(error => res.status(400).send(error));
  
    User.findAll({
      attributes: ["id", "firstName", "lastName", "email"],
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
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
      });
      res.status(200).send(user);
    } catch (error) {
      console.log(error);
      res.status(500).send(error);
    }
  },
};