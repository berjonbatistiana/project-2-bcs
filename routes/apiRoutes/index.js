const router = require("express").Router();
const leaderRoutes = require("./leaderRoutes");
const userRoutes = require("./userRoutes");

router.use("/leaderboard", leaderRoutes);
router.use("/users", userRoutes);

module.exports = router;
