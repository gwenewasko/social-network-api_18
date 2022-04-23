const router = require("express").Router();
const {
  getUsers,
  createUser,
  getSingleUser,
  updateUser,
  deleteUser,
} = require("../../controllers/userController");

// user get/post route
router.route("/").get(getUsers).post(createUser);

// get/put single user by id
router.route("/:userId").get(getSingleUser).put(updateUser).delete(deleteUser);

module.exports = router;
