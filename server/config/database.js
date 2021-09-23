const mongoose = require('mongoose');

const DbConnection = async () => {
	try {
		const conn = await mongoose.connect(process.env.MONGO_URI, {
			useNewUrlParser: true,
			useUnifiedTopology: true,
		});

		console.log(`Database connected ${conn.connection.host}`);
	} catch (err) {
		console.log(`Database connection failure: ${err.message}`);
	}
};

module.exports = DbConnection;
