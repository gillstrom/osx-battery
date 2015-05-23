#!/usr/bin/env node
'use strict';
var meow = require('meow');
var osxBattery = require('./');

meow({
	help: [
		'Usage',
		'  $ osx-battery'
	].join('\n')
});

osxBattery(function (err, res) {
	if (err) {
		console.error(err.message);
		process.exit(1);
	}

	console.log(res);
});
