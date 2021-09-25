const Validator = require('validator');

const isEmpty = (value) => {
	return (
		value === undefined ||
		value === null ||
		(typeof value === 'object' && Object.keys(value).length === 0) ||
		(typeof value === 'string' && value.trim().length === 0)
	);
};

const ValidateRegisterUser = (data) => {
	let errors = '';

	data.username = !isEmpty(data.username) ? data.username : '';
	(data.email = !isEmpty(data.email) ? data.email : ''),
		(data.password = !isEmpty(data.password) ? data.password : '');

	if (Validator.isEmpty(data.username)) {
		errors = 'Please enter your username';
	}

	if (Validator.isEmpty(data.email)) {
		errors = 'Email is a required field';
	}

	if (!Validator.isEmail(data.email)) {
		errors = 'Enter a valid email address';
	}

	if (Validator.isEmpty(data.password)) {
		errors = 'Password is required';
	}

	if (!Validator.isLength(data.password, { min: 2, max: 20 })) {
		errors = 'Password must be between 2 and 40 characters';
	}

	return {
		errors,
	};
};

module.exports = ValidateRegisterUser;
