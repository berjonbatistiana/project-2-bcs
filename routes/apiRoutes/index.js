const router = require('express').Router();
const leaderRoutes = require('./leaderRoutes');
const userRoutes = require('./userRoutes');
const generateWordRoutes = require('./generateWordRoutes');

// Setup your routes for /api/something here
// This line of code makes it so that /api/fweets is prepended to fweetRoutes
// example route.use('/myRoute', myRoutes);

// Contains leaderboard data
router.use('/leaderboard', leaderRoutes);

// Contains single user data
router.use('/users', userRoutes);

// Contains methods to generate random words
router.use('/words', generateWordRoutes);



module.exports = router;
