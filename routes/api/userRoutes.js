const router = require("express").Router();
const {
  getUsers,
  createUser,
  getSingleUser,
  updateUser,
  deleteUser,
  addFriend,
  removeFriend,
} = require("../../controllers/userController");

// User get/post route
router.route("/").get(getUsers).post(createUser);

// Get/put single user by id
router.route("/:userId").get(getSingleUser).put(updateUser).delete(deleteUser);

// Add/delete friend
router.route("/:userId/friends/:friendId").post(addFriend).delete(removeFriend);

module.exports = router;
