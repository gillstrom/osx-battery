'use strict';
var execFile = require('child_process').execFile;
var plist = require('simple-plist');

module.exports = function (cb) {
	if (process.platform !== 'darwin') {
		throw new Error('Only OS X systems are supported');
	}

	var arr;
	var cmd = 'ioreg';
	var args = [
		'-n',
		'AppleSmartBattery',
		'-r',
		'-a'
	];

	execFile(cmd, args, function (err, res) {
		if (err) {
			cb(err);
			return;
		}

		if (!res) {
			cb(new Error('This computer doesn\'t have a battery'));
			return;
		}

		cb(null, plist.parse(res)[0]);
	});
};
