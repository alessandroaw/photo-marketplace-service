const fs = require('fs');
const path = require('path');
const scLogFile = path.join(__dirname, '../log/sc-log.txt');

function post(req, res, next) {
	const { logMessage } = req.body;
	console.log(logMessage);
	fs.appendFile(scLogFile, `${logMessage}\n`, 'utf8', console.error);
	res.status(200).send(logMessage);
}

module.exports = {
	post,
}
