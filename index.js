'use strict';
var execFile = require('child_process').execFile;
var plist = require('simple-plist');
var changeCase = require('change-case');

module.exports = function (cb) {
	if (process.platform !== 'darwin') {
		throw new Error('Only OS X systems are supported');
	}

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

		var obj = {};
		var keys = Object.keys(Object(plist.parse(res)[0]));

		for (var i = 0; i < keys.length; i++) {
			obj[changeCase.lowerCaseFirst(keys[i])] = plist.parse(res)[0][keys[i]];
		}

		if (typeof obj.legacyBatteryInfo === 'object') {
			var l = {};
			var keys = Object.keys(Object(obj.legacyBatteryInfo));

			for (var i = 0; i < keys.length; i++) {
				if (keys[i].indexOf(' ') !== -1) {
					l[changeCase.camelCase(keys[i])] = obj.legacyBatteryInfo[keys[i]];
					continue;
				}

				l[changeCase.lowerCaseFirst(keys[i])] = obj.legacyBatteryInfo[keys[i]];
			}

			obj.legacyBatteryInfo = l;
		}

		cb(null, obj);
	});
};
