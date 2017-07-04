'use strict';
const execa = require('execa');
const plist = require('simple-plist');
const objType = require('obj-type');
const lowercaseFirstKeys = require('lowercase-first-keys');

module.exports = () => {
	if (process.platform !== 'darwin') {
		return Promise.reject(new Error('Only OS X systems are supported'));
	}

	return execa.stdout('ioreg', ['-n', 'AppleSmartBattery', '-r', '-a'])
		.then(plist.parse)
		.then(batteries => {
			if (!batteries || batteries.length === 0) {
				throw new Error('This computer doesn\'t have a battery');
			}

			const battery = lowercaseFirstKeys(batteries[0]);

			return Object.keys(battery).reduce((obj, x) => {
				const val = battery[x];
				obj[x] = objType(val) === 'object' ? lowercaseFirstKeys(val) : val;
				return obj;
			}, {});
		});
};
