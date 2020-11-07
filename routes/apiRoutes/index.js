const router = require("express").Router();
const scoreRoutes = require("./scoreRoutes");
const userRoutes = require("./userRoutes");
const generateWordRoutes = require("./generateWordRoutes");

router.use("/scores", scoreRoutes);
router.use("/users", userRoutes);

// Contains methods to generate random words
router.use("/words", generateWordRoutes);

module.exports = router;
