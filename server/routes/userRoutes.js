const express = require('express');

const router = express.Router();

const {
	signup,
	googleAuthenticate,
	signInGogleCallBack,
	getUser,
} = require('../controller/User');

router.route('/signup').post(signup);

router.route('/auth/google').get(googleAuthenticate);

router.route('/auth/google/callback').get(signInGogleCallBack);

router.route('/getUser').get(getUser);

module.exports = router;
