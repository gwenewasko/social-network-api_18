const { ObjectId } = require("mongoose").Types;
const { Thought } = require("../models");

module.exports = {
  // Get all users
  getThoughts(req, res) {
    User.find()
      .then(async (users) => {
        const userObj = {
          users,
        };
        return res.json(userObj);
      })
      .catch((err) => {
        console.log(err);
        return res.status(500).json(err);
      });
  },
};
