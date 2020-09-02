const fs = require('fs');
const path = require('path');
const scLogFile = path.join(__dirname, '../log/sc-log.txt');

function post(req, res, next) {
	const payload = req.body;
	console.log('\x1b[36m%s\x1b[0m', '===Receive Contract Event Log===');
	console.log(`+From ${payload.contractName}: ${payload.eventName}`);
	console.log(payload.data);
	console.log('\x1b[36m%s\x1b[0m', '===End of Contract Event Log===');
	fs.appendFile(scLogFile, `${payload}\n`, 'utf8', console.error);
	res.status(200).send(payload);
}

module.exports = {
	post,
}
