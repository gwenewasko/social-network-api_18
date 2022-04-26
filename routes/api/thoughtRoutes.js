const router = require("express").Router();
const {
  getAllThoughts,
  createThought,
  getSingleThought,
} = require("../../controllers/thoughtController");

// Get all thoughts, post new thought
router.route("/").get(getAllThoughts).post(createThought);

// Get single thought
router.route("thought/:thoughtId").get(getSingleThought);

module.exports = router;
