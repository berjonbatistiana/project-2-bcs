const router = require('express').Router();
const leaderRoutes = require('./leaderRoutes');
const userRoutes = require('./userRoutes');

// Setup your routes for /api/something here
// This line of code makes it so that /api/fweets is prepended to fweetRoutes
// example route.use('/myRoute', myRoutes);

// Contains leaderboard data
router.use('/leaderboard', leaderRoutes);

// Contains single user data
router.use('/users', userRoutes);

module.exports = router;
