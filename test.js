'use strict';
var test = require('ava');
var osxBattery = require('./');

test('battery', function (t) {
	t.plan(1);

	osxBattery().then(function (res) {
		t.assert(typeof res === 'object', res);
	});
});
