const router = require("express").Router();
const {
  getLeaderboard,
  postScore,
} = require("../../../controllers/scoreController");
const authMiddleware = require("../../../middlewares/authorizationMiddleware");

router.use(authMiddleware);
router.route("/").get(getLeaderboard).post(postScore);

module.exports = router;
