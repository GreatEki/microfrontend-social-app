const bcrypt = require('bcrypt');
const User = require('../models/User');
const ValidateRegisterUser = require('../validations/registerUser');
const { ClientError } = require('../errors');
const passport = require('passport');

const signup = async (req, res) => {
	try {
		const { username, email, password } = req.body;

		const { errors } = ValidateRegisterUser(req.body);

		if (errors.length) {
			return res.json({ message: errors });
		}

		email.toLowerCase();

		// Check if user exists via email or if username exists
		const user = await User.find({ email });

		if (user) {
			throw new ClientError('Email already exists');
		}

		// Confirm if username is unique
		const existingUserName = await User.find({ username });

		if (existingUserName) {
			res.json({
				success: false,
				message: 'Username is already taken',
			});
		}

		if (!existingUserName) {
			// Generate a hash for user's password
			const hashedPassword = await bcrypt.hash(password, 10);

			// Create a new User
			const newUser = new User({
				username,
				email,
				password: hashedPassword,
			});

			const createdUser = await newUser.save();

			return res.json({
				success: true,
				message: 'User signed up successfully',
				data: createdUser,
			});
		}
	} catch (err) {
		return res.status(500).json({
			success: false,
			message: err.message,
		});
	}
};

const googleAuthenticate = passport.authenticate('google', {
	scope: ['profile'],
});

const signInGogleCallBack = passport.authenticate('google', {
	failureRedirect: '/',
	successRedirect: 'http://localhost:9000',
});

const getUser = (req, res) => {
	res.send(req.user);
};

module.exports = {
	signup,
	googleAuthenticate,
	signInGogleCallBack,
	getUser,
};
