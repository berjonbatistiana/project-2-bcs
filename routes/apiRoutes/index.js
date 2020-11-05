const router = require("express").Router();
const leaderRoutes = require("./leaderRoutes");
const userRoutes = require("./userRoutes");
const generateWordRoutes = require("./generateWordRoutes");

router.use("/leaderboard", leaderRoutes);
router.use("/users", userRoutes);

// Contains methods to generate random words
router.use("/words", generateWordRoutes);

module.exports = router;
