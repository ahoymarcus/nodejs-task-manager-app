const { CustomAPIError } = require('../errors/custom-error');



const errorHandlerMiddleware = (err, req, res, next) => {
	console.log(err);
	
	if (err instanceof CustomAPIError) {
		return res.status(err.statusCode).json({ msg: err.message });
	} else {
		return res.status(500).json({ msg: err });
	}
};



module.exports = errorHandlerMiddleware


