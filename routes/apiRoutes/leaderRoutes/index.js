const router = require('express').Router();

const {
} = require('../../../controllers/leaderController');

const authMiddleware = require('../../../middlewares/authorizationMiddleware');

router.use(authMiddleware);

router.route('/')

module.exports = router;
