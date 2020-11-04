const router = require('express').Router();

const {
    generateWord
} = require('../../../controllers/randomWordController');

router.route('/:wordCount')
    .get(generateWord);

module.exports = router;
