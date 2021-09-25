class AppError extends Error {
	constructor(message, statusCode) {
		super(message);
		this.statusCode = statusCOde;
		this.name = 'AppError';
	}
}

class ClientError extends AppError {
	constructor(message) {
		super(message, 400);
		this.name = 'ClientError';
	}
}

module.exports = {
	AppError,
	ClientError,
};
