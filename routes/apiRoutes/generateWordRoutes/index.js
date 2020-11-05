const router = require('express').Router();

const {
    generateWord
} = require('../../../controllers/randomWordController');

const authMiddleware = require('../../../middlewares/authorizationMiddleware');
// router.use(authMiddleware);

// /api/words
router.route('/')
    .get(generateWord);

module.exports = router;
