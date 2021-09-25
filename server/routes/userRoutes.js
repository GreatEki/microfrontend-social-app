const express = require('express');

const router = express.Router();

const { signup } = require('../controller/User');

router.route('/signup').post(signup);

module.exports = router;
