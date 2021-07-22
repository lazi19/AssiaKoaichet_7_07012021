const db = require('../models/index');
const User = db.user; 

exports.getAllUsers = (req, res, _) => {
    User.findAll()
      .then((user) => {
        res.status(200).json(user);
      })
      .catch((error) => {
        res.status(400).json({ error });
      });
  };
