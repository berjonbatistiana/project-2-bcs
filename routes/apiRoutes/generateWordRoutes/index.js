const router = require('express').Router();

const {
    generateWord
} = require('../../../controllers/randomWordController');

// /api/words
router.route('/')
    .get(generateWord);

module.exports = router;
