const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
// const app = require('../app');
const User = require('../models/User');

const { google } = require('../config/keys.js');

passport.serializeUser((user, done) => {
	return done(null, user);
});

passport.deserializeUser((user, done) => {
	return done(null, user);
});

module.exports = (passport) => {
	passport.use(
		new GoogleStrategy(
			{
				clientID: google.clientID,
				clientSecret: google.clientSecret,
				callbackURL: google.callbackURL,
			},

			function (accessToken, refreshToken, profile, done) {
				// User.findOrCreate(..., function(err, user) {
				//   done(err, user);
				// });
				console.log(profile);
				done(null, profile);
			}
		)
	);
};

// app.use('/api/users/auth/google', () => {
// 	passport.authenticate('google', { scope: ['profile'] });
// });

// app.use('/api/users/auth/google/callback', () => {
// 	passport.authenticate('google', { failureRedirect: '/signup' }),
// 		(req, res) => {
// 			res.redirect('/');
// 		};
// });
