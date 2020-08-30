const fs = require('fs');
const path = require('path');
const logFile = path.join(__dirname, '../log/request-log.txt');

// :method :url :status :response-time ms - :res[content-length]
const logger = function (req, res, next) {
	fs.appendFile(logFile, `${req.method} ${req.url}\n`, 'utf-8', console.error);
	next();
}

module.exports = logger;