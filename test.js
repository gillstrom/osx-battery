'use strict';
var test = require('ava');
var osxBattery = require('./');

test('battery', function (t) {
	t.plan(2);

	osxBattery(function (err, res) {
		t.assert(!err, err);
		t.assert(typeof res === 'object', res);
	});
});
