const http = require('http');
const dotenv = require('dotenv');
const path = require('path');
const app = require('./app');

const DbConnection = require('./config/database');
const routes = require('./routes');

// Create server
const server = http.createServer(app);

dotenv.config({ path: path.resolve(__dirname, './config/config.env') });

DbConnection();

// Importing routes
app.use('/api', routes);

const PORT = process.env.PORT || 5000;

server.listen(PORT, () =>
	console.log(
		`Server running in ${process.env.NODE_ENV} mode on on PORT: ${PORT}`
	)
);
