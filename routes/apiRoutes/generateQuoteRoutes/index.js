const router = require('express').Router();

const {
    generateQuote
} = require('../../../controllers/randomWordController');

const authMiddleware = require('../../../middlewares/authorizationMiddleware');
// router.use(authMiddleware);

// /api/quote
router.route('/')
    .get(generateQuote);

module.exports = router;
