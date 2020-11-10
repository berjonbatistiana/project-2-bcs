const router = require("express").Router();
const {
  getLeaderboard,
  postScore,
} = require("../../../controllers/scoreController");

router.route("/").get(getLeaderboard).post(postScore);

module.exports = router;
