// :method :url :status :response-time ms - :res[content-length]
const logger = function (req, res, next) {
	console.log(`${req.method} ${req.url}`);
	next();
}

module.exports = logger;