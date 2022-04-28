const router = require("express").Router();
const {
  getAllThoughts,
  createThought,
  getSingleThought,
  deleteThought,
  updateThought,
  createReaction,
  deleteReaction,
} = require("../../controllers/thoughtController");

// Get all thoughts, post new thought
router.route("/").get(getAllThoughts).post(createThought);

// Get single thought / delete thought / update thought
router
  .route("/:thoughtId")
  .get(getSingleThought)
  .delete(deleteThought)
  .put(updateThought);

// Post reaction
router.route("/:thoughtId/reactions").post(createReaction);

// Delete reaction
router.route("/:thoughtId/reactions/:reactionId").delete(deleteReaction);

module.exports = router;
