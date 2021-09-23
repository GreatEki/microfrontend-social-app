const express = require('express');

const app = express();

// Express Middleware and Body-Parse
app.use(express.json());

app.use((req, res, next) => {
	// Allow Access for Origins
	res.header('Access-Control-Allow-Origin', '*');

	// Allow Access for Headers
	res.header(
		'Access-Control-Allow-Headers',
		'Origin, X-Requested-With, Content-Type, Accept, Authorization'
	);

	// Allow Access for the following request methods
	if (req.method === 'OPTIONS') {
		res.header('Access-Control-Allow-Methods', 'POST, PUT, PATCH, GET, DELETE');
		return res.status(200).json({});
	}

	next();
});

module.exports = app;
