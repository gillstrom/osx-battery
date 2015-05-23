'use strict';
var test = require('ava');
var osxBattery = require('./');

if (!process.env.CI) {
	test('battery', function (t) {
		t.plan(2);

		osxBattery(function (err, res) {
			t.assert(!err, err);
			t.assert(typeof res === 'object', res);
		});
	});
}
