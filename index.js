'use strict';
var execFile = require('child_process').execFile;

module.exports = function (cb) {
	if (process.platform !== 'darwin') {
		throw new Error('Only OS X systems are supported');
	}

	var arr;
	var cmd = 'system_profiler';
	var args = [
		'SPPowerDataType'
	];

	execFile(cmd, args, function (err, res) {
		if (err) {
			cb(err);
			return;
		}

		if (!res) {
			cb('This computer doesn\'t have a battery');
			return;
		}

		arr = res.trim().split('\n');
		arr = arr.splice(5, arr.length - 1);

		var obj = {};
		var keys = {
			'Serial Number': 'sn',
			Manufacturer: 'manufacter',
			'Device Name': 'name',
			'Pack Lot Code': 'packLotCode',
			'PCB Lot Code': 'PCB',
			'Firmware Version': 'firmware',
			'Hardware Revision': 'hardwareRevision',
			'Cell Revision': 'cellRevision',
			'Charge Remaining (mAh)': 'mAhRemaining',
			'Fully Charged': 'charged',
			Charging: 'charging',
			'Full Charge Capacity (mAh)': 'mAhCapacity',
			'Cycle Count': 'cycles',
			Condition: 'condition',
			'Battery Installed': 'installed',
			'Amperage (mA)': 'amperage',
			'Voltage (mV)': 'voltage'
		};

		Object.keys(arr).forEach(function (key) {
			var s = arr[key].split(':');

			if (!s[0] || !s[1]) {
				return;
			}

			if (s[0].trim() === 'Charge Information' || s[0].trim() === 'Health Information') {
				return;
			}

			if (keys[s[0].trim()]) {
				obj[keys[s[0].trim()]] = s[1].trim();
			}
		});

		cb(null, obj);
	});
};
