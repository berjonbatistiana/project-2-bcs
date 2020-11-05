const router = require("express").Router();
const { getLeaderboard } = require("../../../controllers/leaderController");
const authMiddleware = require("../../../middlewares/authorizationMiddleware");

router.use(authMiddleware);
router.route("/").get(getLeaderboard);

module.exports = router;
