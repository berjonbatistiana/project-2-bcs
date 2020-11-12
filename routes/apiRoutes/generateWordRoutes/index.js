const router = require('express').Router();

const {
    generateWord
} = require('../../../controllers/randomWordController');

router.route('/')
    .get(generateWord);

module.exports = router;
