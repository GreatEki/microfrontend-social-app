const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const UserSchema = new Schema(
	{
		username: {
			type: String,
			require: true,
			unique: true,
			min: 2,
			max: 20,
		},
		email: {
			type: String,
			required: true,
			max: 50,
			unique: true,
		},
		password: {
			type: String,
			require: true,
			min: 4,
		},
		profilePicture: {
			type: String,
			default: '',
		},
		coverPicture: {
			type: String,
			default: '',
		},

		followings: {
			type: Array,
			default: [],
		},

		isAdmn: {
			type: Boolean,
			defailt: false,
		},

		desc: {
			type: String,
			max: 50,
		},

		city: {
			type: String,
			max: 50,
		},

		relationship: {
			type: Number,
			enum: [1, 2, 3],
		},
	},
	{
		timestamps: true,
	}
);

const User = mongoose.model('User', UserSchema);

module.exports = User;
