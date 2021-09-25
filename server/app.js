const express = require('express');
const session = require('express-session');
const passportSetup = require('./services/passport-setup');
const passport = require('passport');
const cors = require('cors');

const app = express();

// Express Middleware and Body-Parse
app.use(express.json());

app.use(
	cors({
		origin: 'http://localhost:9000' || 'http://localhost:9001',
		credentials: true,
	})
);

// app.use((req, res, next) => {
// 	// Allow Access for Origins
// 	res.header('Access-Control-Allow-Origin', '*');

// 	// Allow Access for Headers
// 	res.header(
// 		'Access-Control-Allow-Headers',
// 		'Origin, X-Requested-With, Content-Type, Accept, Authorization'
// 	);

// 	// Allow Access for the following request methods
// 	if (req.method === 'OPTIONS') {
// 		res.header('Access-Control-Allow-Methods', 'POST, PUT, PATCH, GET, DELETE');
// 		return res.status(200).json({});
// 	}

// 	next();
// });

//Express session middleware
app.use(
	session({
		secret: 'secretCode',
		resave: true,
		saveUninitialized: true,
	})
);

app.use(passport.initialize());
app.use(passport.session());
passportSetup(passport);

module.exports = app;
