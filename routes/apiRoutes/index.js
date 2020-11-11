const router = require("express").Router();
const scoreRoutes = require("./scoreRoutes");
const userRoutes = require("./userRoutes");
const generateWordRoutes = require("./generateWordRoutes");
const generateQuoteRoutes = require("./generateQuoteRoutes");

router.use("/scores", scoreRoutes);
router.use("/users", userRoutes);

// Contains methods to generate random words
router.use("/words", generateWordRoutes);

// Contains methods to generate random quotes
router.use("/quote", generateQuoteRoutes);

module.exports = router;
