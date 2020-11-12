const router = require('express').Router();

const {
    generateQuote
} = require('../../../controllers/randomWordController');

router.route('/')
    .get(generateQuote);

module.exports = router;
